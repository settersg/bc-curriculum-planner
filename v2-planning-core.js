(function (root) {
  const CATEGORY_LABELS = {
    bigIdeas: "Big Ideas",
    competencies: "Curricular Competencies",
    contentStandards: "Content",
    coreCompetencies: "Core Competencies",
    fppol: "First Peoples Principles of Learning"
  };

  const CATEGORY_ORDER = ["bigIdeas", "competencies", "contentStandards", "coreCompetencies", "fppol"];

  function splitElements(value) {
    return String(value || "")
      .split(/\n{1,}/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function canonicalItem(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .replace(/[.;:]+$/g, "")
      .trim()
      .toLowerCase();
  }

  function unique(items) {
    const seen = new Set();
    const values = [];
    (items || []).forEach((item) => {
      const clean = String(item || "").trim();
      const key = canonicalItem(clean);
      if (!key || seen.has(key)) return;
      seen.add(key);
      values.push(clean);
    });
    return values;
  }

  function elementId(category, value) {
    let hash = 0;
    const text = `${category}:${value}`;
    for (let index = 0; index < text.length; index += 1) {
      hash = ((hash << 5) - hash + text.charCodeAt(index)) | 0;
    }
    return `${category}-${Math.abs(hash).toString(36)}`;
  }

  function normalizeUnit(unit) {
    const normalized = {};
    CATEGORY_ORDER.forEach((category) => {
      normalized[category] = unique(Array.isArray(unit?.[category]) ? unit[category] : splitElements(unit?.[category]));
    });
    return normalized;
  }

  function defaultSchedule(schedule = {}) {
    return {
      lessonCount: Math.max(1, Number(schedule.lessonCount) || 3),
      blocksPerLesson: Math.max(1, Number(schedule.blocksPerLesson) || 1),
      minutesPerBlock: Math.max(1, Number(schedule.minutesPerBlock) || 60)
    };
  }

  function defaultFlow(flow = {}) {
    return {
      opening: String(flow.opening || ""),
      experience: String(flow.experience || ""),
      reflection: String(flow.reflection || "")
    };
  }

  function createLesson(index, schedule = {}) {
    const normalizedSchedule = defaultSchedule(schedule);
    return {
      id: `lesson-${index + 1}`,
      title: `Lesson ${index + 1}`,
      sequence: "",
      phase: "",
      blocks: normalizedSchedule.blocksPerLesson,
      minutesPerBlock: normalizedSchedule.minutesPerBlock,
      goals: "",
      assessmentMode: "",
      assessment: "",
      successCriteria: "",
      activities: "",
      flow: defaultFlow(),
      materials: "",
      notes: "",
      assigned: {},
      additions: {}
    };
  }

  function createState(unit = {}, lessonCount = 3, schedule = {}) {
    const normalizedSchedule = defaultSchedule({ ...schedule, lessonCount });
    return syncUnitElements({
      unit: normalizeUnit(unit),
      schedule: normalizedSchedule,
      lessons: Array.from({ length: normalizedSchedule.lessonCount }, (_, index) => createLesson(index, normalizedSchedule)),
      notices: []
    }, unit);
  }

  function ensureLessonCount(state, lessonCount) {
    const next = cloneState(state);
    const count = Math.max(1, Number(lessonCount) || 1);
    next.schedule = defaultSchedule({ ...(next.schedule || {}), lessonCount: count });
    while (next.lessons.length < count) next.lessons.push(createLesson(next.lessons.length, next.schedule));
    if (next.lessons.length > count) {
      const removed = next.lessons.splice(count);
      next.notices.push(`Removed ${removed.length} lesson${removed.length === 1 ? "" : "s"} from the active unit sequence.`);
    }
    return reconcileLessonAssignments(next);
  }

  function cloneState(state) {
    return JSON.parse(JSON.stringify(state || createState()));
  }

  function ensureUniqueLessonIds(state) {
    const used = new Set();
    let changed = false;
    state.lessons.forEach((lesson, index) => {
      const current = String(lesson.id || "").trim();
      if (current && !used.has(current)) {
        used.add(current);
        return;
      }
      let candidateIndex = index + 1;
      let candidate = `lesson-${candidateIndex}`;
      while (used.has(candidate)) {
        candidateIndex += 1;
        candidate = `lesson-${candidateIndex}`;
      }
      lesson.id = candidate;
      used.add(candidate);
      changed = true;
    });
    if (changed) state.notices.push("Duplicate lesson identifiers were repaired in this draft.");
    return state;
  }

  function syncUnitElements(state, rawUnit) {
    const next = cloneState(state || {});
    next.unit = normalizeUnit(rawUnit || next.unit || {});
    const lessonCount = Array.isArray(next.lessons) && next.lessons.length ? next.lessons.length : next.schedule?.lessonCount;
    next.schedule = defaultSchedule({ ...(next.schedule || {}), lessonCount });
    next.lessons = Array.isArray(next.lessons) && next.lessons.length ? next.lessons : [createLesson(0, next.schedule)];
    next.notices = Array.isArray(next.notices) ? next.notices : [];
    ensureUniqueLessonIds(next);
    next.lessons.forEach((lesson) => {
      if (typeof lesson.phase !== "string") lesson.phase = "";
      if (typeof lesson.assessmentMode !== "string") lesson.assessmentMode = "";
      if (typeof lesson.successCriteria !== "string") lesson.successCriteria = "";
      lesson.flow = defaultFlow(lesson.flow || {});
      if (!lesson.blocks) lesson.blocks = next.schedule.blocksPerLesson;
      if (!lesson.minutesPerBlock) lesson.minutesPerBlock = next.schedule.minutesPerBlock;
    });
    return reconcileLessonAssignments(next);
  }

  function updateSchedule(state, schedule = {}) {
    let next = cloneState(state);
    const oldSchedule = defaultSchedule(next.schedule);
    next.schedule = defaultSchedule({ ...oldSchedule, ...schedule });
    next = ensureLessonCount(next, next.schedule.lessonCount);
    next.lessons.forEach((lesson) => {
      if (!lesson.blocks || Number(lesson.blocks) === oldSchedule.blocksPerLesson) lesson.blocks = next.schedule.blocksPerLesson;
      if (!lesson.minutesPerBlock || Number(lesson.minutesPerBlock) === oldSchedule.minutesPerBlock) lesson.minutesPerBlock = next.schedule.minutesPerBlock;
    });
    return next;
  }

  function reconcileLessonAssignments(state) {
    CATEGORY_ORDER.forEach((category) => {
      state.unit[category] = unique(state.unit[category] || []);
      const unitItems = new Map((state.unit[category] || []).map((item) => [canonicalItem(item), item]));
      state.lessons.forEach((lesson) => {
        lesson.assigned[category] = unique(lesson.assigned[category] || []);
        lesson.additions[category] = unique(lesson.additions[category] || []);
        lesson.assigned[category] = lesson.assigned[category]
          .map((item) => unitItems.get(canonicalItem(item)))
          .filter(Boolean);
      });
    });
    return state;
  }

  function assignElementToLessons(state, category, value, lessonIds) {
    const next = cloneState(state);
    const ids = new Set(lessonIds || []);
    if (!next.unit[category]?.includes(value)) {
      next.unit[category] = unique([...(next.unit[category] || []), value]);
      next.notices.push(`${CATEGORY_LABELS[category]} item added to the unit plan from lesson planning.`);
    }
    next.lessons.forEach((lesson) => {
      lesson.assigned[category] = unique(lesson.assigned[category] || []);
      const hasItem = lesson.assigned[category].includes(value);
      if (ids.has(lesson.id) && !hasItem) lesson.assigned[category].push(value);
      if (!ids.has(lesson.id) && hasItem) lesson.assigned[category] = lesson.assigned[category].filter((item) => item !== value);
    });
    return next;
  }

  function setLessonElement(state, lessonId, category, value, selected) {
    const next = cloneState(state);
    const lesson = next.lessons.find((item) => item.id === lessonId);
    if (!lesson) return next;
    lesson.assigned[category] = unique(lesson.assigned[category] || []);
    if (selected && !lesson.assigned[category].includes(value)) lesson.assigned[category].push(value);
    if (!selected) lesson.assigned[category] = lesson.assigned[category].filter((item) => item !== value);
    return next;
  }

  function addLessonElementToUnit(state, lessonId, category, value) {
    const clean = String(value || "").trim();
    if (!clean) return cloneState(state);
    let next = cloneState(state);
    if (!next.unit[category]?.includes(clean)) {
      next.unit[category] = unique([...(next.unit[category] || []), clean]);
      next.notices.push(`${CATEGORY_LABELS[category]} item from ${lessonTitle(next, lessonId)} was added to the unit plan.`);
    }
    next = setLessonElement(next, lessonId, category, clean, true);
    const lesson = next.lessons.find((item) => item.id === lessonId);
    if (lesson) lesson.additions[category] = unique([...(lesson.additions[category] || []), clean]);
    return next;
  }

  function updateLesson(state, lessonId, patch) {
    const next = cloneState(state);
    const lesson = next.lessons.find((item) => item.id === lessonId);
    if (!lesson) return next;
    Object.assign(lesson, patch || {});
    return next;
  }

  function nextLessonId(state) {
    const used = new Set(state.lessons.map((lesson) => lesson.id));
    let index = state.lessons.length + 1;
    while (used.has(`lesson-${index}`)) index += 1;
    return `lesson-${index}`;
  }

  function refreshLessonOrder(state) {
    state.lessons.forEach((lesson, index) => {
      lesson.order = index + 1;
    });
    state.schedule = defaultSchedule({ ...(state.schedule || {}), lessonCount: state.lessons.length });
    return state;
  }

  function moveLesson(state, lessonId, direction) {
    const next = cloneState(state);
    const index = next.lessons.findIndex((lesson) => lesson.id === lessonId);
    if (index < 0) return next;
    const offset = direction === "earlier" ? -1 : 1;
    const target = index + offset;
    if (target < 0 || target >= next.lessons.length) return next;
    const [lesson] = next.lessons.splice(index, 1);
    next.lessons.splice(target, 0, lesson);
    next.notices.push(`${lesson.title || lessonId} moved ${direction === "earlier" ? "earlier" : "later"} in the unit sequence.`);
    return refreshLessonOrder(next);
  }

  function duplicateLesson(state, lessonId) {
    const next = cloneState(state);
    const index = next.lessons.findIndex((lesson) => lesson.id === lessonId);
    if (index < 0) return next;
    const source = next.lessons[index];
    const copy = cloneState(source);
    copy.id = nextLessonId(next);
    copy.title = `${source.title || `Lesson ${index + 1}`} copy`;
    copy.notes = source.notes ? `${source.notes}\n\nDuplicated from ${source.title || lessonId}.` : `Duplicated from ${source.title || lessonId}.`;
    next.lessons.splice(index + 1, 0, copy);
    next.notices.push(`${source.title || lessonId} duplicated in the unit sequence.`);
    return refreshLessonOrder(next);
  }

  function removeLesson(state, lessonId) {
    const next = cloneState(state);
    if (next.lessons.length <= 1) {
      next.notices.push("At least one lesson is required in the unit sequence.");
      return next;
    }
    const index = next.lessons.findIndex((lesson) => lesson.id === lessonId);
    if (index < 0) return next;
    const [removed] = next.lessons.splice(index, 1);
    next.notices.push(`${removed.title || lessonId} removed from the unit sequence.`);
    return refreshLessonOrder(next);
  }

  function copyLessonStructure(state, sourceLessonId, targetLessonIds, options = {}) {
    const next = cloneState(state);
    const source = next.lessons.find((lesson) => lesson.id === sourceLessonId);
    if (!source) return next;
    const targetSet = new Set(
      Array.isArray(targetLessonIds) && targetLessonIds.length
        ? targetLessonIds
        : next.lessons.filter((lesson) => lesson.id !== sourceLessonId).map((lesson) => lesson.id)
    );
    const overwrite = Boolean(options.overwrite);
    const scalarFields = ["activities", "assessmentMode", "assessment", "successCriteria", "materials", "notes"];
    const flowFields = ["opening", "experience", "reflection"];
    let lessonCount = 0;
    let fieldCount = 0;

    next.lessons.forEach((lesson) => {
      if (lesson.id === sourceLessonId || !targetSet.has(lesson.id)) return;
      let changed = false;
      scalarFields.forEach((field) => {
        const sourceValue = String(source[field] || "").trim();
        if (!sourceValue) return;
        if (overwrite || !String(lesson[field] || "").trim()) {
          lesson[field] = source[field];
          changed = true;
          fieldCount += 1;
        }
      });
      lesson.flow = defaultFlow(lesson.flow || {});
      const sourceFlow = defaultFlow(source.flow || {});
      flowFields.forEach((field) => {
        const sourceValue = String(sourceFlow[field] || "").trim();
        if (!sourceValue) return;
        if (overwrite || !String(lesson.flow[field] || "").trim()) {
          lesson.flow[field] = sourceFlow[field];
          changed = true;
          fieldCount += 1;
        }
      });
      if (changed) lessonCount += 1;
    });

    next.notices.push(
      fieldCount
        ? `${source.title || sourceLessonId} structure copied into ${lessonCount} lesson${lessonCount === 1 ? "" : "s"} without changing curriculum assignments.`
        : "No blank lesson-structure fields needed copying."
    );
    return next;
  }

  function shortFocus(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .replace(/[.:;]+$/g, "")
      .trim();
  }

  function lessonFocus(lesson) {
    return [
      ...(lesson.assigned.bigIdeas || []),
      ...(lesson.assigned.contentStandards || []),
      ...(lesson.assigned.competencies || [])
    ].map(shortFocus).filter(Boolean)[0] || "";
  }

  function lessonFocusCategory(lesson) {
    if ((lesson.assigned.bigIdeas || []).length) return "Big Idea";
    if ((lesson.assigned.contentStandards || []).length) return "Content";
    if ((lesson.assigned.competencies || []).length) return "Competency";
    if ((lesson.assigned.coreCompetencies || []).length) return "Core Competency";
    if ((lesson.assigned.fppol || []).length) return "FPPL";
    return "Lesson";
  }

  function generatedLessonTitle(lesson, index) {
    const focus = lessonFocus(lesson);
    if (!focus) return `Lesson ${index + 1}`;
    const prefix = `Lesson ${index + 1}: ${lessonFocusCategory(lesson)} - `;
    const maxFocusLength = Math.max(28, 78 - prefix.length);
    const short = focus.length > maxFocusLength ? `${focus.slice(0, maxFocusLength - 3)}...` : focus;
    return `${prefix}${short}`;
  }

  function lessonAssessmentFocus(lesson) {
    return [
      ...(lesson.assigned.competencies || []),
      ...(lesson.assigned.contentStandards || []),
      ...(lesson.assigned.bigIdeas || [])
    ].map(shortFocus).filter(Boolean)[0] || "";
  }

  function lessonPhase(index, total) {
    if (total <= 1) return "Consolidate";
    if (index === 0) return "Launch";
    if (index === total - 1) return "Consolidate";
    if (index >= Math.max(1, total - 2)) return "Apply";
    return "Build";
  }

  function buildLessonOutline(state) {
    const next = cloneState(state);
    next.lessons.forEach((lesson, index) => {
      const focus = lessonFocus(lesson);
      const assessmentFocus = lessonAssessmentFocus(lesson);
      const sequence = `Lesson ${index + 1} of ${next.lessons.length}`;
      if (focus && (!lesson.title || /^Lesson \d+( copy)?$/i.test(lesson.title))) {
        lesson.title = generatedLessonTitle(lesson, index);
      }
      if (!lesson.sequence) lesson.sequence = sequence;
      if (!lesson.phase) lesson.phase = lessonPhase(index, next.lessons.length);
      if (focus && !lesson.goals) lesson.goals = `Students will explore and apply: ${focus}.`;
      if (assessmentFocus && !lesson.assessment) {
        lesson.assessment = `Collect evidence of student understanding through observation, conversation, or product connected to: ${assessmentFocus}.`;
      }
      if (assessmentFocus && !lesson.assessmentMode) lesson.assessmentMode = "Observation / Conversation / Product";
      if (assessmentFocus && !lesson.successCriteria) {
        lesson.successCriteria = `Students can show evidence of understanding or skill connected to: ${assessmentFocus}.`;
      }
      if (!lesson.activities) {
        lesson.activities = focus
          ? `Plan instructional steps that help students encounter, practise, and apply this focus: ${focus}.`
          : "Plan the opening, instructional steps, and student reflection for this lesson.";
      }
      lesson.flow = defaultFlow(lesson.flow || {});
      if (focus && !lesson.flow.opening) lesson.flow.opening = `Connect to prior knowledge and introduce the lesson focus: ${focus}.`;
      if (focus && !lesson.flow.experience) lesson.flow.experience = `Students investigate, practise, or apply the focus through a learning task connected to: ${focus}.`;
      if (!lesson.flow.reflection) lesson.flow.reflection = "Students reflect on what changed in their understanding and identify a next step.";
    });
    next.notices.push("Draft lesson outline built from the current curriculum assignments.");
    return next;
  }

  function buildConnectedSequence(state) {
    let next = distributeUnassignedElements(state);
    const distributionMessage = next.notices.at(-1);
    next = buildLessonOutline(next);
    next.notices.push(
      distributionMessage?.startsWith("Distributed")
        ? `${distributionMessage} Lesson outline refreshed from curriculum assignments.`
        : "Connected lesson sequence refreshed from current curriculum assignments."
    );
    return next;
  }

  function distributeUnassignedElements(state) {
    const next = cloneState(state);
    if (!next.lessons.length) return next;
    let cursor = 0;
    let assignedCount = 0;

    CATEGORY_ORDER.forEach((category) => {
      (next.unit[category] || []).forEach((value) => {
        const alreadyAssigned = next.lessons.some((lesson) => lesson.assigned[category]?.includes(value));
        if (alreadyAssigned) return;
        const lesson = next.lessons[cursor % next.lessons.length];
        lesson.assigned[category] = unique([...(lesson.assigned[category] || []), value]);
        cursor += 1;
        assignedCount += 1;
      });
    });

    next.notices.push(
      assignedCount
        ? `Distributed ${assignedCount} unassigned curriculum item${assignedCount === 1 ? "" : "s"} across the lesson sequence.`
        : "All selected unit curriculum items already have a lesson assignment."
    );
    return next;
  }

  function lessonTitle(state, lessonId) {
    const lesson = state.lessons.find((item) => item.id === lessonId);
    return lesson?.title || lessonId;
  }

  function buildCoverageReport(state, source = {}) {
    const normalizedSource = normalizeUnit(source);
    const report = {
      covered: [],
      missing: [],
      unassigned: [],
      inconsistent: [],
      possiblyUnderdeveloped: [],
      byCategory: {}
    };

    CATEGORY_ORDER.forEach((category) => {
      const unitItems = state.unit[category] || [];
      const sourceItems = normalizedSource[category] || [];
      const categoryRows = [];
      unitItems.forEach((value) => {
        const lessons = state.lessons
          .map((lesson, index) => ({ lesson, index }))
          .filter(({ lesson }) => lesson.assigned[category]?.includes(value));
        const row = {
          id: elementId(category, value),
          category,
          categoryLabel: CATEGORY_LABELS[category],
          value,
          lessons: lessons.map(({ lesson, index }) => ({ id: lesson.id, title: lesson.title, order: index + 1 })),
          status: lessons.length ? "covered" : "unassigned"
        };
        categoryRows.push(row);
        report[row.status].push(row);
        if (lessons.length > 0 && lessons.some((lesson) => !lesson.activities && !lesson.assessment && !lesson.goals)) {
          report.possiblyUnderdeveloped.push({ ...row, status: "possibly underdeveloped" });
        }
      });

      sourceItems
        .filter((value) => !unitItems.includes(value))
        .forEach((value) => {
          const row = {
            id: elementId(category, value),
            category,
            categoryLabel: CATEGORY_LABELS[category],
            value,
            lessons: [],
            status: "missing"
          };
          categoryRows.push(row);
          report.missing.push(row);
        });

      state.lessons.forEach((lesson) => {
        (lesson.assigned[category] || [])
          .filter((value) => !unitItems.includes(value))
          .forEach((value) => {
            const row = {
              id: elementId(category, value),
              category,
              categoryLabel: CATEGORY_LABELS[category],
              value,
              lessons: [{ id: lesson.id, title: lesson.title, order: state.lessons.findIndex((item) => item.id === lesson.id) + 1 }],
              status: "inconsistent"
            };
            categoryRows.push(row);
            report.inconsistent.push(row);
          });
      });

      report.byCategory[category] = categoryRows;
    });

    return report;
  }

  function buildPacingReport(state) {
    const schedule = defaultSchedule(state.schedule || {});
    const defaultMinutes = schedule.blocksPerLesson * schedule.minutesPerBlock;
    const lessons = (state.lessons || []).map((lesson) => {
      const minutes = (Number(lesson.blocks) || 0) * (Number(lesson.minutesPerBlock) || 0);
      const difference = minutes - defaultMinutes;
      return {
        id: lesson.id,
        title: lesson.title,
        minutes,
        difference,
        status: difference === 0 ? "on pace" : difference > 0 ? "longer" : "shorter"
      };
    });
    return {
      defaultMinutes,
      totalMinutes: lessons.reduce((sum, lesson) => sum + lesson.minutes, 0),
      lessons,
      outliers: lessons.filter((lesson) => lesson.status !== "on pace")
    };
  }

  function buildReadinessReport(state) {
    const lessons = (state.lessons || []).map((lesson) => {
      const curriculumCount = CATEGORY_ORDER.reduce((sum, category) => sum + ((lesson.assigned[category] || []).length), 0);
      const missing = [];
      if (!curriculumCount) missing.push("curriculum");
      if (!String(lesson.goals || "").trim()) missing.push("goals");
      if (!String(lesson.activities || "").trim()) missing.push("activities");
      if (!String(lesson.assessment || "").trim()) missing.push("assessment");
      if (!String(lesson.successCriteria || "").trim()) missing.push("success criteria");
      return {
        id: lesson.id,
        title: lesson.title,
        curriculumCount,
        missing,
        ready: missing.length === 0
      };
    });
    return {
      lessons,
      ready: lessons.filter((lesson) => lesson.ready),
      needsAttention: lessons.filter((lesson) => !lesson.ready)
    };
  }

  function buildActionPlan(state, source = {}) {
    const coverage = buildCoverageReport(state, source);
    const readiness = buildReadinessReport(state);
    const pacing = buildPacingReport(state);
    const actions = [];

    if (coverage.inconsistent.length) {
      const row = coverage.inconsistent[0];
      actions.push({
        type: "coverage",
        priority: "high",
        title: "Resolve a lesson-only curriculum item",
        detail: `${row.categoryLabel}: ${shortFocus(row.value)} is assigned to a lesson but is not in the unit alignment fields.`,
        target: "map",
        lessonId: row.lessons[0]?.id || ""
      });
    }

    if (coverage.missing.length) {
      actions.push({
        type: "alignment",
        priority: "high",
        title: "Review official BC curriculum items not selected",
        detail: `${coverage.missing.length} official item${coverage.missing.length === 1 ? "" : "s"} from the linked BC Curriculum source are not yet in this unit plan.`,
        target: "alignment"
      });
    }

    if (coverage.unassigned.length) {
      const row = coverage.unassigned[0];
      actions.push({
        type: "map",
        priority: "medium",
        title: "Assign selected curriculum to lessons",
        detail: `${row.categoryLabel}: ${shortFocus(row.value)} is in the unit plan but has not been placed in any lesson.`,
        target: "map"
      });
    }

    if (readiness.needsAttention.length) {
      const lesson = readiness.needsAttention[0];
      actions.push({
        type: "lesson",
        priority: "medium",
        title: `Complete ${lesson.title || lesson.id}`,
        detail: `Add ${lesson.missing.join(", ")} so this lesson is ready enough to teach.`,
        target: "lesson",
        lessonId: lesson.id
      });
    }

    if (pacing.outliers.length) {
      const lesson = pacing.outliers[0];
      actions.push({
        type: "pacing",
        priority: "low",
        title: "Review lesson timing",
        detail: `${lesson.title || lesson.id} is ${Math.abs(lesson.difference)} minutes ${lesson.status === "longer" ? "longer" : "shorter"} than the unit default.`,
        target: "lesson",
        lessonId: lesson.id
      });
    }

    if (!actions.length) {
      actions.push({
        type: "ready",
        priority: "low",
        title: "Unit sequence is ready for review",
        detail: "Coverage, pacing, and lesson readiness checks are clear. Do a final teacher judgment pass against the official BC Curriculum page.",
        target: "export"
      });
    }

    return actions.slice(0, 4);
  }

  const api = {
    CATEGORY_LABELS,
    CATEGORY_ORDER,
    splitElements,
    normalizeUnit,
    createState,
    ensureLessonCount,
    updateSchedule,
    syncUnitElements,
    assignElementToLessons,
    setLessonElement,
    addLessonElementToUnit,
    moveLesson,
    duplicateLesson,
    removeLesson,
    copyLessonStructure,
    buildLessonOutline,
    buildConnectedSequence,
    distributeUnassignedElements,
    updateLesson,
    buildCoverageReport,
    buildPacingReport,
    buildReadinessReport,
    buildActionPlan
  };

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.BCPlannerV2 = api;
})(typeof window !== "undefined" ? window : globalThis);
