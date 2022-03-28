// const connectionString = 'postgres://hbyspwzd:0dI3TsfolCKAyBi5CrsZGfOZIQwJyJXr@tuffi.db.elephantsql.com/hbyspwzd'
// const database = postgres(connectionString)

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'test',
    define: {
        timestamps: false,
        underscored: true
    }
}
