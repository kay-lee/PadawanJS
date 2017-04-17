const db = require('../index.js');
const data = require('./data.js');

db.knex.schema.hasTable('users')
.then(() => {
  return db.knex('users').insert(data.users);
})
.then(() => {
  return db.knex('events').insert(data.events);
})
.then(() => {
  return db.knex('resources').insert(data.resources);
})
.then(() => {
  return db.knex('users_events').insert(data.users_events);
});
