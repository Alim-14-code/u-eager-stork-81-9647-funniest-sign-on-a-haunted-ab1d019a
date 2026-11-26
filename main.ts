import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Funniest sign on a haunted server room door.
// The sign text lives in entry.txt next to this file; this program
// copies it verbatim to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// A warning sign reads best with no setup at all — just the warning.
const here = dirname(fileURLToPath(import.meta.url));
const entry = readFileSync(join(here, "entry.txt"), "utf8");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, entry, "utf8");
console.log(`Sign delivered: ${entry.trim().length} chars written to ${outPath}`);
