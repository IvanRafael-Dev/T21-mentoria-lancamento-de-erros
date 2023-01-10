import CustomError from './custom-error'

export default class MissingParamError extends CustomError {
  constructor (message: string) {
    super(message, 400)
    this.name = 'MissingParamError'
  }
}
