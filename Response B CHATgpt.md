Project Structure
ai-fitness-planner/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
   └── images/

index.html
<!DOCTYPE html>
<html lang="en">

<head>

 <meta charset="UTF-8" />

 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

 <title>AI Fitness Planner</title>

 <link rel="stylesheet" href="style.css">

</head>

<body>



 <!-- Sidebar -->

 <aside class="sidebar" id="sidebar">

   <div class="logo">FIT.AI</div>



   <nav>

     <a href="#home">Home</a>

     <a href="#workout">Workout</a>

     <a href="#diet">Diet</a>

     <a href="#bmi">BMI</a>

     <a href="#water">Water</a>

     <a href="#progress">Progress</a>

   </nav>

 </aside>



 <!-- Main Content -->

 <main class="main">



   <!-- Top Navbar -->

   <header class="topbar">

     <button class="menu-btn" id="menuBtn">☰</button>

     <h1>AI Fitness Planner</h1>

   </header>



   <!-- Hero Section -->

   <section class="hero" id="home">

     <div class="hero-content">

       <h2>Transform Your Body With AI</h2>

       <p>

         Smart workout planning, personalized diet suggestions,

         BMI tracking, hydration monitoring, and fitness progress — all in one place.

       </p>



       <button class="primary-btn">Start Your Journey</button>

     </div>

   </section>



   <!-- Statistics -->

   <section class="stats-section">

     <div class="stat-card">

       <h3 id="workoutCount">0</h3>

       <p>Workouts</p>

     </div>



     <div class="stat-card">

       <h3 id="calorieCount">0</h3>

       <p>Calories Burned</p>

     </div>



     <div class="stat-card">

       <h3 id="waterCount">0</h3>

       <p>Water Intake</p>

     </div>

   </section>



   <!-- Workout Planner -->

   <section id="workout">

     <div class="section-title">

       <h2>Workout Planner</h2>

     </div>



     <div class="card-grid">



       <div class="workout-card">

         <h3>Chest Workout</h3>

         <p>Pushups, Bench Press, Incline Press</p>

         <button>View Plan</button>

       </div>



       <div class="workout-card">

         <h3>Leg Workout</h3>

         <p>Squats, Lunges, Deadlifts</p>

         <button>View Plan</button>

       </div>



       <div class="workout-card">

         <h3>Core Workout</h3>

         <p>Plank, Crunches, Leg Raises</p>

         <button>View Plan</button>

       </div>



     </div>

   </section>



   <!-- Exercise Categories -->

   <section>

     <div class="section-title">

       <h2>Exercise Categories</h2>

     </div>



     <div class="exercise-grid">

       <div class="exercise-card">Strength</div>

       <div class="exercise-card">Cardio</div>

       <div class="exercise-card">Yoga</div>

       <div class="exercise-card">HIIT</div>

     </div>

   </section>



   <!-- Diet Planner -->

   <section id="diet">

     <div class="section-title">

       <h2>Diet Planner</h2>

     </div>



     <div class="diet-grid">



       <div class="diet-card">

         <h3>Breakfast</h3>

         <p>Oats, Eggs, Banana, Peanut Butter</p>

       </div>



       <div class="diet-card">

         <h3>Lunch</h3>

         <p>Rice, Chicken, Salad, Yogurt</p>

       </div>



       <div class="diet-card">

         <h3>Dinner</h3>

         <p>Paneer, Vegetables, Brown Bread</p>

       </div>



     </div>

   </section>



   <!-- BMI Calculator -->

   <section id="bmi">

     <div class="section-title">

       <h2>BMI Calculator</h2>

     </div>



     <div class="bmi-box">

       <input type="number" id="height" placeholder="Height (cm)">

       <input type="number" id="weight" placeholder="Weight (kg)">



       <button onclick="calculateBMI()">Calculate BMI</button>



       <h3 id="bmiResult">Your BMI: --</h3>

     </div>

   </section>



   <!-- Water Tracker -->

   <section id="water">

     <div class="section-title">

       <h2>Water Intake Tracker</h2>

     </div>



     <div class="water-box">



       <div class="progress-circle">

         <span id="waterValue">0%</span>

       </div>



       <button onclick="increaseWater()">Add Glass</button>



     </div>

   </section>



   <!-- Daily Goals -->

   <section>

     <div class="section-title">

       <h2>Daily Goals</h2>

     </div>



     <div class="goal-box">



       <div class="goal">

         <p>Workout Completion</p>

         <div class="progress-bar">

           <div class="progress progress1"></div>

         </div>

       </div>



       <div class="goal">

         <p>Hydration Goal</p>

         <div class="progress-bar">

           <div class="progress progress2"></div>

         </div>

       </div>



       <div class="goal">

         <p>Calories Goal</p>

         <div class="progress-bar">

           <div class="progress progress3"></div>

         </div>

       </div>



     </div>

   </section>



   <!-- Progress Tracking -->

   <section id="progress">

     <div class="section-title">

       <h2>Progress Tracking</h2>

     </div>



     <div class="progress-cards">



       <div class="track-card">

         <h3>Weight Progress</h3>

         <p>-4 KG This Month</p>

       </div>



       <div class="track-card">

         <h3>Workout Streak</h3>

         <p>22 Days</p>

       </div>



       <div class="track-card">

         <h3>Calories Burned</h3>

         <p>12,400 kcal</p>

       </div>



     </div>

   </section>



 </main>



 <script src="script.js"></script>

