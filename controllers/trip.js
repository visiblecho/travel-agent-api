import express from 'express'
import Trip from '../models/trip.js'

const router = express.Router()

/* Trips ------------------------------------------------------------------- */

// * Index
router.get('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error)
  }
})

// * Create
router.post('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error)
  }
})

// * Show
router.get('/:tripId', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error)
  }
})

// * Update
router.put('/:tripId', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error)
  }
})

// * Delete
router.delete('/:tripId', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error)
  }
})

/* Activities -------------------------------------------------------------- */

// * Index
router.get('/:tripId/activities/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error)
  }
})

// * Create
router.post('/:tripId/activities/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error)
  }
})

// * Show
router.get('/:tripId/activities/:actId', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error)
  }
})

// * Update
router.put('/:tripId/activities/:actId', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error)
  }
})

// * Delete
router.delete('/:tripId/activities/:actId', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error)
  }
})

/* Export ------------------------------------------------------------------ */

export default router
