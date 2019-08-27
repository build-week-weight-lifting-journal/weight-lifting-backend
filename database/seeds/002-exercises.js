
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        {name: 'Bench Press', region: 'Chest'},
        {name: 'Barbell Pullover', region: 'Chest'},
        {name: 'Push Ups', region: 'Chest'},
        {name: 'Squats', region: 'Legs'},
        {name: 'Lunge', region: 'Legs'},
        {name: 'Calf Raise', region: 'Legs'},
        {name: 'Deadlift', region: 'Back'},
        {name: 'Bent Over Row', region: 'Back'},
        {name: 'Power Clean', region: 'Back'},
        {name: 'Bicep Curl', region: 'Arms'},
        {name: 'Tricep Extension', region: 'Arms'},
        {name: 'Reverse Curl', region: 'Arms'},
        {name: 'Shoulder Shrug', region: 'Shoulders'},
        {name: 'Military Press', region: 'Shoulders'},
        {name: 'Upright Row', region: 'Shoulders'},
      ]);
    });
};
