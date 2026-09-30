import express from 'express'
import FlowerController from '../controllers/flowers.js'

const router = express.Router()

router.get('/', FlowerController.getFlowers)
router.get('/:slug', FlowerController.getFlowerBySlug)

export default router