import express from 'express'
import controllers from '../controllers'

const router = express.Router()

if (process.env.NODE_ENV === 'production') {
  // serve build
  router.get('*', controllers.getBuildIndex)
}

router.get('/projects', controllers.getAllProjects)

router.get('/projects/:project_title', controllers.getProject)

router.get('/stack', controllers.getMyStack)

export default router
