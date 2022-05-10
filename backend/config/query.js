const db = require('./database')

exports.getCategory = () => db.query('select * from category')

exports.getCategoryById = id => db.query('select * from category where id= $1', id)

exports.insertCategory = categoryName => db.query('insert into category (name) values ($1)', categoryName)

exports.updateCategory = (id, newName) => db.query('update category set name = $1 where id_cat = $2', [newName, id])

exports.deleteCategory = id => db.query('delete from category where id_cat = $1', id)
