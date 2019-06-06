exports.up = function(knex, Promise) {
  return knex.schema.createTable("cohorts1", function(tbl) {
    //id
    tbl.increments();
    //name
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cohorts");
};
