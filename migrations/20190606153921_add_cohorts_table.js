exports.up = function(knex, Promise) {
  return knex.schema.createTable("cohorts", function(tbl) {
    tbl.increments();

    // a varchar called name, 128, unique, not null
    tbl
      .integer("role_id")
      .string("name", 128)
      .notNullable()
      .unique();

    // Syntax for a foreign key
    tbl;
    // .integer("role_id")
    // .unsigned()
    // .references("id")
    // .inTable("roles")
    // .onDelete("CASCADE")
    // .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {};