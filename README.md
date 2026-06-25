<!doctype html>
<html lang="en-CA">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>BC Curriculum Unit and Lesson Planner</title>
  <style>
    :root {
      color-scheme: light;
      --ink: #002145;
      --muted: #2f5d7c;
      --line: #d7e0e7;
      --paper: #f7f9fb;
      --surface: #ffffff;
      --soft: #e6eef3;
      --accent: #0055b7;
      --accent-strong: #002145;
      --warn: #8b4a0b;
      --focus: #00a7e1;
      --shadow: 0 18px 44px rgba(0, 33, 69, 0.12);
      font-family: Whitney, Arial, "Open Sans", sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      color: var(--ink);
      background: var(--paper);
      line-height: 1.5;
    }

    a {
      color: var(--accent-strong);
      text-decoration-thickness: 0.12em;
      text-underline-offset: 0.18em;
    }

    a:focus-visible,
    button:focus-visible,
    input:focus-visible,
    select:focus-visible,
    textarea:focus-visible {
      outline: 3px solid var(--focus);
      outline-offset: 3px;
    }

    header {
      background: var(--ink);
      border-bottom: 1px solid var(--line);
    }

    .wrap {
      width: min(1180px, calc(100% - 32px));
      margin: 0 auto;
    }

    .masthead {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 18px;
      padding: 30px 0 24px;
    }

    .eyebrow {
      margin: 0;
      color: #97d4e9;
      font-weight: 700;
      letter-spacing: 0;
      text-transform: uppercase;
      font-size: 0.82rem;
    }

    h1,
    h2,
    h3 {
      line-height: 1.18;
      letter-spacing: 0;
    }

    h1 {
      margin: 0;
      max-width: 900px;
      font-size: clamp(2rem, 5vw, 4.4rem);
    }

    h2 {
      margin: 0 0 12px;
      font-size: 1.45rem;
    }

    h3 {
      margin: 0 0 8px;
      font-size: 1.08rem;
    }

    .lead {
      margin: 0;
      max-width: 860px;
      color: #ffffff;
      font-size: 1.08rem;
    }

    .masthead h1 {
      color: #ffffff;
    }

    .source-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      margin-top: 8px;
    }

    .source-row a,
    .pill {
      display: inline-flex;
      align-items: center;
      min-height: 36px;
      padding: 6px 10px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: var(--surface);
      font-size: 0.92rem;
      font-weight: 700;
      text-decoration: none;
    }

    main {
      padding: 22px 0 36px;
    }

    .layout {
      display: grid;
      grid-template-columns: minmax(280px, 390px) minmax(0, 1fr);
      gap: 20px;
      align-items: start;
    }

    aside {
      position: sticky;
      top: 12px;
      display: grid;
      gap: 14px;
    }

    .panel {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: 8px;
      box-shadow: var(--shadow);
    }

    .panel-inner {
      padding: 18px;
    }

    .step-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 8px;
    }

    .step-list a {
      display: block;
      padding: 10px 12px;
      border-radius: 6px;
      color: var(--ink);
      font-weight: 700;
      text-decoration: none;
    }

    .step-list a:hover,
    .step-list a[aria-current="true"] {
      background: var(--soft);
      color: var(--accent-strong);
    }

    .source-box {
      display: grid;
      gap: 8px;
      color: var(--muted);
      font-size: 0.94rem;
    }

    .source-box p {
      margin: 0;
    }

    .button-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 14px;
    }

    button {
      min-height: 42px;
      border: 1px solid var(--accent);
      border-radius: 6px;
      padding: 9px 13px;
      background: var(--accent);
      color: #fff;
      font: inherit;
      font-weight: 800;
      cursor: pointer;
    }

    button.secondary {
      background: #fff;
      color: var(--accent-strong);
    }

    button.warning {
      border-color: var(--warn);
      background: #fff;
      color: var(--warn);
    }

    button:hover {
      filter: brightness(0.96);
    }

    form {
      display: grid;
      gap: 18px;
    }

    fieldset {
      margin: 0;
      padding: 0;
      border: 0;
    }

    .section {
      scroll-margin-top: 18px;
      border-top: 1px solid var(--line);
      padding: 22px 0;
    }

    .section:first-of-type {
      border-top: 0;
      padding-top: 0;
    }

    legend {
      width: 100%;
      padding: 0;
    }

    .hint,
    .required-note {
      margin: 3px 0 0;
      color: var(--muted);
      font-size: 0.94rem;
    }

    .required-note strong {
      color: var(--ink);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      margin-top: 14px;
    }

    .full {
      grid-column: 1 / -1;
    }

    label,
    .check-label {
      display: grid;
      gap: 6px;
      font-weight: 750;
    }

    #context label,
    #bc-alignment > .grid > label,
    #accessibility .grid label,
    #other-considerations label {
      color: #00a7e1;
      font-family: Whitney, Arial, "Open Sans", sans-serif;
      font-weight: 400;
    }

    input,
    select,
    textarea {
      width: 100%;
      border: 1px solid #9ba8a0;
      border-radius: 6px;
      padding: 10px 11px;
      background: #fff;
      color: var(--ink);
      font: inherit;
    }

    textarea {
      min-height: 116px;
      resize: vertical;
    }

    .short-area {
      min-height: 76px;
    }

    .check-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin-top: 14px;
    }

    .check-label {
      grid-template-columns: 22px minmax(0, 1fr);
      gap: 8px;
      align-items: start;
      min-height: 44px;
      padding: 10px;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: #fff;
      font-weight: 650;
    }

    .check-label input {
      width: 18px;
      height: 18px;
      margin-top: 2px;
    }

    .standards-picker {
      display: none;
      grid-column: 1 / -1;
      border: 0;
      border-radius: 0;
      padding: 4px 0 8px;
      background: #fff;
    }

    .standards-picker.is-visible {
      display: grid;
      gap: 20px;
    }

    .curriculum-browser-header {
      display: grid;
      gap: 6px;
    }

    .curriculum-browser-header h3 {
      margin: 0;
      color: #333;
      font-size: 2rem;
      line-height: 1.1;
      font-weight: 800;
    }

    #standardsPickerContent {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 22px 18px;
    }

    .standards-category {
      display: grid;
      gap: 10px;
    }

    .standards-category[data-category="coreCompetencies"],
    .standards-category[data-category="bigIdeas"],
    .standards-category[data-category="fppl"] {
      grid-column: 1 / -1;
    }

    .standards-category h3 {
      margin: 0;
      color: #333;
      font-size: 1.65rem;
      line-height: 1.15;
      font-weight: 800;
    }

    .standards-category .category-subtitle {
      margin: -4px 0 0;
      color: #333;
      font-size: 1rem;
    }

    .standards-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 8px 0;
    }

    .standards-actions button {
      min-height: 36px;
      padding: 7px 10px;
      border-color: #9bc3e6;
      background: #9bc3e6;
      color: #1f2f3d;
      font-weight: 500;
    }

    #bc-alignment .standards-category .check-grid {
      grid-template-columns: 1fr;
      gap: 8px;
      margin-top: 0;
    }

    #bc-alignment .standards-category[data-category="coreCompetencies"] .check-grid {
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }

    #bc-alignment .standards-category[data-category="bigIdeas"] .check-grid {
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    }

    #bc-alignment .standards-category[data-category="fppl"] .check-grid {
      grid-template-columns: 1fr;
    }

    #bc-alignment .standards-category .check-label {
      min-height: 68px;
      border: 1px solid #c5d1db;
      border-radius: 4px;
      background: #eef6fd;
      color: #333;
      font-weight: 400;
      line-height: 1.35;
    }

    #bc-alignment .standards-category[data-category="bigIdeas"] .check-label {
      align-items: start;
      min-height: 118px;
      text-align: left;
      color: #0065a8;
      text-decoration: underline;
    }

    #bc-alignment .standards-category[data-category="coreCompetencies"] .check-label {
      min-height: 188px;
      border-color: #009cde;
      background: linear-gradient(90deg, #009cde 0 14px, #fff 14px 100%);
      font-size: 1.1rem;
      text-align: left;
    }

    #bc-alignment .standards-category[data-category="coreCompetencies"] .check-label:nth-child(1) {
      border-color: #f47b5b;
      background: linear-gradient(90deg, #f47b5b 0 14px, #fff 14px 100%);
    }

    #bc-alignment .standards-category[data-category="coreCompetencies"] .check-label:nth-child(3) {
      border-color: #55b66f;
      background: linear-gradient(90deg, #55b66f 0 14px, #fff 14px 100%);
    }

    .core-competency-card {
      display: grid;
      gap: 8px;
      flex: 1 1 220px;
      align-self: flex-start;
      min-width: 0;
      max-width: 100%;
    }

    .core-competency-card .check-label {
      margin: 0;
      grid-template-columns: 28px minmax(0, 1fr);
      align-content: start;
    }

    .core-detail {
      border: 1px solid #c5d1db;
      border-radius: 4px;
      background: #fff;
    }

    .core-detail summary {
      min-height: 40px;
      padding: 9px 11px;
      color: var(--accent-strong);
      font-weight: 700;
      cursor: pointer;
    }

    .core-detail-body {
      display: grid;
      gap: 12px;
      padding: 0 11px 12px;
    }

    .sub-competency {
      display: grid;
      gap: 7px;
      border-top: 1px solid var(--line);
      padding-top: 10px;
    }

    .sub-competency:first-child {
      border-top: 0;
      padding-top: 0;
    }

    .sub-competency h4 {
      margin: 0;
      color: #333;
      font-size: 1rem;
    }

    .sub-competency-title {
      margin: 0;
      color: #333;
      font-size: 1rem;
      font-weight: 700;
    }

    .profile-list {
      display: grid;
      gap: 5px;
      margin: 0;
      padding-left: 0;
      color: #333;
      font-size: 0.9rem;
      list-style: none;
    }

    .profile-check {
      display: grid;
      grid-template-columns: 22px minmax(0, 1fr);
      gap: 8px;
      align-items: start;
      color: #333;
      font-weight: 400;
    }

    .profile-check input {
      width: 17px;
      height: 17px;
      margin-top: 2px;
    }

    .fppl-item {
      display: grid;
      gap: 8px;
      border: 1px solid #c5d1db;
      border-radius: 4px;
      padding: 10px;
      background: #eef6fd;
    }

    .fppl-item .check-label {
      min-height: 0;
      border: 0;
      padding: 0;
      background: transparent;
      font-weight: 400;
    }

    .fppl-reflection {
      display: none;
      margin-left: 30px;
    }

    .fppl-item.is-selected .fppl-reflection {
      display: grid;
      gap: 6px;
    }

    .fppl-reflection textarea {
      min-height: 82px;
    }

    #bc-alignment .standards-category[data-category="competencies"],
    #bc-alignment .standards-category[data-category="content"] {
      align-self: start;
      border: 1px solid #c5d1db;
      border-radius: 4px;
      padding: 14px;
      background: #fff;
    }

    #bc-alignment .standards-category[data-category="content"] {
      background: #eef6fd;
    }

    #bc-alignment .standards-category[data-category="competencies"] .check-label,
    #bc-alignment .standards-category[data-category="content"] .check-label {
      border: 0;
      background: transparent;
      min-height: 0;
      padding: 6px 0;
    }

    #bc-alignment .standards-category[data-category="competencies"] .check-label span::before,
    #bc-alignment .standards-category[data-category="content"] .check-label span::before {
      content: "◆";
      margin-right: 8px;
      color: #333;
    }

    .status {
      min-height: 30px;
      margin-top: 12px;
      color: var(--accent-strong);
      font-weight: 750;
    }

    .v2-panel,
    .v2-structure-summary {
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 14px;
      background: #fff;
    }

    .v2-panel h3 {
      margin: 0 0 8px;
      color: var(--ink);
      font-size: 1.15rem;
    }

    .v2-notices {
      display: grid;
      gap: 8px;
      color: var(--accent-strong);
    }

    .v2-notice {
      border-left: 4px solid var(--focus);
      padding: 8px 10px;
      background: #eaf6fb;
    }

    .v2-coach {
      display: grid;
      gap: 12px;
      border: 1px solid var(--line);
      border-left: 6px solid var(--ubc-blue);
      border-radius: 6px;
      padding: 14px;
      background: #f7fbff;
    }

    .v2-coach h3,
    .v2-coach p {
      margin: 0;
    }

    .v2-action-list {
      display: grid;
      gap: 8px;
    }

    .v2-action {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 10px;
      align-items: center;
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 10px;
      background: #fff;
    }

    .v2-action strong,
    .v2-action p {
      margin: 0;
    }

    .v2-action strong {
      color: var(--ubc-blue);
    }

    .v2-action p {
      color: var(--text);
    }

    .v2-action-priority {
      display: inline-flex;
      width: max-content;
      margin-bottom: 4px;
      border-radius: 999px;
      padding: 2px 8px;
      background: #eef1f4;
      color: #4f6070;
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
    }

    .v2-action-priority.is-high {
      background: #fff1e8;
      color: #9d3a00;
    }

    .v2-action-priority.is-medium {
      background: #eaf6fb;
      color: var(--ubc-blue);
    }

    .v2-map-category,
    .v2-lesson-card,
    .v2-report-section,
    .v2-sequence-grid {
      display: grid;
      gap: 10px;
      margin-top: 12px;
    }

    .v2-map-filters {
      display: grid;
      grid-template-columns: minmax(0, 2fr) minmax(180px, 1fr);
      gap: 12px;
      align-items: end;
      margin: 12px 0;
      padding: 12px;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: #f7fbff;
    }

    .v2-sequence-grid {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      align-items: stretch;
    }

    .v2-sequence-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 10px 0 0;
      padding: 8px;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: #f7fbff;
    }

    .v2-sequence-filters button {
      min-height: 34px;
    }

    .v2-sequence-filters button[aria-pressed="true"] {
      background: var(--ubc-blue);
      color: #fff;
      border-color: var(--ubc-blue);
    }

    .v2-sequence-empty {
      margin: 12px 0 0;
      padding: 12px;
      border: 1px dashed var(--line);
      border-radius: 6px;
      background: #fff;
      color: var(--text);
      font-weight: 700;
    }

    .v2-timeline {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 8px;
      margin-top: 12px;
      padding: 10px;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: #f7fbff;
    }

    .v2-timeline-step {
      display: grid;
      gap: 4px;
      min-height: 112px;
      padding: 10px;
      border: 1px solid var(--line);
      border-top: 5px solid var(--focus);
      border-radius: 6px;
      background: #fff;
      color: var(--ink);
      text-align: left;
      cursor: pointer;
    }

    .v2-timeline-step.is-active {
      outline: 3px solid rgba(0, 85, 183, 0.2);
      background: #eef7ff;
    }

    .v2-timeline-step.is-warning {
      border-top-color: #f36f21;
    }

    .v2-timeline-step strong,
    .v2-timeline-step span {
      display: block;
    }

    .v2-timeline-step strong {
      color: var(--ubc-blue);
    }

    .v2-timeline-step span {
      color: var(--text);
      font-size: 0.84rem;
    }

    .v2-sequence-card {
      display: grid;
      gap: 10px;
      align-content: start;
      min-height: 190px;
      padding: 12px;
      border: 1px solid var(--line);
      border-left: 6px solid var(--focus);
      border-radius: 6px;
      background: #fff;
      text-align: left;
      color: var(--ink);
      cursor: pointer;
    }

    .v2-sequence-card.is-active {
      outline: 3px solid rgba(0, 85, 183, 0.22);
      border-color: var(--focus);
      background: #f7fbff;
    }

    .v2-sequence-card h4 {
      margin: 0;
      font-size: 1rem;
      color: var(--ubc-blue);
    }

    .v2-card-meta {
      margin: 0;
      color: var(--text);
      font-size: 0.9rem;
    }

    .v2-chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
    }

    .v2-chip {
      display: inline-flex;
      align-items: center;
      max-width: 100%;
      min-height: 26px;
      border-radius: 999px;
      padding: 3px 8px;
      background: #eaf6fb;
      color: var(--ubc-blue);
      font-size: 0.82rem;
      font-weight: 700;
    }

    .v2-chip.is-muted {
      background: #eef1f4;
      color: #4f6070;
    }

    .v2-chip.is-warning {
      background: #fff1e8;
      color: #9d3a00;
    }

    .v2-chip.is-phase {
      background: #e6f4ea;
      color: #1e6b3a;
    }

    .v2-element-row {
      display: grid;
      gap: 8px;
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 10px;
      background: #f7f9fb;
    }

    .v2-element-title {
      margin: 0;
      color: var(--ink);
      font-weight: 800;
    }

    .v2-lesson-checks {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .v2-lesson-checks label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-height: 34px;
      padding: 6px 9px;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: #fff;
      color: var(--ink);
      font-weight: 600;
    }

    .v2-gap {
      color: #9d3a00;
      font-weight: 800;
    }

    .v2-active-editor {
      display: grid;
      gap: 4px;
      margin-bottom: 12px;
      padding: 10px 12px;
      border-left: 4px solid var(--focus);
      background: #eaf6fb;
    }

    .v2-active-editor h4,
    .v2-active-editor p {
      margin: 0;
    }

    .v2-sequence-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
    }

    .v2-editor-nav {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
      padding: 8px;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: #f7fbff;
    }

    .v2-editor-nav button {
      min-height: 34px;
    }

    .v2-lesson-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }

    .v2-lesson-grid .full {
      grid-column: 1 / -1;
    }

    .v2-flow-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }

    .v2-flow-grid .full {
      grid-column: 1 / -1;
    }

    .v2-structure-summary {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
      background: #eaf6fb;
    }

    .v2-structure-summary strong {
      display: block;
      color: var(--ubc-blue);
      font-family: WhitneySemibold, Whitney, Arial, sans-serif;
      font-size: 1.2rem;
    }

    .v2-mini-list {
      display: grid;
      gap: 6px;
      margin: 0;
      padding-left: 1.1rem;
    }

    .v2-add-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 8px;
      align-items: end;
      padding: 8px 0;
      border-top: 1px solid var(--line);
    }

    .v2-add-row:first-of-type {
      border-top: 0;
    }

    .v2-report-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }

    .v2-report-table th,
    .v2-report-table td {
      border: 1px solid var(--line);
      padding: 7px;
      text-align: left;
      vertical-align: top;
    }

    .v2-badge {
      display: inline-block;
      border-radius: 999px;
      padding: 2px 8px;
      background: #e6eef3;
      color: var(--ink);
      font-weight: 800;
      white-space: nowrap;
    }

    .v2-badge.covered {
      background: #e8f5ec;
      color: #276739;
    }

    .v2-badge.missing,
    .v2-badge.unassigned,
    .v2-badge.inconsistent {
      background: #fff1e8;
      color: #9d3a00;
    }

    .preview {
      display: grid;
      gap: 18px;
    }

    .doc {
      background: #fff;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 28px;
      box-shadow: var(--shadow);
    }

    .doc h2 {
      margin-top: 24px;
      padding-top: 18px;
      border-top: 1px solid var(--line);
    }

    .doc h2:first-child {
      margin-top: 0;
      padding-top: 0;
      border-top: 0;
    }

    .doc dl {
      display: grid;
      grid-template-columns: minmax(160px, 220px) minmax(0, 1fr);
      gap: 8px 14px;
      margin: 0;
    }

    .doc dt {
      font-weight: 800;
    }

    .doc dd {
      margin: 0;
    }

    .doc ul,
    .doc ol {
      padding-left: 1.35rem;
    }

    .doc table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      font-size: 0.95rem;
    }

    .doc caption {
      text-align: left;
      font-weight: 800;
      margin-bottom: 6px;
    }

    .doc th,
    .doc td {
      border: 1px solid #aeb8b0;
      padding: 8px;
      vertical-align: top;
      text-align: left;
    }

    .doc th {
      background: var(--soft);
    }

    .empty {
      padding: 24px;
      border: 2px dashed var(--line);
      border-radius: 8px;
      background: #fff;
      color: var(--muted);
      font-weight: 700;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    @media (max-width: 900px) {
      .layout,
      .grid,
      .check-grid,
      #standardsPickerContent {
        grid-template-columns: 1fr;
      }

      #bc-alignment .standards-category[data-category="coreCompetencies"] .check-grid {
        display: grid;
        grid-template-columns: 1fr;
      }

      .v2-lesson-grid {
        grid-template-columns: 1fr;
      }

      .v2-flow-grid {
        grid-template-columns: 1fr;
      }

      .v2-structure-summary {
        grid-template-columns: 1fr;
      }

      .v2-map-filters {
        grid-template-columns: 1fr;
      }

      .v2-action {
        grid-template-columns: 1fr;
      }

      .v2-action button {
        width: 100%;
      }

      .v2-add-row {
        grid-template-columns: 1fr;
      }

      aside {
        position: static;
      }

      .doc dl {
        grid-template-columns: 1fr;
      }
    }

    @media print {
      header,
      aside,
      form,
      .button-row,
      .empty {
        display: none !important;
      }

      body {
        background: #fff;
      }

      main,
      .wrap,
      .layout,
      .preview {
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
      }

      .doc {
        border: 0;
        box-shadow: none;
        padding: 0;
      }

      a {
        color: #000;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="wrap masthead">
      <p class="eyebrow">BC Curriculum aligned planning tool</p>
      <h1>BC Curriculum Unit and Lesson Planner</h1>
      <p class="lead">Build a unit or lesson plan that keeps Big Ideas, Curricular Competencies, Content, Core Competencies, First Peoples Principles of Learning, assessment, differentiation, and accessibility visible from draft to export.</p>
      <nav class="source-row" aria-label="Official curriculum links">
        <a href="https://curriculum.gov.bc.ca/curriculum/overview" target="_blank" rel="noopener">BC curriculum overview</a>
        <a href="https://curriculum.gov.bc.ca/competencies" target="_blank" rel="noopener">Core competencies</a>
        <a href="https://curriculum.gov.bc.ca/curriculum/continuous-views" target="_blank" rel="noopener">Continuous views</a>
        <a href="https://curriculum.gov.bc.ca/curriculum/tools" target="_blank" rel="noopener">Tools and resources</a>
      </nav>
    </div>
  </header>

  <main>
    <div class="wrap layout">
      <aside aria-label="Planner controls">
        <section class="panel" aria-labelledby="jump-title">
          <div class="panel-inner">
            <h2 id="jump-title">Planner Steps</h2>
            <ol class="step-list">
              <li><a href="#context">1. Context</a></li>
              <li><a href="#bc-alignment">2. BC Alignment</a></li>
              <li><a href="#unit-lesson-sync">3. Unit/Lesson Sync</a></li>
              <li><a href="#accessibility">4. Accessibility</a></li>
              <li><a href="#other-considerations">5. Other</a></li>
              <li><a href="#export">6. Export</a></li>
            </ol>
          </div>
        </section>

        <section class="panel" aria-labelledby="source-title">
          <div class="panel-inner source-box">
            <h2 id="source-title">Alignment Rule</h2>
            <p>Use the official BC curriculum pages while planning. Paste the exact Big Ideas, Curricular Competencies, and Content you will teach, then include the source URL and access date.</p>
            <p>The exported document includes a source section so future readers can verify the plan against the BC curricular documents.</p>
          </div>
        </section>
      </aside>

      <div>
        <form id="planner-form">
          <section class="panel" aria-labelledby="form-title">
            <div class="panel-inner">
              <h2 id="form-title">Planning Workspace</h2>
              <p class="required-note"><strong>Draft mode:</strong> generate anytime. Blank fields appear as “To be completed” in the plan.</p>

              <fieldset id="context" class="section">
                <legend>
                  <h2>1. Teaching &amp; Learning Context</h2>
                  <p class="hint">Define the learning context (Grade-level, Subject Area, Number of lessons, etc.) and learner profile.</p>
                </legend>
                <div class="grid">
                  <label>Teacher Candidate Name
                    <input id="teacherCandidate" placeholder="Teacher candidate name">
                  </label>
                  <label>Date
                    <input id="planDate" type="date">
                  </label>
                  <label class="full">Practicum School
                    <input id="practicumSchool" placeholder="Practicum school">
                  </label>
                  <label>Plan type
                    <select id="planType">
                      <option value="Unit Plan">Unit Plan</option>
                      <option value="Lesson Plan">Lesson Plan</option>
                    </select>
                  </label>
                  <label>Grade level
                    <select id="grade">
                      <option value="">Select a grade</option>
                      <option value="K">Kindergarten</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      <option value="5">Grade 5</option>
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                      <option value="11">Grade 11</option>
                      <option value="12">Grade 12</option>
                    </select>
                  </label>
                  <label>Subject Area
                    <select id="subject">
                      <option value="">Select a grade first</option>
                    </select>
                  </label>
                  <label class="full">Course or curriculum page
                    <select id="course" disabled>
                      <option value="">Select an area first</option>
                    </select>
                  </label>
                  <label>Duration
                    <span class="hint">List the number of lessons, days, blocks, and include the number of minutes per lesson.</span>
                    <input id="duration" placeholder="Example: 3 weeks, 75 minutes">
                  </label>
                  <label class="full">Title
                    <input id="title" placeholder="Example: Ecosystems and Interdependence">
                  </label>
                  <label class="full">Learner context
                    <textarea id="learners" class="short-area" placeholder="Class profile, strengths, interests, access needs, language needs, community context"></textarea>
                  </label>
                </div>
              </fieldset>

              <fieldset id="bc-alignment" class="section">
                <legend>
                  <h2>2. BC Curriculum Alignment</h2>
                  <p class="hint">Paste or summarize from the official BC curriculum page for the selected grade and area of learning.</p>
                </legend>
                <div class="grid">
                  <label class="full">Official BC curriculum URL
                    <input id="sourceUrl" type="url" placeholder="https://curriculum.gov.bc.ca/curriculum/...">
                  </label>
                  <div class="full source-box" id="standardsStatus" role="status" aria-live="polite">
                    Choose a grade, area, and course to load any standards currently built into this tool. Always verify against the official BC curriculum page linked above.
                  </div>
                  <section class="standards-picker" id="standardsPicker" aria-labelledby="standards-picker-title">
                    <div id="standardsPickerContent"></div>
                  </section>
                  <label>Access date
                    <input id="accessDate" type="date">
                  </label>
                  <label>Source note
                    <input id="sourceNote" placeholder="Example: Grade 6 Science curriculum page">
                  </label>
                  <label class="full">Big Ideas / Understand
                    <textarea id="bigIdeas" placeholder="Paste the relevant Big Idea statements"></textarea>
                  </label>
                  <label class="full">Curricular Competencies / Do
                    <textarea id="competencies" placeholder="Paste the relevant curricular competencies"></textarea>
                  </label>
                  <label class="full">Content / Know
                    <textarea id="contentStandards" placeholder="Paste the relevant content standards"></textarea>
                  </label>
                  <label class="full">Core Competencies
                    <textarea id="coreCompetencies" placeholder="Communication, Thinking, Personal and Social connections"></textarea>
                  </label>
                  <label class="full">First Peoples Principles of Learning connections
                    <textarea id="fppol" placeholder="Describe respectful and authentic connections, where appropriate"></textarea>
                  </label>
                </div>
              </fieldset>

              <fieldset id="unit-lesson-sync" class="section">
                <legend>
                  <h2>3. Unit &amp; Lesson Synchronization</h2>
                  <p class="hint">Set the unit structure, assign curriculum options to each lesson, then refine the individual lesson plans with live coverage feedback.</p>
                </legend>
                <div class="grid">
                  <label>Number of lessons
                    <input id="v2LessonCount" type="number" min="1" max="20" value="3">
                  </label>
                  <label>Blocks per lesson
                    <input id="v2BlocksPerLesson" type="number" min="1" max="10" value="1">
                  </label>
                  <label>Minutes per block
                    <input id="v2MinutesPerBlock" type="number" min="1" max="240" value="60">
                  </label>
                  <div class="button-row">
                    <button type="button" class="secondary" id="v2SyncUnitBtn">Refresh unit structure</button>
                    <button type="button" id="v2BuildSequenceBtn">Build connected sequence</button>
                    <button type="button" class="secondary" id="v2AddLessonBtn">Add lesson</button>
                    <button type="button" class="secondary" id="v2ReportBtn">Update coverage report</button>
                  </div>
                  <div class="full v2-structure-summary" id="v2StructureSummary" aria-live="polite"></div>
                  <div class="full v2-notices" id="v2Notices" aria-live="polite"></div>
                  <section class="full v2-coach" aria-labelledby="v2-coach-title">
                    <div>
                      <h3 id="v2-coach-title">Planning Coach</h3>
                      <p class="hint">Next best actions update from coverage, readiness, and pacing checks.</p>
                    </div>
                    <div id="v2CoachActions" class="v2-action-list" aria-live="polite"></div>
                  </section>
                  <section class="full v2-panel" aria-labelledby="v2-sequence-title">
                    <h3 id="v2-sequence-title">Unit Lesson Sequence</h3>
                    <p class="hint">Start here. Click a lesson card to focus the editor, then assign curriculum and refine the lesson details.</p>
                    <div id="v2SequenceFilters" class="v2-sequence-filters" aria-label="Lesson sequence filters"></div>
                    <div id="v2LessonSequence"></div>
                  </section>
                  <section class="full v2-panel" aria-labelledby="v2-map-title">
                    <details>
                      <summary><h3 id="v2-map-title">Unit Curriculum-to-Lesson Map</h3></summary>
                      <p class="hint">Use this unit planning space to decide which selected BC curriculum items belong in each lesson. Changes here update individual lesson plans immediately.</p>
                      <div class="v2-map-filters" aria-label="Curriculum map filters">
                        <label>Search standards
                          <input id="v2MapSearch" type="search" placeholder="Keyword, phrase, or lesson focus">
                        </label>
                        <label>Show
                          <select id="v2MapStatus">
                            <option value="all">All selected standards</option>
                            <option value="unassigned">Only unassigned standards</option>
                            <option value="assigned">Only assigned standards</option>
                          </select>
                        </label>
                      </div>
                      <div id="v2AssignmentMap"></div>
                    </details>
                  </section>
                  <section class="full v2-panel" aria-labelledby="v2-lesson-title">
                    <h3 id="v2-lesson-title">Lesson Plan Editor</h3>
                    <div id="v2LessonEditor"></div>
                  </section>
                  <section class="full v2-panel" aria-labelledby="v2-report-title">
                    <details>
                      <summary><h3 id="v2-report-title">Final Curriculum Coverage Report</h3></summary>
                      <div id="v2CoverageReport"></div>
                    </details>
                  </section>
                </div>
              </fieldset>

              <fieldset id="accessibility" class="section">
                <legend>
                  <h2>4. Accessibility, Differentiation, Universal Design for Learning</h2>
                  <p class="hint">These checks are carried into the exported plan to support accessible implementation and accessible documents.</p>
                </legend>
                <div class="check-grid">
                  <label class="check-label"><input id="aHeadings" type="checkbox" checked> Uses meaningful headings in order</label>
                  <label class="check-label"><input id="aContrast" type="checkbox" checked> Maintains strong colour contrast</label>
                  <label class="check-label"><input id="aAlt" type="checkbox"> Provides alt text for images and diagrams</label>
                  <label class="check-label"><input id="aCaptions" type="checkbox"> Captions audio or video materials</label>
                  <label class="check-label"><input id="aLinks" type="checkbox" checked> Uses descriptive link text</label>
                  <label class="check-label"><input id="aTables" type="checkbox" checked> Uses tables only for data, with headers</label>
                  <label class="check-label"><input id="aFormats" type="checkbox"> Provides multiple ways to access content</label>
                  <label class="check-label"><input id="aAssistive" type="checkbox"> Checks compatibility with assistive technology</label>
                </div>
                <div class="grid">
                  <label class="full">Universal Design for Learning and accommodations
                    <textarea id="udl" placeholder="Multiple means of engagement, representation, action and expression; individual accommodations"></textarea>
                  </label>
                  <label class="full">Accessible document notes
                    <textarea id="accessibleDocNotes" class="short-area" placeholder="Examples: export as tagged PDF from Word, run accessibility checker, keep reading order logical"></textarea>
                  </label>
                </div>
              </fieldset>

              <fieldset id="other-considerations" class="section">
                <legend>
                  <h2>5. Other Considerations</h2>
                  <p class="hint">Add any planning notes that do not fit elsewhere.</p>
                </legend>
                <div class="grid">
                  <label class="full">Other considerations
                    <textarea id="otherConsiderations" class="short-area" placeholder="Examples: classroom routines, safety, field trip notes, family/community connections, follow-up planning"></textarea>
                  </label>
                </div>
              </fieldset>

              <section id="export" class="section" aria-labelledby="export-title">
                <h2 id="export-title">6. Save Draft or Download</h2>
                <p class="hint">Generate a semantic HTML plan, print it, or download an HTML document that can be opened in Word or converted to tagged PDF.</p>
                <div class="button-row">
                  <button type="submit">Generate accessible plan</button>
                  <button type="button" class="secondary" id="saveDraftBtn">Save draft file</button>
                  <button type="button" class="secondary" id="loadDraftBtn">Load draft file</button>
                  <button type="button" class="secondary" id="downloadBtn">Download HTML document</button>
                  <button type="button" class="secondary" id="printBtn">Print or save as PDF</button>
                  <button type="button" class="warning" id="clearBtn">Clear form</button>
                </div>
                <input class="sr-only" id="draftFileInput" type="file" accept="application/json,.json">
                <p class="hint">Save draft files in a OneDrive or Google Drive synced folder to reopen them later on another device.</p>
                <p class="status" id="status" aria-live="polite"></p>
              </section>
            </div>
          </section>
        </form>

        <section class="preview" aria-labelledby="preview-title">
          <h2 id="preview-title" class="sr-only">Generated plan preview</h2>
          <div id="preview" class="empty">Your accessible BC-aligned plan will appear here after you generate it.</div>
        </section>
      </div>
    </div>
  </main>

  <template id="doc-template">
    <article class="doc" aria-labelledby="doc-heading">
      <h2 id="doc-heading"></h2>
      <section aria-labelledby="doc-context-title">
        <h2 id="doc-context-title">Teaching &amp; Learning Context</h2>
        <dl id="doc-context"></dl>
      </section>
      <section aria-labelledby="doc-alignment-title">
        <h2 id="doc-alignment-title">BC Curriculum Alignment</h2>
        <section aria-labelledby="doc-source-title">
          <h3 id="doc-source-title">Official BC Curriculum Source</h3>
          <p id="doc-source"></p>
        </section>
        <table>
          <caption>Know-Do-Understand alignment from the official BC curriculum</caption>
          <thead>
            <tr>
              <th scope="col">Curriculum element</th>
              <th scope="col">Selected standards or planning notes</th>
            </tr>
          </thead>
          <tbody id="doc-alignment"></tbody>
        </table>
      </section>
      <section aria-labelledby="doc-sync-title">
        <h2 id="doc-sync-title">Unit and Lesson Plans</h2>
        <div id="doc-sync"></div>
      </section>
      <section aria-labelledby="doc-access-title">
        <h2 id="doc-access-title">Accessibility, Differentiation, Universal Design for Learning</h2>
        <div id="doc-access"></div>
      </section>
      <section aria-labelledby="doc-other-title">
        <h2 id="doc-other-title">Other Considerations</h2>
        <div id="doc-other"></div>
      </section>
    </article>
  </template>

  <script src="curriculum-data.js"></script>
  <script src="v2-planning-core.js"></script>
  <script>
    const form = document.querySelector("#planner-form");
    const preview = document.querySelector("#preview");
    const statusBox = document.querySelector("#status");
    const saveDraftBtn = document.querySelector("#saveDraftBtn");
    const loadDraftBtn = document.querySelector("#loadDraftBtn");
    const draftFileInput = document.querySelector("#draftFileInput");
    const downloadBtn = document.querySelector("#downloadBtn");
    const printBtn = document.querySelector("#printBtn");
    const clearBtn = document.querySelector("#clearBtn");
    const gradeSelect = document.querySelector("#grade");
    const subjectSelect = document.querySelector("#subject");
    const courseSelect = document.querySelector("#course");
    const standardsStatus = document.querySelector("#standardsStatus");
    const standardsPicker = document.querySelector("#standardsPicker");
    const standardsPickerContent = document.querySelector("#standardsPickerContent");
    const v2LessonCount = document.querySelector("#v2LessonCount");
    const v2SyncUnitBtn = document.querySelector("#v2SyncUnitBtn");
    const v2BuildSequenceBtn = document.querySelector("#v2BuildSequenceBtn");
    const v2AddLessonBtn = document.querySelector("#v2AddLessonBtn");
    const v2ReportBtn = document.querySelector("#v2ReportBtn");
    const v2BlocksPerLesson = document.querySelector("#v2BlocksPerLesson");
    const v2MinutesPerBlock = document.querySelector("#v2MinutesPerBlock");
    const v2StructureSummary = document.querySelector("#v2StructureSummary");
    const v2Notices = document.querySelector("#v2Notices");
    const v2CoachActions = document.querySelector("#v2CoachActions");
    const v2SequenceFilters = document.querySelector("#v2SequenceFilters");
    const v2LessonSequence = document.querySelector("#v2LessonSequence");
    const v2MapSearch = document.querySelector("#v2MapSearch");
    const v2MapStatus = document.querySelector("#v2MapStatus");
    const v2AssignmentMap = document.querySelector("#v2AssignmentMap");
    const v2LessonEditor = document.querySelector("#v2LessonEditor");
    const v2CoverageReport = document.querySelector("#v2CoverageReport");
    const today = new Date().toISOString().slice(0, 10);
    document.querySelector("#accessDate").value = today;

    const curriculumAreas = [
      { name: "Applied Design, Skills and Technology", slug: "adst", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "Arts Education", slug: "arts-education", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "Career Education", slug: "career-education", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "English Language Arts", slug: "english-language-arts", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "Français langue première", slug: "francais-langue-premiere", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "Français langue seconde - immersion", slug: "fral", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "Languages", slug: "languages", grades: ["5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "Mathematics", slug: "mathematics", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "Physical and Health Education", slug: "physical-health-education", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      { name: "Science", slug: "science", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "Social Studies", slug: "social-studies", grades: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] }
    ];

    const courseOverrides = {
      "Applied Design, Skills and Technology|10": [["computer-studies", "Computer Studies 10"], ["culinary-arts", "Culinary Arts 10"], ["drafting", "Drafting 10"], ["electronics-and-robotics", "Electronics and Robotics 10"], ["entrepreneurship-and-marketing", "Entrepreneurship and Marketing 10"], ["family-and-society", "Family and Society 10"], ["food-studies", "Food Studies 10"], ["media-design", "Media Design 10"], ["metalwork", "Metalwork 10"], ["power-technology", "Power Technology 10"], ["technology-explorations", "Technology Explorations 10"], ["textiles", "Textiles 10"], ["web-development", "Web Development 10"], ["woodwork", "Woodwork 10"]],
      "Applied Design, Skills and Technology|11": [["accounting", "Accounting 11"], ["automotive-technology", "Automotive Technology 11"], ["computer-information-systems", "Computer Information Systems 11"], ["computer-programming", "Computer Programming 11"], ["culinary-arts", "Culinary Arts 11"], ["digital-communications", "Digital Communications 11"], ["drafting", "Drafting 11"], ["electronics", "Electronics 11"], ["engineering", "Engineering 11"], ["food-studies", "Food Studies 11"], ["graphic-production", "Graphic Production 11"], ["interpersonal-and-family-relationships", "Interpersonal and Family Relationships 11"], ["marketing-and-promotion", "Marketing and Promotion 11"], ["media-design", "Media Design 11"], ["metalwork", "Metalwork 11"], ["robotics", "Robotics 11"], ["textiles", "Textiles 11"], ["tourism", "Tourism 11"], ["woodwork", "Woodwork 11"]],
      "Applied Design, Skills and Technology|12": [["accounting", "Accounting 12"], ["art-metal-and-jewellery", "Art Metal and Jewellery 12"], ["automotive-technology", "Automotive Technology 12"], ["business-computer-applications", "Business Computer Applications 12"], ["child-development-and-caregiving", "Child Development and Caregiving 12"], ["computer-information-systems", "Computer Information Systems 12"], ["computer-programming", "Computer Programming 12"], ["culinary-arts", "Culinary Arts 12"], ["digital-media-development", "Digital Media Development 12"], ["drafting", "Drafting 12"], ["e-commerce", "E-Commerce 12"], ["economics", "Economics 12"], ["electronics", "Electronics 12"], ["engine-and-drivetrain", "Engine and Drivetrain 12"], ["engineering", "Engineering 12"], ["entrepreneurship", "Entrepreneurship 12"], ["fashion-industry", "Fashion Industry 12"], ["financial-accounting", "Financial Accounting 12"], ["food-studies", "Food Studies 12"], ["furniture-and-cabinetry", "Furniture and Cabinetry 12"], ["graphic-production", "Graphic Production 12"], ["housing-and-living-environments", "Housing and Living Environments 12"], ["industrial-coding-and-design", "Industrial Coding and Design 12"], ["machining-and-welding", "Machining and Welding 12"], ["mechatronics", "Mechatronics 12"], ["media-design", "Media Design 12"], ["metalwork", "Metalwork 12"], ["rovs-and-drones", "Remotely Operated Vehicles and Drones 12"], ["robotics", "Robotics 12"], ["specialized-studies-in-food", "Specialized Studies in Food 12"], ["textiles", "Textiles 12"], ["tourism", "Tourism 12"], ["woodwork", "Woodwork 12"]],
      "Arts Education|9": [["dance", "Dance 9"], ["drama", "Drama 9"], ["music", "Music 9"], ["visual-arts", "Visual Arts 9"]],
      "Arts Education|10": [["art-studio", "Art Studio 10"], ["choral-music", "Choral Music 10"], ["contemporary-music", "Contemporary Music 10"], ["dance-choreography", "Dance Choreography 10"], ["dance-company", "Dance Company 10"], ["dance-foundations", "Dance Foundations 10"], ["dance-technique-and-performance", "Dance Technique and Performance 10"], ["drama", "Drama 10"], ["instrumental-music", "Instrumental Music 10"], ["media-arts", "Media Arts 10"], ["musical-theatre", "Musical Theatre 10"], ["photography", "Photography 10"], ["studio-arts-2D", "Studio Arts 2D 10"], ["studio-arts-3D", "Studio Arts 3D 10"], ["theatre-company", "Theatre Company 10"], ["theatre-production", "Theatre Production 10"]],
      "Arts Education|11": [["art-studio", "Art Studio 11"], ["choral-music", "Choral Music 11"], ["composition-and-production", "Composition \u0026 Production 11"], ["contemporary-music", "Contemporary Music 11"], ["dance-choreography", "Dance Choreography 11"], ["dance-company", "Dance Company 11"], ["dance-conditioning", "Dance Conditioning 11"], ["dance-foundations", "Dance Foundations 11"], ["dance-technique-and-performance", "Dance Technique and Performance 11"], ["directing-and-script-development", "Directing and Script Development 11"], ["drama", "Drama 11"], ["film-and-television", "Film \u0026 Television 11"], ["graphic-arts", "Graphic Arts 11"], ["instrumental-music", "Instrumental Music 11"], ["media-arts", "Media Arts 11"], ["musical-theatre", "Musical Theatre 11"], ["photography", "Photography 11"], ["studio-arts-2D", "Studio Arts 2D 11"], ["studio-arts-3D", "Studio Arts 3D 11"], ["theatre-company", "Theatre Company 11"], ["theatre-production", "Theatre Production 11"]],
      "Arts Education|12": [["art-studio", "Art Studio 12"], ["choral-music", "Choral Music 12"], ["composition-and-production", "Composition \u0026 Production 12"], ["contemporary-music", "Contemporary Music 12"], ["dance-choreography", "Dance Choreography 12"], ["dance-company", "Dance Company 12"], ["dance-conditioning", "Dance Conditioning 12"], ["dance-foundations", "Dance Foundations 12"], ["dance-technique-and-performance", "Dance Technique and Performance 12"], ["directing-and-script-development", "Directing and Script Development 12"], ["drama", "Drama 12"], ["film-and-television", "Film \u0026 Television 12"], ["graphic-arts", "Graphic Arts 12"], ["instrumental-music", "Instrumental Music 12"], ["media-arts", "Media Arts 12"], ["musical-theatre", "Musical Theatre 12"], ["photography", "Photography 12"], ["studio-arts-2D", "Studio Arts 2D 12"], ["studio-arts-3D", "Studio Arts 3D 12"], ["theatre-company", "Theatre Company 12"], ["theatre-production", "Theatre Production 12"]],
      "Career Education|10": [["career-life-education", "Career-Life Education"]],
      "Career Education|11": [["courses", "Career-Life Connections"]],
      "Career Education|12": [["courses", "Career-Life Connections"]],
      "English Language Arts|10": [["composition", "Composition 10"], ["creative-writing", "Creative Writing 10"], ["literary-studies", "Literary Studies 10"], ["efp-literary-studies", "Literary Studies 10"], ["new-media", "New Media 10"], ["efp-new-media", "New Media 10"], ["spoken-language", "Spoken Language 10"], ["efp-spoken-language", "Spoken Language 10"], ["efp-writing", "Writing 10"]],
      "English Language Arts|11": [["composition", "Composition 11"], ["creative-writing", "Creative Writing 11"], ["efp-literary-studies-and-new-media", "EFP: Literary Studies + New Media 11"], ["efp-literary-studies-and-spoken-language", "EFP: Literary Studies + Spoken Language 11"], ["efp-literary-studies-and-writing", "EFP: Literary Studies + Writing 11"], ["literary-studies", "Literary Studies 11"], ["new-media", "New Media 11"], ["spoken-language", "Spoken Language 11"]],
      "English Language Arts|12": [["composition", "Composition 12"], ["creative-writing", "Creative Writing 12"], ["english-first-peoples", "English First Peoples 12"], ["english-studies", "English Studies 12"], ["literary-studies", "Literary Studies 12"], ["new-media", "New Media 12"], ["spoken-language", "Spoken Language 12"]],
      "Français langue première|10": [["expression-orale", "Études littéraires et artistiques + expression orale 10"], ["nouveaux-medias", "Études littéraires et artistiques + nouveaux médias 10"], ["production-ecrite", "Études littéraires et artistiques + production écrite 10"]],
      "Français langue première|11": [["expression-orale", "Études littéraires et artistiques + expression orale 11"], ["nouveaux-medias", "Études littéraires et artistiques + nouveaux médias 11"], ["production-ecrite", "Études littéraires et artistiques + production écrite 11"]],
      "Français langue première|12": [["francais-langue-et-culture", "Français langue et culture 12"]],
      "Français langue seconde - immersion|11": [["communication-orale", "Communication orale 11"], ["etudes-du-cinema-et-de-la-litterature-francophones", "Études du cinéma et de la littérature francophones 11"], ["langue-et-culture-de-la-francophonie", "Langue et culture de la francophonie 11"], ["medias-et-communication-numerique", "Médias et communication numérique 11"]],
      "Français langue seconde - immersion|12": [["communication-orale", "Communication orale 12"], ["etudes-du-cinema-et-de-la-litterature-francophones", "Études du cinéma et de la littérature francophones 12"], ["langue-et-culture-de-la-francophonie", "Langue et culture de la francophonie 12"], ["medias-et-communication-numerique", "Médias et communication numérique 12"]],
      "Languages|5": [["american-sign-language", "American Sign Language (ASL) 5"], ["core-french", "Core French 5"], ["german", "German 5"], ["italian", "Italian 5"], ["japanese", "Japanese 5"], ["korean", "Korean 5"], ["mandarin", "Mandarin 5"], ["punjabi", "Punjabi 5"], ["spanish", "Spanish 5"]],
      "Languages|6": [["american-sign-language", "American Sign Language (ASL) 6"], ["core-french", "Core French 6"], ["german", "German 6"], ["italian", "Italian 6"], ["japanese", "Japanese 6"], ["korean", "Korean 6"], ["mandarin", "Mandarin 6"], ["punjabi", "Punjabi 6"], ["spanish", "Spanish 6"]],
      "Languages|7": [["american-sign-language", "American Sign Language (ASL) 7"], ["core-french", "Core French 7"], ["german", "German 7"], ["italian", "Italian 7"], ["japanese", "Japanese 7"], ["korean", "Korean 7"], ["mandarin", "Mandarin 7"], ["punjabi", "Punjabi 7"], ["spanish", "Spanish 7"]],
      "Languages|8": [["american-sign-language", "American Sign Language (ASL) 8"], ["core-french", "Core French 8"], ["german", "German 8"], ["italian", "Italian 8"], ["japanese", "Japanese 8"], ["korean", "Korean 8"], ["mandarin", "Mandarin 8"], ["punjabi", "Punjabi 8"], ["spanish", "Spanish 8"]],
      "Languages|9": [["american-sign-language", "American Sign Language (ASL) 9"], ["core-french", "Core French 9"], ["german", "German 9"], ["italian", "Italian 9"], ["japanese", "Japanese 9"], ["korean", "Korean 9"], ["mandarin", "Mandarin 9"], ["punjabi", "Punjabi 9"], ["spanish", "Spanish 9"], ["spanish-entry", "Spanish Entry 9"]],
      "Languages|10": [["american-sign-language", "American Sign Language (ASL) 10"], ["core-french", "Core French 10"], ["german", "German 10"], ["italian", "Italian 10"], ["japanese", "Japanese 10"], ["korean", "Korean 10"], ["mandarin", "Mandarin 10"], ["punjabi", "Punjabi 10"], ["spanish", "Spanish 10"]],
      "Languages|11": [["american-sign-language", "American Sign Language (ASL) 11"], ["american-sign-language-introductory", "American Sign Language (ASL) Introductory 11"], ["core-french", "Core French 11"], ["core-french-introductory", "Core French Introductory 11"], ["german", "German 11"], ["german-introductory", "German Introductory 11"], ["italian", "Italian 11"], ["italian-introductory", "Italian Introductory 11"], ["japanese", "Japanese 11"], ["japanese-introductory", "Japanese Introductory 11"], ["korean", "Korean 11"], ["korean-introductory", "Korean Introductory 11"], ["mandarin", "Mandarin 11"], ["mandarin-introductory", "Mandarin Introductory 11"], ["punjabi", "Punjabi 11"], ["punjabi-introductory", "Punjabi Introductory 11"], ["spanish", "Spanish 11"], ["spanish-introductory", "Spanish Introductory 11"]],
      "Languages|12": [["american-sign-language", "American Sign Language (ASL) 12"], ["core-french", "Core French 12"], ["german", "German 12"], ["italian", "Italian 12"], ["japanese", "Japanese 12"], ["korean", "Korean 12"], ["mandarin", "Mandarin 12"], ["punjabi", "Punjabi 12"], ["spanish", "Spanish 12"]],
      "Mathematics|10": [["foundations-of-mathematics-and-pre-calculus", "Foundations of Mathematics and Pre-calculus 10"], ["workplace-mathematics", "Workplace Mathematics 10"]],
      "Mathematics|11": [["computer-science", "Computer Science 11"], ["foundations-of-mathematics", "Foundations of Mathematics 11"], ["history-of-mathematics", "History of Mathematics 11"], ["pre-calculus", "Pre-calculus 11"], ["workplace-mathematics", "Workplace Mathematics 11"]],
      "Mathematics|12": [["apprenticeship-mathematics", "Apprenticeship Mathematics 12"], ["calculus", "Calculus 12"], ["computer-science", "Computer Science 12"], ["foundations-of-mathematics", "Foundations of Mathematics 12"], ["geometry", "Geometry 12"], ["pre-calculus", "Pre-calculus 12"], ["statistics", "Statistics 12"]],
      "Science|11": [["chemistry", "Chemistry 11"], ["earth-sciences", "Earth Sciences 11"], ["environmental-science", "Environmental Science 11"], ["life-sciences", "Life Sciences 11"], ["physics", "Physics 11"], ["science-for-citizens", "Science for Citizens 11"]],
      "Science|12": [["anatomy-and-physiology", "Anatomy and Physiology 12"], ["chemistry", "Chemistry 12"], ["environmental-science", "Environmental Science 12"], ["geology", "Geology 12"], ["physics", "Physics 12"], ["specialized-science", "Specialized Science 12"]],
      "Social Studies|11": [["explorations-in-social-studies", "Explorations in Social Studies 11"], ["francophone-history", "Francophone History and Culture 11"]],
      "Social Studies|12": [["20th-century-world-history", "20th Century World History 12"], ["asian-studies", "Asian Studies 12"], ["bc-first-peoples", "B.C. First Peoples 12"], ["comparative-cultures", "Comparative Cultures 12"], ["comparative-world-religions", "Comparative World Religions 12"], ["contemporary-indigenous-studies", "Contemporary Indigenous Studies 12"], ["economic-theory", "Economic Theory 12"], ["genocide-studies", "Genocide Studies 12"], ["human-geography", "Human Geography 12"], ["law-studies", "Law Studies 12"], ["philosophy", "Philosophy 12"], ["physical-geography", "Physical Geography 12"], ["political-studies", "Political Studies 12"], ["social-justice", "Social Justice 12"], ["urban-studies", "Urban Studies 12"]]
    };

    const embeddedStandards = window.bcCurriculumStandards || {};

    const standardAliases = {
      "francais-langue-seconde-immersion|6|core": "fral|6|core",
      "languages|6|core": "languages|6|core-french"
    };

    const standardCategories = [
      { key: "coreCompetencies", title: "Core Competencies", target: "coreCompetencies" },
      { key: "bigIdeas", title: "Big Ideas", target: "bigIdeas" },
      { key: "competencies", title: "Curricular Competency", subtitle: "Learning Standards", target: "competencies" },
      { key: "content", title: "Content", subtitle: "Learning Standards", target: "contentStandards" },
      { key: "fppl", title: "First Peoples Principles of Learning", target: "fppol" }
    ];

    const coreCompetencyDetails = {
      "Communication": [
        {
          title: "Communicating",
          profiles: [
            "Profile 1: In a safe and supported environment, I respond meaningfully to communication from peers and adults.",
            "Profile 2: In familiar settings, I communicate with peers and adults.",
            "Profile 3: I communicate purposefully, using forms and strategies I have practiced.",
            "Profile 4: I communicate clearly and purposefully, using a variety of forms appropriately.",
            "Profile 5: I communicate confidently, using forms and strategies that show attention to my audience and purpose.",
            "Profile 6: I communicate with intentional impact, in well-constructed forms that are effective for my audience and purpose."
          ]
        },
        {
          title: "Collaborating",
          profiles: [
            "Profile 1: In familiar situations, I can participate with others.",
            "Profile 2: In familiar situations, I cooperate with others for specific purposes.",
            "Profile 3: I contribute during group activities with peers and share roles and responsibilities to achieve goals.",
            "Profile 4: I can confidently interact and build relationships with other group members to further shared goals.",
            "Profile 5: I can facilitate group processes and encourage collective responsibility for our progress.",
            "Profile 6: I can connect my group with other groups and broader networks for various purposes."
          ]
        }
      ],
      "Thinking": [
        {
          title: "Creative Thinking",
          profiles: [
            "Profile 1: I get ideas when I play.",
            "Profile 2: I can get new ideas or build on or combine other people's ideas to create new things.",
            "Profile 3: I can get new ideas in areas in which I have an interest and build my skills to make them work.",
            "Profile 4: I can get new ideas or reinterpret others' ideas in novel ways.",
            "Profile 5: I can think outside the box to get innovative ideas and persevere to develop them.",
            "Profile 6: I can develop a body of creative work over time in an area of interest or passion."
          ]
        },
        {
          title: "Critical and Reflective Thinking",
          profiles: [
            "Profile 1: I can explore.",
            "Profile 2: I can use evidence to make simple judgments.",
            "Profile 3: I can ask questions and consider options; I can use observations, experience, and imagination to draw conclusions.",
            "Profile 4: I can gather and combine new evidence with what I already know to develop reasoned conclusions, judgments, or plans.",
            "Profile 5: I can evaluate and use well-chosen evidence to develop interpretations, identify alternatives, perspectives, and implications, and make judgments.",
            "Profile 6: I can examine evidence from various perspectives to analyze and make well-supported judgments about complex issues."
          ]
        }
      ],
      "Personal and Social": [
        {
          title: "Personal Awareness and Responsibility",
          profiles: [
            "Profile 1: I can show a sense of accomplishment and joy, and express some wants, needs, and preferences.",
            "Profile 2: I can initiate actions that bring me joy and satisfaction and recognize that I play a role in my well-being.",
            "Profile 3: I can make choices that help me meet my wants and needs and increase my feelings of well-being.",
            "Profile 4: I can recognize my strengths and take responsibility for using strategies to focus, manage stress, and accomplish my goals.",
            "Profile 5: I recognize my value and advocate for my rights; I take responsibility for my choices, actions, and achievements.",
            "Profile 6: I can identify my strengths and limits, find internal motivation, and act on opportunities for self-growth."
          ]
        },
        {
          title: "Positive Personal and Cultural Identity",
          profiles: [
            "Profile 1: I am aware of myself as different from others.",
            "Profile 2: I am aware of different aspects of myself and can identify people, places, and things that are important to me.",
            "Profile 3: I can describe different aspects of my identity.",
            "Profile 4: I have pride in who I am and understand that I am a part of larger communities.",
            "Profile 5: I understand that my identity is influenced by many aspects of my life and that my values shape my choices.",
            "Profile 6: I can identify how my life experiences have contributed to who I am and recognize the evolving nature of my identity."
          ]
        },
        {
          title: "Social Awareness and Responsibility",
          profiles: [
            "Profile 1: I can be aware of others and my surroundings.",
            "Profile 2: In familiar settings, I can interact with others and my surroundings respectfully.",
            "Profile 3: I can interact with others and the environment respectfully and thoughtfully.",
            "Profile 4: I can take purposeful action to support others and the environment.",
            "Profile 5: I can advocate and take action for my communities and the natural world; I expect to make a difference.",
            "Profile 6: I can initiate positive, sustainable change for others and the environment."
          ]
        }
      ]
    };

    const fields = [
      "teacherCandidate", "planDate", "practicumSchool", "planType", "grade", "subject", "course", "duration", "title", "learners", "sourceUrl",
      "accessDate", "sourceNote", "bigIdeas", "competencies", "contentStandards",
      "coreCompetencies", "fppol", "udl", "otherConsiderations",
      "accessibleDocNotes"
    ];

    const checks = [
      ["aHeadings", "Uses meaningful headings in order"],
      ["aContrast", "Maintains strong colour contrast"],
      ["aAlt", "Provides alt text for images and diagrams"],
      ["aCaptions", "Captions audio or video materials"],
      ["aLinks", "Uses descriptive link text"],
      ["aTables", "Uses tables only for data, with headers"],
      ["aFormats", "Provides multiple ways to access content"],
      ["aAssistive", "Checks compatibility with assistive technology"]
    ];

    let v2State = BCPlannerV2.createState(getUnitDataFromFields(), Number(v2LessonCount.value || 3), getV2ScheduleFromFields());
    let activeLessonId = v2State.lessons[0].id;
    let v2SequenceFilter = "all";

    const saved = JSON.parse(localStorage.getItem("bcPlannerDraft") || "{}");
    restoreDraft(saved, { render: false, updateStatus: false });
    renderV2Workspace();

    form.addEventListener("input", (event) => {
      if (event.target.closest("#unit-lesson-sync")) return;
      syncV2FromUnitFields();
      const draft = collect();
      localStorage.setItem("bcPlannerDraft", JSON.stringify(draft));
    });

    gradeSelect.addEventListener("change", (event) => {
      updateSubjectOptions(event.target.value);
      subjectSelect.value = "";
      updateCourseOptions("", event.target.value);
      clearLoadedStandards();
      saveDraft();
    });

    subjectSelect.addEventListener("change", (event) => {
      updateCourseOptions(event.target.value, gradeSelect.value);
      clearLoadedStandards();
      saveDraft();
    });

    courseSelect.addEventListener("change", () => {
      applyCourseSelection();
      syncV2FromUnitFields();
      saveDraft();
    });

    v2SyncUnitBtn.addEventListener("click", () => {
      syncV2FromUnitFields();
      syncV2ScheduleFromFields();
      renderV2Workspace();
      statusBox.textContent = "Unit structure and lesson map refreshed.";
    });

    v2BuildSequenceBtn.addEventListener("click", () => {
      syncV2FromUnitFields();
      v2State = BCPlannerV2.buildConnectedSequence(v2State);
      const sequenceMessage = v2State.notices.at(-1) || "Connected lesson sequence refreshed.";
      renderV2Workspace();
      saveDraft();
      statusBox.textContent = sequenceMessage;
    });

    v2AddLessonBtn.addEventListener("click", () => {
      v2LessonCount.value = String(Number(v2LessonCount.value || v2State.lessons.length) + 1);
      v2State = BCPlannerV2.updateSchedule(v2State, getV2ScheduleFromFields());
      activeLessonId = v2State.lessons[v2State.lessons.length - 1].id;
      renderV2Workspace();
      saveDraft();
    });

    v2ReportBtn.addEventListener("click", () => {
      syncV2FromUnitFields();
      renderV2Workspace();
      statusBox.textContent = "Coverage report updated.";
    });

    [v2MapSearch, v2MapStatus].forEach((control) => {
      control.addEventListener("input", renderV2AssignmentMap);
      control.addEventListener("change", renderV2AssignmentMap);
    });

    v2LessonCount.addEventListener("change", () => {
      syncV2ScheduleFromFields();
      if (!v2State.lessons.some((lesson) => lesson.id === activeLessonId)) activeLessonId = v2State.lessons[0].id;
      renderV2Workspace();
      saveDraft();
    });

    [v2BlocksPerLesson, v2MinutesPerBlock].forEach((input) => {
      input.addEventListener("input", () => {
        syncV2ScheduleFromFields();
        renderV2Workspace();
        saveDraft();
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      renderDocument();
      statusBox.textContent = "Draft plan generated. Blank fields are marked as To be completed.";
    });

    saveDraftBtn.addEventListener("click", () => {
      const payload = buildDraftPayload();
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
      downloadBlob(blob, `${buildPlanFileName(payload.data)}.json`);
      statusBox.textContent = "Draft file downloaded. Save it in a OneDrive or Google Drive synced folder to keep it across devices.";
    });

    loadDraftBtn.addEventListener("click", () => {
      draftFileInput.click();
    });

    draftFileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        try {
          const draft = JSON.parse(reader.result);
          restoreDraft(draft.data || draft, { render: true, updateStatus: true });
        } catch (error) {
          statusBox.textContent = "That draft file could not be read. Please choose a valid BC Curriculum Planner JSON draft.";
        } finally {
          draftFileInput.value = "";
        }
      });
      reader.readAsText(file);
    });

    downloadBtn.addEventListener("click", () => {
      if (!preview.querySelector(".doc")) {
        statusBox.textContent = "Generate the plan before downloading.";
        return;
      }
      const plan = collect();
      const html = buildStandaloneDocument(preview.querySelector(".doc").outerHTML, plan.title || "BC Curriculum Plan");
      const blob = new Blob([html], { type: "text/html;charset=utf-8" });
      downloadBlob(blob, `${buildPlanFileName(plan)}.html`);
      statusBox.textContent = "Accessible HTML document downloaded.";
    });

    printBtn.addEventListener("click", () => {
      if (!preview.querySelector(".doc")) renderDocument();
      const plan = collect();
      const html = buildStandaloneDocument(preview.querySelector(".doc").outerHTML, plan.title || "BC Curriculum Plan");
      printDocument(html);
    });

    clearBtn.addEventListener("click", () => {
      form.reset();
      document.querySelector("#accessDate").value = today;
      preview.className = "empty";
      preview.textContent = "Your accessible BC-aligned plan will appear here after you generate it.";
      localStorage.removeItem("bcPlannerDraft");
      statusBox.textContent = "Form cleared.";
      updateSubjectOptions("");
      updateCourseOptions("", "");
      v2LessonCount.value = "3";
      v2BlocksPerLesson.value = "1";
      v2MinutesPerBlock.value = "60";
      v2State = BCPlannerV2.createState(getUnitDataFromFields(), 3, getV2ScheduleFromFields());
      activeLessonId = v2State.lessons[0].id;
      renderV2Workspace();
    });

    function saveDraft() {
      const draft = collect();
      localStorage.setItem("bcPlannerDraft", JSON.stringify(draft));
    }

    function buildDraftPayload() {
      return {
        app: "BC Curriculum Unit and Lesson Planner",
        version: 1,
        savedAt: new Date().toISOString(),
        data: collect()
      };
    }

    function restoreDraft(data, options = {}) {
      const { render = false, updateStatus = true } = options;
      fields.forEach((id) => {
        const field = document.querySelector(`#${id}`);
        if (field && Object.prototype.hasOwnProperty.call(data, id)) field.value = data[id];
      });

      updateSubjectOptions(gradeSelect.value);
      if (data.subject) subjectSelect.value = data.subject;
      updateCourseOptions(subjectSelect.value, gradeSelect.value);
      if (data.course) courseSelect.value = data.course;
      applyCourseSelection();

      const selectedKey = courseSelect.selectedOptions[0]?.dataset.key;
      const hasEmbeddedStandard = Boolean(getEmbeddedStandard(selectedKey));
      fields.forEach((id) => {
        const field = document.querySelector(`#${id}`);
        if (hasEmbeddedStandard && (id === "sourceUrl" || id === "sourceNote")) return;
        if (field && Object.prototype.hasOwnProperty.call(data, id)) field.value = data[id];
      });
      checks.forEach(([id]) => {
        const check = document.querySelector(`#${id}`);
        if (check && typeof data[id] === "boolean") check.checked = data[id];
      });

      if (data.v2Planning?.lessons?.length) {
        v2State = BCPlannerV2.syncUnitElements(data.v2Planning, getUnitDataFromFields());
        v2LessonCount.value = String(v2State.lessons.length);
        v2BlocksPerLesson.value = String(v2State.schedule?.blocksPerLesson || 1);
        v2MinutesPerBlock.value = String(v2State.schedule?.minutesPerBlock || 60);
        activeLessonId = data.v2Planning.activeLessonId || v2State.lessons[0].id;
        if (!v2State.lessons.some((lesson) => lesson.id === activeLessonId)) activeLessonId = v2State.lessons[0].id;
      } else {
        v2State = BCPlannerV2.createState(getUnitDataFromFields(), Number(v2LessonCount.value || 3), getV2ScheduleFromFields());
        activeLessonId = v2State.lessons[0].id;
      }
      renderV2Workspace();
      saveDraft();
      if (render) renderDocument();
      if (updateStatus) statusBox.textContent = "Draft loaded. You can keep editing or generate the accessible plan.";
    }

    function downloadBlob(blob, fileName) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.append(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    }

    function buildPlanFileName(data) {
      const grade = data.grade ? (data.grade === "K" ? "Kindergarten" : `Grade ${data.grade}`) : "Grade Level";
      const selectedCourse = getCourseFileLabel(data);
      const planType = data.planType || "Lesson Plan or Unit Plan";
      return [
        filePart(grade),
        filePart(selectedCourse),
        filePart(planType),
        timestamp()
      ].join("_");
    }

    function getCourseFileLabel(data) {
      const selected = courseSelect.selectedOptions[0];
      if (selected?.value) return selected.textContent;
      if (data.subject && data.grade && data.course) {
        const course = getCourseOptions(data.subject, data.grade).find((item) => item.value === data.course);
        if (course) return course.label;
      }
      return data.course || data.subject || "Course or Curriculum Page";
    }

    function filePart(value) {
      return String(value)
        .replace(/&/g, "and")
        .trim()
        .replace(/[^A-Za-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "") || "To_Be_Completed";
    }

    function timestamp() {
      const now = new Date();
      const pad = (value) => String(value).padStart(2, "0");
      return [
        now.getFullYear(),
        pad(now.getMonth() + 1),
        pad(now.getDate())
      ].join("-") + "_" + [
        pad(now.getHours()),
        pad(now.getMinutes()),
        pad(now.getSeconds())
      ].join("-");
    }

    function updateSubjectOptions(grade) {
      subjectSelect.replaceChildren(option("", grade ? "Select an area" : "Select a grade first"));
      curriculumAreas
        .filter((area) => area.grades.includes(String(grade)))
        .forEach((area) => subjectSelect.append(option(area.name, area.name)));
      subjectSelect.disabled = !grade;
    }

    function updateCourseOptions(subject, grade) {
      courseSelect.replaceChildren(option("", subject ? "Select a course or curriculum page" : "Select an area first"));
      courseSelect.disabled = !subject || !grade;
      if (!subject || !grade) return;

      getCourseOptions(subject, grade).forEach((course) => {
        const item = option(course.value, course.label);
        item.dataset.url = course.url;
        item.dataset.key = course.key;
        courseSelect.append(item);
      });
      applyCourseSelection();
    }

    function getCourseOptions(subject, grade) {
      const area = curriculumAreas.find((item) => item.name === subject);
      if (!area) return [];
      const override = courseOverrides[`${subject}|${grade}`];
      if (override) {
        return override.map(([slug, label]) => ({
          value: slug,
          label,
          key: `${area.slug}|${grade}|${slug}`,
          url: `https://curriculum.gov.bc.ca/curriculum/${area.slug}/${grade}/${slug}`
        }));
      }
      const gradeLabel = grade === "K" ? "Kindergarten" : `Grade ${grade}`;
      return [{
        value: "core",
        label: `${subject} ${gradeLabel}`,
        key: `${area.slug}|${grade}|core`,
        url: `https://curriculum.gov.bc.ca/curriculum/${area.slug}/${grade.toLowerCase()}/core`
      }];
    }

    function applyCourseSelection() {
      const selected = courseSelect.selectedOptions[0];
      if (!selected || !selected.value) {
        standardsStatus.textContent = "Choose a grade, area, and course to load any standards currently built into this tool. Always verify against the official BC curriculum page linked above.";
        return;
      }

      const source = document.querySelector("#sourceUrl");
      source.value = selected.dataset.url || source.value;
      const standard = getEmbeddedStandard(selected.dataset.key);
      if (standard) {
        document.querySelector("#sourceUrl").value = standard.sourceUrl;
        document.querySelector("#sourceNote").value = standard.sourceNote;
        renderStandardsPicker(standard, selected.textContent);
        standardsStatus.textContent = `Loaded selectable standards for ${selected.textContent} from the official BC Curriculum page. Choose one or more items below; selections update the planning fields automatically.`;
      } else {
        hideStandardsPicker();
        standardsStatus.textContent = "This course link has been set from the official BC Curriculum navigation. Embedded standards are not loaded yet, so paste the Big Ideas, Curricular Competencies, and Content from the linked page.";
      }
    }

    function getEmbeddedStandard(key) {
      return embeddedStandards[key] || embeddedStandards[standardAliases[key]];
    }

    function clearLoadedStandards() {
      document.querySelector("#sourceUrl").value = "";
      document.querySelector("#sourceNote").value = "";
      document.querySelector("#bigIdeas").value = "";
      document.querySelector("#competencies").value = "";
      document.querySelector("#contentStandards").value = "";
      document.querySelector("#coreCompetencies").value = "";
      document.querySelector("#fppol").value = "";
      hideStandardsPicker();
      standardsStatus.textContent = "Choose a grade, area, and course to load any standards currently built into this tool. Always verify against the official BC curriculum page linked above.";
    }

    function renderStandardsPicker(standard, courseTitle = "Selected Curriculum") {
      standardsPickerContent.replaceChildren();
      const header = standardsPicker.querySelector(".curriculum-browser-header");
      if (header) header.remove();

      const browserHeader = document.createElement("div");
      browserHeader.className = "curriculum-browser-header";
      const courseHeading = document.createElement("h3");
      courseHeading.id = "standards-picker-title";
      courseHeading.textContent = courseTitle;
      const courseHint = document.createElement("p");
      courseHint.className = "hint";
      courseHint.textContent = "Select curriculum items below. The matching planning fields update immediately, and you can still edit the text afterward.";
      browserHeader.append(courseHeading, courseHint);
      standardsPicker.prepend(browserHeader);

      standardCategories.forEach((category) => {
        const items = standard[category.key] || [];
        if (!items.length) return;

        const section = document.createElement("section");
        section.className = "standards-category";
        section.dataset.category = category.key;
        section.setAttribute("aria-labelledby", `${category.key}-title`);

        const heading = document.createElement("h3");
        heading.id = `${category.key}-title`;
        heading.textContent = category.title;
        section.append(heading);

        if (category.subtitle) {
          const subtitle = document.createElement("p");
          subtitle.className = "category-subtitle";
          subtitle.textContent = category.subtitle;
          section.append(subtitle);
        }

        const actions = document.createElement("div");
        actions.className = "standards-actions";
        const applyButton = document.createElement("button");
        applyButton.type = "button";
        applyButton.textContent = `Refresh ${category.title}`;
        applyButton.addEventListener("click", () => applySelectedStandards(category));
        const selectAllButton = document.createElement("button");
        selectAllButton.type = "button";
        selectAllButton.textContent = "Select all";
        selectAllButton.addEventListener("click", () => setCategoryChecks(category, true));
        const clearButton = document.createElement("button");
        clearButton.type = "button";
        clearButton.textContent = "Clear";
        clearButton.addEventListener("click", () => setCategoryChecks(category, false));
        actions.append(applyButton, selectAllButton, clearButton);

        const list = document.createElement("div");
        list.className = "check-grid";
        if (category.key === "coreCompetencies") {
          renderCoreCompetencyCards(list, category, items);
        } else if (category.key === "fppl") {
          renderFpplItems(list, category, items);
        } else {
          items.forEach((item, index) => {
            const label = document.createElement("label");
            label.className = "check-label";
            const input = createStandardCheckbox(category, item, index);
            const span = document.createElement("span");
            span.textContent = item;
            label.append(input, span);
            list.append(label);
          });
        }

        section.append(actions, list);
        standardsPickerContent.append(section);
      });
      standardsPicker.classList.add("is-visible");
    }

    function renderFpplItems(list, category, items) {
      items.forEach((item, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "fppl-item";

        const label = document.createElement("label");
        label.className = "check-label";
        const input = createStandardCheckbox(category, item, index);
        const span = document.createElement("span");
        span.textContent = item;
        label.append(input, span);

        const reflection = document.createElement("label");
        reflection.className = "fppl-reflection";
        const textarea = document.createElement("textarea");
        textarea.className = "short-area";
        textarea.dataset.fpplReflection = item;
        textarea.placeholder = "How will this FPPL be meaningfully embedded into your unit / lesson?";
        textarea.addEventListener("input", () => applySelectedStandards(category, true));
        reflection.append(textarea);

        wrapper.append(label, reflection);
        list.append(wrapper);
      });
    }

    function renderCoreCompetencyCards(list, category, items) {
      items.forEach((item, index) => {
        const coreName = item.split(":")[0].trim();
        const card = document.createElement("div");
        card.className = "core-competency-card";

        const label = document.createElement("label");
        label.className = "check-label";
        const input = createStandardCheckbox(category, item, index);
        const span = document.createElement("span");
        span.textContent = item;
        label.append(input, span);

        const details = document.createElement("details");
        details.className = "core-detail";
        const summary = document.createElement("summary");
        summary.textContent = "Sub-competencies and profiles";
        details.append(summary, buildCoreDetails(coreName, category));

        card.append(label, details);
        list.append(card);
      });
    }

    function createStandardCheckbox(category, item, index) {
      const input = document.createElement("input");
      input.type = "checkbox";
      input.dataset.category = category.key;
      input.dataset.target = category.target;
      input.value = item;
      input.id = `${category.key}-${String(index).replace(/[^A-Za-z0-9_-]+/g, "-")}`;
      input.addEventListener("change", () => {
        if (category.key === "coreCompetencies") syncParentCoreCompetency(input);
        if (category.key === "fppl") toggleFpplReflection(input);
        applySelectedStandards(category, true);
      });
      return input;
    }

    function toggleFpplReflection(input) {
      const item = input.closest(".fppl-item");
      if (!item) return;
      item.classList.toggle("is-selected", input.checked);
      const textarea = item.querySelector("textarea");
      if (textarea && !input.checked) textarea.value = "";
    }

    function syncParentCoreCompetency(input) {
      const card = input.closest(".core-competency-card");
      const parent = card?.querySelector(":scope > .check-label input[data-category='coreCompetencies']");
      if (!card || !parent || parent === input) return;
      const hasSelectedProfiles = Boolean(card.querySelector(".profile-check input[data-category='coreCompetencies']:checked"));
      parent.checked = hasSelectedProfiles;
    }

    function buildCoreDetails(coreName, category) {
      const body = document.createElement("div");
      body.className = "core-detail-body";
      const subCompetencies = coreCompetencyDetails[coreName] || [];
      subCompetencies.forEach((subCompetency, index) => {
        const section = document.createElement("section");
        section.className = "sub-competency";
        const heading = document.createElement("h4");
        heading.className = "sub-competency-title";
        heading.textContent = subCompetency.title;

        const list = document.createElement("ol");
        list.className = "profile-list";
        subCompetency.profiles.forEach((profile, profileIndex) => {
          const item = document.createElement("li");
          const profileLabel = document.createElement("label");
          profileLabel.className = "profile-check";
          const profileInput = createStandardCheckbox(
            category,
            `${coreName}: ${subCompetency.title} - ${profile}`,
            `${coreName}-${index}-profile-${profileIndex}`
          );
          profileLabel.append(profileInput, document.createTextNode(profile));
          item.append(profileLabel);
          list.append(item);
        });
        section.append(heading, list);
        body.append(section);
      });
      return body;
    }

    function hideStandardsPicker() {
      standardsPicker.classList.remove("is-visible");
      const header = standardsPicker.querySelector(".curriculum-browser-header");
      if (header) header.remove();
      standardsPickerContent.replaceChildren();
    }

    function setCategoryChecks(category, checked) {
      standardsPickerContent
        .querySelectorAll(`input[data-category="${category.key}"]`)
        .forEach((input) => {
          input.checked = checked;
          if (category.key === "fppl") toggleFpplReflection(input);
        });
      applySelectedStandards(category, true);
    }

    function applySelectedStandards(category, quiet = false) {
      const selected = getSelectedStandardValues(category);
      const target = document.querySelector(`#${category.target}`);
      target.value = selected.join(category.key === "competencies" ? "\n\n" : "\n");
      if (!quiet) {
        statusBox.textContent = selected.length
          ? `Applied ${selected.length} selected item${selected.length === 1 ? "" : "s"} to ${category.title}.`
          : `No ${category.title} selected.`;
      }
      syncV2FromUnitFields();
      saveDraft();
    }

    function getSelectedStandardValues(category) {
      return [...standardsPickerContent.querySelectorAll(`input[data-category="${category.key}"]:checked`)]
        .map((input) => {
          if (category.key !== "fppl") return input.value;
          const reflection = input.closest(".fppl-item")?.querySelector("textarea")?.value.trim();
          return reflection
            ? `${input.value}\nHow this FPPL will be meaningfully embedded: ${reflection}`
            : `${input.value}\nHow this FPPL will be meaningfully embedded: To be completed.`;
        });
    }

    function option(value, label) {
      const item = document.createElement("option");
      item.value = value;
      item.textContent = label;
      return item;
    }

    function collect() {
      const data = {};
      fields.forEach((id) => {
        data[id] = document.querySelector(`#${id}`).value.trim();
      });
      checks.forEach(([id]) => {
        data[id] = document.querySelector(`#${id}`).checked;
      });
      data.v2Planning = {
        ...v2State,
        activeLessonId
      };
      return data;
    }

    function getUnitDataFromFields() {
      return {
        bigIdeas: document.querySelector("#bigIdeas").value,
        competencies: document.querySelector("#competencies").value,
        contentStandards: document.querySelector("#contentStandards").value,
        coreCompetencies: document.querySelector("#coreCompetencies").value,
        fppol: document.querySelector("#fppol").value
      };
    }

    function getOfficialSourceForReport() {
      const selectedKey = courseSelect.selectedOptions[0]?.dataset.key;
      const standard = getEmbeddedStandard(selectedKey) || {};
      return {
        bigIdeas: standard.bigIdeas || [],
        competencies: standard.competencies || [],
        contentStandards: standard.content || [],
        coreCompetencies: standard.coreCompetencies || [],
        fppol: standard.fppl || []
      };
    }

    function getV2ScheduleFromFields() {
      return {
        lessonCount: Number(v2LessonCount.value || 1),
        blocksPerLesson: Number(v2BlocksPerLesson.value || 1),
        minutesPerBlock: Number(v2MinutesPerBlock.value || 60)
      };
    }

    function syncV2ScheduleFromFields() {
      v2State = BCPlannerV2.updateSchedule(v2State, getV2ScheduleFromFields());
      v2LessonCount.value = String(v2State.schedule.lessonCount);
      v2BlocksPerLesson.value = String(v2State.schedule.blocksPerLesson);
      v2MinutesPerBlock.value = String(v2State.schedule.minutesPerBlock);
      if (!v2State.lessons.some((lesson) => lesson.id === activeLessonId)) activeLessonId = v2State.lessons[0].id;
    }

    function syncV2FromUnitFields() {
      v2State = BCPlannerV2.syncUnitElements(v2State, getUnitDataFromFields());
      if (!v2State.lessons.some((lesson) => lesson.id === activeLessonId)) activeLessonId = v2State.lessons[0].id;
      if (Number(v2LessonCount.value || 0) !== v2State.lessons.length) v2LessonCount.value = String(v2State.lessons.length);
      renderV2Workspace();
    }

    function renderV2Workspace() {
      if (!v2AssignmentMap || !v2LessonEditor || !v2CoverageReport) return;
      renderV2StructureSummary();
      renderV2Notices();
      renderV2Coach();
      renderV2SequenceFilters();
      renderV2LessonSequence();
      renderV2AssignmentMap();
      renderV2LessonEditor();
      renderV2CoverageReport();
    }

    function renderV2StructureSummary() {
      v2StructureSummary.replaceChildren();
      const totalBlocks = v2State.lessons.reduce((sum, lesson) => sum + (Number(lesson.blocks) || 0), 0);
      const totalMinutes = v2State.lessons.reduce((sum, lesson) => sum + ((Number(lesson.blocks) || 0) * (Number(lesson.minutesPerBlock) || 0)), 0);
      [
        ["Lessons", v2State.lessons.length],
        ["Instructional blocks", totalBlocks],
        ["Total instructional minutes", totalMinutes]
      ].forEach(([label, value]) => {
        const div = document.createElement("div");
        const strong = document.createElement("strong");
        strong.textContent = value;
        div.append(strong, document.createTextNode(label));
        v2StructureSummary.append(div);
      });
    }

    function renderV2SequenceFilters() {
      v2SequenceFilters.replaceChildren();
      const readiness = BCPlannerV2.buildReadinessReport(v2State);
      const pacing = BCPlannerV2.buildPacingReport(v2State);
      const options = [
        ["all", "All", v2State.lessons.length],
        ["attention", "Needs attention", readiness.needsAttention.length],
        ["ready", "Ready", readiness.ready.length],
        ["curriculum", "Needs curriculum", v2State.lessons.filter((lesson) => lessonNeedsCurriculum(lesson)).length],
        ["pacing", "Pacing issues", pacing.outliers.length]
      ];

      if (!options.some(([value]) => value === v2SequenceFilter)) v2SequenceFilter = "all";
      options.forEach(([value, label, count]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "secondary";
        button.setAttribute("aria-pressed", String(v2SequenceFilter === value));
        button.textContent = `${label} (${count})`;
        button.addEventListener("click", () => {
          v2SequenceFilter = value;
          renderV2SequenceFilters();
          renderV2LessonSequence();
        });
        v2SequenceFilters.append(button);
      });
      v2SequenceFilters.dataset.activeFilter = v2SequenceFilter;
      v2SequenceFilters.dataset.readyCount = String(readiness.ready.length);
      v2SequenceFilters.dataset.pacingCount = String(pacing.outliers.length);
      v2SequenceFilters.dataset.attentionCount = String(readiness.needsAttention.length);
      v2SequenceFilters.dataset.curriculumCount = String(options.find(([value]) => value === "curriculum")?.[2] || 0);
    }

    function lessonNeedsCurriculum(lesson) {
      return !BCPlannerV2.CATEGORY_ORDER.some((category) => (lesson.assigned[category] || []).length);
    }

    function lessonMatchesSequenceFilter(lesson, readinessStatus, pacingStatus) {
      if (v2SequenceFilter === "ready") return Boolean(readinessStatus?.ready);
      if (v2SequenceFilter === "attention") return !readinessStatus?.ready;
      if (v2SequenceFilter === "curriculum") return lessonNeedsCurriculum(lesson);
      if (v2SequenceFilter === "pacing") return pacingStatus?.status && pacingStatus.status !== "on pace";
      return true;
    }

    function renderV2LessonSequence() {
      v2LessonSequence.replaceChildren();
      const pacing = BCPlannerV2.buildPacingReport(v2State);
      const readiness = BCPlannerV2.buildReadinessReport(v2State);
      const pacingByLesson = Object.fromEntries(pacing.lessons.map((lesson) => [lesson.id, lesson]));
      const readinessByLesson = Object.fromEntries(readiness.lessons.map((lesson) => [lesson.id, lesson]));
      const timeline = document.createElement("div");
      timeline.className = "v2-timeline";
      const grid = document.createElement("div");
      grid.className = "v2-sequence-grid";
      let visibleCount = 0;
      v2State.lessons.forEach((lesson, index) => {
        const assignedCount = BCPlannerV2.CATEGORY_ORDER.reduce((sum, category) => sum + ((lesson.assigned[category] || []).length), 0);
        const readinessStatus = readinessByLesson[lesson.id];
        const pacingStatus = pacingByLesson[lesson.id];
        if (!lessonMatchesSequenceFilter(lesson, readinessStatus, pacingStatus)) return;
        visibleCount += 1;
        const minutes = (Number(lesson.blocks) || 0) * (Number(lesson.minutesPerBlock) || 0);
        timeline.append(v2TimelineStep(lesson, index, {
          assignedCount,
          minutes,
          pacingStatus,
          readinessStatus
        }));

        const card = document.createElement("button");
        card.type = "button";
        card.className = `v2-sequence-card${lesson.id === activeLessonId ? " is-active" : ""}`;
        card.setAttribute("aria-pressed", String(lesson.id === activeLessonId));
        card.addEventListener("click", () => {
          activeLessonId = lesson.id;
          renderV2Workspace();
          saveDraft();
        });

        const title = document.createElement("h4");
        title.textContent = lessonLabel(lesson, index);
        const meta = document.createElement("p");
        meta.className = "v2-card-meta";
        meta.textContent = `${lesson.blocks || 0} block${Number(lesson.blocks) === 1 ? "" : "s"} · ${minutes} minutes`;
        const focus = document.createElement("p");
        focus.className = "v2-card-meta";
        focus.textContent = lessonFocusText(lesson);

        const chips = document.createElement("div");
        chips.className = "v2-chip-row";
        chips.append(v2Chip(phaseLabel(lesson.phase), lesson.phase ? "is-phase" : "is-muted"));
        chips.append(v2Chip(`${assignedCount} curriculum link${assignedCount === 1 ? "" : "s"}`, assignedCount ? "" : "is-muted"));
        chips.append(readinessStatus?.ready ? v2Chip("Ready", "") : v2Chip("Needs attention", "is-warning"));
        if (pacingStatus?.status === "longer") chips.append(v2Chip(`${pacingStatus.difference} min longer`, "is-warning"));
        if (pacingStatus?.status === "shorter") chips.append(v2Chip(`${Math.abs(pacingStatus.difference)} min shorter`, "is-warning"));
        if (lesson.assessment?.trim()) chips.append(v2Chip("Assessment noted", ""));
        if (lesson.assessmentMode?.trim()) chips.append(v2Chip(lesson.assessmentMode, "is-muted"));
        if (lesson.successCriteria?.trim()) chips.append(v2Chip("Criteria set", ""));
        if (lesson.activities?.trim()) chips.append(v2Chip("Activities drafted", ""));
        if (hasLessonFlow(lesson)) chips.append(v2Chip("Flow drafted", ""));
        if (!assignedCount) chips.append(v2Chip("Needs curriculum", "is-warning"));
        if (!lesson.activities?.trim() && !lesson.goals?.trim()) chips.append(v2Chip("Needs lesson detail", "is-warning"));

        const coverage = document.createElement("div");
        coverage.className = "v2-chip-row";
        BCPlannerV2.CATEGORY_ORDER.forEach((category) => {
          const count = (lesson.assigned[category] || []).length;
          if (count) coverage.append(v2Chip(`${count} ${BCPlannerV2.CATEGORY_LABELS[category]}`, "is-muted"));
        });

        card.append(title, meta, focus, chips);
        if (coverage.children.length) card.append(coverage);
        grid.append(card);
      });
      if (!visibleCount) {
        const empty = document.createElement("p");
        empty.className = "v2-sequence-empty";
        empty.textContent = "No lessons match this filter. Choose All to return to the full unit sequence.";
        v2LessonSequence.append(empty);
        return;
      }
      v2LessonSequence.append(timeline, grid);
    }

    function v2TimelineStep(lesson, index, details) {
      const step = document.createElement("button");
      step.type = "button";
      step.className = `v2-timeline-step${lesson.id === activeLessonId ? " is-active" : ""}${details.readinessStatus?.ready ? "" : " is-warning"}`;
      step.setAttribute("aria-pressed", String(lesson.id === activeLessonId));
      step.addEventListener("click", () => {
        activeLessonId = lesson.id;
        renderV2Workspace();
        saveDraft();
      });

      const title = document.createElement("strong");
      title.textContent = `Lesson ${index + 1}`;
      const phase = document.createElement("span");
      phase.textContent = phaseLabel(lesson.phase);
      const timing = document.createElement("span");
      timing.textContent = `${details.minutes} minutes`;
      const links = document.createElement("span");
      links.textContent = `${details.assignedCount} curriculum link${details.assignedCount === 1 ? "" : "s"}`;
      const status = document.createElement("span");
      status.textContent = details.readinessStatus?.ready ? "Ready" : "Needs attention";
      const pacing = document.createElement("span");
      pacing.textContent = details.pacingStatus?.status === "on pace"
        ? "On pace"
        : `${details.pacingStatus?.status || "Pacing"} ${details.pacingStatus?.difference ? `(${details.pacingStatus.difference} min)` : ""}`;

      step.append(title, phase, timing, links, status, pacing);
      return step;
    }

    function lessonFocusText(lesson) {
      const preferred = [
        ...(lesson.assigned.bigIdeas || []),
        ...(lesson.assigned.contentStandards || []),
        ...(lesson.assigned.competencies || [])
      ];
      if (!preferred.length) return "Focus: not assigned yet";
      const first = preferred[0];
      return `Focus: ${first.length > 95 ? `${first.slice(0, 92)}...` : first}`;
    }

    function hasLessonFlow(lesson) {
      return Object.values(lesson.flow || {}).some((value) => String(value || "").trim());
    }

    function v2Chip(text, modifier) {
      const chip = document.createElement("span");
      chip.className = `v2-chip${modifier ? ` ${modifier}` : ""}`;
      chip.textContent = text;
      return chip;
    }

    function phaseLabel(value) {
      return value ? `${value} phase` : "Phase not set";
    }

    function renderV2Notices() {
      v2Notices.replaceChildren();
      const report = BCPlannerV2.buildCoverageReport(v2State, getOfficialSourceForReport());
      const pacing = BCPlannerV2.buildPacingReport(v2State);
      const readiness = BCPlannerV2.buildReadinessReport(v2State);
      const lessonsNeedingCurriculum = v2State.lessons.filter((lesson) => !BCPlannerV2.CATEGORY_ORDER.some((category) => (lesson.assigned[category] || []).length)).length;
      const lessonsNeedingDetail = v2State.lessons.filter((lesson) => !lesson.goals?.trim() && !lesson.activities?.trim()).length;
      const messages = [];
      messages.push(`${v2State.lessons.length} lesson${v2State.lessons.length === 1 ? "" : "s"} in this unit sequence.`);
      messages.push(`${readiness.ready.length} lesson${readiness.ready.length === 1 ? " is" : "s are"} ready enough to teach.`);
      messages.push(`${pacing.totalMinutes} total instructional minutes planned.`);
      if (pacing.outliers.length) messages.push(`${pacing.outliers.length} lesson${pacing.outliers.length === 1 ? " has" : "s have"} timing that differs from the unit default.`);
      messages.push(`${lessonsNeedingCurriculum} lesson${lessonsNeedingCurriculum === 1 ? "" : "s"} still need curriculum links.`);
      messages.push(`${lessonsNeedingDetail} lesson${lessonsNeedingDetail === 1 ? "" : "s"} still need learning goals or activity details.`);
      if (report.unassigned.length) messages.push(`${report.unassigned.length} unit item${report.unassigned.length === 1 ? " is" : "s are"} not assigned to a lesson yet.`);
      if (report.missing.length) messages.push(`${report.missing.length} official curriculum item${report.missing.length === 1 ? " is" : "s are"} not currently selected in the unit plan.`);
      if (report.possiblyUnderdeveloped.length) messages.push(`${report.possiblyUnderdeveloped.length} assigned item${report.possiblyUnderdeveloped.length === 1 ? " needs" : "s need"} more lesson detail.`);
      if (!report.unassigned.length && !lessonsNeedingCurriculum && !lessonsNeedingDetail) messages.push("Coverage map is current. Keep verifying selections against the linked official BC Curriculum page.");
      if (report.unassigned.length || lessonsNeedingDetail) messages.push("Next step: use Build connected sequence, then edit each lesson card for your class context.");
      else if (readiness.needsAttention.length) messages.push("Next step: open lessons marked Needs attention and add the missing planning pieces.");
      else if (pacing.outliers.length) messages.push("Next step: review pacing outliers and adjust blocks or minutes where needed.");
      messages.forEach((message) => {
        const div = document.createElement("div");
        div.className = "v2-notice";
        div.textContent = message;
        v2Notices.append(div);
      });
      v2State.notices = [];
    }

    function openV2PlanningTarget(action) {
      if (action.lessonId) {
        activeLessonId = action.lessonId;
        renderV2Workspace();
        document.querySelector("#v2-lesson-title")?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      const targetMap = {
        alignment: "#alignment",
        map: "#v2-map-title",
        export: "#export",
        report: "#v2-report-title"
      };
      const selector = targetMap[action.target] || "#unit-lesson-sync";
      const target = document.querySelector(selector);
      target?.closest("details")?.setAttribute("open", "");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderV2Coach() {
      v2CoachActions.replaceChildren();
      const actions = BCPlannerV2.buildActionPlan(v2State, getOfficialSourceForReport());
      actions.forEach((action) => {
        const item = document.createElement("article");
        item.className = "v2-action";

        const body = document.createElement("div");
        const priority = document.createElement("span");
        priority.className = `v2-action-priority is-${action.priority}`;
        priority.textContent = action.priority;
        const title = document.createElement("strong");
        title.textContent = action.title;
        const detail = document.createElement("p");
        detail.textContent = action.detail;
        body.append(priority, title, detail);

        const button = document.createElement("button");
        button.type = "button";
        button.className = "secondary";
        button.textContent = action.lessonId
          ? "Open lesson"
          : action.target === "export"
            ? "Review export"
            : action.target === "alignment"
              ? "Review alignment"
              : "Open map";
        button.addEventListener("click", () => openV2PlanningTarget(action));

        item.append(body, button);
        v2CoachActions.append(item);
      });
    }

    function renderV2AssignmentMap() {
      v2AssignmentMap.replaceChildren();
      const search = v2MapSearch.value.trim().toLowerCase();
      const statusFilter = v2MapStatus.value || "all";
      let totalItems = 0;
      let visibleItems = 0;

      BCPlannerV2.CATEGORY_ORDER.forEach((category) => {
        const items = v2State.unit[category] || [];
        if (!items.length) return;
        totalItems += items.length;

        const section = document.createElement("section");
        section.className = "v2-map-category";
        const heading = document.createElement("h4");
        heading.textContent = BCPlannerV2.CATEGORY_LABELS[category];
        section.append(heading);

        items.forEach((item) => {
          const assignedLessons = v2State.lessons
            .map((lesson, lessonIndex) => ({ lesson, lessonIndex }))
            .filter(({ lesson }) => lesson.assigned[category]?.includes(item));
          const isAssigned = assignedLessons.length > 0;
          if (statusFilter === "assigned" && !isAssigned) return;
          if (statusFilter === "unassigned" && isAssigned) return;
          const haystack = [
            BCPlannerV2.CATEGORY_LABELS[category],
            item,
            ...assignedLessons.map(({ lesson, lessonIndex }) => lessonLabel(lesson, lessonIndex))
          ].join(" ").toLowerCase();
          if (search && !haystack.includes(search)) return;

          const row = document.createElement("div");
          row.className = "v2-element-row";
          const title = document.createElement("div");
          title.className = "v2-element-title";
          title.textContent = item;
          const checks = document.createElement("div");
          checks.className = "v2-lesson-checks";

          v2State.lessons.forEach((lesson, lessonIndex) => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "checkbox";
            input.checked = lesson.assigned[category]?.includes(item) || false;
            input.addEventListener("change", () => {
              const selectedLessons = v2State.lessons
                .filter((candidate) => candidate.id === lesson.id ? input.checked : candidate.assigned[category]?.includes(item))
                .map((candidate) => candidate.id);
              v2State = BCPlannerV2.assignElementToLessons(v2State, category, item, selectedLessons);
              renderV2Workspace();
              saveDraft();
            });
            label.append(input, document.createTextNode(lessonLabel(lesson, lessonIndex)));
            checks.append(label);
          });

          row.append(title, checks);
          section.append(row);
          visibleItems += 1;
        });
        if (section.querySelector(".v2-element-row")) v2AssignmentMap.append(section);
      });

      if (!totalItems) {
        const empty = document.createElement("p");
        empty.className = "hint";
        empty.textContent = "Select or paste BC curriculum items above to start assigning standards to lessons.";
        v2AssignmentMap.append(empty);
      } else if (!visibleItems) {
        const empty = document.createElement("p");
        empty.className = "hint";
        empty.textContent = "No selected curriculum items match the current map filters.";
        v2AssignmentMap.append(empty);
      }
    }

    function lessonLabel(lesson, index) {
      return `Lesson ${index + 1}: ${lesson.title || `Lesson ${index + 1}`}`;
    }

    function coverageLessonLabel(lesson) {
      return `Lesson ${lesson.order || ""}: ${lesson.title || "Untitled lesson"}`.replace("Lesson : ", "Lesson ");
    }

    function renderV2LessonEditor() {
      v2LessonEditor.replaceChildren();
      const lesson = v2State.lessons.find((item) => item.id === activeLessonId) || v2State.lessons[0];
      activeLessonId = lesson.id;
      const lessonIndex = v2State.lessons.findIndex((item) => item.id === lesson.id);
      const activeHeader = document.createElement("div");
      activeHeader.className = "v2-active-editor";
      const activeTitle = document.createElement("h4");
      activeTitle.textContent = `Editing: ${lessonLabel(lesson, lessonIndex)}`;
      const activeMeta = document.createElement("p");
      activeMeta.textContent = `Lesson ${lessonIndex + 1} of ${v2State.lessons.length}. Use the unit sequence cards above to switch lessons.`;
      activeHeader.append(activeTitle, activeMeta);

      const sequenceActions = document.createElement("div");
      sequenceActions.className = "v2-sequence-actions";
      const moveEarlier = document.createElement("button");
      moveEarlier.type = "button";
      moveEarlier.className = "secondary";
      moveEarlier.textContent = "Move earlier";
      moveEarlier.disabled = lessonIndex <= 0;
      moveEarlier.addEventListener("click", () => {
        v2State = BCPlannerV2.moveLesson(v2State, lesson.id, "earlier");
        const message = v2State.notices.at(-1) || "Lesson moved earlier.";
        renderV2Workspace();
        saveDraft();
        statusBox.textContent = message;
      });

      const moveLater = document.createElement("button");
      moveLater.type = "button";
      moveLater.className = "secondary";
      moveLater.textContent = "Move later";
      moveLater.disabled = lessonIndex >= v2State.lessons.length - 1;
      moveLater.addEventListener("click", () => {
        v2State = BCPlannerV2.moveLesson(v2State, lesson.id, "later");
        const message = v2State.notices.at(-1) || "Lesson moved later.";
        renderV2Workspace();
        saveDraft();
        statusBox.textContent = message;
      });

      const duplicate = document.createElement("button");
      duplicate.type = "button";
      duplicate.className = "secondary";
      duplicate.textContent = "Duplicate lesson";
      duplicate.addEventListener("click", () => {
        const existingIds = new Set(v2State.lessons.map((item) => item.id));
        v2State = BCPlannerV2.duplicateLesson(v2State, lesson.id);
        const newLesson = v2State.lessons.find((item) => !existingIds.has(item.id));
        if (newLesson) activeLessonId = newLesson.id;
        v2LessonCount.value = String(v2State.lessons.length);
        const message = v2State.notices.at(-1) || "Lesson duplicated.";
        renderV2Workspace();
        saveDraft();
        statusBox.textContent = message;
      });

      const copyStructure = document.createElement("button");
      copyStructure.type = "button";
      copyStructure.className = "secondary";
      copyStructure.textContent = "Copy structure to blank lessons";
      copyStructure.disabled = v2State.lessons.length <= 1;
      copyStructure.addEventListener("click", () => {
        v2State = BCPlannerV2.copyLessonStructure(v2State, lesson.id);
        const message = v2State.notices.at(-1) || "Lesson structure copied.";
        renderV2Workspace();
        saveDraft();
        statusBox.textContent = message;
      });

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "warning";
      remove.textContent = "Remove lesson";
      remove.disabled = v2State.lessons.length <= 1;
      remove.addEventListener("click", () => {
        const currentIndex = v2State.lessons.findIndex((item) => item.id === lesson.id);
        v2State = BCPlannerV2.removeLesson(v2State, lesson.id);
        const nextIndex = Math.min(currentIndex, v2State.lessons.length - 1);
        activeLessonId = v2State.lessons[nextIndex]?.id || v2State.lessons[0].id;
        v2LessonCount.value = String(v2State.lessons.length);
        const message = v2State.notices.at(-1) || "Lesson removed.";
        renderV2Workspace();
        saveDraft();
        statusBox.textContent = message;
      });
      sequenceActions.append(moveEarlier, moveLater, duplicate, copyStructure, remove);

      const editorNav = document.createElement("div");
      editorNav.className = "v2-editor-nav";
      editorNav.setAttribute("aria-label", "Lesson editor sections");
      const addEditorNavButton = (label, target) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "secondary";
        button.textContent = label;
        button.addEventListener("click", () => target.scrollIntoView({ behavior: "smooth", block: "start" }));
        editorNav.append(button);
      };

      const card = document.createElement("section");
      card.className = "v2-lesson-card";
      const makeLessonField = (key, labelText, type = "textarea") => {
        const label = document.createElement("label");
        if (type === "textarea") label.className = "full";
        const field = type === "textarea" ? document.createElement("textarea") : document.createElement("input");
        if (type === "number") {
          field.type = "number";
          field.min = "1";
        }
        if (type === "textarea") field.className = "short-area";
        field.value = lesson[key] || "";
        field.addEventListener("input", () => {
          const value = type === "number" ? Math.max(1, Number(field.value) || 1) : field.value;
          v2State = BCPlannerV2.updateLesson(v2State, lesson.id, { [key]: value });
          if (type === "number") {
            renderV2StructureSummary();
            renderV2Notices();
            renderV2LessonSequence();
          }
          saveDraft();
        });
        if (key === "title") field.addEventListener("change", renderV2Workspace);
        label.append(document.createTextNode(labelText), field);
        return label;
      };

      const overviewSection = document.createElement("section");
      overviewSection.className = "v2-mini-list";
      const overviewHeading = document.createElement("h4");
      overviewHeading.textContent = "Lesson overview";
      const overviewGrid = document.createElement("div");
      overviewGrid.className = "v2-lesson-grid";

      const phaseLabelEl = document.createElement("label");
      const phaseSelect = document.createElement("select");
      [
        ["", "Select a phase"],
        ["Launch", "Launch"],
        ["Build", "Build"],
        ["Apply", "Apply"],
        ["Consolidate", "Consolidate"]
      ].forEach(([value, labelText]) => phaseSelect.append(option(value, labelText)));
      phaseSelect.value = lesson.phase || "";
      phaseSelect.addEventListener("change", () => {
        v2State = BCPlannerV2.updateLesson(v2State, lesson.id, { phase: phaseSelect.value });
        renderV2LessonSequence();
        saveDraft();
      });
      phaseLabelEl.append(document.createTextNode("Lesson phase in the unit arc"), phaseSelect);
      overviewGrid.append(phaseLabelEl);

      [
        ["title", "Lesson title", "input"],
        ["sequence", "When does this lesson happen in the unit?", "input"],
        ["blocks", "Blocks for this lesson", "number"],
        ["minutesPerBlock", "Minutes per block", "number"],
        ["goals", "Lesson learning goals", "textarea"],
        ["activities", "Learning activities", "textarea"]
      ].forEach(([key, labelText, type]) => overviewGrid.append(makeLessonField(key, labelText, type)));
      overviewSection.append(overviewHeading, overviewGrid);

      const assessmentSection = document.createElement("section");
      assessmentSection.className = "full v2-mini-list";
      const assessmentHeading = document.createElement("h4");
      assessmentHeading.textContent = "Assessment plan";
      const assessmentHint = document.createElement("p");
      assessmentHint.className = "hint";
      assessmentHint.textContent = "Name the evidence type, then make the success criteria visible for students.";
      const assessmentGrid = document.createElement("div");
      assessmentGrid.className = "v2-flow-grid";

      const modeLabel = document.createElement("label");
      const modeSelect = document.createElement("select");
      [
        ["", "Select evidence type"],
        ["Observation", "Observation"],
        ["Conversation", "Conversation"],
        ["Product", "Product"],
        ["Observation / Conversation", "Observation / Conversation"],
        ["Observation / Product", "Observation / Product"],
        ["Conversation / Product", "Conversation / Product"],
        ["Observation / Conversation / Product", "Observation / Conversation / Product"]
      ].forEach(([value, labelText]) => modeSelect.append(option(value, labelText)));
      modeSelect.value = lesson.assessmentMode || "";
      modeSelect.addEventListener("change", () => {
        v2State = BCPlannerV2.updateLesson(v2State, lesson.id, { assessmentMode: modeSelect.value });
        renderV2LessonSequence();
        renderV2Notices();
        saveDraft();
      });
      modeLabel.append(document.createTextNode("Evidence type"), modeSelect);

      const criteriaLabel = document.createElement("label");
      criteriaLabel.className = "full";
      const criteriaField = document.createElement("textarea");
      criteriaField.className = "short-area";
      criteriaField.value = lesson.successCriteria || "";
      criteriaField.addEventListener("input", () => {
        v2State = BCPlannerV2.updateLesson(v2State, lesson.id, { successCriteria: criteriaField.value });
        renderV2LessonSequence();
        renderV2Notices();
        saveDraft();
      });
      criteriaLabel.append(document.createTextNode("Lesson success criteria"), criteriaField);

      const evidenceLabel = document.createElement("label");
      evidenceLabel.className = "full";
      const evidenceField = document.createElement("textarea");
      evidenceField.className = "short-area";
      evidenceField.value = lesson.assessment || "";
      evidenceField.addEventListener("input", () => {
        v2State = BCPlannerV2.updateLesson(v2State, lesson.id, { assessment: evidenceField.value });
        renderV2LessonSequence();
        renderV2Notices();
        saveDraft();
      });
      evidenceLabel.append(document.createTextNode("Assessment evidence"), evidenceField);

      assessmentGrid.append(modeLabel, criteriaLabel, evidenceLabel);
      assessmentSection.append(assessmentHeading, assessmentHint, assessmentGrid);

      const flowSection = document.createElement("section");
      flowSection.className = "full v2-mini-list";
      const flowHeading = document.createElement("h4");
      flowHeading.textContent = "Lesson flow";
      const flowHint = document.createElement("p");
      flowHint.className = "hint";
      flowHint.textContent = "Use these prompts to make the lesson sequence visible without overloading the main activity field.";
      const flowGrid = document.createElement("div");
      flowGrid.className = "v2-flow-grid";
      [
        ["opening", "Opening / connection"],
        ["experience", "Instructional steps"],
        ["reflection", "Student reflection / next step"]
      ].forEach(([key, labelText]) => {
        const label = document.createElement("label");
        const field = document.createElement("textarea");
        field.className = "short-area";
        field.value = lesson.flow?.[key] || "";
        field.addEventListener("input", () => {
          const flow = { ...(lesson.flow || {}), [key]: field.value };
          v2State = BCPlannerV2.updateLesson(v2State, lesson.id, { flow });
          renderV2LessonSequence();
          saveDraft();
        });
        label.append(document.createTextNode(labelText), field);
        flowGrid.append(label);
      });
      flowSection.append(flowHeading, flowHint, flowGrid);

      const resourcesSection = document.createElement("section");
      resourcesSection.className = "full v2-mini-list";
      const resourcesHeading = document.createElement("h4");
      resourcesHeading.textContent = "Resources";
      const resourcesGrid = document.createElement("div");
      resourcesGrid.className = "v2-flow-grid";
      [
        ["materials", "Materials and resources", "textarea"],
        ["notes", "Teacher notes", "textarea"]
      ].forEach(([key, labelText, type]) => resourcesGrid.append(makeLessonField(key, labelText, type)));
      resourcesSection.append(resourcesHeading, resourcesGrid);

      const assigned = document.createElement("div");
      assigned.className = "full v2-mini-list";
      const assignedHeading = document.createElement("h4");
      assignedHeading.textContent = "Assigned curriculum";
      assigned.append(assignedHeading);
      BCPlannerV2.CATEGORY_ORDER.forEach((category) => {
        const items = v2State.unit[category] || [];
        if (!items.length) return;
        const details = document.createElement("details");
        details.open = Boolean((lesson.assigned[category] || []).length);
        const summary = document.createElement("summary");
        summary.textContent = BCPlannerV2.CATEGORY_LABELS[category];
        details.append(summary);
        items.forEach((item) => {
          const label = document.createElement("label");
          const input = document.createElement("input");
          input.type = "checkbox";
          input.checked = lesson.assigned[category]?.includes(item) || false;
          input.addEventListener("change", () => {
            v2State = BCPlannerV2.setLessonElement(v2State, lesson.id, category, item, input.checked);
            renderV2Workspace();
            saveDraft();
          });
          label.append(input, document.createTextNode(item));
          details.append(label);
        });
        assigned.append(details);
      });

      const addBack = document.createElement("div");
      addBack.className = "full v2-mini-list";
      const addHeading = document.createElement("h4");
      addHeading.textContent = "Add lesson-level curriculum back to the unit plan";
      const addHint = document.createElement("p");
      addHint.className = "hint";
      addHint.textContent = "Choose from official BC curriculum items that are not yet in the unit plan. The selected item will be added to the unit alignment fields and assigned to this lesson plan.";
      addBack.append(addHeading, addHint);
      const sourceItems = getOfficialSourceForReport();
      BCPlannerV2.CATEGORY_ORDER.forEach((category) => {
        const row = document.createElement("div");
        row.className = "v2-add-row";
        const label = document.createElement("label");
        const select = document.createElement("select");
        const available = (sourceItems[category] || []).filter((item) => !(v2State.unit[category] || []).includes(item));
        select.append(option("", available.length ? `Choose ${BCPlannerV2.CATEGORY_LABELS[category]} item` : "No additional official items available"));
        available.forEach((item) => select.append(option(item, item)));
        select.disabled = !available.length;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "secondary";
        button.textContent = "Add";
        button.disabled = !available.length;
        button.addEventListener("click", () => {
          if (!select.value) return;
          v2State = BCPlannerV2.addLessonElementToUnit(v2State, lesson.id, category, select.value);
          updateUnitFieldsFromV2State();
          renderV2Workspace();
          saveDraft();
          statusBox.textContent = `${BCPlannerV2.CATEGORY_LABELS[category]} item added to the unit alignment fields and assigned to ${lesson.title}'s lesson plan.`;
        });
        label.append(document.createTextNode(BCPlannerV2.CATEGORY_LABELS[category]), select);
        row.append(label, button);
        addBack.append(row);
      });

      card.replaceChildren(overviewSection, flowSection, assessmentSection, assigned, addBack, resourcesSection);

      addEditorNavButton("Overview", overviewSection);
      addEditorNavButton("Flow", flowSection);
      addEditorNavButton("Assessment", assessmentSection);
      addEditorNavButton("Curriculum", assigned);
      addEditorNavButton("Resources", resourcesSection);

      v2LessonEditor.append(activeHeader, sequenceActions, editorNav, card);
    }

    function updateUnitFieldsFromV2State() {
      document.querySelector("#bigIdeas").value = (v2State.unit.bigIdeas || []).join("\n");
      document.querySelector("#competencies").value = (v2State.unit.competencies || []).join("\n\n");
      document.querySelector("#contentStandards").value = (v2State.unit.contentStandards || []).join("\n");
      document.querySelector("#coreCompetencies").value = (v2State.unit.coreCompetencies || []).join("\n");
      document.querySelector("#fppol").value = (v2State.unit.fppol || []).join("\n");
    }

    function renderV2CoverageReport() {
      v2CoverageReport.replaceChildren();
      const report = BCPlannerV2.buildCoverageReport(v2State, getOfficialSourceForReport());
      const summary = document.createElement("div");
      summary.className = "v2-report-section";
      summary.append(
        v2Badge("covered", `${report.covered.length} covered`),
        v2Badge("unassigned", `${report.unassigned.length} unassigned`),
        v2Badge("missing", `${report.missing.length} missing from unit`),
        v2Badge("inconsistent", `${report.inconsistent.length} inconsistent`)
      );
      v2CoverageReport.append(summary);

      const table = document.createElement("table");
      table.className = "v2-report-table";
      const caption = document.createElement("caption");
      caption.textContent = "Curriculum coverage by selected official BC curriculum element";
      table.append(caption);
      const thead = document.createElement("thead");
      thead.innerHTML = "<tr><th scope=\"col\">Status</th><th scope=\"col\">Curriculum element</th><th scope=\"col\">Lessons</th></tr>";
      const tbody = document.createElement("tbody");
      [...report.covered, ...report.unassigned, ...report.missing, ...report.inconsistent].forEach((row) => {
        const tr = document.createElement("tr");
        const status = document.createElement("td");
        status.append(v2Badge(row.status, row.status));
        const element = document.createElement("td");
        element.textContent = `${row.categoryLabel}: ${row.value}`;
        const lessons = document.createElement("td");
        lessons.textContent = row.lessons.length ? row.lessons.map(coverageLessonLabel).join(", ") : "Not assigned";
        tr.append(status, element, lessons);
        tbody.append(tr);
      });
      table.append(thead, tbody);
      v2CoverageReport.append(table);
    }

    function v2Badge(status, text) {
      const badge = document.createElement("span");
      badge.className = `v2-badge ${String(status).replace(/\s+/g, "-")}`;
      badge.textContent = text;
      return badge;
    }

    function renderDocument() {
      const data = collect();
      const template = document.querySelector("#doc-template").content.cloneNode(true);
      template.querySelector("#doc-heading").textContent = `${data.title || "Untitled plan"}: ${data.planType || "Plan draft"}`;
      addDefinitionList(template.querySelector("#doc-context"), [
        ["Teacher Candidate Name", data.teacherCandidate || "To be completed."],
        ["Date", data.planDate ? readableDate(data.planDate) : "To be completed."],
        ["Practicum School", data.practicumSchool || "To be completed."],
        ["Plan type", data.planType || "To be completed."],
        ["Grade level", data.grade ? (data.grade === "K" ? "Kindergarten" : `Grade ${data.grade}`) : "To be completed."],
        ["Subject Area", data.subject || "To be completed."],
        ["Course or curriculum page", data.course ? (courseSelect.selectedOptions[0]?.textContent || data.course) : "To be completed."],
        ["Duration", data.duration || "To be completed."],
        ["Learner context", data.learners || "To be completed."]
      ]);
      const source = template.querySelector("#doc-source");
      if (data.sourceUrl) {
        const sourceLink = document.createElement("a");
        sourceLink.href = data.sourceUrl;
        sourceLink.target = "_blank";
        sourceLink.rel = "noopener";
        sourceLink.textContent = data.sourceUrl;
        source.append("Curriculum source: ", sourceLink, `. Accessed ${readableDate(data.accessDate)}.`);
      } else {
        source.textContent = "Curriculum source: To be completed.";
      }
      if (data.sourceNote) source.append(` ${data.sourceNote}`);
      addRows(template.querySelector("#doc-alignment"), [
        ["Big Ideas / Understand", data.bigIdeas],
        ["Curricular Competencies / Do", data.competencies],
        ["Content / Know", data.contentStandards],
        ["Core Competencies", data.coreCompetencies || "To be completed."],
        ["First Peoples Principles of Learning", data.fppol || "Consider authentic, respectful connections where appropriate."]
      ]);
      addV2DocumentSections(template.querySelector("#doc-sync"));
      addAccessibility(template.querySelector("#doc-access"), data);
      addSections(template.querySelector("#doc-other"), [
        ["Other considerations", data.otherConsiderations || "To be completed."]
      ]);
      preview.className = "";
      preview.replaceChildren(template);
    }

    function addDefinitionList(list, items) {
      items.forEach(([term, description]) => {
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        dt.textContent = term;
        dd.textContent = description;
        list.append(dt, dd);
      });
    }

    function addRows(body, rows) {
      rows.forEach(([label, value]) => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const td = document.createElement("td");
        th.scope = "row";
        th.textContent = label;
        td.innerHTML = paragraphs(value);
        tr.append(th, td);
        body.append(tr);
      });
    }

    function addSections(container, sections) {
      sections.forEach(([heading, value]) => {
        const section = document.createElement("section");
        const h3 = document.createElement("h3");
        const div = document.createElement("div");
        h3.textContent = heading;
        div.innerHTML = paragraphs(value);
        section.append(h3, div);
        container.append(section);
      });
    }

    function addAccessibility(container, data) {
      addSections(container, [
        ["Universal Design for Learning and accommodations", data.udl || "To be completed."],
        ["Accessible document notes", data.accessibleDocNotes || "Before sharing, run an accessibility checker, confirm heading order, verify link text, provide alt text, and export to a tagged PDF if PDF is required."]
      ]);
      const h3 = document.createElement("h3");
      h3.textContent = "Accessibility checklist";
      const ul = document.createElement("ul");
      checks.forEach(([id, label]) => {
        const li = document.createElement("li");
        li.textContent = `${data[id] ? "Complete" : "Needs attention"}: ${label}`;
        ul.append(li);
      });
      container.append(h3, ul);
    }

    function addV2DocumentSections(container) {
      const pacing = BCPlannerV2.buildPacingReport(v2State);
      const readiness = BCPlannerV2.buildReadinessReport(v2State);
      const totalBlocks = v2State.lessons.reduce((sum, lesson) => sum + (Number(lesson.blocks) || 0), 0);
      addDefinitionList(container.appendChild(document.createElement("dl")), [
        ["Number of lessons", String(v2State.lessons.length)],
        ["Instructional blocks", String(totalBlocks)],
        ["Total instructional minutes", String(pacing.totalMinutes)],
        ["Default lesson length", `${pacing.defaultMinutes} minutes`],
        ["Pacing notes", pacing.outliers.length ? `${pacing.outliers.length} lesson(s) differ from the unit default.` : "All lessons match the unit default timing."],
        ["Lesson readiness", `${readiness.ready.length} ready; ${readiness.needsAttention.length} need attention.`]
      ]);

      addV2LessonSummaryTable(container, pacing);

      const lessonSections = v2State.lessons.map((lesson, index) => {
        const flow = lessonFlowText(lesson);
        const assigned = BCPlannerV2.CATEGORY_ORDER.map((category) => {
          const items = lesson.assigned[category] || [];
          return items.length ? `${BCPlannerV2.CATEGORY_LABELS[category]}: ${items.join("; ")}` : "";
        }).filter(Boolean).join("\n");
        return [
          lessonLabel(lesson, index),
          [
            lesson.phase ? `Phase in unit arc: ${lesson.phase}` : "Phase in unit arc: To be completed.",
            lesson.sequence ? `Placement in unit: ${lesson.sequence}` : "Placement in unit: To be completed.",
            `Timing: ${lesson.blocks || "To be completed."} block(s), ${lesson.minutesPerBlock || "To be completed."} minutes per block.`,
            lesson.goals ? `Learning goals: ${lesson.goals}` : "Learning goals: To be completed.",
            lesson.activities ? `Learning activities: ${lesson.activities}` : "Learning activities: To be completed.",
            flow,
            lesson.assessmentMode ? `Assessment evidence type: ${lesson.assessmentMode}` : "Assessment evidence type: To be completed.",
            lesson.successCriteria ? `Lesson success criteria: ${lesson.successCriteria}` : "Lesson success criteria: To be completed.",
            lesson.assessment ? `Assessment evidence: ${lesson.assessment}` : "Assessment evidence: To be completed.",
            assigned ? `Assigned curriculum: ${assigned}` : "Assigned curriculum: To be completed."
          ].join("\n\n")
        ];
      });
      addSections(container, lessonSections);

      const report = BCPlannerV2.buildCoverageReport(v2State, getOfficialSourceForReport());
      addV2CoverageSummary(container, report);
      const h3 = document.createElement("h3");
      h3.textContent = "Final curriculum coverage report";
      const table = document.createElement("table");
      const caption = document.createElement("caption");
      caption.textContent = "Coverage status for selected and official BC curriculum elements";
      const thead = document.createElement("thead");
      thead.innerHTML = "<tr><th scope=\"col\">Status</th><th scope=\"col\">Curriculum element</th><th scope=\"col\">Lesson placement</th></tr>";
      const tbody = document.createElement("tbody");
      [...report.covered, ...report.unassigned, ...report.missing, ...report.inconsistent].forEach((row) => {
        const tr = document.createElement("tr");
        const status = document.createElement("td");
        const element = document.createElement("td");
        const lessons = document.createElement("td");
        status.textContent = row.status;
        element.textContent = `${row.categoryLabel}: ${row.value}`;
        lessons.textContent = row.lessons.length ? row.lessons.map(coverageLessonLabel).join(", ") : "Not assigned";
        tr.append(status, element, lessons);
        tbody.append(tr);
      });
      table.append(caption, thead, tbody);
      container.append(h3, table);
    }

    function lessonFlowText(lesson) {
      const flow = lesson.flow || {};
      return [
        ["Opening / connection", flow.opening],
        ["Instructional steps", flow.experience],
        ["Student reflection / next step", flow.reflection]
      ]
        .map(([label, value]) => `${label}: ${value || "To be completed."}`)
        .join("\n");
    }

    function addV2LessonSummaryTable(container, pacing) {
      const h3 = document.createElement("h3");
      h3.textContent = "Lesson sequence overview";
      const table = document.createElement("table");
      const caption = document.createElement("caption");
      caption.textContent = "Connected lesson sequence with phase, timing, focus, assessment, and curriculum-link counts";
      const thead = document.createElement("thead");
      thead.innerHTML = "<tr><th scope=\"col\">Lesson</th><th scope=\"col\">Phase</th><th scope=\"col\">Timing</th><th scope=\"col\">Focus</th><th scope=\"col\">Assessment checkpoint</th><th scope=\"col\">Curriculum links</th><th scope=\"col\">Readiness</th><th scope=\"col\">Pacing</th></tr>";
      const tbody = document.createElement("tbody");
      const pacingById = Object.fromEntries(pacing.lessons.map((lesson) => [lesson.id, lesson]));
      const readinessById = Object.fromEntries(BCPlannerV2.buildReadinessReport(v2State).lessons.map((lesson) => [lesson.id, lesson]));
      v2State.lessons.forEach((lesson, index) => {
        const assignedCount = BCPlannerV2.CATEGORY_ORDER.reduce((sum, category) => sum + ((lesson.assigned[category] || []).length), 0);
        const timing = `${lesson.blocks || "To be completed."} block(s), ${lesson.minutesPerBlock || "To be completed."} minutes per block`;
        const pacingRow = pacingById[lesson.id];
        const tr = document.createElement("tr");
        [
          lessonLabel(lesson, index),
          lesson.phase || "To be completed.",
          timing,
          lessonFocusText(lesson).replace(/^Focus: /, ""),
          [lesson.assessmentMode, lesson.assessment].filter(Boolean).join(": ") || "To be completed.",
          String(assignedCount),
          readinessById[lesson.id]?.ready ? "Ready" : `Needs: ${readinessById[lesson.id]?.missing.join(", ") || "review"}`,
          pacingRow?.status === "on pace" ? "On pace" : `${pacingRow?.status || "Not calculated"} (${pacingRow?.difference || 0} minutes)`
        ].forEach((value, cellIndex) => {
          const cell = cellIndex === 0 ? document.createElement("th") : document.createElement("td");
          if (cellIndex === 0) cell.scope = "row";
          cell.textContent = value;
          tr.append(cell);
        });
        tbody.append(tr);
      });
      table.append(caption, thead, tbody);
      container.append(h3, table);
    }

    function addV2CoverageSummary(container, report) {
      const h3 = document.createElement("h3");
      h3.textContent = "Coverage summary";
      const table = document.createElement("table");
      const caption = document.createElement("caption");
      caption.textContent = "Summary counts for curriculum coverage status";
      const thead = document.createElement("thead");
      thead.innerHTML = "<tr><th scope=\"col\">Covered</th><th scope=\"col\">Unassigned</th><th scope=\"col\">Missing from unit</th><th scope=\"col\">Inconsistent</th><th scope=\"col\">Possibly underdeveloped</th></tr>";
      const tbody = document.createElement("tbody");
      const tr = document.createElement("tr");
      [report.covered.length, report.unassigned.length, report.missing.length, report.inconsistent.length, report.possiblyUnderdeveloped.length].forEach((value) => {
        const td = document.createElement("td");
        td.textContent = String(value);
        tr.append(td);
      });
      tbody.append(tr);
      table.append(caption, thead, tbody);
      container.append(h3, table);
    }

    function paragraphs(value) {
      return escapeHtml(value || "To be completed.")
        .split(/\n{2,}/)
        .map((part) => `<p>${part.replace(/\n/g, "<br>")}</p>`)
        .join("");
    }

    function escapeHtml(value) {
      return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function readableDate(value) {
      if (!value) return "date not recorded";
      return new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${value}T12:00:00`));
    }

    function slug(value) {
      return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "bc-curriculum-plan";
    }

    function printDocument(html) {
      let frame = document.querySelector("#printFrame");
      if (frame) frame.remove();

      frame = document.createElement("iframe");
      frame.id = "printFrame";
      frame.title = "Print-ready BC curriculum plan";
      frame.style.position = "fixed";
      frame.style.right = "0";
      frame.style.bottom = "0";
      frame.style.width = "1px";
      frame.style.height = "1px";
      frame.style.border = "0";
      frame.style.opacity = "0";
      frame.setAttribute("aria-hidden", "true");
      document.body.append(frame);

      const doc = frame.contentDocument || frame.contentWindow.document;
      doc.open();
      doc.write(html);
      doc.close();

      statusBox.textContent = "Opening print dialog. Choose Save as PDF as the destination.";
      setTimeout(() => {
        try {
          frame.contentWindow.focus();
          frame.contentWindow.print();
        } catch (error) {
          statusBox.textContent = "The browser could not open the print dialog. Use Download HTML document, then print that file to PDF.";
        }
      }, 250);
    }

    function buildStandaloneDocument(content, title, autoPrint = false) {
      const printControls = autoPrint ? `
  <div class="print-actions" aria-label="Print controls">
    <button type="button" onclick="window.print()">Print or save as PDF</button>
    <p>In the print dialog, choose Save as PDF as the destination.</p>
  </div>` : "";
      const printScript = autoPrint ? `
  <script>
    window.addEventListener("load", () => {
      window.focus();
      setTimeout(() => window.print(), 250);
    });
  <\/script>` : "";
      return `<!doctype html>
<html lang="en-CA">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <style>
    body { max-width: 920px; margin: 32px auto; padding: 0 20px; color: #002145; font-family: Whitney, Arial, "Open Sans", sans-serif; line-height: 1.55; }
    h1, h2, h3 { line-height: 1.2; letter-spacing: 0; }
    a { color: #0a4f40; text-decoration-thickness: 0.12em; text-underline-offset: 0.18em; }
    button { min-height: 42px; border: 1px solid #0f6b55; border-radius: 6px; padding: 9px 13px; background: #0f6b55; color: #fff; font: inherit; font-weight: 800; cursor: pointer; }
    button:focus-visible { outline: 3px solid #174ea6; outline-offset: 3px; }
    .print-actions { margin-bottom: 24px; padding: 14px; border: 1px solid #cfd8d1; border-radius: 8px; background: #f2f7f0; }
    .print-actions p { margin: 8px 0 0; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    caption { text-align: left; font-weight: 800; margin-bottom: 6px; }
    th, td { border: 1px solid #7f8c83; padding: 8px; text-align: left; vertical-align: top; }
    th { background: #edf4ed; }
    dl { display: grid; grid-template-columns: minmax(160px, 220px) minmax(0, 1fr); gap: 8px 14px; }
    dt { font-weight: 800; }
    dd { margin: 0; }
    @media (max-width: 700px) { dl { grid-template-columns: 1fr; } }
    @media print { body { margin: 0 auto; } .print-actions { display: none; } }
  </style>
</head>
<body>
  ${printControls}
  ${content.replace('<h2 id="doc-heading">', '<h1 id="doc-heading">').replace('</h2>', '</h1>')}
  ${printScript}
</body>
</html>`;
    }
  </script>
</body>
</html>




