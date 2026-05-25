Here is a complete, production-ready, and fully functional modern AI Fitness Planner Frontend UI. It uses absolute vanilla HTML5, CSS3, and JavaScript, featuring a sleek dashboard-style dark theme, interactive trackers, and responsive design.
Project Folder Structure
Plaintext
ai-fitness-planner/
│
├── index.html
├── style.css
└── app.js

1. HTML (index.html)
Save the following code as index.html. It contains the layout structure, sidebar navigation, top bar, and all six requested functional sections.
HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PulseAI // Next-Gen Fitness Planner</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

    <aside class="sidebar" id="sidebar">
        <div class="sidebar-logo">
            <span class="logo-accent">Pulse</span>AI
        </div>
        <nav class="sidebar-menu">
            <a href="#landing" class="menu-item active" onclick="switchSection('landing')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                <span>Dashboard</span>
            </a>
            <a href="#workout" class="menu-item" onclick="switchSection('workout')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="18" y="3" width="4" height="18" rx="1"></rect><rect x="12" y="7" width="4" height="14" rx="1"></rect><rect x="6" y="11" width="4" height="10" rx="1"></rect><rect x="0" y="15" width="4" height="6" rx="1"></rect></svg>
                <span>Workout Planner</span>
            </a>
            <a href="#diet" class="menu-item" onclick="switchSection('diet')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2vol7.5 7.5L12 22M12 22V12"></path><path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"></path></svg>
                <span>Diet & Nutrition</span>
            </a>
            <a href="#bmi" class="menu-item" onclick="switchSection('bmi')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                <span>BMI Calculator</span>
            </a>
            <a href="#water" class="menu-item" onclick="switchSection('water')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                <span>Water Tracker</span>
            </a>
            <a href="#progress" class="menu-item" onclick="switchSection('progress')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                <span>Progress Tracking</span>
            </a>
        </nav>
    </aside>

    <div class="main-wrapper">
        
        <header class="top-bar">
            <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle Menu">
                <span></span><span></span><span></span>
            </button>
            <div class="top-bar-title" id="pageTitle">Dashboard</div>
            <div class="user-profile">
                <div class="user-info">
                    <span class="user-name">Alex Carter</span>
                    <span class="user-status">Premium Member</span>
                </div>
                <div class="user-avatar">AC</div>
            </div>
        </header>

        <main class="content-container">

            <section id="landing" class="app-section active-section">
                <div class="welcome-banner">
                    <h1>Welcome back, Alex</h1>
                    <p>Your AI-generated routine is optimized and ready. You have 3 tasks remaining today.</p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-header">
                            <span class="stat-title">Daily Energy Burned</span>
                            <div class="stat-icon burn">🔥</div>
                        </div>
                        <div class="stat-value" data-target="640">0</div>
                        <span class="stat-unit">kcal / 800 kcal</span>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 80%"></div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-header">
                            <span class="stat-title">Water Intake</span>
                            <div class="stat-icon water">💧</div>
                        </div>
                        <div class="stat-value" id="dashWaterVal">1.5</div>
                        <span class="stat-unit">Liters / 3.0 Liters</span>
                        <div class="progress-bar-container">
                            <div class="progress-bar" id="dashWaterProgress" style="width: 50%"></div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-header">
                            <span class="stat-title">Sleep Quality</span>
                            <div class="stat-icon sleep">🌙</div>
                        </div>
                        <div class="stat-value" data-target="85">0</div>
                        <span class="stat-unit">% Optimal Recovery</span>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 85%"></div>
                        </div>
                    </div>
                </div>

                <div class="dashboard-split">
                    <div class="dashboard-card daily-goals">
                        <h3>Today's Objectives</h3>
                        <ul class="goal-list">
                            <li class="goal-item checked">
                                <div class="checkbox">✓</div>
                                <span class="goal-text">Morning Hypertrophy Session (Chest/Triceps)</span>
                            </li>
                            <li class="goal-item">
                                <div class="checkbox"></div>
                                <span class="goal-text">Hit target 160g Protein intake threshold</span>
                            </li>
                            <li class="goal-item">
                                <div class="checkbox"></div>
                                <span class="goal-text">Complete evening flexibility & mobility protocol</span>
                            </li>
                        </ul>
                    </div>
                    <div class="dashboard-card ai-insights">
                        <h3>PulseAI Insight</h3>
                        <p class="insight-text">"Based on your active recovery score and sleep latency data from last night, your body is primed for high-intensity output today. Focus on heavy compound lifts."</p>
                    </div>
                </div>
            </section>

            <section id="workout" class="app-section">
                <div class="section-header">
                    <h2>AI Workout Architect</h2>
                    <p>Dynamic customized plans based on structural optimization targets.</p>
                </div>

                <div class="category-grid">
                    <div class="cat-card active">All Systems</div>
                    <div class="cat-card">Hypertrophy</div>
                    <div class="cat-card">Cardio / VO2 Max</div>
                    <div class="cat-card">Functional Mobility</div>
                </div>

                <div class="cards-grid">
                    <div class="workout-card">
                        <div class="workout-tag">Push Day</div>
                        <h3>Barbell Bench Press</h3>
                        <div class="workout-meta">
                            <span>Sets: <strong>4</strong></span>
                            <span>Reps: <strong>8-10</strong></span>
                            <span>Rest: <strong>90s</strong></span>
                        </div>
                        <p>Focus on structural control and concentric acceleration during explosive drives.</p>
                    </div>
                    <div class="workout-card">
                        <div class="workout-tag">Push Day</div>
                        <h3>Incline Dumbbell Flyes</h3>
                        <div class="workout-meta">
                            <span>Sets: <strong>3</strong></span>
                            <span>Reps: <strong>12</strong></span>
                            <span>Rest: <strong>60s</strong></span>
                        </div>
                        <p>Emphasize deep myofibrillar stretch under strict structural safety tolerances.</p>
                    </div>
                    <div class="workout-card">
                        <div class="workout-tag">Triceps</div>
                        <h3>Overhead Cable Extensions</h3>
                        <div class="workout-meta">
                            <span>Sets: <strong>4</strong></span>
                            <span>Reps: <strong>15</strong></span>
                            <span>Rest: <strong>60s</strong></span>
                        </div>
                        <p>Isolate the long head of the triceps. Keep elbows locked close to your profile.</p>
                    </div>
                </div>
            </section>

            <section id="diet" class="app-section">
                <div class="section-header">
                    <h2>Macronutrient Strategy</h2>
                    <p>Clean fuel tracking optimized dynamically for lean tissue synthesis.</p>
                </div>

                <div class="cards-grid">
                    <div class="diet-card">
                        <div class="diet-time">Breakfast (08:00)</div>
                        <h3>Pro-Glow Oatmeal Bowl</h3>
                        <div class="macro-badge-group">
                            <span class="macro-badge p">42g P</span>
                            <span class="macro-badge c">55g C</span>
                            <span class="macro-badge f">12g F</span>
                        </div>
                        <p>Whey protein isolate mixed with rolled oats, organic blueberries, and organic almond butter.</p>
                    </div>
                    <div class="diet-card">
                        <div class="diet-time">Lunch (13:00)</div>
                        <h3>Mediterranean Macro Plate</h3>
                        <div class="macro-badge-group">
                            <span class="macro-badge p">52g P</span>
                            <span class="macro-badge c">40g C</span>
                            <span class="macro-badge f">14g F</span>
                        </div>
                        <p>Flame-grilled wild salmon fillets served alongside nutrient-dense quinoa and grilled asparagus spears.</p>
                    </div>
                    <div class="diet-card">
                        <div class="diet-time">Dinner (19:30)</div>
                        <h3>Anabolic Beef Stir-fry</h3>
                        <div class="macro-badge-group">
                            <span class="macro-badge p">48g P</span>
                            <span class="macro-badge c">30g C</span>
                            <span class="macro-badge f">10g F</span>
                        </div>
                        <p>Lean shaved sirloin beef strips pan-seared with fresh broccoli florets, bell peppers, and low-sodium tamari.</p>
                    </div>
                </div>
            </section>

            <section id="bmi" class="app-section">
                <div class="section-header">
                    <h2>Biometric Index (BMI)</h2>
                    <p>Calculate your immediate body mass index baseline architecture.</p>
                </div>

                <div class="calculator-container">
                    <div class="input-group-row">
                        <div class="input-box">
                            <label for="weight">Weight (kg)</label>
                            <input type="number" id="weight" placeholder="e.g. 75" min="10" max="300">
                        </div>
                        <div class="input-box">
                            <label for="height">Height (cm)</label>
                            <input type="number" id="height" placeholder="e.g. 180" min="50" max="250">
                        </div>
                    </div>
                    <button class="primary-btn" onclick="calculateBMI()">Analyze Biometrics</button>

                    <div class="bmi-result-card" id="bmiResultCard">
                        <div class="result-score" id="bmiValue">--.-</div>
                        <div class="result-status" id="bmiStatus">Awaiting Data Input</div>
                        <p class="result-desc" id="bmiDesc">Please provide accurate current scaling weight metrics to let PulseAI compute baseline metrics.</p>
                    </div>
                </div>
            </section>

            <section id="water" class="app-section">
                <div class="section-header">
                    <h2>Hydration Matrix</h2>
                    <p>Monitor system fluid equilibrium metrics in real-time.</p>
                </div>

                <div class="water-tracker-container">
                    <div class="water-progress-circle">
                        <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" class="bg-circle"></circle>
                            <circle cx="50" cy="50" r="45" class="fill-circle" id="waterSvgCircle"></circle>
                        </svg>
                        <div class="water-text-overlay">
                            <span class="water-amount" id="waterMainVal">1.5</span>
                            <span class="water-unit">Liters Tracked</span>
                        </div>
                    </div>

                    <div class="water-controls">
                        <button class="water-btn" onclick="addWater(0.25)">+ 250ml</button>
                        <button class="water-btn" onclick="addWater(0.5)">+ 500ml</button>
                        <button class="water-btn target" onclick="resetWater()">Reset Matrix</button>
                    </div>
                </div>
            </section>

            <section id="progress" class="app-section">
                <div class="section-header">
                    <h2>Performance Metrics</h2>
                    <p>Historical telemetry data showcasing system trajectory mapping over time.</p>
                </div>

                <div class="progress-dashboard">
                    <div class="dashboard-card full-width">
                        <h3>Linear Transformation Timeline</h3>
                        <div class="chart-mockup">
                            <div class="chart-bar-wrapper"><div class="chart-bar" style="height: 40%"></div><span>Wk 1</span></div>
                            <div class="chart-bar-wrapper"><div class="chart-bar" style="height: 55%"></div><span>Wk 2</span></div>
                            <div class="chart-bar-wrapper"><div class="chart-bar" style="height: 70%"></div><span>Wk 3</span></div>
                            <div class="chart-bar-wrapper"><div class="chart-bar" style="height: 65%"></div><span>Wk 4</span></div>
                            <div class="chart-bar-wrapper"><div class="chart-bar" style="height: 85%"></div><span>Wk 5</span></div>
                            <div class="chart-bar-wrapper"><div class="chart-bar" style="height: 95%"></div><span>Wk 6</span></div>
                        </div>
                    </div>

                    <div class="stats-grid" style="margin-top: 2rem; width: 100%;">
                        <div class="stat-card">
                            <span class="stat-title">Lean Mass Accumulation</span>
                            <div class="stat-value" style="font-size: 2rem;">+4.2 kg</div>
                            <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem;">Verified by composite matrix</p>
                        </div>
                        <div class="stat-card">
                            <span class="stat-title">Adipose Tissue Deficit</span>
                            <div class="stat-value" style="font-size: 2rem; color: #ff5e62;">-3.8 %</div>
                            <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem;">Systemic reduction index</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </div>

    <script src="app.js"></script>
