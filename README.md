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

The app includes a starter embedded dataset for Grade 6 Science. Other selections set the official BC Curriculum source link and keep the standards fields editable for teacher verification.

## Accessibility Notes

The generated plan uses semantic headings, labelled sections, descriptive links, data-table headers, and an accessibility checklist. If the final deliverable must be PDF, export from a tool that supports tagged PDF and run its accessibility checker before sharing.
