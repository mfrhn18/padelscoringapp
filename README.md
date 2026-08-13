Padel Round v1.0.6 hotfix

Changes:
- Live/ongoing score input now has a Reset score control that clears the selected match pair scores back to --. Finished sessions remain locked.
- Share links now use a real 26-character server-side share ID. Finished session snapshots are stored in Netlify Blobs and retrieved at /results/<id>, so the URL contains no encoded session data.
- Existing v1.0.4 functionality is preserved: Reopen/read-only sessions, Best Partner win-rate statistics, leaderboard, Mexicano/Team Mexicano/Mixicano/Americano logic, Share result page, dashboard UI, and Mixicano-only result labels.

Deploy this package to Netlify. Netlify Functions and Blobs are required for the short Share URL feature.

- Share button now offers Share result URL or Create result image.
- Result image pilot includes three dynamic templates, top-3 leaderboard rendering, user photo as the background for every template, and selectable web-safe fonts.


Hotfix changes:
- Result images are exported and previewed at Instagram Story size: 1080×1920 (9:16).
- Podium template maps 1st place to gold/center, 2nd to silver/left, and 3rd to bronze/right.
- Shared read-only leaderboard player statistics now mirror the in-session statistics view, including match history and best-partner win-rate details.
