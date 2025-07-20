import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email"),
  name: text("name"),
  role: text("role").default("standard"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const searchResults = pgTable("search_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  query: text("query").notNull(),
  source: text("source").notNull(), // "google", "bing", "serpapi"
  results: jsonb("results").notNull(),
  metadata: jsonb("metadata"), // contains total results, search time, etc.
  createdAt: timestamp("created_at").defaultNow(),
});

export const prospects = pgTable("prospects", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  name: text("name"),
  email: text("email"),
  company: text("company"),
  title: text("title"),
  linkedinUrl: text("linkedin_url"),
  twitterUrl: text("twitter_url"),
  githubUrl: text("github_url"),
  location: text("location"),
  industry: text("industry"),
  companySize: text("company_size"),
  source: text("source"), // "linkedin", "search", "manual", etc.
  enrichmentData: jsonb("enrichment_data"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const workflows = pgTable("workflows", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  name: text("name").notNull(),
  description: text("description"),
  nodes: jsonb("nodes").notNull(),
  connections: jsonb("connections").notNull(),
  isActive: boolean("is_active").default(false),
  lastRun: timestamp("last_run"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const apiUsage = pgTable("api_usage", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  service: text("service").notNull(), // "google", "bing", "serpapi", "openai"
  endpoint: text("endpoint"),
  requestCount: integer("request_count").default(1),
  responseSize: integer("response_size"),
  cost: text("cost"), // store as string to avoid floating point issues
  date: timestamp("date").defaultNow(),
});

export const platformConnections = pgTable("platform_connections", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  platform: text("platform").notNull(), // "linkedin", "twitter", "github", etc.
  status: text("status").notNull(), // "connected", "disconnected", "error"
  lastSync: timestamp("last_sync"),
  syncData: jsonb("sync_data"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  name: true,
});

export const insertSearchResultSchema = createInsertSchema(searchResults).omit({
  id: true,
  createdAt: true,
});

export const insertProspectSchema = createInsertSchema(prospects).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertWorkflowSchema = createInsertSchema(workflows).omit({
  id: true,
  createdAt: true,
  lastRun: true,
});

export const searchQuerySchema = z.object({
  query: z.string().min(1),
  source: z.enum(["google", "bing", "yahoo", "linkedin", "all"]).default("all"),
  filters: z.object({
    location: z.string().optional(),
    company_size: z.string().optional(),
    industry: z.string().optional(),
    job_title: z.string().optional(),
  }).optional(),
  limit: z.number().min(1).max(100).default(10),
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertSearchResult = z.infer<typeof insertSearchResultSchema>;
export type SearchResult = typeof searchResults.$inferSelect;
export type InsertProspect = z.infer<typeof insertProspectSchema>;
export type Prospect = typeof prospects.$inferSelect;
export type InsertWorkflow = z.infer<typeof insertWorkflowSchema>;
export type Workflow = typeof workflows.$inferSelect;
export type SearchQuery = z.infer<typeof searchQuerySchema>;
export type ApiUsage = typeof apiUsage.$inferSelect;
export type PlatformConnection = typeof platformConnections.$inferSelect;
