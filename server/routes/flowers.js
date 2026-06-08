import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import flowers from '../data/flowers.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(flowers)
})

router.get('/:slug', (req, res) => {
  const flower = flowers.find((f) => f.slug === req.params.slug)

  if (!flower) {
    return res.status(404).json({ error: 'Flower not found' })
  }

  res.status(200).json(flower)
})

export default router
