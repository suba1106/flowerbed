import { pool } from '../config/database.js'

const flowerColumns = `id, slug, name, emoji, family, origin,
    bloom_season AS "bloomSeason", color, description`

const getFlowers = async (req, res) => {
    try {
        const results = await pool.query(
            `SELECT ${flowerColumns} FROM flowers ORDER BY id ASC`
        )
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getFlowerBySlug = async (req, res) => {
    try {
        const results = await pool.query(
            `SELECT ${flowerColumns} FROM flowers WHERE slug = $1`,
            [req.params.slug]
        )

        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Flower not found' })
        }

        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default { getFlowers, getFlowerBySlug }