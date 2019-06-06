exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", function(tbl) {
    tbl.increments();

    // a varchar called name, 128, unique, not null
    tbl
      .integer("role_id")
      .string("name", 128)
      .integer("role_id")
      .notNullable()
      .unique();

    // Syntax for a foreign key
    // tbl
    //   .integer("role_id")
    //   .unsigned()
    //   .references("id")
    //   .inTable("roles")
    //   .onDelete("CASCADE")
    //   .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {};
