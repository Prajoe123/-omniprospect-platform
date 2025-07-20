import { z } from "zod";

export const advancedSearchQuerySchema = z.object({
  query: z.string().min(1, "Query cannot be empty"),
  platforms: z.array(z.enum(["google", "bing", "duckduckgo", "yandex", "all"])).default(["all"]),
  operators: z.object({
    boolean: z.array(z.string()).optional(),
    site: z.string().optional(),
    filetype: z.string().optional(),
    intitle: z.string().optional(),
    inurl: z.string().optional(),
    proximity: z.object({
      term1: z.string(),
      term2: z.string(),
      distance: z.number().min(1).max(20)
    }).optional()
  }).optional(),
  aggregation: z.boolean().default(true),
  exportFormat: z.enum(["json", "csv", "pdf"]).optional(),
  limit: z.number().min(1).max(50).default(10),
  saveQuery: z.boolean().default(false),
  queryName: z.string().optional()
});

export const savedQuerySchema = z.object({
  name: z.string().min(1, "Query name is required"),
  query: z.string().min(1, "Query cannot be empty"),
  platforms: z.array(z.string()),
  operators: z.object({
    boolean: z.array(z.string()).optional(),
    site: z.string().optional(),
    filetype: z.string().optional(),
    intitle: z.string().optional(),
    inurl: z.string().optional(),
    proximity: z.object({
      term1: z.string(),
      term2: z.string(),
      distance: z.number()
    }).optional()
  }).optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).default([]),
  isPublic: z.boolean().default(false)
});

export const searchHistoryFilterSchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  platforms: z.array(z.string()).optional(),
  operators: z.array(z.string()).optional(),
  limit: z.number().min(1).max(100).default(50)
});

export const booleanOperatorSchema = z.object({
  type: z.enum(["AND", "OR", "NOT", "NEAR", "WITHIN"]),
  terms: z.array(z.string()).min(1),
  distance: z.number().optional(), // For NEAR/WITHIN operators
  caseSensitive: z.boolean().default(false)
});

export const searchTutorialStepSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  example: z.string(),
  category: z.enum(["basic", "boolean", "operators", "advanced", "export"]),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]),
  searchQuery: z.string(),
  expectedResults: z.string(),
  tips: z.array(z.string()).default([])
});

export type AdvancedSearchQuery = z.infer<typeof advancedSearchQuerySchema>;
export type SavedQuery = z.infer<typeof savedQuerySchema>;
export type SearchHistoryFilter = z.infer<typeof searchHistoryFilterSchema>;
export type BooleanOperator = z.infer<typeof booleanOperatorSchema>;
export type SearchTutorialStep = z.infer<typeof searchTutorialStepSchema>;