</body>
</html>

2. CSS (style.css)
Save the following code as style.css. It provides a clean dashboard layout, responsive styling, and fluid motion transitions.
CSS
/* --- Global Token & Variables Architecture --- */
:root {
    --bg-main: #0b0d11;
    --bg-sidebar: #12151c;
    --bg-card: #181c25;
    --bg-card-hover: #1f2532;
    --accent-primary: #2f80ed;
    --accent-success: #27ae60;
    --accent-warning: #f2994a;
    --text-main: #f8fafc;
    --text-muted: #64748b;
    --border-color: #232936;
    --font-stack: 'Plus Jakarta Sans', sans-serif;
    --sidebar-width: 260px;
    --transition-smooth: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* --- Base Resets --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
    background-color: var(--bg-main);
    color: var(--text-main);
    font-family: var(--font-stack);
    overflow-x: hidden;
    scroll-behavior: smooth;
}

/* --- App Structural Layout Layout --- */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--sidebar-width);
    height: 100vh;
    background-color: var(--bg-sidebar);
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
    z-index: 100;
    transition: var(--transition-smooth);
}

.main-wrapper {
    margin-left: var(--sidebar-width);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition: var(--transition-smooth);
}

/* --- Navigation Typography & Items --- */
.sidebar-logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 3rem;
    color: var(--text-main);
}

