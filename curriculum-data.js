const test = require("node:test");
const assert = require("node:assert/strict");
const planner = require("../v2-planning-core.js");

const unit = {
  bigIdeas: ["Systems interact.", "Materials change."],
  competencies: ["Question and predict", "Process and analyze data"],
  contentStandards: ["body systems", "mixtures"],
  coreCompetencies: ["Communication: Communicating"],
  fppol: ["Learning is holistic, reflexive, reflective, experiential, and relational."]
};

test("assigns a unit curriculum element to one lesson", () => {
  let state = planner.createState(unit, 3);
  state = planner.assignElementToLessons(state, "bigIdeas", "Systems interact.", ["lesson-1"]);

  assert.deepEqual(state.lessons[0].assigned.bigIdeas, ["Systems interact."]);
  assert.deepEqual(state.lessons[1].assigned.bigIdeas, []);
});

test("assigns a unit curriculum element to multiple lessons", () => {
  let state = planner.createState(unit, 3);
  state = planner.assignElementToLessons(state, "contentStandards", "mixtures", ["lesson-1", "lesson-3"]);

  assert.equal(state.lessons[0].assigned.contentStandards.includes("mixtures"), true);
  assert.equal(state.lessons[1].assigned.contentStandards.includes("mixtures"), false);
  assert.equal(state.lessons[2].assigned.contentStandards.includes("mixtures"), true);
});

test("lesson-level removal creates an unassigned coverage gap", () => {
  let state = planner.createState(unit, 2);
  state = planner.assignElementToLessons(state, "competencies", "Question and predict", ["lesson-1"]);
  state = planner.setLessonElement(state, "lesson-1", "competencies", "Question and predict", false);

  const report = planner.buildCoverageReport(state, unit);
  assert.equal(report.unassigned.some((row) => row.value === "Question and predict"), true);
});

test("lesson-level addition updates the unit plan and marks the lesson", () => {
  let state = planner.createState(unit, 2);
  state = planner.addLessonElementToUnit(state, "lesson-2", "contentStandards", "electricity");

  assert.equal(state.unit.contentStandards.includes("electricity"), true);
  assert.equal(state.lessons[1].assigned.contentStandards.includes("electricity"), true);
  assert.equal(state.lessons[1].additions.contentStandards.includes("electricity"), true);
});

test("coverage report identifies covered, missing, unassigned, and inconsistent rows", () => {
  let state = planner.createState({ ...unit, bigIdeas: ["Systems interact."] }, 2);
  state = planner.assignElementToLessons(state, "bigIdeas", "Systems interact.", ["lesson-1"]);
  state.lessons[1].assigned.contentStandards.push("not in unit");

  const report = planner.buildCoverageReport(state, {
    ...unit,
    bigIdeas: ["Systems interact.", "Materials change."]
  });

  assert.equal(report.covered.some((row) => row.value === "Systems interact."), true);
  assert.equal(report.missing.some((row) => row.value === "Materials change."), true);
  assert.equal(report.unassigned.some((row) => row.value === "Question and predict"), true);
  assert.equal(report.inconsistent.some((row) => row.value === "not in unit"), true);
});

test("coverage report includes lesson order for repeated titles", () => {
  let state = planner.createState(unit, 2);
  state = planner.updateLesson(state, "lesson-1", { title: "Repeated title" });
  state = planner.updateLesson(state, "lesson-2", { title: "Repeated title" });
  state = planner.assignElementToLessons(state, "bigIdeas", "Systems interact.", ["lesson-1", "lesson-2"]);

  const report = planner.buildCoverageReport(state, unit);
  const row = report.covered.find((item) => item.value === "Systems interact.");
  assert.deepEqual(row.lessons.map((lesson) => lesson.order), [1, 2]);
});

test("synchronizing unit fields preserves manually edited lesson content", () => {
  let state = planner.createState(unit, 2);
  state = planner.updateLesson(state, "lesson-1", {
    title: "Investigating systems",
    activities: "Students build and test a model."
  });
  state = planner.syncUnitElements(state, {
    ...unit,
    bigIdeas: ["Systems interact.", "Energy transfers."]
  });

  assert.equal(state.lessons[0].title, "Investigating systems");
  assert.equal(state.lessons[0].activities, "Students build and test a model.");
  assert.equal(state.unit.bigIdeas.includes("Energy transfers."), true);
});

