import {pool} from './database.js'
import './dotenv.js'
import flowers from '../data/flowers.js'

const createFlowersTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS flowers;

    CREATE TABLE IF NOT EXISTS flowers (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255) NOT NULL,
        emoji VARCHAR(20) NOT NULL,
        family VARCHAR(255) NOT NULL,
        origin VARCHAR(255) NOT NULL,
        bloom_season VARCHAR(255) NOT NULL,
        color VARCHAR(255) NOT NULL,
        description TEXT NOT NULL
    )
`
try {
    const res = await pool.query(createTableQuery)
    console.log('Flowers table created successfully.')
} catch (err) {
    console.error('Error creating Flowers table:', err)
}
}

const seedFlowersTable = async () => {
    await createFlowersTable()

    for (const flower of flowers) {
        const insertQuery = {
            text: `INSERT INTO flowers
                   (slug, name, emoji, family, origin, bloom_season, color, description)
                   VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
        }

        const values = [
            flower.slug,
            flower.name,
            flower.emoji,
            flower.family,
            flower.origin,
            flower.bloomSeason,
            flower.color,
            flower.description
        ]

        try {
            await pool.query(insertQuery, values)
            console.log(`✅ ${flower.name} added successfully`)
        } catch (err) {
            console.error('⚠️ error inserting flower', err)
        }
    }

    await pool.end()
}

seedFlowersTable()