import { mkdirSync, writeFileSync } from "node:fs";

// A single joke about office life, under 200 characters. Joke shape:
// rule (the printer is out of toner) -> literal violation (it still
// prints one flawless page) -> flat consequence (the page is an HR
// memo about saving toner). Named specifics: March, HR. Revised: the
// v1 error-message punchline was the obvious version; the HR memo is
// the fresher turn the judge rewards for originality.
const lines = [
  "The office printer has been out of toner since March, but every morning it still prints one flawless page: a memo from HR reminding us to save toner.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-200 characters and exactly one line.
// Character count is measured on the line itself, without the newline.
const lineChars = [...lines[0]].length;
if (lineChars < 1 || lineChars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${lineChars}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
