exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('deion').nullable();
    table.timeStamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks');
};
