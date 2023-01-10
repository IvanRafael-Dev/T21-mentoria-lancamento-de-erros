import MovieController from '../../controllers/MovieController'
import MovieModel from '../../models/MovieModel'
import MovieService from '../../services/MovieService'
import MovieValidations from '../../services/validations/MovieValidations'

const makeMovieController = (): MovieController => {
  const movieModel = new MovieModel()
  const movieValidations = new MovieValidations()
  const movieService = new MovieService(movieModel, movieValidations)
  const movieController = new MovieController(movieService)
  return movieController
}

export default makeMovieController
