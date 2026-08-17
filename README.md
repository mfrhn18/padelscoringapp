# Padel Round v1.0.9

## Tournament & dynamic formats
- **Tournament** mode: balanced group stage → knockout bracket for fixed pairs.
- Odd pair counts are supported through balanced groups; no artificial free bye is required during the group stage.
- Automatic knockout qualification uses a power-of-two number of qualifiers.
- Optional **3rd-place consolation playoff** after the semifinals.
- **King of the Hill** fixed-pair court ladder with weighted court scoring (Court 1=3, Court 2=2, Court 3=1) or simple win scoring.

## Existing features preserved
- Team Americano unique-opponent matchmaking and second-round-robin generation.
- Americano/Team Americano additional-round generation and Reset Session.
- Mexicano live Active/Away court balancing.
- Player Spotlight and shared player statistics.
- Shared Match Results for Americano/Team Americano.
- Result-image background overlay reduced from 44% to 25% for a brighter photo.
- Reset Session restores the initial Tournament/KOTC state as well as existing formats.
- Netlify share functions and `_redirects` remain unchanged.

Netlify Functions and Blobs are required for short Share URLs.