test("unit schedule generates lessons with block and minute defaults", () => {
  const state = planner.createState(unit, 4, {
    blocksPerLesson: 2,
    minutesPerBlock: 45
  });

  assert.equal(state.lessons.length, 4);
  assert.equal(state.lessons[0].blocks, 2);
  assert.equal(state.lessons[0].minutesPerBlock, 45);
  assert.equal(state.schedule.blocksPerLesson, 2);
  assert.equal(state.schedule.minutesPerBlock, 45);
});

test("schedule updates preserve manually adjusted lesson timing", () => {
  let state = planner.createState(unit, 2, {
    blocksPerLesson: 1,
    minutesPerBlock: 60
  });
  state = planner.updateLesson(state, "lesson-1", { blocks: 3, minutesPerBlock: 30 });
  state = planner.updateSchedule(state, {
    lessonCount: 3,
    blocksPerLesson: 2,
    minutesPerBlock: 45
  });

  assert.equal(state.lessons.length, 3);
  assert.equal(state.lessons[0].blocks, 3);
  assert.equal(state.lessons[0].minutesPerBlock, 30);
  assert.equal(state.lessons[1].blocks, 2);
  assert.equal(state.lessons[1].minutesPerBlock, 45);
  assert.equal(state.lessons[2].blocks, 2);
  assert.equal(state.lessons[2].minutesPerBlock, 45);
});

test("distributes only unassigned curriculum across the lesson sequence", () => {
  let state = planner.createState(unit, 3);
  state = planner.assignElementToLessons(state, "bigIdeas", "Systems interact.", ["lesson-2"]);
  state = planner.distributeUnassignedElements(state);

  assert.equal(state.lessons[1].assigned.bigIdeas.includes("Systems interact."), true);
  assert.equal(state.lessons.some((lesson) => lesson.assigned.bigIdeas.includes("Materials change.")), true);
  assert.equal(state.lessons.some((lesson) => lesson.assigned.competencies.includes("Question and predict")), true);

  const systemsAssignments = state.lessons.filter((lesson) => lesson.assigned.bigIdeas.includes("Systems interact."));
  assert.equal(systemsAssignments.length, 1);
  assert.equal(systemsAssignments[0].id, "lesson-2");
});

test("moves a lesson without changing its identity or curriculum links", () => {
  let state = planner.createState(unit, 3);
  state = planner.assignElementToLessons(state, "bigIdeas", "Systems interact.", ["lesson-2"]);
  state = planner.updateLesson(state, "lesson-2", { title: "Model systems", activities: "Build a model." });
  state = planner.moveLesson(state, "lesson-2", "earlier");

  assert.equal(state.lessons[0].id, "lesson-2");
  assert.equal(state.lessons[0].title, "Model systems");
  assert.equal(state.lessons[0].assigned.bigIdeas.includes("Systems interact."), true);
});

test("duplicates a lesson with timing, details, and curriculum links", () => {
  let state = planner.createState(unit, 2, { blocksPerLesson: 2, minutesPerBlock: 45 });
  state = planner.assignElementToLessons(state, "contentStandards", "mixtures", ["lesson-1"]);
  state = planner.updateLesson(state, "lesson-1", { title: "Mixture lab", activities: "Sort and separate mixtures." });
  state = planner.duplicateLesson(state, "lesson-1");

  assert.equal(state.lessons.length, 3);
  assert.notEqual(state.lessons[1].id, "lesson-1");
  assert.equal(state.lessons[1].title, "Mixture lab copy");
  assert.equal(state.lessons[1].blocks, 2);
  assert.equal(state.lessons[1].minutesPerBlock, 45);
  assert.equal(state.lessons[1].activities, "Sort and separate mixtures.");
  assert.equal(state.lessons[1].assigned.contentStandards.includes("mixtures"), true);
});

