
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        {name: 'Bench Press', region: 'chest'},
        {name: 'Barbell Pullover', region: 'chest'},
        {name: 'Push Ups', region: 'chest'},
        {name: 'Squats', region: 'legs'},
        {name: 'Lunge', region: 'legs'},
        {name: 'Calf Raise', region: 'legs'},
        {name: 'Deadlift', region: 'back'},
        {name: 'Bent Over Row', region: 'back'},
        {name: 'Power Clean', region: 'back'},
        {name: 'Bicep Curl', region: 'arms'},
        {name: 'Tricep Extension', region: 'arms'},
        {name: 'Reverse Curl', region: 'arms'},
        {name: 'Shoulder Shrug', region: 'shoulders'},
        {name: 'Military Press', region: 'shoulders'},
        {name: 'Upright Row', region: 'shoulders'},
      ]);
    });
};
