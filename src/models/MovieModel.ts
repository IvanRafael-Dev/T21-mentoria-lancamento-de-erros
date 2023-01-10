// o retorno do banco de dados
export interface Movie {
  id: number
  title: string
  genre: string
  year: number
}

// o body da requisicao na criaçao de novo filme
export interface MoviePayload {
  title: string
  genre: string
  year: number
}

// contrato do model
export interface IMovieModel {
  getAll: () => Promise<Movie[]>
  getById: (id: number) => Promise<Movie | undefined>
  add: (movie: MoviePayload) => Promise<Movie>
}

const movieDatabase = [
  { id: 1, title: 'Interestelar', genre: 'fiction', year: 2014 },
  { id: 2, title: 'Contact', genre: 'fiction', year: 2000 }
] as Movie[]

export default class MovieModel implements IMovieModel {
  async getAll (): Promise<Movie[]> {
    return movieDatabase
  }

  async getById (id: number): Promise<Movie | undefined> {
    const movie = movieDatabase.find((movie) => movie.id === id)
    return movie as Movie
  }

  async add (movie: MoviePayload): Promise<Movie> {
    const lastMovieId = movieDatabase[movieDatabase.length - 1].id
    const newMovie = { id: lastMovieId + 1, ...movie }
    movieDatabase.push(newMovie)
    return newMovie
  }
}
