exports.up = function (knex, Promise) {
  return knex.schema.createTable("students1", function (tbl) {
    //id
    tbl.increments();
    //name
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
    tbl
      .integer("students_id")
      .unsigned()
      .references("id")
      .inTable("cohorts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};