.logo-accent {
    color: var(--accent-primary);
}

.sidebar-menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.menu-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.85rem 1rem;
    color: var(--text-muted);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    font-size: 0.95rem;
    transition: var(--transition-smooth);
}

.menu-item:hover, .menu-item.active {
    color: var(--text-main);
    background-color: var(--bg-card);
}

.menu-item.active {
    border-left: 3px solid var(--accent-primary);
    border-radius: 0 8px 8px 0;
    padding-left: calc(1rem - 3px);
}

/* --- Top Navigation Header --- */
.top-bar {
    height: 70px;
    background-color: rgba(11, 13, 17, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    position: sticky;
    top: 0;
    z-index: 90;
}

.top-bar-title {
    font-size: 1.25rem;
    font-weight: 600;
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.user-info {
    text-align: right;
}

.user-name {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
}

.user-status {
    font-size: 0.75rem;
    color: var(--accent-primary);
}

.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 600;
}

/* --- Viewport Container Sections --- */
.content-container {
    padding: 2.5rem 2rem;
    flex-grow: 1;
}

.app-section {
    display: none;
    animation: fadeIn 0.4s ease-out forwards;
}

.app-section.active-section {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.section-header, .welcome-banner {
    margin-bottom: 2.5rem;
}

.section-header h2, .welcome-banner h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    letter-spacing: -0.5px;
}

.section-header p, .welcome-banner p {
    color: var(--text-muted);
    font-size: 1rem;
}

/* --- Layout Components Framework --- */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2.5rem;
}

