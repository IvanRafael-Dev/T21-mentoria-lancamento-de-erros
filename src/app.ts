import 'express-async-errors'
import express from 'express'
import mwError from './middlewares/error'
import movieRouter from './routes/movieRouter'

class App {
  public app: express.Express

  constructor () {
    this.app = express()

    this.config()
    this.routes()
  }

  private routes (): void {
    this.app.use('/movies', movieRouter)
    this.app.use(mwError)
  }

  private config (): void {
    this.app.use(express.json())
  }

  public start (PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`))
  }
}

export { App }
