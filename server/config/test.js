import { pool } from './database.js'

try {
    const result = await pool.query('SELECT NOW()')
    console.log('Connected:', result.rows[0])
} catch (err) {
    console.error('Connection failed:', err.message)
} finally {
    await pool.end()
}