test("removes a lesson and updates schedule count", () => {
  let state = planner.createState(unit, 3);
  state = planner.updateLesson(state, "lesson-2", { title: "Remove me" });
  state = planner.removeLesson(state, "lesson-2");

  assert.equal(state.lessons.length, 2);
  assert.equal(state.schedule.lessonCount, 2);
  assert.equal(state.lessons.some((lesson) => lesson.title === "Remove me"), false);
});

test("does not remove the final remaining lesson", () => {
  let state = planner.createState(unit, 1);
  state = planner.removeLesson(state, "lesson-1");

  assert.equal(state.lessons.length, 1);
  assert.match(state.notices.at(-1), /At least one lesson/);
});

test("copies lesson structure into blank fields without copying curriculum", () => {
  let state = planner.createState(unit, 3);
  state = planner.assignElementToLessons(state, "bigIdeas", "Systems interact.", ["lesson-1"]);
  state = planner.updateLesson(state, "lesson-1", {
    activities: "Shared station rotation.",
    assessmentMode: "Observation",
    assessment: "Observe partner talk.",
    successCriteria: "Use evidence in explanation.",
    materials: "Cards, chart paper",
    notes: "Use mixed groupings.",
    flow: {
      opening: "Activate prior knowledge.",
      experience: "Students rotate through stations.",
      reflection: "Students name their next step."
    }
  });

  state = planner.copyLessonStructure(state, "lesson-1");

  assert.equal(state.lessons[1].activities, "Shared station rotation.");
  assert.equal(state.lessons[1].assessmentMode, "Observation");
  assert.equal(state.lessons[1].successCriteria, "Use evidence in explanation.");
  assert.equal(state.lessons[1].flow.experience, "Students rotate through stations.");
  assert.deepEqual(state.lessons[1].assigned.bigIdeas, []);
  assert.deepEqual(state.lessons[2].assigned.bigIdeas, []);
});

test("copying lesson structure preserves teacher-authored target fields", () => {
  let state = planner.createState(unit, 2);
  state = planner.updateLesson(state, "lesson-1", {
    activities: "Source activities",
    assessment: "Source assessment",
    flow: {
      opening: "Source opening",
      experience: "Source experience",
      reflection: "Source reflection"
    }
  });
  state = planner.updateLesson(state, "lesson-2", {
    activities: "Teacher activities",
    flow: {
      opening: "Teacher opening",
      experience: "",
      reflection: ""
    }
  });

  state = planner.copyLessonStructure(state, "lesson-1", ["lesson-2"]);

  assert.equal(state.lessons[1].activities, "Teacher activities");
  assert.equal(state.lessons[1].flow.opening, "Teacher opening");
  assert.equal(state.lessons[1].flow.experience, "Source experience");
  assert.equal(state.lessons[1].assessment, "Source assessment");
});

test("builds an editable lesson outline from assigned curriculum", () => {
  let state = planner.createState(unit, 2);
  state = planner.assignElementToLessons(state, "bigIdeas", "Materials change.", ["lesson-1"]);
  state = planner.assignElementToLessons(state, "contentStandards", "body systems", ["lesson-2"]);
  state = planner.buildLessonOutline(state);

  assert.equal(state.lessons[0].title, "Lesson 1: Big Idea - Materials change");
  assert.equal(state.lessons[0].sequence, "Lesson 1 of 2");
  assert.equal(state.lessons[0].phase, "Launch");
  assert.match(state.lessons[0].goals, /Materials change/);
  assert.equal(state.lessons[0].assessmentMode, "Observation / Conversation / Product");
  assert.match(state.lessons[0].assessment, /Materials change/);
  assert.match(state.lessons[0].successCriteria, /Materials change/);
  assert.match(state.lessons[0].flow.opening, /Materials change/);
  assert.match(state.lessons[0].flow.experience, /Materials change/);
  assert.match(state.lessons[0].flow.reflection, /next step/);
  assert.equal(state.lessons[1].title, "Lesson 2: Content - body systems");
  assert.equal(state.lessons[1].sequence, "Lesson 2 of 2");
  assert.equal(state.lessons[1].phase, "Consolidate");
  assert.match(state.lessons[1].assessment, /body systems/);
  assert.match(state.lessons[1].activities, /body systems/);
});

