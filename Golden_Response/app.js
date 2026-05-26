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