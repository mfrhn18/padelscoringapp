# Padel Round v1.1.2

Tournament Mode refinement release, based on v1.1.1.

## Tournament scoring UI
- Removed the Tournament Scoring configuration block from the **New Session** setup flow.
- Tournament Mode now exposes a **Scoring · [Stage]** button beside **Edit Players** in the Match tab.
- The button opens a modal for the currently viewed tournament stage only.
- Scoring Type and Finish Rule can be changed independently for Group Stage, Round of 16 / Quarterfinal, Semifinal, 3rd Place, and Final as applicable.
- Changes are saved to the tournament and immediately become the active scoring rule for that stage's score input.

## Group Stage + Knockouts bracket
- The knockout draw is now finalized when the tournament session is created rather than being regenerated from current group standings whenever the Leaderboard is opened.
- For the standard 2-group / top-2 format, the draw is fixed as **A1 vs B2** and **B1 vs A2**.
- Larger group structures use a fixed seeded draw that avoids same-group pairings where possible and prioritizes top-vs-runner-up matchups instead of top-vs-top.
- If a non-power-of-two qualification count requires additional places, fixed **Best 3rd** slots are reserved at creation and resolved to the eligible third-place qualifiers after the Group Stage.
- Before Group Stage completion, the Leaderboard shows the fixed slot labels (for example A1, B2, B1, A2) and they no longer change when switching between Group A, Group B, and Knockout views.
- After **Advance Group Stage →**, the same fixed bracket slots are populated with the actual qualified teams.

## Knockout-only bracket
- Existing knockout mapping and scoring behavior is retained.
- The **3rd Place** bracket now resolves to the two semifinal losers once both semifinal results are completed.
- The 3rd Place bracket also displays its completed score when available.
- Existing Final and other knockout bracket score display remains intact.

## Compatibility / scope
- Changes are intentionally limited to **Tournament Mode**.
- Existing Americano, Mexicano, Mixicano, Team Americano, Team Mexicano, King of the Hill, and other non-Tournament behavior is preserved.
- Existing tournament score-input and stage-navigation fixes are retained.

## Suggested test matrix
1. Tournament → Group Stage + Knockouts → 8 pairs / 2 groups / top 2.
2. Immediately open Leaderboard → Knockout and switch Group A → Group B → Knockout repeatedly. Verify A1/B2/B1/A2 never change.
3. Complete Group Stage and click **Advance Group Stage →**. Verify the fixed slots populate with actual teams without changing the matchup positions.
4. In Match tab, open **Scoring · Group Stage**, change scoring, and verify Group Stage score input follows it.
5. Open each knockout stage's Scoring button and verify its configuration is independent.
6. Knockouts Only → complete Semifinals → open Leaderboard. Verify 3rd Place shows the two semifinal losers and completed scores when entered.
7. Confirm non-Tournament modes behave exactly as before.
