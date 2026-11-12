// Entry for make.fun news-summary-01 (Node 22, standard library only).
// The summary lives in summary.txt beside this file; the program copies it
// to /output/entry.txt, or to $MAKEFUN_OUTPUT_DIR/entry.txt outside the
// grader's container. Deterministic: the same input bytes always produce
// the same output bytes. The gate takes 1 to 2,000 UTF-8 characters, so
// summary.txt is kept inside that limit (1,768 characters at last check).
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./summary.txt', import.meta.url), join(outDir, 'entry.txt'));
