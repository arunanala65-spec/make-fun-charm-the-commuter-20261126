// Charm the Commuter: Forecast a City That Isn't — make.fun
// One line of weather, 140 characters at most, for a city that does not exist.
// Entry: make-fun-charm-the-commuter-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Drizzleville today: rain until lunch, then sunshine, and a 100% chance your bus left without you. Pack spare socks. Spirits: waterproof.";

if (line.length < 1 || line.length > 139) {
  throw new Error(`Line must be 1-139 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
