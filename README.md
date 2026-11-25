# SatzWerk v2 — German sentence and speaking trainer

## Run / deploy
- Open the standalone SatzWerk-v2.html in your browser for written practice. For microphone practice, use an HTTPS-hosted copy (e.g. Cloudflare Pages) with a supported browser and microphone permission. Local file previews may not support speech services.
- For GitHub + Cloudflare Pages: upload index.html, data.js and expansion.js to a new repository root; create a new Pages project, no framework or build command, output directory `.`. Alternatively upload the three files together via Pages Direct Upload. This will not modify your existing projects unless you choose to overwrite one.

## Content
13,000 distinct German model sentences (A1 1,000; A2 1,500; B1 2,000; B2 2,500; C1 3,000; C2 3,000), including 72 original examples and deterministic variations from bilingual grammar templates. These are not 13,000 independently proofread lessons, or official Goethe/CEFR materials. English glosses, template grammar and vocabulary were reviewed; variants can be repetitive and a native-speaker review of every generated sentence has not been performed. Three written graded modes, one self-reviewed writing mode, and two speaking modes per sentence. Written matching checks curated answers; alternative valid sentences can be missed. Order matching ignores case and punctuation. Progress stays in the current browser; prior v1 progress migrates when hosted under the same origin.

## Audio and speaking
Read prompts and German model sentences aloud with five speeds, using installed browser/device voices. Speaking uses the browser SpeechRecognition interface (German). Scores measure word alignment against listed answers, not pronunciation, accent, fluency, or unrestricted grammar. No microphone recording is stored by this site; the browser may send audio to a recognition service. No API keys, paid backend or external AI service required by the site. Browser speech availability, network connection, device voices, and user microphone permissions vary.

## Verification
Automated checks: exact level counts, distinct model sentences, populated fields, intentional correction variants. Isolated Chromium UI test: all 36 level/mode combinations, answer matching, capitalization feedback, topic filtering, review, progress, mobile layout, mock speech recognition and TTS. Real microphone, audible playback, HTTPS hosting and persistent storage across browser sessions have not been independently tested.

## Version 3: progress dashboard
Click My progress to see daily activity, streaks, an editable daily goal, written accuracy and recognized speaking word match, weekly comparisons, and date/level filters. Free writing is counted but not graded. Export JSON for backup and restoration, or CSV for spreadsheet analysis. A restore replaces current progress. Keep the same deployed origin to retain version 2 totals; dated history starts in version 3. Browser data is not cloud-synced and can be lost when site data is cleared. Use backups to move between devices. No microphone recordings or raw answers are stored in the dashboard history.

Deploy the three app files (index.html, data.js, expansion.js) together at the root of the existing SatzWerk Pages project. Do not change unrelated projects. The standalone HTML includes both data scripts for local practice; microphone support depends on browser and secure context.
