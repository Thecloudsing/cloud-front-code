import fs from "fs";
import path from "path";

export function readFile(filePath: string) {
  return fs.readFileSync(path.join(process.cwd(), filePath), "utf8");
}