test("build outline does not overwrite teacher-authored lesson details or assessment", () => {
  let state = planner.createState(unit, 1);
  state = planner.assignElementToLessons(state, "bigIdeas", "Systems interact.", ["lesson-1"]);
  state = planner.updateLesson(state, "lesson-1", {
    title: "Teacher title",
    phase: "Apply",
    goals: "Teacher goals",
    assessmentMode: "Conversation",
    assessment: "Teacher assessment",
    successCriteria: "Teacher criteria",
    activities: "Teacher activities",
    flow: {
      opening: "Teacher opening",
      experience: "Teacher experience",
      reflection: "Teacher reflection"
    }
  });
  state = planner.buildLessonOutline(state);

  assert.equal(state.lessons[0].title, "Teacher title");
  assert.equal(state.lessons[0].phase, "Apply");
  assert.equal(state.lessons[0].goals, "Teacher goals");
  assert.equal(state.lessons[0].assessmentMode, "Conversation");
  assert.equal(state.lessons[0].assessment, "Teacher assessment");
  assert.equal(state.lessons[0].successCriteria, "Teacher criteria");
  assert.equal(state.lessons[0].activities, "Teacher activities");
  assert.equal(state.lessons[0].flow.opening, "Teacher opening");
  assert.equal(state.lessons[0].flow.experience, "Teacher experience");
  assert.equal(state.lessons[0].flow.reflection, "Teacher reflection");
});

test("assigns lesson phases across a connected unit arc", () => {
  let state = planner.createState(unit, 5);
  state = planner.buildLessonOutline(state);

  assert.deepEqual(state.lessons.map((lesson) => lesson.phase), [
    "Launch",
    "Build",
    "Build",
    "Apply",
    "Consolidate"
  ]);
});

test("normalizes missing lesson flow fields in older drafts", () => {
  let state = planner.createState(unit, 1);
  delete state.lessons[0].flow;
  delete state.lessons[0].assessmentMode;
  delete state.lessons[0].successCriteria;
  state = planner.syncUnitElements(state, state.unit);

  assert.equal(state.lessons[0].assessmentMode, "");
  assert.equal(state.lessons[0].successCriteria, "");
  assert.deepEqual(state.lessons[0].flow, {
    opening: "",
    experience: "",
    reflection: ""
  });
});

test("repairs duplicate lesson ids in older drafts", () => {
  let state = planner.createState(unit, 3);
  state.lessons[1].id = "lesson-1";
  state.lessons[2].id = "lesson-1";
  state.lessons[0].title = "Original lesson";
  state.lessons[1].title = "Duplicate one";
  state.lessons[2].title = "Duplicate two";

  state = planner.syncUnitElements(state, state.unit);

  assert.equal(new Set(state.lessons.map((lesson) => lesson.id)).size, 3);
  assert.equal(state.lessons[0].id, "lesson-1");
  assert.equal(state.lessons[0].title, "Original lesson");
  assert.equal(state.lessons[1].title, "Duplicate one");
  assert.equal(state.lessons[2].title, "Duplicate two");
  assert.match(state.notices.at(-1), /Duplicate lesson identifiers/);
});

test("builds a connected sequence by distributing curriculum and drafting lesson outlines", () => {
  let state = planner.createState(unit, 2);
  state = planner.assignElementToLessons(state, "bigIdeas", "Systems interact.", ["lesson-1"]);
  state = planner.buildConnectedSequence(state);

  const report = planner.buildCoverageReport(state, unit);
  assert.equal(report.unassigned.length, 0);
  assert.match(state.lessons[0].goals, /Systems interact/);
  assert.ok(state.lessons.some((lesson) => lesson.title !== "Lesson 1" && lesson.title !== "Lesson 2"));
});

test("generates distinct titles for lessons with repeated focus", () => {
  let state = planner.createState(unit, 2);
  state = planner.assignElementToLessons(state, "bigIdeas", "Systems interact.", ["lesson-1", "lesson-2"]);
  state = planner.buildLessonOutline(state);

  assert.equal(state.lessons[0].title, "Lesson 1: Big Idea - Systems interact");
  assert.equal(state.lessons[1].title, "Lesson 2: Big Idea - Systems interact");
  assert.notEqual(state.lessons[0].title, state.lessons[1].title);
});

