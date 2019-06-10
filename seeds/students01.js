exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Mindy Allen", cohorts_id: 1 },
        { name: "Krissy Payne", cohorts_id: 3 },
        { name: "Deirdre Moss", cohorts_id: 2 }
      ]);
    });
};