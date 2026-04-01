/* =============================================
   My Fitness PWA – App Logic
   4-Week Muscle Gain Program + Calorie Tracker
   ============================================= */

'use strict';

/* ─── 4-Week Program Data ─────────────────────── */
const PROGRAM = [
  /* WEEK 1 – Foundation */
  {
    week: 1,
    label: 'Week 1',
    phase: 'Foundation Phase – Building the Base',
    days: [
      {
        day: 1, name: 'Push Day A', type: 'Chest · Shoulders · Triceps',
        exercises: [
          { name: 'Barbell Bench Press',     sets: '4', reps: '8–10', muscle: 'Chest' },
          { name: 'Incline Dumbbell Press',  sets: '3', reps: '10–12', muscle: 'Upper Chest' },
          { name: 'Overhead Press',          sets: '3', reps: '8–10', muscle: 'Shoulders' },
          { name: 'Lateral Raises',          sets: '3', reps: '12–15', muscle: 'Side Delts' },
          { name: 'Triceps Pushdown',        sets: '3', reps: '12–15', muscle: 'Triceps' },
          { name: 'Overhead Triceps Ext.',   sets: '3', reps: '12–15', muscle: 'Triceps' }
        ]
      },
      {
        day: 2, name: 'Pull Day A', type: 'Back · Biceps · Rear Delts',
        exercises: [
          { name: 'Deadlift',                sets: '4', reps: '5–6', muscle: 'Back' },
          { name: 'Barbell Bent-Over Row',   sets: '3', reps: '8–10', muscle: 'Back' },
          { name: 'Lat Pulldown',            sets: '3', reps: '10–12', muscle: 'Lats' },
          { name: 'Seated Cable Row',        sets: '3', reps: '10–12', muscle: 'Mid Back' },
          { name: 'Face Pulls',              sets: '3', reps: '15–20', muscle: 'Rear Delts' },
          { name: 'Barbell Curl',            sets: '3', reps: '10–12', muscle: 'Biceps' }
        ]
      },
      {
        day: 3, name: 'Leg Day A', type: 'Quads · Hamstrings · Calves',
        exercises: [
          { name: 'Barbell Back Squat',      sets: '4', reps: '6–8', muscle: 'Quads' },
          { name: 'Romanian Deadlift',       sets: '3', reps: '10–12', muscle: 'Hamstrings' },
          { name: 'Leg Press',               sets: '3', reps: '10–12', muscle: 'Quads' },
          { name: 'Leg Curl',                sets: '3', reps: '12–15', muscle: 'Hamstrings' },
          { name: 'Standing Calf Raise',     sets: '4', reps: '15–20', muscle: 'Calves' },
          { name: 'Plank',                   sets: '3', reps: '45 sec', muscle: 'Core' }
        ]
      },
      { day: 4, name: 'Rest Day', type: 'Active Recovery', rest: true },
      {
        day: 5, name: 'Push Day B', type: 'Chest · Shoulders · Triceps',
        exercises: [
          { name: 'Dumbbell Flat Bench Press', sets: '4', reps: '10–12', muscle: 'Chest' },
          { name: 'Cable Chest Fly',           sets: '3', reps: '12–15', muscle: 'Chest' },
          { name: 'Arnold Press',              sets: '3', reps: '10–12', muscle: 'Shoulders' },
          { name: 'Front Raises',              sets: '3', reps: '12–15', muscle: 'Front Delts' },
          { name: 'Skull Crushers',            sets: '3', reps: '10–12', muscle: 'Triceps' },
          { name: 'Dips',                      sets: '3', reps: '10–15', muscle: 'Triceps/Chest' }
        ]
      },
      {
        day: 6, name: 'Pull Day B', type: 'Back · Biceps',
        exercises: [
          { name: 'Pull-ups / Assisted',     sets: '4', reps: '6–10', muscle: 'Lats' },
          { name: 'Single-Arm DB Row',       sets: '3', reps: '10–12', muscle: 'Back' },
          { name: 'Cable Pullover',          sets: '3', reps: '12–15', muscle: 'Lats' },
          { name: 'Reverse Fly',             sets: '3', reps: '15–20', muscle: 'Rear Delts' },
          { name: 'Hammer Curls',            sets: '3', reps: '12–15', muscle: 'Biceps' },
          { name: 'Incline DB Curl',         sets: '3', reps: '12–15', muscle: 'Biceps' }
        ]
      },
      { day: 7, name: 'Rest Day', type: 'Active Recovery / Cardio', rest: true }
    ]
  },
  /* WEEK 2 – Progressive Overload */
  {
    week: 2,
    label: 'Week 2',
    phase: 'Progressive Overload – Add 5–10% Weight',
    days: [
      {
        day: 1, name: 'Push Day A', type: 'Chest · Shoulders · Triceps',
        exercises: [
          { name: 'Barbell Bench Press',     sets: '4', reps: '6–8',  muscle: 'Chest' },
          { name: 'Incline Dumbbell Press',  sets: '4', reps: '10–12', muscle: 'Upper Chest' },
          { name: 'Overhead Press',          sets: '3', reps: '6–8',  muscle: 'Shoulders' },
          { name: 'Cable Lateral Raises',    sets: '3', reps: '15–20', muscle: 'Side Delts' },
          { name: 'Rope Pushdown',           sets: '4', reps: '12–15', muscle: 'Triceps' },
          { name: 'Close-Grip Bench Press',  sets: '3', reps: '10–12', muscle: 'Triceps' }
        ]
      },
      {
        day: 2, name: 'Pull Day A', type: 'Back · Biceps · Rear Delts',
        exercises: [
          { name: 'Deadlift',                sets: '4', reps: '5',    muscle: 'Back' },
          { name: 'Pendlay Row',             sets: '4', reps: '6–8',  muscle: 'Back' },
          { name: 'Wide-Grip Lat Pulldown',  sets: '3', reps: '10–12', muscle: 'Lats' },
          { name: 'T-Bar Row',               sets: '3', reps: '10–12', muscle: 'Mid Back' },
          { name: 'Face Pulls',              sets: '3', reps: '20–25', muscle: 'Rear Delts' },
          { name: 'Preacher Curl',           sets: '3', reps: '10–12', muscle: 'Biceps' }
        ]
      },
      {
        day: 3, name: 'Leg Day A', type: 'Quads · Hamstrings · Calves',
        exercises: [
          { name: 'Front Squat',             sets: '4', reps: '6–8',  muscle: 'Quads' },
          { name: 'Romanian Deadlift',       sets: '4', reps: '8–10', muscle: 'Hamstrings' },
          { name: 'Leg Press',               sets: '3', reps: '12–15', muscle: 'Quads' },
          { name: 'Nordic Hamstring Curl',   sets: '3', reps: '8–10', muscle: 'Hamstrings' },
          { name: 'Seated Calf Raise',       sets: '4', reps: '15–20', muscle: 'Calves' },
          { name: 'Ab Wheel Rollout',        sets: '3', reps: '10–12', muscle: 'Core' }
        ]
      },
      { day: 4, name: 'Rest Day', type: 'Active Recovery', rest: true },
      {
        day: 5, name: 'Push Day B', type: 'Chest · Shoulders · Triceps',
        exercises: [
          { name: 'Decline Bench Press',     sets: '4', reps: '8–10', muscle: 'Chest' },
          { name: 'Pec Deck / Chest Fly',    sets: '3', reps: '12–15', muscle: 'Chest' },
          { name: 'Seated DB Press',         sets: '3', reps: '8–10', muscle: 'Shoulders' },
          { name: 'Upright Row',             sets: '3', reps: '10–12', muscle: 'Shoulders' },
          { name: 'French Press',            sets: '3', reps: '10–12', muscle: 'Triceps' },
          { name: 'Diamond Push-ups',        sets: '3', reps: '12–15', muscle: 'Triceps' }
        ]
      },
      {
        day: 6, name: 'Pull Day B', type: 'Back · Biceps',
        exercises: [
          { name: 'Weighted Pull-ups',       sets: '4', reps: '6–8',  muscle: 'Lats' },
          { name: 'Meadows Row',             sets: '3', reps: '10–12', muscle: 'Back' },
          { name: 'Straight-Arm Pulldown',   sets: '3', reps: '12–15', muscle: 'Lats' },
          { name: 'Band Pull-Apart',         sets: '3', reps: '20–25', muscle: 'Rear Delts' },
          { name: 'Cable Curl',              sets: '3', reps: '12–15', muscle: 'Biceps' },
          { name: 'Concentration Curl',      sets: '3', reps: '12–15', muscle: 'Biceps' }
        ]
      },
      { day: 7, name: 'Rest Day', type: 'Active Recovery / Cardio', rest: true }
    ]
  },
  /* WEEK 3 – Volume Peak */
  {
    week: 3,
    label: 'Week 3',
    phase: 'Volume Peak – Highest Training Volume',
    days: [
      {
        day: 1, name: 'Push Day A', type: 'Chest · Shoulders · Triceps',
        exercises: [
          { name: 'Barbell Bench Press',     sets: '5', reps: '5',    muscle: 'Chest' },
          { name: 'Incline Barbell Press',   sets: '4', reps: '8–10', muscle: 'Upper Chest' },
          { name: 'DB Shoulder Press',       sets: '4', reps: '10–12', muscle: 'Shoulders' },
          { name: 'Lateral Raises + Front',  sets: '3', reps: '12–15', muscle: 'Delts' },
          { name: 'Triceps Pushdown',        sets: '4', reps: '12–15', muscle: 'Triceps' },
          { name: 'Overhead Extension',      sets: '3', reps: '12–15', muscle: 'Triceps' }
        ]
      },
      {
        day: 2, name: 'Pull Day A', type: 'Back · Biceps · Rear Delts',
        exercises: [
          { name: 'Deadlift',                sets: '5', reps: '3–5',  muscle: 'Back' },
          { name: 'Bent-Over Barbell Row',   sets: '4', reps: '8',    muscle: 'Back' },
          { name: 'Pull-ups',                sets: '3', reps: 'Max',  muscle: 'Lats' },
          { name: 'Seated Cable Row',        sets: '3', reps: '10–12', muscle: 'Mid Back' },
          { name: 'Face Pulls',              sets: '4', reps: '20',   muscle: 'Rear Delts' },
          { name: 'Alternating DB Curl',     sets: '4', reps: '12',   muscle: 'Biceps' }
        ]
      },
      {
        day: 3, name: 'Leg Day A', type: 'Quads · Hamstrings · Calves',
        exercises: [
          { name: 'Barbell Back Squat',      sets: '5', reps: '5',    muscle: 'Quads' },
          { name: 'Bulgarian Split Squat',   sets: '3', reps: '10–12', muscle: 'Quads' },
          { name: 'Romanian Deadlift',       sets: '4', reps: '10',   muscle: 'Hamstrings' },
          { name: 'Leg Curl',                sets: '3', reps: '12–15', muscle: 'Hamstrings' },
          { name: 'Standing Calf Raise',     sets: '5', reps: '15–20', muscle: 'Calves' },
          { name: 'Dragon Flag',             sets: '3', reps: '6–8',  muscle: 'Core' }
        ]
      },
      { day: 4, name: 'Rest Day', type: 'Active Recovery', rest: true },
      {
        day: 5, name: 'Push Day B', type: 'Chest · Shoulders · Triceps',
        exercises: [
          { name: 'Flat DB Press',           sets: '4', reps: '10–12', muscle: 'Chest' },
          { name: 'Incline Cable Fly',       sets: '4', reps: '12–15', muscle: 'Chest' },
          { name: 'Landmine Press',          sets: '3', reps: '10–12', muscle: 'Shoulders' },
          { name: 'Rear Delt Fly',           sets: '3', reps: '15–20', muscle: 'Rear Delts' },
          { name: 'JM Press',                sets: '3', reps: '10–12', muscle: 'Triceps' },
          { name: 'Push-ups to Failure',     sets: '3', reps: 'Max',  muscle: 'Chest/Triceps' }
        ]
      },
      {
        day: 6, name: 'Pull Day B + Legs', type: 'Back · Biceps · Glutes',
        exercises: [
          { name: 'Rack Pull',               sets: '4', reps: '6–8',  muscle: 'Back' },
          { name: 'Close-Grip Lat Pulldown', sets: '3', reps: '10–12', muscle: 'Lats' },
          { name: 'Cable Row',               sets: '3', reps: '10–12', muscle: 'Back' },
          { name: 'Hip Thrust',              sets: '4', reps: '10–12', muscle: 'Glutes' },
          { name: 'EZ Bar Curl',             sets: '3', reps: '10–12', muscle: 'Biceps' },
          { name: 'Leg Press',               sets: '3', reps: '12–15', muscle: 'Quads' }
        ]
      },
      { day: 7, name: 'Rest Day', type: 'Active Recovery / Cardio', rest: true }
    ]
  },
  /* WEEK 4 – Intensification / Deload-Intensity */
  {
    week: 4,
    label: 'Week 4',
    phase: 'Intensification – Push PRs',
    days: [
      {
        day: 1, name: 'Push Day A', type: 'Chest · Shoulders · Triceps',
        exercises: [
          { name: 'Barbell Bench Press',     sets: '5', reps: '3–5',  muscle: 'Chest' },
          { name: 'Incline DB Press',        sets: '4', reps: '8–10', muscle: 'Upper Chest' },
          { name: 'Standing OHP',            sets: '4', reps: '5–6',  muscle: 'Shoulders' },
          { name: 'Lateral Raises',          sets: '4', reps: '12–15', muscle: 'Delts' },
          { name: 'Weighted Dips',           sets: '4', reps: '8–10', muscle: 'Triceps/Chest' },
          { name: 'Skull Crushers',          sets: '3', reps: '10–12', muscle: 'Triceps' }
        ]
      },
      {
        day: 2, name: 'Pull Day A', type: 'Back · Biceps · Rear Delts',
        exercises: [
          { name: 'Sumo Deadlift',           sets: '5', reps: '3',    muscle: 'Back/Glutes' },
          { name: 'Barbell Row',             sets: '5', reps: '5',    muscle: 'Back' },
          { name: 'Weighted Pull-ups',       sets: '4', reps: '5–8',  muscle: 'Lats' },
          { name: 'Face Pulls',              sets: '3', reps: '20',   muscle: 'Rear Delts' },
          { name: 'Barbell Curl',            sets: '4', reps: '8–10', muscle: 'Biceps' },
          { name: 'Reverse Curl',            sets: '3', reps: '12–15', muscle: 'Forearms' }
        ]
      },
      {
        day: 3, name: 'Leg Day A', type: 'Quads · Hamstrings · Calves',
        exercises: [
          { name: 'Barbell Squat',           sets: '5', reps: '3–5',  muscle: 'Quads' },
          { name: 'Hack Squat',              sets: '3', reps: '8–10', muscle: 'Quads' },
          { name: 'Romanian Deadlift',       sets: '4', reps: '8',    muscle: 'Hamstrings' },
          { name: 'Leg Curl',                sets: '4', reps: '10–12', muscle: 'Hamstrings' },
          { name: 'Donkey Calf Raise',       sets: '5', reps: '15–20', muscle: 'Calves' },
          { name: 'Hanging Leg Raise',       sets: '4', reps: '12–15', muscle: 'Core' }
        ]
      },
      { day: 4, name: 'Rest Day', type: 'Active Recovery', rest: true },
      {
        day: 5, name: 'Push Day B', type: 'Chest · Shoulders · Triceps',
        exercises: [
          { name: 'Flat DB Bench Press',     sets: '4', reps: '6–8',  muscle: 'Chest' },
          { name: 'Cable Fly',               sets: '4', reps: '12–15', muscle: 'Chest' },
          { name: 'Push Press',              sets: '3', reps: '6–8',  muscle: 'Shoulders' },
          { name: 'Machine Shoulder Press',  sets: '3', reps: '10–12', muscle: 'Shoulders' },
          { name: 'Tricep Dips',             sets: '4', reps: '12–15', muscle: 'Triceps' },
          { name: 'Push-ups',                sets: '3', reps: 'Max',  muscle: 'Chest/Triceps' }
        ]
      },
      {
        day: 6, name: 'Pull Day B', type: 'Back · Biceps',
        exercises: [
          { name: 'Trap-Bar Deadlift',       sets: '4', reps: '5–6',  muscle: 'Back' },
          { name: 'Chest-Supported Row',     sets: '4', reps: '8–10', muscle: 'Back' },
          { name: 'Pull-ups',                sets: '3', reps: 'Max',  muscle: 'Lats' },
          { name: 'Straight-Arm Pulldown',   sets: '3', reps: '12–15', muscle: 'Lats' },
          { name: 'Spider Curl',             sets: '3', reps: '12–15', muscle: 'Biceps' },
          { name: 'Hammer Curl',             sets: '3', reps: '12–15', muscle: 'Biceps' }
        ]
      },
      { day: 7, name: 'Rest Day', type: 'Active Recovery / Cardio', rest: true }
    ]
  }
];

