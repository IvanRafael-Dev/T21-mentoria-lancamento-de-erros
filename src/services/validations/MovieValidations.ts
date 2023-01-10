import { MoviePayload } from './../../models/MovieModel'
import InvalidParamError from '../../errors/invalid-param-error'
import MissingParamError from '../../errors/missing-param-error'
import NotFoundError from '../../errors/not-found-error'
import { Movie } from '../../models/MovieModel'

export interface IMovieValidations {
  checkMovie: (movie: Movie | undefined) => void
  checkMovieTitle: (title: string) => void
  checkMovieGenre: (genre: string) => void
  checkMovieYear: (year: number) => void
  checkNewMovieBody: (movie: MoviePayload) => void
}

export default class MovieValidations implements IMovieValidations {
  checkMovie = (movie: Movie | undefined): void => {
    if (!movie) {
      throw new NotFoundError('Filme não encontrado')
    }
  }

  checkMovieTitle = (title: string): void => {
    if (!title) {
      throw new MissingParamError('O parâmetro "title" é obrigatório')
    }

    if (title.length < 4) {
      throw new InvalidParamError('O parametro "title" deve conter mais do que 3 caracteres')
    }
  }

  checkMovieGenre = (genre: string): void => {
    if (!genre) {
      throw new MissingParamError('O parâmetro "genre" é obrigatório')
    }

    if (genre.length < 4) {
      throw new InvalidParamError('O parametro "genre" deve conter mais do que 3 caracteres')
    }
  }

  checkMovieYear = (year: number): void => {
    if (!year) {
      throw new MissingParamError('O parâmetro "year" é obrigatório')
    }

    if (typeof year !== 'number') {
      throw new InvalidParamError('O parametro "year" deve ser do tipo "number"')
    }
  }

  checkNewMovieBody = (movie: MoviePayload): void => {
    this.checkMovieTitle(movie.title)
    this.checkMovieGenre(movie.genre)
    this.checkMovieYear(movie.year)
  }
}