.stat-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
    transition: var(--transition-smooth);
}

.stat-card:hover {
    transform: translateY(-2px);
    background-color: var(--bg-card-hover);
}

.stat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.stat-title {
    color: var(--text-muted);
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.stat-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    background: rgba(255,255,255,0.03);
}

.stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -1px;
}

.stat-unit {
    font-size: 0.85rem;
    color: var(--text-muted);
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 1rem;
}

/* Progress Bars */
.progress-bar-container {
    width: 100%;
    height: 6px;
    background-color: var(--border-color);
    border-radius: 10px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background-color: var(--accent-primary);
    border-radius: 10px;
    transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* --- Split & Sub-Card Panels --- */
.dashboard-split {
    display: grid;
    grid-template-columns: 1.6fr 1.4fr;
    gap: 1.5rem;
}

.dashboard-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
}

.dashboard-card h3 {
    margin-bottom: 1.25rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.goal-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.goal-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem;
    background-color: rgba(255,255,255,0.01);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.goal-item .checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-color);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: transparent;
    transition: var(--transition-smooth);
}

.goal-item.checked .checkbox {
    background-color: var(--accent-success);
    border-color: var(--accent-success);
    color: white;
}

.goal-item.checked .goal-text {
    text-decoration: line-through;
    color: var(--text-muted);
}

