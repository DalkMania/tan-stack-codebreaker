import { createCollection, localStorageCollectionOptions } from "@tanstack/react-db";
import { z } from "zod";

// Define schema
const messageStateSchema = z.object({
  id: z.string(),
  message: z.string(),
  encryption: z.any().optional(),
});

export const messageStateCollection = createCollection(
  localStorageCollectionOptions({
    id: "user-message",
    storageKey: "user-message-key",
    storage: sessionStorage,
    getKey: (item) => item.id,
    schema: messageStateSchema,
  })
);
