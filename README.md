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
5. Include the official source URL and access date.
6. Generate the plan and export it as accessible HTML.

The app includes embedded selectable standards generated from the official BC Curriculum pages for K-12 areas and senior course options exposed by the planner dropdowns. The curriculum dataset lives in `curriculum-data.js`, while `index.html` contains the planner interface. Career-Life Education and Career-Life Connections link to the official BC pages and remain editable because those pages do not expose Big Ideas, Curricular Competencies, and Content in the same structure as the other curriculum pages.

## Saving Progress

The planner automatically saves progress in the same browser. To keep a draft across devices, use **Save draft file** and store the downloaded JSON file in a synced OneDrive or Google Drive folder. Later, use **Load draft file** to restore that JSON draft and continue editing.

## Accessibility Notes

The generated plan uses semantic headings, labelled sections, descriptive links, data-table headers, and an accessibility checklist. If the final deliverable must be PDF, export from a tool that supports tagged PDF and run its accessibility checker before sharing.