.insight-text {
    line-height: 1.6;
    color: #cbd5e1;
    font-style: italic;
    border-left: 3px solid var(--accent-primary);
    padding-left: 1rem;
}

/* --- Functional Content Modules --- */
.category-grid {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.cat-card {
    padding: 0.5rem 1.25rem;
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.cat-card.active, .cat-card:hover {
    background-color: var(--accent-primary);
    border-color: var(--accent-primary);
    color: var(--text-main);
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.workout-card, .diet-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: var(--transition-smooth);
}

.workout-card:hover, .diet-card:hover {
    transform: translateY(-4px);
    border-color: #3b82f6;
}

.workout-tag, .diet-time {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--accent-primary);
    letter-spacing: 0.5px;
}

.workout-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    background: rgba(255,255,255,0.02);
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    color: var(--text-muted);
}

.workout-meta strong { color: var(--text-main); }

.workout-card p, .diet-card p {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.5;
}

.macro-badge-group {
    display: flex;
    gap: 0.5rem;
}

.macro-badge {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
}

.macro-badge.p { background: rgba(47, 128, 237, 0.15); color: #2f80ed; }
.macro-badge.c { background: rgba(39, 174, 96, 0.15); color: #27ae60; }
.macro-badge.f { background: rgba(242, 153, 74, 0.15); color: #f2994a; }

/* --- BMI Calculator Specific Layouts --- */
.calculator-container {
    max-width: 500px;
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
}

.input-group-row {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.input-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.input-box label {
    font-size: 0.85rem;
    color: var(--text-muted);
    font-weight: 500;
}

.input-box input {
    background-color: var(--bg-main);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    color: var(--text-main);
    font-family: var(--font-stack);
    font-size: 1rem;
    transition: var(--transition-smooth);
}

.input-box input:focus {
    outline: none;
    border-color: var(--accent-primary);
}

.primary-btn {
    width: 100%;
    padding: 0.85rem;
    background-color: var(--accent-primary);
    border: none;
    border-radius: 8px;
    color: var(--text-main);
    font-family: var(--font-stack);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.primary-btn:hover { background-color: #2563eb; }

.bmi-result-card {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.result-score {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--accent-primary);
}

.result-status {
    font-size: 1.1rem;
    font-weight: 600;
}

.result-desc {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.5;
}

/* --- Water Intake Module Layouts --- */
.water-tracker-container {
    max-width: 400px;
    margin: 0 auto;
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.water-progress-circle {
    position: relative;
    width: 200px;
    height: 200px;
}

.water-progress-circle svg {
    transform: rotate(-90deg);
}

.bg-circle {
    fill: none;
    stroke: var(--border-color);
    stroke-width: 6;
}

.fill-circle {
    fill: none;
    stroke: #00d2ff;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-dasharray: 283;
    stroke-dashoffset: 283;
    transition: stroke-dashoffset 0.5s ease-out;
}

.water-text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.water-amount {
    display: block;
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-main);
    line-height: 1;
}

.water-unit {
    font-size: 0.85rem;
    color: var(--text-muted);
}

.water-controls {
    display: flex;
    gap: 0.75rem;
    width: 100%;
}

.water-btn {
    flex: 1;
    padding: 0.65rem 0;
    background-color: var(--bg-main);
    border: 1px solid var(--border-color);
    color: var(--text-main);
    border-radius: 6px;
    cursor: pointer;
    font-family: var(--font-stack);
    font-size: 0.85rem;
    font-weight: 500;
    transition: var(--transition-smooth);
}

.water-btn:hover { background-color: rgba(255,255,255,0.03); border-color: #00d2ff; }
.water-btn.target { border-color: rgba(239, 68, 68, 0.3); color: #ef4444; }
.water-btn.target:hover { background: rgba(239, 68, 68, 0.05); }

/* --- Progress History Chart Elements --- */
.full-width { grid-column: 1 / -1; }
.chart-mockup {
    height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-top: 1rem;
    border-bottom: 2px solid var(--border-color);
    gap: 10px;
}

.chart-bar-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    height: 100%;
    justify-content: flex-end;
}

.chart-bar {
    width: 100%;
    max-width: 45px;
    background: linear-gradient(to top, var(--accent-primary), #00d2ff);
    border-radius: 6px 6px 0 0;
    animation: barGrow 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    transform-origin: bottom;
}

@keyframes barGrow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
.chart-bar-wrapper span { font-size: 0.75rem; color: var(--text-muted); }

/* --- Mobile Toggle UI Mechanics --- */
.mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    width: 24px;
    background: none;
    border: none;
    cursor: pointer;
}

.mobile-toggle span {
    width: 100%;
    height: 2px;
    background-color: var(--text-main);
    transition: var(--transition-smooth);
}

/* --- Media Queries (Mobile First Layout Design) --- */
@media (max-width: 992px) {
    .sidebar {
        transform: translateX(-100%);
    }
    .sidebar.mobile-open {
        transform: translateX(0);
    }
    .main-wrapper {
        margin-left: 0;
    }
    .mobile-toggle {
        display: flex;
    }
    .dashboard-split {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 576px) {
    .content-container { padding: 1.5rem 1rem; }
    .top-bar { padding: 0 1rem; }
    .input-group-row { flex-direction: column; }
    .water-controls { flex-direction: column; }
}

3. JavaScript (app.js)
Save the following code as app.js. It manages view routing, goal completion triggers, animated statistic counters, BMI tracking formulas, and responsive menus.
JavaScript
// Global State Matrix Allocation
let state = {
    waterIntake: 1.5,
    waterTarget: 3.0
};

document.addEventListener("DOMContentLoaded", () => {
    initializeCounters();
    setupMobileNavigation();
    setupGoalCheckboxes();
    updateWaterUI();
});

// 1. Single Page Routing Switch Engine
function switchSection(sectionId) {
    // Structural view switching logic
    const sections = document.querySelectorAll('.app-section');
    sections.forEach(sec => sec.classList.remove('active-section'));
    
    const targetSection = document.getElementById(sectionId);
    if(targetSection) targetSection.classList.add('active-section');

    // Sidebar navigation active state tracking updates
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
        if(item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
        }
    });

    // Formatting modern contextual header titles
    const titleMap = {
        'landing': 'Dashboard',
        'workout': 'Workout Planner',
        'diet': 'Diet & Nutrition',
        'bmi': 'BMI Calculator',
        'water': 'Water Tracker',
        'progress': 'Progress Tracking'
    };
    document.getElementById('pageTitle').innerText = titleMap[sectionId] || 'Dashboard';

    // Auto close navigation drawers on small displays inside mobile workflows
    const sidebar = document.getElementById('sidebar');
    if(sidebar.classList.contains('mobile-open')) {
        toggleMobileMenu();
    }

    // Trigger explicit animation reruns if entering the performance graph metrics page
    if(sectionId === 'progress') {
        const bars = document.querySelectorAll('.chart-bar');
        bars.forEach(bar => {
            bar.style.animation = 'none';
            bar.offsetHeight; /* trigger reflow layout constraint */
            bar.style.animation = null;
        });
    }
}

// 2. Animated Numerical Telemetry Counter Engines
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-value[data-target]');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const speed = 40; // Control speed scalar mechanics
        const updateCount = () => {
            const current = +counter.innerText;
            const increment = Math.ceil(target / speed);
            if (current < target) {
                counter.innerText = Math.min(current + increment, target);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// 3. UI Mobile Sidebar Interaction Setup
function setupMobileNavigation() {
    const toggleBtn = document.getElementById('mobileToggle');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', toggleMobileMenu);
    }
}

function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('mobileToggle');
    sidebar.classList.toggle('mobile-open');
    toggleBtn.classList.toggle('open');
}

// 4. Interactive Goal Checklist Tracker
function setupGoalCheckboxes() {
    const items = document.querySelectorAll('.goal-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
        });
    });
}

// 5. Functional BMI Calculator Mechanics 
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // translate cm measurements to meters

    const resultCard = document.getElementById('bmiResultCard');
    const valueDisplay = document.getElementById('bmiValue');
    const statusDisplay = document.getElementById('bmiStatus');
    const descDisplay = document.getElementById('bmiDesc');

    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Please enter valid positive height and weight values.");
        return;
    }

    // Standard structural mathematical evaluation: BMI = kg / m^2
    const bmi = (weight / (height * height)).toFixed(1);
    valueDisplay.innerText = bmi;

    let status = "";
    let desc = "";
    let color = "#2f80ed"; // Default accent

    if (bmi < 18.5) {
        status = "Underweight Target Baseline";
        desc = "Your structural matrix indicates a lower than average mass calibration. Focus on programmatic caloric surpluses.";
        color = "#f2994a";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Optimal Biomass Equilibrium";
        desc = "Your composition registers inside a phenomenal structural efficiency zone. Maintain standard metabolic routines.";
        color = "#27ae60";
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight Profile Calibration";
        desc = "Systemic evaluation indicates modest volumetric mass variance. Minor programmatic thermodynamic adjustments advised.";
        color = "#f2994a";
    } else {
        status = "High Mass Variance Risk Zone";
        desc = "Elevated biometric loading vectors detected. Prioritize structured thermodynamic energy deficits alongside resistance training.";
        color = "#ef4444";
    }

    statusDisplay.innerText = status;
    statusDisplay.style.color = color;
    valueDisplay.style.color = color;
    descDisplay.innerText = desc;
}

// 6. Interactive Hydration Matrix State Engine
function addWater(amount) {
    state.waterIntake = Math.min(state.waterIntake + amount, state.waterTarget);
    updateWaterUI();
}

function resetWater() {
    state.waterIntake = 0;
    updateWaterUI();
}

function updateWaterUI() {
    // Main Section View Adjustments
    document.getElementById('waterMainVal').innerText = state.waterIntake.toFixed(2);
    
    // Circular Path Component Calculus (Radius = 45 -> Circumference = 2 * PI * r ~= 283)
    const circumference = 283;
    const progressPercent = state.waterIntake / state.waterTarget;
    const offset = circumference - (progressPercent * circumference);
    document.getElementById('waterSvgCircle').style.strokeDashoffset = offset;

    // Cross-Component Dashboard State Updates
    document.getElementById('dashWaterVal').innerText = state.waterIntake.toFixed(1);
    document.getElementById('dashWaterProgress').style.width = `${progressPercent * 100}%`;
}

4. Setup Instructions (README.md)
Save the text below as a standard markdown file (README.md) to finalize the file bundle.
Markdown
# PulseAI // Next-Gen Vanilla Frontend AI Fitness Planner

A minimalistic, modern dark-themed web application dashboard interface engineered for next-generation AI-assisted fitness and metric logging. Built completely on raw vanilla technologies (**HTML5**, **CSS3**, and **JavaScript**).

## 🚀 Architectural Layout Features
* **Single Page Application (SPA) Engine:** Completely fluid navigation transitions absent of framework overhead components.
* **Responsive Hybrid Grids:** Adaptive responsive viewport architecture shifting systematically between standard widescreen workspaces and optimized mobile interfaces.
* **Fully Functional Modules:** Built-in calculation layers including a structural BMI system logic engine and an interactive state-driven Hydration Tracking circle.
* **Polished Interface Aesthetics:** Fine-tuned modern visual aesthetics emphasizing high-end typography layout spacing, subtle hardware-accelerated transformation animations, and premium dashboard-style telemetry components.

## 🛠️ Step-by-Step System Launch Instructions

### Method 1: Local File Execution (Easiest)
1. Download or organize the code files (`index.html`, `style.css`, and `app.js`) inside an identical folder namespace.
2. Double-click or open `index.html` directly utilizing any modern secure internet browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge, or Apple Safari).

### Method 2: Development Server Emulation (Recommended)
To run within a local server instance framework for faster active debugging cycles:
1. Ensure you have **Visual Studio Code** installed.
2. Search for and install the **Live Server** plugin extension.
3. Open the repository root workspace directory in VS Code.
4. Click **"Go Live"** on the lower right-hand status tracking bar to spawn a local development environment instantly (`http://127.0.0.1:5500`).
