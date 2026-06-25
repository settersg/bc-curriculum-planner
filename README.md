# BC Curriculum Unit and Lesson Planner

This is a local, static HTML planning tool for creating accessible BC Curriculum aligned unit and lesson plans.

## Use

Open `index.html` directly in a browser, or run the included local server:

```powershell
node server.js 58942
```

Then visit:

```text
http://127.0.0.1:58942/
```

## Alignment Workflow

1. Open the official BC Curriculum documents from the links in the tool.
2. Select the relevant grade or course and area of learning.
3. Use the dependent curriculum menus to choose the official course or curriculum page.
4. Paste or verify the official Big Ideas, Curricular Competencies, and Content in the planner.
5. Assign selected unit-level curriculum elements to one or more lessons in the Unit and Lesson Synchronization workspace.
6. Use the lesson editor to build individual lessons and add lesson-level curriculum back to the unit plan when needed.
7. Review the final curriculum coverage report for covered, unassigned, missing, or inconsistent curriculum items.
8. Include the official source URL and access date.
9. Generate the plan and export it as accessible HTML.

The app includes embedded selectable standards generated from the official BC Curriculum pages for K-12 areas and senior course options exposed by the planner dropdowns. The curriculum dataset lives in `curriculum-data.js`, while `index.html` contains the planner interface. Career-Life Education and Career-Life Connections link to the official BC pages and remain editable because those pages do not expose Big Ideas, Curricular Competencies, and Content in the same structure as the other curriculum pages.

## Version 2 Workflow

Version 2 adds bidirectional unit and lesson planning. Unit-level BC curriculum selections populate an assignment map, teachers can assign each item to multiple lessons, and lesson-level additions can be pushed back into the unit alignment fields. The generated accessible plan includes the lesson sequence and final coverage report.

The V2 workflow starts with the unit structure: number of lessons, blocks per lesson, and minutes per block. Those settings populate the individual lesson plans automatically, while still allowing timing adjustments inside a specific lesson when needed.

The main V2 workspace uses a unit lesson sequence inspired by common teacher planning tools: lesson cards show timing, curriculum links, and attention badges at a glance. Detailed curriculum mapping and coverage reporting remain available in collapsible panels so the workspace stays focused while planning.

The lesson cards and compact timeline are the primary navigation for the unit sequence. The timeline shows phase, timing, readiness, pacing, and curriculum-link count at a glance, while the editor shows a compact active-lesson header rather than a second set of lesson tabs.

Sequence filters let teachers quickly show all lessons, lessons needing attention, ready lessons, lessons missing curriculum links, or pacing issues. This keeps larger units scannable without moving curriculum mapping out of reach.

The curriculum-to-lesson map includes search and assignment-status filters so teachers can quickly focus on standards that are assigned, unassigned, or related to a keyword or lesson focus.

Curriculum items are normalized to avoid duplicate standards caused by punctuation or spacing differences. In the curriculum map, lesson checkboxes are labelled with their lesson number plus title so repeated lesson focuses do not look like duplicate standards.

Older draft files are normalized on load so duplicate lesson identifiers are repaired before readiness, pacing, and sequence filters run.

Teachers can use **Build connected sequence** to spread selected unit-level BC curriculum items across the lesson sequence and draft editable lesson outlines without overwriting manual assignments. Lesson cards then show a concise focus line and curriculum-link chips so the unit reads like a connected sequence rather than a set of isolated forms.

Lessons can also be moved earlier/later, duplicated, or removed from the editor. Reordering preserves lesson details and curriculum links, duplicating copies timing and assigned curriculum into a new editable lesson, and removal keeps at least one lesson in the unit sequence.

Teachers can copy the active lesson's structure into blank fields across the other lessons. This reuses lesson-flow prompts, assessment-plan fields, activities, and resources without overwriting teacher-authored details or copying curriculum assignments.

The connected-sequence builder drafts editable lesson titles, sequence notes, learning-goal prompts, assessment checkpoints, and activity prompts from the lesson focus. It fills blank/default fields only, so teacher-written titles, goals, assessments, and activities are preserved.

Connected sequences also include editable lesson phases: Launch, Build, Apply, and Consolidate. These phases appear on lesson cards and in the exported lesson overview so the unit arc is visible at a glance.

Each lesson includes a structured lesson-flow builder with prompts for opening/connection, instructional steps, and student reflection/next step. The generated plan exports these flow notes under each lesson while preserving the broader learning activities field.

Assessment plan details are structured inside each lesson by evidence type, success criteria, and assessment evidence. Lesson cards show when criteria are set, and generated plans include these assessment details in each lesson.

The active lesson editor is organized with compact section navigation for Overview, Flow, Assessment, Curriculum, and Resources so teachers can jump between lesson details without scanning one long form.

The lesson sequence also includes pacing feedback. Lesson cards flag timing that differs from the unit default, and the planning health panel updates total instructional minutes and pacing guidance live as lesson blocks or minutes are edited.

Lesson readiness feedback helps teachers see which lessons are ready enough to teach. A lesson is marked ready when it has curriculum links, goals, assessment, and activities; otherwise the sequence flags it as needing attention.

The Planning Coach converts coverage, readiness, and pacing checks into a short next-action list. It points teachers toward the highest-impact follow-up, such as reviewing official BC items not yet selected, assigning a unit standard to lessons, opening a lesson that needs detail, or checking a pacing outlier.

Generated plans include accessible summary tables for the connected lesson sequence, pacing notes, and curriculum coverage before the detailed lesson sections. These tables use captions and header cells for screen-reader navigation.

## Saving Progress

The planner automatically saves progress in the same browser. To keep a draft across devices, use **Save draft file** and store the downloaded JSON file in a synced OneDrive or Google Drive folder. Later, use **Load draft file** to restore that JSON draft and continue editing.

## Accessibility Notes

The generated plan uses semantic headings, labelled sections, descriptive links, data-table headers, and an accessibility checklist. If the final deliverable must be PDF, export from a tool that supports tagged PDF and run its accessibility checker before sharing.

## Tests

Run the planning-core tests with Node:

```powershell
node --test tests\v2-planning-core.test.js
```