</body>

</html>

style.css
* {

 margin: 0;

 padding: 0;

 box-sizing: border-box;

}



html {

 scroll-behavior: smooth;

}



body {

 background: #0f1117;

 color: white;

 font-family: Arial, sans-serif;

 display: flex;

}



/* Sidebar */



.sidebar {

 width: 250px;

 background: #161b22;

 height: 100vh;

 position: fixed;

 padding: 30px 20px;

 border-right: 1px solid #222;

 transition: 0.3s;

}



.logo {

 font-size: 28px;

 font-weight: bold;

 margin-bottom: 50px;

}



.sidebar nav {

 display: flex;

 flex-direction: column;

 gap: 20px;

}



.sidebar nav a {

 color: #ccc;

 text-decoration: none;

 transition: 0.3s;

}



.sidebar nav a:hover {

 color: white;

 transform: translateX(5px);

}



/* Main */



.main {

 margin-left: 250px;

 width: 100%;

 padding: 30px;

}



/* Navbar */



.topbar {

 display: flex;

 align-items: center;

 justify-content: space-between;

 margin-bottom: 40px;

}



.menu-btn {

 display: none;

 background: #222;

 border: none;

 color: white;

 padding: 10px 15px;

 border-radius: 8px;

 cursor: pointer;

}



/* Hero */