/* ─── Default Settings ────────────────────────── */
const DEFAULTS = {
  calorieGoal: 2500,
  proteinGoal: 180,
  carbsGoal:   300,
  fatGoal:      80,
  currentWeek:   1,
  userName:     '',
  streak:        0,
  lastWorkout:  null
};

/* ─── Storage Helpers ─────────────────────────── */
const Store = {
  get(key, fallback = null) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? JSON.parse(val) : fallback;
    } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }
};

/* ─── Main App Object ─────────────────────────── */
const App = {
  currentTab: 'home',
  selectedWeek: 1,

  /* ── Init ──────────────────────────────────── */
  init() {
    this.registerServiceWorker();
    this.loadSettings();
    this.selectedWeek = this.settings.currentWeek;
    this.renderAll();
    this.bindEvents();
  },

  /* ── Service Worker ────────────────────────── */
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  },

  /* ── Settings ──────────────────────────────── */
  loadSettings() {
    this.settings = Store.get('settings', { ...DEFAULTS });
    // Fill UI
    const s = this.settings;
    this.setVal('setting-name',     s.userName || '');
    this.setVal('setting-weight',   s.bodyWeight || '');
    this.setVal('setting-height',   s.height || '');
    this.setVal('setting-calories', s.calorieGoal);
    this.setVal('setting-week',     s.currentWeek);
    this.setVal('setting-protein',  s.proteinGoal);
    this.setVal('setting-carbs',    s.carbsGoal);
    this.setVal('setting-fat',      s.fatGoal);
  },

  saveSettings() {
    const s = this.settings;
    s.userName    = this.getVal('setting-name');
    s.bodyWeight  = parseFloat(this.getVal('setting-weight')) || s.bodyWeight;
    s.height      = parseFloat(this.getVal('setting-height')) || s.height;
    s.calorieGoal = parseInt(this.getVal('setting-calories'), 10) || 2500;
    s.currentWeek = parseInt(this.getVal('setting-week'), 10) || 1;
    this.selectedWeek = s.currentWeek;
    Store.set('settings', s);
    this.renderAll();
    this.showSnack('✅ Profile saved!');
  },

  saveMacros() {
    const s = this.settings;
    s.proteinGoal = parseInt(this.getVal('setting-protein'), 10) || 180;
    s.carbsGoal   = parseInt(this.getVal('setting-carbs'),   10) || 300;
    s.fatGoal     = parseInt(this.getVal('setting-fat'),     10) || 80;
    Store.set('settings', s);
    this.renderNutrition();
    this.renderHome();
    this.showSnack('✅ Macro goals saved!');
  },

  resetData() {
    if (!confirm('Reset ALL data? This cannot be undone.')) return;
    localStorage.clear();
    this.settings = { ...DEFAULTS };
    Store.set('settings', this.settings);
    this.selectedWeek = 1;
    this.renderAll();
    this.showSnack('🔄 Data reset complete');
  },

  /* ── Navigation ────────────────────────────── */
  navigate(tab) {
    this.currentTab = tab;
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`section-${tab}`).classList.add('active');
    document.getElementById(`nav-${tab}`).classList.add('active');
    if (tab === 'workout')   this.renderWorkout();
    if (tab === 'progress')  this.renderProgress();
    if (tab === 'nutrition') this.renderNutrition();
    if (tab === 'home')      this.renderHome();
  },

  goToWorkout() {
    this.navigate('workout');
  },

  /* ── Render All ────────────────────────────── */
  renderAll() {
    this.renderHome();
    this.renderWorkout();
    this.renderNutrition();
    this.renderProgress();
    this.renderHeader();
  },

  /* ── Header ─────────────────────────────────── */
  renderHeader() {
    const d = new Date();
    document.getElementById('header-date').textContent =
      d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

    const streak = this.settings.streak || 0;
    const wrap = document.getElementById('streak-wrap');
    if (streak > 0) {
      wrap.innerHTML = `<span class="streak-badge">🔥 ${streak} day${streak !== 1 ? 's' : ''}</span>`;
    } else {
      wrap.innerHTML = '';
    }
  },

  /* ── Home Dashboard ─────────────────────────── */
  renderHome() {
    const s = this.settings;
    const weekIdx = (s.currentWeek || 1) - 1;
    const week = PROGRAM[weekIdx];

    document.getElementById('home-week-title').textContent = week.label;
    document.getElementById('home-week-sub').textContent   = week.phase;

    // Stats
    const workoutsDone = Store.get('workoutsDone', {});
    const totalDone = Object.keys(workoutsDone).length;
    document.getElementById('stat-workouts-done').textContent = totalDone;
    document.getElementById('stat-streak').textContent = (s.streak || 0) + '🔥';

    const meals = this.getTodayMeals();
    const totalCal = meals.reduce((a, m) => a + m.calories, 0);
    document.getElementById('stat-calories-today').textContent = totalCal;

    // Week progress (days with workouts done this week)
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    let weekWorkouts = 0;
    const targetWorkouts = week.days.filter(d => !d.rest).length;
    week.days.forEach((d, i) => {
      const key = `w${s.currentWeek}d${i + 1}`;
      if (workoutsDone[key]) weekWorkouts++;
    });
    const pct = targetWorkouts ? Math.round((weekWorkouts / targetWorkouts) * 100) : 0;
    document.getElementById('stat-week-progress').textContent = pct + '%';

    // Calorie ring on home
    const goal = s.calorieGoal || 2500;
    const ringFill = document.getElementById('home-ring-fill');
    const fillPct = Math.min(totalCal / goal, 1);
    const circumference = 226;
    ringFill.style.strokeDashoffset = circumference - (fillPct * circumference);
    document.getElementById('home-cal-consumed').textContent = totalCal;
    document.getElementById('home-cal-goal-text').textContent = `Goal: ${goal} kcal`;
    const remaining = Math.max(goal - totalCal, 0);
    document.getElementById('home-cal-remaining').textContent = `${remaining} kcal remaining`;
    document.getElementById('home-cal-bar').style.width = Math.min(fillPct * 100, 100) + '%';

    // Macros
    const totProtein = meals.reduce((a, m) => a + (m.protein || 0), 0);
    const totCarbs   = meals.reduce((a, m) => a + (m.carbs   || 0), 0);
    const totFat     = meals.reduce((a, m) => a + (m.fat     || 0), 0);
    document.getElementById('home-protein').textContent = totProtein + 'g';
    document.getElementById('home-carbs').textContent   = totCarbs + 'g';
    document.getElementById('home-fat').textContent     = totFat + 'g';

    // Today's workout
    const todayDayOfWeek = new Date().getDay(); // 0=Sun
    const dayIdx = (todayDayOfWeek === 0) ? 6 : todayDayOfWeek - 1; // map Mon=0 to index 0
    const todayWorkout = week.days[dayIdx] || week.days[0];
    document.getElementById('today-workout-name').textContent = todayWorkout.name;
    const exContainer = document.getElementById('today-workout-exercises');
    if (todayWorkout.rest) {
      exContainer.innerHTML = '<span class="exercise-tag">Rest & Recover 😴</span>';
    } else {
      exContainer.innerHTML = (todayWorkout.exercises || []).slice(0, 4)
        .map(e => `<span class="exercise-tag">${e.name}</span>`).join('');
    }

    // Weekly plan mini list
    const planEl = document.getElementById('home-week-plan');
    planEl.innerHTML = week.days.map((d, i) => {
      const key = `w${s.currentWeek}d${i + 1}`;
      const done = workoutsDone[key];
      return `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:1rem">${done ? '✅' : d.rest ? '😴' : '⬜'}</span>
        <span style="font-size:0.85rem;flex:1">${d.name}</span>
        <span style="font-size:0.72rem;color:var(--text-muted)">${d.type}</span>
      </div>`;
    }).join('');
  },

  /* ── Workout Section ─────────────────────────── */
  renderWorkout() {
    const s = this.settings;

    // Week tabs
    const tabsEl = document.getElementById('week-tabs');
    tabsEl.innerHTML = PROGRAM.map(w =>
      `<button class="week-tab${w.week === this.selectedWeek ? ' active' : ''}"
        onclick="App.selectWeek(${w.week})">${w.label}</button>`
    ).join('');

    // Days
    const weekData = PROGRAM[this.selectedWeek - 1];
    const workoutsDone = Store.get('workoutsDone', {});
    const daysEl = document.getElementById('workout-days');

    daysEl.innerHTML = weekData.days.map((day, i) => {
      const key = `w${this.selectedWeek}d${i + 1}`;
      const isDone = !!workoutsDone[key];

      if (day.rest) {
        return `<div class="day-card">
          <div class="day-card-header">
            <div>
              <div class="day-label">Day ${day.day} – ${day.name}</div>
              <div class="day-type">${day.type}</div>
            </div>
            <span class="day-status">😴</span>
          </div>
          <div class="rest-day-card">
            <span class="rest-emoji">🛌</span>
            <p>Take it easy today. Stretch, foam roll, or go for a light walk. Recovery is where muscles grow!</p>
          </div>
        </div>`;
      }

      const checkedExercises = Store.get(`${key}-checked`, []);

      return `<div class="day-card">
        <div class="day-card-header" onclick="App.toggleDay('day-${key}')">
          <div>
            <div class="day-label">Day ${day.day} – ${day.name}</div>
            <div class="day-type">${day.type}</div>
          </div>
          <span class="day-status">${isDone ? '✅' : '⬜'}</span>
        </div>
        <div class="day-card-body" id="day-${key}">
          ${(day.exercises || []).map((ex, ei) => {
            const checked = checkedExercises.includes(ei);
            return `<div class="exercise-row">
              <button class="exercise-check${checked ? ' checked' : ''}"
                onclick="App.toggleExercise('${key}',${ei})">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="2,6 5,9 10,3"/>
                </svg>
              </button>
              <div class="exercise-info">
                <div class="exercise-name">${ex.name}</div>
                <div class="exercise-detail">${ex.sets} sets × ${ex.reps} reps</div>
              </div>
              <span class="exercise-muscle">${ex.muscle}</span>
            </div>`;
          }).join('')}
          <button class="btn btn-primary btn-block" style="margin-top:14px"
            onclick="App.markWorkoutDone('${key}')">
            ${isDone ? '✅ Completed' : '💪 Mark as Done'}
          </button>
        </div>
      </div>`;
    }).join('');
  },

  selectWeek(week) {
    this.selectedWeek = week;
    this.renderWorkout();
  },

  toggleDay(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('open');
  },

  toggleExercise(key, idx) {
    let checked = Store.get(`${key}-checked`, []);
    if (checked.includes(idx)) {
      checked = checked.filter(i => i !== idx);
    } else {
      checked.push(idx);
    }
    Store.set(`${key}-checked`, checked);
    this.renderWorkout();
  },

  markWorkoutDone(key) {
    const workoutsDone = Store.get('workoutsDone', {});
    workoutsDone[key] = new Date().toISOString();
    Store.set('workoutsDone', workoutsDone);

    // Update streak
    const today = new Date().toDateString();
    const lastDate = this.settings.lastWorkout;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastDate === today) {
      // Already counted today
    } else if (lastDate === yesterday.toDateString()) {
      this.settings.streak = (this.settings.streak || 0) + 1;
    } else {
      this.settings.streak = 1;
    }
    this.settings.lastWorkout = today;
    Store.set('settings', this.settings);

    this.showSnack('🏋️ Workout logged! Great work!');
    this.renderAll();
  },

  /* ── Nutrition ───────────────────────────────── */
  renderNutrition() {
    const s = this.settings;
    const meals = this.getTodayMeals();
    const totalCal     = meals.reduce((a, m) => a + (m.calories || 0), 0);
    const totalProtein = meals.reduce((a, m) => a + (m.protein  || 0), 0);
    const totalCarbs   = meals.reduce((a, m) => a + (m.carbs    || 0), 0);
    const totalFat     = meals.reduce((a, m) => a + (m.fat      || 0), 0);

    const goal    = s.calorieGoal  || 2500;
    const pGoal   = s.proteinGoal  || 180;
    const cGoal   = s.carbsGoal    || 300;
    const fGoal   = s.fatGoal      || 80;

    // Calorie ring
    const fillPct = Math.min(totalCal / goal, 1);
    const circumference = 226;
    const ring = document.getElementById('nutr-ring-fill');
    if (ring) ring.style.strokeDashoffset = circumference - (fillPct * circumference);
    this.setTxt('nutr-cal-consumed', totalCal);
    this.setTxt('nutr-cal-goal-text', `Goal: ${goal} kcal`);
    this.setTxt('nutr-cal-remaining', `${Math.max(goal - totalCal, 0)} kcal remaining`);

    // Date
    const today = new Date();
    this.setTxt('nutr-date', today.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }));

    // Macro bars
    this.setBar('nutr-protein-bar', totalProtein, pGoal);
    this.setBar('nutr-carbs-bar',   totalCarbs,   cGoal);
    this.setBar('nutr-fat-bar',     totalFat,     fGoal);
    this.setTxt('nutr-protein-text', `${totalProtein} / ${pGoal}g`);
    this.setTxt('nutr-carbs-text',   `${totalCarbs} / ${cGoal}g`);
    this.setTxt('nutr-fat-text',     `${totalFat} / ${fGoal}g`);

    // Meal log
    const logEl = document.getElementById('meal-log');
    if (logEl) {
      if (meals.length === 0) {
        logEl.innerHTML = `<div class="empty-state"><span class="empty-icon">🍽️</span><p>No meals logged yet. Add your first meal above!</p></div>`;
      } else {
        logEl.innerHTML = meals.map((m, i) =>
          `<div class="meal-item">
            <div class="meal-icon">${m.type || '🍽️'}</div>
            <div class="meal-text">
              <div class="meal-name">${this.esc(m.name)}</div>
              <div class="meal-macros">P: ${m.protein}g · C: ${m.carbs}g · F: ${m.fat}g</div>
            </div>
            <div class="meal-cal">${m.calories} kcal</div>
            <button class="delete-btn" onclick="App.deleteMeal(${i})" title="Remove">✕</button>
          </div>`
        ).join('');
      }
    }

    // Water tracker
    const water = Store.get('water_' + this.todayKey(), 0);
    const waterEl = document.getElementById('water-tracker');
    if (waterEl) {
      waterEl.innerHTML = Array.from({ length: 8 }, (_, i) =>
        `<button class="water-btn${i < water ? ' filled' : ''}"
          onclick="App.toggleWater(${i})" title="Glass ${i + 1}">💧</button>`
      ).join('');
    }
    this.setTxt('water-total', `${water} / 8 glasses`);
  },

  addMeal() {
    const name     = this.getVal('meal-name-input').trim();
    const type     = this.getVal('meal-type-input');
    const calories = parseInt(this.getVal('meal-cal-input'),     10) || 0;
    const protein  = parseInt(this.getVal('meal-protein-input'), 10) || 0;
    const carbs    = parseInt(this.getVal('meal-carbs-input'),   10) || 0;
    const fat      = parseInt(this.getVal('meal-fat-input'),     10) || 0;

    if (!name) { this.showSnack('⚠️ Enter a meal name'); return; }
    if (!calories) { this.showSnack('⚠️ Enter calories'); return; }

    const meals = this.getTodayMeals();
    meals.push({ name, type, calories, protein, carbs, fat, time: new Date().toISOString() });
    Store.set('meals_' + this.todayKey(), meals);

    // Clear form
    ['meal-name-input','meal-cal-input','meal-protein-input','meal-carbs-input','meal-fat-input']
      .forEach(id => this.setVal(id, ''));

    this.renderNutrition();
    this.renderHome();
    this.showSnack(`✅ ${name} added – ${calories} kcal`);
  },

  quickAdd(name, calories, protein, carbs, fat) {
    const meals = this.getTodayMeals();
    meals.push({ name, type: '⚡', calories, protein, carbs, fat, time: new Date().toISOString() });
    Store.set('meals_' + this.todayKey(), meals);
    this.renderNutrition();
    this.renderHome();
    this.showSnack(`⚡ ${name} added – ${calories} kcal`);
  },

  deleteMeal(idx) {
    const meals = this.getTodayMeals();
    meals.splice(idx, 1);
    Store.set('meals_' + this.todayKey(), meals);
    this.renderNutrition();
    this.renderHome();
    this.showSnack('🗑️ Meal removed');
  },

  clearMeals() {
    if (!confirm('Clear all meals for today?')) return;
    Store.set('meals_' + this.todayKey(), []);
    this.renderNutrition();
    this.renderHome();
    this.showSnack('🗑️ Meals cleared');
  },

  toggleWater(idx) {
    const key = 'water_' + this.todayKey();
    const current = Store.get(key, 0);
    // If clicking a filled glass at exactly idx, reduce; else set to idx+1
    const newVal = (idx + 1 === current) ? idx : idx + 1;
    Store.set(key, newVal);
    this.renderNutrition();
  },

  /* ── Progress ─────────────────────────────────── */
  renderProgress() {
    // Weight log
    const weightLog = Store.get('weightLog', []);
    const logEl = document.getElementById('weight-log');
    if (logEl) {
      if (weightLog.length === 0) {
        logEl.innerHTML = `<div class="empty-state"><span class="empty-icon">⚖️</span><p>No weight entries yet. Log your first weight above!</p></div>`;
      } else {
        logEl.innerHTML = [...weightLog].reverse().slice(0, 14).map((entry, i, arr) => {
          const prev = arr[i + 1];
          let changeHtml = '';
          if (prev) {
            const diff = (entry.weight - prev.weight).toFixed(1);
            if (diff > 0) changeHtml = `<span class="log-change up">+${diff} kg</span>`;
            else if (diff < 0) changeHtml = `<span class="log-change down">${diff} kg</span>`;
          }
          return `<div class="progress-log-item">
            <span class="log-date">${new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            <span class="log-weight">${entry.weight} kg</span>
            ${changeHtml}
          </div>`;
        }).join('');
      }
    }

    // Weight chart
    this.drawWeightChart(weightLog);

    // Program overview
    const overviewEl = document.getElementById('program-overview');
    if (overviewEl) {
      const workoutsDone = Store.get('workoutsDone', {});
      overviewEl.innerHTML = PROGRAM.map(w => {
        const done = w.days.filter((d, i) => workoutsDone[`w${w.week}d${i + 1}`] && !d.rest).length;
        const total = w.days.filter(d => !d.rest).length;
        const pct = total ? Math.round((done / total) * 100) : 0;
        return `<div style="margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px">
            <span style="font-weight:600">${w.label}</span>
            <span style="color:var(--text-secondary)">${done}/${total} workouts · ${pct}%</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill${pct === 100 ? ' green' : ''}" style="width:${pct}%"></div>
          </div>
          <div style="font-size:0.72rem;color:var(--text-muted);margin-top:4px">${w.phase}</div>
        </div>`;
      }).join('');
    }

    // Achievements
    this.renderAchievements();
  },

  logWeight() {
    const val = parseFloat(this.getVal('weight-input'));
    if (!val || val < 20 || val > 400) { this.showSnack('⚠️ Enter a valid weight'); return; }
    const log = Store.get('weightLog', []);
    log.push({ weight: val, date: new Date().toISOString() });
    Store.set('weightLog', log);
    this.setVal('weight-input', '');
    this.renderProgress();
    this.showSnack(`⚖️ Weight logged: ${val} kg`);
  },

  drawWeightChart(log) {
    const canvas = document.getElementById('weight-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.offsetWidth || 360;
    const H = 150;
    canvas.width  = W;
    canvas.height = H;
    ctx.clearRect(0, 0, W, H);

    if (log.length < 2) {
      ctx.fillStyle = '#5a5a5a';
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Log 2+ weights to see chart', W / 2, H / 2);
      return;
    }

    const entries = log.slice(-14); // last 14 entries
    const weights = entries.map(e => e.weight);
    const minW = Math.min(...weights) - 1;
    const maxW = Math.max(...weights) + 1;
    const pad = { t: 10, r: 10, b: 20, l: 40 };
    const cW = W - pad.l - pad.r;
    const cH = H - pad.t - pad.b;

    const toX = i  => pad.l + (i / (entries.length - 1)) * cW;
    const toY = w  => pad.t + ((maxW - w) / (maxW - minW)) * cH;

    // Grid lines
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    [0, 0.5, 1].forEach(t => {
      const y = pad.t + t * cH;
      ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + cW, y);
      ctx.stroke();
      const label = (maxW - t * (maxW - minW)).toFixed(1);
      ctx.fillStyle = '#5a5a5a';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(label, pad.l - 4, y + 4);
    });

    // Filled area
    ctx.beginPath();
    ctx.moveTo(toX(0), toY(weights[0]));
    weights.forEach((w, i) => ctx.lineTo(toX(i), toY(w)));
    ctx.lineTo(toX(weights.length - 1), pad.t + cH);
    ctx.lineTo(toX(0), pad.t + cH);
    ctx.closePath();
    ctx.fillStyle = 'rgba(230,57,70,0.12)';
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.strokeStyle = '#e63946';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.moveTo(toX(0), toY(weights[0]));
    weights.forEach((w, i) => ctx.lineTo(toX(i), toY(w)));
    ctx.stroke();

    // Dots
    weights.forEach((w, i) => {
      ctx.beginPath();
      ctx.arc(toX(i), toY(w), 4, 0, Math.PI * 2);
      ctx.fillStyle = '#e63946';
      ctx.fill();
      ctx.strokeStyle = '#0d0d0d';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  },

  renderAchievements() {
    const workoutsDone = Store.get('workoutsDone', {});
    const totalDone = Object.keys(workoutsDone).length;
    const weightLog  = Store.get('weightLog', []);
    const meals      = this.getTodayMeals();
    const water      = Store.get('water_' + this.todayKey(), 0);
    const streak     = this.settings.streak || 0;

    const achs = [
      { icon: '🏋️', name: 'First Rep',      desc: 'Complete your first workout',  earned: totalDone >= 1 },
      { icon: '🔥', name: '3-Day Streak',    desc: 'Work out 3 days in a row',      earned: streak >= 3 },
      { icon: '💪', name: 'Week Warrior',    desc: 'Complete a full week (5 days)', earned: totalDone >= 5 },
      { icon: '🎯', name: 'Halfway There',   desc: 'Complete 14 workouts',          earned: totalDone >= 14 },
      { icon: '🏆', name: 'Full Program',    desc: 'Complete all 4 weeks',          earned: totalDone >= 20 },
      { icon: '🥗', name: 'Fuelled Up',      desc: 'Log 3 meals in a day',         earned: meals.length >= 3 },
      { icon: '💧', name: 'Hydrated',        desc: 'Drink 8 glasses of water',     earned: water >= 8 },
      { icon: '⚖️', name: 'Weigh In',        desc: 'Log your first weight',        earned: weightLog.length >= 1 },
      { icon: '📈', name: 'Tracker',         desc: 'Log weight 7+ times',          earned: weightLog.length >= 7 },
      { icon: '🔥', name: '7-Day Streak',    desc: 'Work out 7 days in a row',      earned: streak >= 7 }
    ];

    const el = document.getElementById('achievement-list');
    if (el) {
      el.innerHTML = achs.map(a =>
        `<div class="achievement-item">
          <div class="achievement-icon${a.earned ? ' earned' : ''}">${a.icon}</div>
          <div class="achievement-text">
            <div class="ach-name" style="${a.earned ? '' : 'color:var(--text-muted)'}">${a.name}</div>
            <div class="ach-desc">${a.desc}</div>
          </div>
          <span style="font-size:0.75rem;color:${a.earned ? 'var(--success)' : 'var(--text-muted)'}">${a.earned ? '✅' : '🔒'}</span>
        </div>`
      ).join('');
    }
  },

  /* ── Utilities ───────────────────────────────── */
  todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  },

  getTodayMeals() {
    return Store.get('meals_' + this.todayKey(), []);
  },

  getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value : '';
  },

  setVal(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val;
  },

  setTxt(id, txt) {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  },

  setBar(id, val, max) {
    const el = document.getElementById(id);
    if (el) el.style.width = Math.min((val / max) * 100, 100) + '%';
  },

  esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  },

  showSnack(msg, duration = 2800) {
    const el = document.getElementById('snackbar');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), duration);
  },

  bindEvents() {
    // Enter key submits add meal form
    ['meal-name-input','meal-cal-input','meal-protein-input','meal-carbs-input','meal-fat-input']
      .forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('keypress', e => { if (e.key === 'Enter') this.addMeal(); });
      });

    // Enter key for weight
    const wi = document.getElementById('weight-input');
    if (wi) wi.addEventListener('keypress', e => { if (e.key === 'Enter') this.logWeight(); });
  }
};

/* ─── Boot ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => App.init());