test("builds pacing report from unit defaults and lesson overrides", () => {
  let state = planner.createState(unit, 3, {
    blocksPerLesson: 1,
    minutesPerBlock: 60
  });
  state = planner.updateLesson(state, "lesson-2", { blocks: 2, minutesPerBlock: 45 });
  state = planner.updateLesson(state, "lesson-3", { blocks: 1, minutesPerBlock: 30 });

  const report = planner.buildPacingReport(state);
  assert.equal(report.defaultMinutes, 60);
  assert.equal(report.totalMinutes, 180);
  assert.equal(report.outliers.length, 2);
  assert.equal(report.lessons[0].status, "on pace");
  assert.equal(report.lessons[1].status, "longer");
  assert.equal(report.lessons[1].difference, 30);
  assert.equal(report.lessons[2].status, "shorter");
  assert.equal(report.lessons[2].difference, -30);
});

test("builds readiness report from required lesson planning pieces", () => {
  let state = planner.createState(unit, 2);
  state = planner.assignElementToLessons(state, "bigIdeas", "Systems interact.", ["lesson-1"]);
  state = planner.updateLesson(state, "lesson-1", {
    goals: "Explore systems.",
    assessment: "Observe model explanation.",
    successCriteria: "Explain how parts interact.",
    activities: "Build a model."
  });

  const report = planner.buildReadinessReport(state);
  assert.equal(report.ready.length, 1);
  assert.equal(report.ready[0].id, "lesson-1");
  assert.equal(report.needsAttention.length, 1);
  assert.deepEqual(report.needsAttention[0].missing, ["curriculum", "goals", "activities", "assessment", "success criteria"]);
});

test("builds prioritized next actions from coverage, readiness, and pacing", () => {
  let state = planner.createState(unit, 2, {
    blocksPerLesson: 1,
    minutesPerBlock: 60
  });
  state = planner.updateLesson(state, "lesson-1", { blocks: 2 });
  state.lessons[0].assigned.contentStandards.push("not in unit");

  const actions = planner.buildActionPlan(state, {
    ...unit,
    bigIdeas: ["Systems interact.", "Materials change.", "Energy transfers."]
  });

  assert.equal(actions[0].title, "Resolve a lesson-only curriculum item");
  assert.equal(actions[0].lessonId, "lesson-1");
  assert.equal(actions.some((action) => action.title === "Review official BC curriculum items not selected"), true);
  assert.equal(actions.some((action) => action.title === "Assign selected curriculum to lessons"), true);
  assert.equal(actions.some((action) => action.title === "Complete Lesson 1"), true);
});

test("action plan reports ready state when checks are clear", () => {
  let state = planner.createState({
    bigIdeas: ["Systems interact."]
  }, 1);
  state = planner.assignElementToLessons(state, "bigIdeas", "Systems interact.", ["lesson-1"]);
  state = planner.updateLesson(state, "lesson-1", {
    goals: "Explore systems.",
    assessment: "Observe model explanation.",
    successCriteria: "Explain how parts interact.",
    activities: "Build a model."
  });

  const actions = planner.buildActionPlan(state, state.unit);
  assert.deepEqual(actions.map((action) => action.type), ["ready"]);
});

test("normalizes duplicate curriculum items while preserving first wording", () => {
  const state = planner.createState({
    bigIdeas: [
      "Everyday materials are often mixtures.",
      "Everyday materials are often mixtures",
      "  Everyday   materials are often mixtures.  "
    ]
  }, 1);

  assert.deepEqual(state.unit.bigIdeas, ["Everyday materials are often mixtures."]);
});

test("dedupes lesson assignments and remaps them to unit wording", () => {
  let state = planner.createState({
    bigIdeas: ["Everyday materials are often mixtures."]
  }, 1);
  state.lessons[0].assigned.bigIdeas = [
    "Everyday materials are often mixtures",
    "Everyday materials are often mixtures."
  ];
  state = planner.syncUnitElements(state, state.unit);

  assert.deepEqual(state.lessons[0].assigned.bigIdeas, ["Everyday materials are often mixtures."]);
});
