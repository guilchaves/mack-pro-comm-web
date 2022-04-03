require('dotenv').config()

module.exports = {
    dialect: 'postgres',
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: false,
        underscored: true
    }
}
