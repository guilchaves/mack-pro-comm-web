const postgres = require('pg-promise')()
const connectionString = 'postgres://hbyspwzd:0dI3TsfolCKAyBi5CrsZGfOZIQwJyJXr@tuffi.db.elephantsql.com/hbyspwzd'

const database = postgres(connectionString)
// const database = postgres({
//     user: 'postgres',
//     password: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     database: 'test'
// })

module.exports = database
