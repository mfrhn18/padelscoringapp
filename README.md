## v1.0.8-hotfix-2

- Added Player Spotlight result-image template and shared player statistics improvements.
- Added public/shared-result Player Spotlight image generation.
- Improved Mexicano court allocation based on the number of active players: only complete courts of four are scheduled, up to the configured court limit.
- Preserved v1.0.6-hotfix-5 Team Americano matchmaking, additional-round generation, and session reset behavior.
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


## v1.0.6-hotfix-2
- Fixed player statistics in shared read-only result pages, including Americano schedules.
- Kept 1080×1920 / 9:16 result-image output.
- Strengthened centered session-name typography and lighter metadata hierarchy.
- Made leaderboard cards slightly translucent over photo backgrounds.
- Lowered the podium layout while preserving 1st=gold center, 2nd=silver left, 3rd=bronze right.


## v1.0.6-hotfix-3
- Moved the first Top 3 leaderboard image template down to match the podium composition.
- Brightened uploaded photo backgrounds by reducing the image darkening overlay.
- Fixed shared-result player-name clicks to open the player statistics modal using the fetched read-only public snapshot.
- Removed edit controls from the public stats modal.
