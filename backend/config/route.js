const express = require('express')
const router = express.Router()
const data = require('./query')

router.get('/category', async (req, res) => {
    const categories = await data.getCategory()
    if (categories.length === 0) {
        return res.status(204).end()
    }

    return res.json(categories).status(200).end()
})

router.post('/category', async (req, res) => {
    const { name } = req.body
    await data.insertCategory(name)

    return res.status(201).end()
})

router.put('/category/:id', async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    await data.updateCategory(id, name)

    return res.status(200).end()
})

router.delete('/category/:id', async (req, res) => {
    const { id } = req.params
    await data.deleteCategory(id)

    return res.status(200).end()
})

module.exports = router