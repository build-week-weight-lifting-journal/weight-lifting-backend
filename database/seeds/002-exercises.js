
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        {name: 'Bench Press', region: 'Chest', reps: '6', sets: '4', weight: '150lbs'},
        {name: 'Barbell Pullover', region: 'Chest', reps: '6', sets: '4', weight: '150lbs'},
        {name: 'Push Ups', region: 'Chest', reps: '20', sets: '4', weight: '200lbs'},
        {name: 'Squats', region: 'Legs', reps: '6', sets: '4', weight: '200lbs'},
        {name: 'Lunge', region: 'Legs', reps: '10', sets: '2', weight: '50lbs'},
        {name: 'Calf Raise', region: 'Legs', reps: '3', sets: '1', weight: '300lbs'},
        {name: 'Deadlift', region: 'Back', reps: '3', sets: '2', weight: '500lbs'},
        {name: 'Bent Over Row', region: 'Back', reps: '10', sets: '4', weight: '130lbs'},
        {name: 'Power Clean', region: 'Back', reps: '10', sets: '1', weight: '100lbs'},
        {name: 'Bicep Curl', region: 'Arms', reps: '15', sets: '3', weight: '15lbs'},
        {name: 'Tricep Extension', region: 'Arms', reps: '8', sets: '3', weight: '20lbs'},
        {name: 'Reverse Curl', region: 'Arms', reps: '15', sets: '3', weight: '15lbs'},
        {name: 'Shoulder Shrug', region: 'Shoulders', reps: '10', sets: '3', weight: '50lbs'},
        {name: 'Military Press', region: 'Shoulders', reps: '5', sets: '3', weight: '50lbs'},
        {name: 'Upright Row', region: 'Shoulders', reps: '15', sets: '3', weight: '40lbs'},
      ]);
    });
};
