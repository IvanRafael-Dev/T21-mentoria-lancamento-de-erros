import CustomError from './custom-error'

export default class InvalidParamError extends CustomError {
  constructor (message: string) {
    super(message, 400)
    this.name = 'InvalidParamError'
  }
}
