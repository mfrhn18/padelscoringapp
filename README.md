Padel Round v1.0.6 — final build for the day

Changes:
- Live/ongoing score input now has a Reset score control that clears the selected match pair scores back to --. Finished sessions remain locked.
- Share links now use a real 26-character server-side share ID. Finished session snapshots are stored in Netlify Blobs and retrieved at /results/<id>, so the URL contains no encoded session data.
- Existing v1.0.4 functionality is preserved: Reopen/read-only sessions, Best Partner win-rate statistics, leaderboard, Mexicano/Team Mexicano/Mixicano/Americano logic, Share result page, dashboard UI, and Mixicano-only result labels.

Deploy this package to Netlify. Netlify Functions and Blobs are required for the short Share URL feature.

- Share button now offers Share result URL or Create result image.
- Result image pilot includes three dynamic templates, top-3 leaderboard rendering, user photo as the background for every template, and selectable web-safe fonts.
