const createTableUsers = require("./createTableUsers");
const sqliteConnection = require("../../sqlite");

async function migrationsRun() {
    const schema = [createTableUsers].join('');

    sqliteConnection()
    .then(db => db.exec(schema))
    .catch(error => console.error(error))
}

module.exports = migrationsRun;
