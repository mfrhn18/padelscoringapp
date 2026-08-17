# Padel Round v1.1.3

Tournament Mode 1-group qualification update, based on v1.1.2.

## 1-group / 4-pair tournament support
- Group Stage + Knockouts now supports an explicit **1 group** configuration.
- The 1-group configuration is intentionally limited to **exactly 4 pairs with 4 pairs per group**.
- A new **1-Group Qualifying Mode** is available for this configuration:
  1. **Top 2 → Final · Bottom 2 → 3rd Place**
  2. **1st vs 2nd · 3rd vs 4th (Semifinals)**
  3. **Randomize ranks into Semifinals**
- The qualifying draw is generated once when the tournament session is started and stored with the session.
- Randomized qualifying draws are randomized once only; switching tabs or reopening the leaderboard does not reshuffle them.

## Fixed bracket behavior
- Before Group Stage completion, the Knockout leaderboard shows fixed rank slots such as **A1 / A2 / A3 / A4** instead of recalculating the matchup every time the user switches views.
- After **Advance Group Stage →**, those fixed rank slots are resolved to the actual pairs without changing the matchup structure.
- For the Final + 3rd Place qualifying mode, the Final remains **1st vs 2nd** and the 3rd Place match remains **3rd vs 4th**.

## 3rd Place handling
- In the Final + 3rd Place mode, the 3rd Place participants are known immediately after the group standings are finalized.
- The 3rd Place bracket is retained independently from the Final result.
- The Final is played first; after the Final is completed, the 3rd Place match becomes the active stage.
- 3rd Place scores are retained in knockout history and displayed in the leaderboard bracket.

## Tournament scoring
- Existing v1.1.2 stage-scoring behavior is retained.
- Tournament scoring remains configured from the **Scoring · [Stage]** button in the Match tab beside **Edit Players**.
- For the 1-group Final + 3rd Place mode, Group Stage, Final, and 3rd Place each have independent scoring rules.
- For semifinal modes, Group Stage, Semifinal, Final, and optional 3rd Place retain independent scoring rules.

## Compatibility / scope
- Changes are intentionally limited to Tournament Mode.
- Existing 2-group Group Stage + Knockouts behavior is retained, including fixed knockout draws.
- Existing Knockouts Only behavior is retained, including the v1.1.2 3rd Place fixes.
- Existing Americano, Mexicano, Mixicano, Team Americano, Team Mexicano, King of the Hill, and other non-Tournament behavior is preserved.

## Suggested test matrix
1. Tournament → Group Stage + Knockouts → 4 pairs → 1 group → **Top 2 → Final · Bottom 2 → 3rd Place**.
2. Open Leaderboard → Knockout before completing the group. Verify A1/A2 and A3/A4 remain fixed.
3. Complete Group Stage and click **Advance Group Stage →**. Verify actual 1st/2nd and 3rd/4th pairs populate without changing the matchup.
4. Complete the Final, then verify the 3rd Place stage becomes active and uses the configured 3rd Place scoring.
5. Test **1st vs 2nd · 3rd vs 4th (Semifinals)** and verify the two semifinals are fixed.
6. Test **Randomize ranks into Semifinals** several times from newly created sessions. Verify each session gets one fixed random draw and the draw never changes when switching tabs.
7. Confirm the standard 2-group / 8-pair flow remains A1 vs B2 and B1 vs A2.
8. Confirm non-Tournament modes behave exactly as before.