.hero {

 background: linear-gradient(135deg, #1c1f2b, #13161f);

 padding: 60px;

 border-radius: 20px;

 margin-bottom: 40px;

}



.hero h2 {

 font-size: 48px;

 margin-bottom: 20px;

}



.hero p {

 color: #bbb;

 line-height: 1.6;

 max-width: 700px;

}



.primary-btn {

 margin-top: 25px;

 padding: 14px 28px;

 background: white;

 color: black;

 border: none;

 border-radius: 12px;

 cursor: pointer;

 font-weight: bold;

 transition: 0.3s;

}



.primary-btn:hover {

 transform: scale(1.05);

}



/* Stats */



.stats-section {

 display: grid;

 grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

 gap: 20px;

 margin-bottom: 50px;

}



.stat-card {

 background: #161b22;

 padding: 30px;

 border-radius: 20px;

 text-align: center;

 transition: 0.3s;

}



.stat-card:hover {

 transform: translateY(-5px);

}



.stat-card h3 {

 font-size: 40px;

 margin-bottom: 10px;

}



/* Sections */



section {

 margin-bottom: 60px;

}



.section-title {

 margin-bottom: 25px;

}



.section-title h2 {

 font-size: 32px;

}



/* Cards */



.card-grid,

.diet-grid,

.progress-cards,

.exercise-grid {

 display: grid;

 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

 gap: 20px;

}



.workout-card,

.diet-card,

.track-card,

.exercise-card {

 background: #161b22;

 padding: 25px;

 border-radius: 20px;

 transition: 0.3s;

}



.workout-card:hover,

.diet-card:hover,

.track-card:hover,

.exercise-card:hover {

 transform: translateY(-8px);

}



.workout-card button {

 margin-top: 20px;

 padding: 10px 18px;

 border: none;

 border-radius: 10px;

 background: white;

 cursor: pointer;

}



/* BMI */



.bmi-box {

 background: #161b22;

 padding: 30px;

 border-radius: 20px;

 max-width: 500px;

}



.bmi-box input {

 width: 100%;

 padding: 15px;

 margin-bottom: 15px;

 background: #0f1117;

 border: 1px solid #333;

 color: white;

 border-radius: 12px;

}



.bmi-box button {

 width: 100%;

 padding: 15px;

 border: none;

 border-radius: 12px;

 cursor: pointer;

 background: white;

 font-weight: bold;

}



/* Water Tracker */



.water-box {

 background: #161b22;

 padding: 30px;

 border-radius: 20px;

 text-align: center;

 max-width: 400px;

}



.progress-circle {

 width: 180px;

 height: 180px;

 border-radius: 50%;

 border: 10px solid #2a2f3d;

 margin: 20px auto;

 display: flex;

 align-items: center;

 justify-content: center;

 font-size: 32px;

}



.water-box button {

 padding: 14px 25px;

 border: none;

 border-radius: 10px;

 cursor: pointer;

 font-weight: bold;

}



/* Goals */



.goal-box {

 background: #161b22;

 padding: 30px;

 border-radius: 20px;

}



.goal {

 margin-bottom: 25px;

}



.progress-bar {

 height: 14px;

 background: #2b2f3b;

 border-radius: 20px;

 overflow: hidden;

 margin-top: 10px;

}



.progress {

 height: 100%;

 border-radius: 20px;

 background: white;

}



.progress1 {

 width: 80%;

}



.progress2 {

 width: 60%;

}



.progress3 {

 width: 70%;

}



/* Responsive */



@media(max-width: 900px) {



 .sidebar {

   left: -260px;

   z-index: 1000;

 }



 .sidebar.active {

   left: 0;

 }



 .main {

   margin-left: 0;

 }



 .menu-btn {

   display: block;

 }



 .hero {

   padding: 35px;

 }



 .hero h2 {

   font-size: 36px;

 }

}



@media(max-width: 600px) {



 .hero h2 {

   font-size: 28px;

 }



 .main {

   padding: 20px;

 }

}

script.js
// Sidebar Toggle



const menuBtn = document.getElementById("menuBtn");

const sidebar = document.getElementById("sidebar");



menuBtn.addEventListener("click", () => {

 sidebar.classList.toggle("active");

});



// BMI Calculator



function calculateBMI() {



 const height = document.getElementById("height").value / 100;

 const weight = document.getElementById("weight").value;



 const bmi = (weight / (height * height)).toFixed(1);



 let result = "";



 if (bmi < 18.5) {

   result = "Underweight";

 } else if (bmi < 25) {

   result = "Normal";

 } else if (bmi < 30) {

   result = "Overweight";

 } else {

   result = "Obese";

 }



 document.getElementById(

   "bmiResult"

 ).innerHTML = `Your BMI: ${bmi} (${result})`;

}



// Water Intake Tracker



let water = 0;



function increaseWater() {



 if (water < 100) {

   water += 10;

 }



 document.getElementById("waterValue").innerText = `${water}%`;

}



// Animated Counters



function animateCounter(id, target) {



 let count = 0;



 const element = document.getElementById(id);



 const interval = setInterval(() => {



   count++;



   element.innerText = count;



   if (count >= target) {

     clearInterval(interval);

   }



 }, 30);

}



animateCounter("workoutCount", 120);

animateCounter("calorieCount", 850);

animateCounter("waterCount", 75);



// Progress Animation



window.addEventListener("load", () => {



 document.querySelectorAll(".progress").forEach((bar) => {



   const width = bar.style.width;



   bar.style.width = "0";



   setTimeout(() => {

     bar.style.width = width;

   }, 300);



 });



});
