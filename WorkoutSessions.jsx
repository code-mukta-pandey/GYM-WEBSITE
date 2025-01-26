import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Discover your ultimate fitness goals with our expert routines. Transform, engage, and excel. Reach new heights, push limits, and feel amazing!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Level up your fitness journey with dynamic training programs. Achieve, adapt, and thrive with sessions designed for every skill level!
        </p>
        <div className="bootcamps">
          <div>
            <h4>Fitness redefined with expert-led programs designed for you</h4>
            <p>
              Unlock your true potential with guided workouts tailored for you
              Stay motivated, achieve goals, and transform your fitness journey!
            </p>
          </div>
          <div>
            <h4>Achieve Your Fitness Goals, Transform Your Life</h4>
            <p>
              Achieve lasting results with personalized fitness journeys.
              Empower your body, mind, and spirit for a transformative lifestyle!
            </p>
          </div>
          <div>
            <h4>Strength in Every Move, Power in Every Goal</h4>
            <p>
              Every workout brings you closer to your goals. Our expert-designed sessions help you build strength, boost endurance, and stay motivated—no matter where you start.!
            </p>
          </div>
          <div>
            <h4>Build Your Best Self, One Step at a Time</h4>
            <p>
              Every small effort adds up to big changes. Begin your fitness journey with us and take control of your health, one workout at a time. You’ve got this!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
