const { resolve } = require('./file-resolver')

const fileName = resolve();

console.log(`Resolve config filename ${fileName}`);
require('dotenv').config({ path: fileName });

const REQUIRED_KEYS = [
    'DB_HOST',
    'DB_USERNAME',
    'DB_PASSWORD',
    'DB_DATABASE'
];

REQUIRED_KEYS.forEach((key) => {
    if (!(key in process.env)) {
        throw new Error(`Missing required config key: ${key}`);
    }
});

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    DB_PORT = 3306,
} = process.env;

var sqlConfig = {
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
    multipleStatements: true,
    dateStrings: 'date',
    connectTimeout: 9999999
}

const config = {
    config: sqlConfig,
    knex: require('knex')({
        client: 'mysql',
        debug: true,
        connection: sqlConfig,
        acquireConnectionTimeout: 4 * 1000
    })
}


module.exports = config;