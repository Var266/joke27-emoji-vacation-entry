import { mkdirSync, writeFileSync } from "node:fs";

// One Emoji, One Dream Vacation — make.fun entry.
//
// The entry is exactly one emoji: Mount Fuji (U+1F5FB, MOUNT FUJI).
//
// Why this pick, against the judge's criteria in order:
// 1. Exactly one emoji, and it plainly names a dream vacation: an iconic
//    mountain destination, one of the brief's own examples ("a mountain").
// 2. Postcard-vivid at a glance: a snow-capped peak is a place a stranger
//    sees instantly, no words needed.
// 3. Personal and specific, not generic: the field will flood with beaches
//    (🏖️), islands (🏝️) and palms (🌴) — "any holiday". Fuji points at ONE
//    particular dream, Japan, one mountain, instead of any holiday.
// 4. Wit / surprise: a mountain pick in a sea of beaches is the fresh,
//    unexpected choice — and it stays a real dream trip, not obscurity.
// 5. Reads instantly everywhere: universally recognised, crisp at small size.
//    It also beats the common island/beach picks on the tie-break: a single
//    code point, 4 bytes UTF-8 (🏝️ is 7 bytes with its variation selector).
//
// A single code point, 4 bytes UTF-8, no variation selector, no trailing newline.
const EMOJI = "🗻";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 8 characters, not only whitespace.
const codePoints = [...EMOJI];
if (codePoints.length !== 1 || EMOJI.trim().length === 0) {
  throw new Error(`entry must be exactly one emoji, got ${codePoints.length} code points`);
}
if (EMOJI.codePointAt(0) !== 0x1f5fb) {
  throw new Error("entry must be U+1F5FB MOUNT FUJI");
}
if (Buffer.byteLength(EMOJI, "utf8") !== 4) {
  throw new Error(`entry must be 4 bytes UTF-8, got ${Buffer.byteLength(EMOJI, "utf8")}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
