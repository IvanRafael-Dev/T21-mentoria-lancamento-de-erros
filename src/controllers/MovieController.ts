import { Request, Response } from 'express'
import { IMovieService } from './../services/MovieService'

export default class MovieController {
  private readonly movieService: IMovieService
  constructor (movieService: IMovieService) {
    this.movieService = movieService
  }

  async getAll (_request: Request, response: Response): Promise<Response> {
    const movies = await this.movieService.getAll()
    return response.status(200).json(movies)
  }

  async getById (request: Request, response: Response): Promise<Response> {
    const movie = await this.movieService.getById(+request.params.id)
    return response.status(200).json(movie)
  }

  async add (request: Request, response: Response): Promise<Response> {
    const newMovie = await this.movieService.add(request.body)
    return response.status(200).json(newMovie)
  }
}
