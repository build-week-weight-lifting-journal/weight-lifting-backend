
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('journalsExercises').del()
    .then(function () {
      // Inserts seed entries
      return knex('journalsExercises').insert([
        {weight: '100lbs', reps: 5, sets: 5, journalId: 1, exerciseId: 1},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 1, exerciseId: 4},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 1, exerciseId: 7},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 1, exerciseId: 10},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 1, exerciseId: 13},

        {weight: '100lbs', reps: 5, sets: 5, journalId: 2, exerciseId: 2},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 2, exerciseId: 5},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 2, exerciseId: 8},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 2, exerciseId: 11},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 2, exerciseId: 14},

        {weight: '100lbs', reps: 5, sets: 5, journalId: 3, exerciseId: 3},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 3, exerciseId: 9},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 3, exerciseId: 12},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 3, exerciseId: 15},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 3, exerciseId: 1},
        
        {weight: '100lbs', reps: 5, sets: 5, journalId: 4, exerciseId: 4},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 4, exerciseId: 7},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 4, exerciseId: 11},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 4, exerciseId: 14},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 4, exerciseId: 2},

        {weight: '100lbs', reps: 5, sets: 5, journalId: 5, exerciseId: 5},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 5, exerciseId: 5},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 5, exerciseId: 5},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 5, exerciseId: 5},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 5, exerciseId: 5},

        {weight: '100lbs', reps: 5, sets: 5, journalId: 6, exerciseId: 6},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 6, exerciseId: 6},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 6, exerciseId: 6},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 6, exerciseId: 6},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 6, exerciseId: 6},

        {weight: '100lbs', reps: 5, sets: 5, journalId: 7, exerciseId: 7},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 7, exerciseId: 7},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 7, exerciseId: 7},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 7, exerciseId: 7},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 7, exerciseId: 7},

        {weight: '100lbs', reps: 5, sets: 5, journalId: 8, exerciseId: 8},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 8, exerciseId: 8},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 8, exerciseId: 8},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 8, exerciseId: 8},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 8, exerciseId: 8},

        {weight: '100lbs', reps: 5, sets: 5, journalId: 9, exerciseId: 9},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 9, exerciseId: 9},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 9, exerciseId: 9},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 9, exerciseId: 9},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 9, exerciseId: 9},

        {weight: '100lbs', reps: 5, sets: 5, journalId: 10, exerciseId: 10},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 10, exerciseId: 10},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 10, exerciseId: 10},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 10, exerciseId: 10},
        {weight: '100lbs', reps: 5, sets: 5, journalId: 10, exerciseId: 10},
      ]);
    });
};
