import './dotenv.js'
import { pool } from './database.js'

const result = await pool.query('SELECT id, slug, name FROM flowers ORDER BY id')
console.log(result.rows)
await pool.end()