import { ErrorRequestHandler } from 'express'
import CustomError from '../errors/custom-error'

const mwError: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message })
  }
  return res.status(500).json({ message: err.message })
}

export default mwError
