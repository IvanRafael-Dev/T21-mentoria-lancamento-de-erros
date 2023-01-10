import { Router } from 'express'
import makeMovieController from './factories/movieController'

const movieController = makeMovieController()

const route = Router()

route.get('/', (req, res) => movieController.getAll(req, res))
route.get('/:id', (req, res) => movieController.getById(req, res))
route.post('/', (req, res) => movieController.add(req, res))

export default route
