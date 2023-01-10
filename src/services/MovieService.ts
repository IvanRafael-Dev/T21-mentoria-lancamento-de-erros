import { IMovieModel, Movie, MoviePayload } from '../models/MovieModel'
import { IMovieValidations } from './validations/MovieValidations'

export interface IMovieService {
  getAll: () => Promise<Movie[]>
  getById: (id: number) => Promise<Movie | void>
  add: (movie: MoviePayload) => Promise<Movie>
}

export default class MovieService implements IMovieService {
  private readonly movieModel: IMovieModel
  private readonly movieValidations: IMovieValidations
  constructor (movieModel: IMovieModel, movieValidations: IMovieValidations) {
    this.movieModel = movieModel
    this.movieValidations = movieValidations
  }

  async getAll (): Promise<Movie[]> {
    const movies = await this.movieModel.getAll()
    return movies
  }

  async getById (id: number): Promise<Movie | void> {
    const movie = await this.movieModel.getById(id)
    this.movieValidations.checkMovie(movie)
    return movie
  }

  async add (movie: MoviePayload): Promise<Movie> {
    this.movieValidations.checkNewMovieBody(movie)
    const addedMovie = await this.movieModel.add(movie)
    return addedMovie
  }
}
