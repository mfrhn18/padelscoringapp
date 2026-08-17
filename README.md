# Padel Round v1.1.0-hotfix-11

Tournament-only hotfix.

Fixes:
- Corrects knockout history stage sizing: an 8-pair bracket now has 4 Quarterfinals, 2 Semifinals, and 1 Final.
- Corrects 16-pair brackets to 8 Quarterfinals, 4 Semifinals, and 1 Final.
- Synchronizes the first knockout-stage history with the actual number of live match cards (pairs / 2), so completed first-stage scores are preserved.
- Resolves winners into the correct downstream knockout match slots immediately.
- Makes resolved downstream knockout matches fully playable/scorable.
- Maps semifinal winners to Final and semifinal losers to 3rd Place immediately when enabled.
- Keeps future-stage placeholders until their source matches are completed.
- Keeps the selected knockout-stage header synchronized with the Quarterfinal / Semifinal / 3rd Place / Final tab.
- Leaves non-Tournament modes unchanged.

Validation cases:
- 4 pairs: 2 QF-equivalent first-round matches -> 1 Final.
- 6 pairs: bracketed with byes -> correct first knockout stage -> 2 Semifinals -> Final.
- 8 pairs: 4 Quarterfinals -> 2 Semifinals -> Final.
- 10/12 pairs: bracket expands to 16 slots with byes -> 8 Quarterfinals -> 4 Semifinals -> Final.
- 16 pairs: 8 Quarterfinals -> 4 Semifinals -> Final.


## v1.1.0-hotfix-13
- Tournament-only fix: 3rd Place score input now resolves the `thirdPlace` history stage correctly.
- No regular Americano/Mexicano/Mixicano/Team mode logic was intentionally changed.

- v1.1.0-hotfix-14: Fixed 3rd Place score selection so the `thirdPlace` stage key is preserved when submitting a score. The previous hotfix fixed the stage lookup, but the modal converted `thirdPlace` to `NaN` before calling the save handler.
