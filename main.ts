// Fortune Cookie Wisdom for Developers — one original line, written to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The legacy code you curse today was once someone's clever Friday deploy — and yours will be, too.";

// Gate: the entry must be UTF-8 text of 1 to 120 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-120 characters, got ${chars}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Never remove the output dir itself: in the grader /output is a mount point.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
