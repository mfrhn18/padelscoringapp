# Padel Round v1.1.1

Major Tournament Mode update, based on the v1.1.0 hotfix-14 tournament build.

## Tournament configuration
- When Match Type is **Tournament**, the **Courts** field is hidden.
- Tournament Mode no longer uses the generic session-level Scoring Type / Finish Rule controls.
- Added **Tournament Scoring** configuration with independent scoring rules for every applicable stage.
- Group Stage + Knockouts can configure Group Stage, Round of 16 / Quarterfinal, Semifinal, 3rd Place, and Final as applicable.
- Knockouts Only shows only the stages required by the selected bracket size.
- Each stage supports **Normal Scoring** or **Points**, with its own finish rule.
- The selected stage's scoring configuration is automatically applied to its score-input modal.

## Tournament bracket improvements
- Knockout leaderboard bracket now displays completed scores alongside the pair names when available.
- Existing Quarterfinal → Semifinal → 3rd Place → Final mapping and scoring behavior from hotfix-14 is retained.
- Stage tabs continue to switch the active scoring rule as well as the displayed stage.

## Compatibility / scope
- Changes are intentionally limited to **Tournament Mode**.
- Existing Americano, Mexicano, Mixicano, Team Americano, Team Mexicano, King of the Hill, and other non-Tournament behavior is preserved.
- Existing tournament scoring/mapping fixes from v1.1.0 hotfix-14 are retained, including 3rd Place score input.

## Suggested test matrix
1. Knockouts Only — 4 pairs: Semifinal → Final.
2. Knockouts Only — 8 pairs: Quarterfinal → Semifinal → Final.
3. Knockouts Only — 8 pairs with 3rd Place enabled: verify separate 3rd Place scoring.
4. Group Stage + Knockouts — 8 pairs / 2 groups: verify Group Stage scoring differs from Semifinal/Final scoring.
5. Select every knockout tab and verify the score modal uses that stage's configured finish rule.
6. Open Leaderboard → Knockout and verify completed scores are shown in the bracket.
