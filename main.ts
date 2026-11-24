import { writeFileSync, mkdirSync } from "node:fs";
const entry = "I asked my cat for space. He sat on my face.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);

// Revision note: the cat answers a boundary with a full-body veto.
