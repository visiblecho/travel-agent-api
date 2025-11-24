export class BadRequest extends Error {
  constructor(message) {
    super(message)
    this.name = 'Bad request'
    this.status = 400
    this.description = 'The request could not be handled.'
    this.repair = 'Verify the request follows the API documentation.'
  }
}

export class Unauthorized extends Error {
  constructor(message) {
    super(message)
    this.name = 'Unauthorized'
    this.status = 401
    this.description =
      'The request is not authorized but the requested resource requires authorization'
    this.repair =
      'Sign in and provide a bearer token with your request to authorize it.'
  }
}

export class Forbidden extends Error {
  constructor(message) {
    super(message)
    this.name = 'Forbidden'
    this.status = 403
    this.description =
      'Access to the requested resource is forbidden with the given authorization.'
    this.repair = 'Verify or upgrade your authroization.'
  }
}

export class NotFound extends Error {
  constructor(message) {
    super(message)
    this.name = 'Not found'
    this.status = 404
    this.description = 'The requested resource could not be located.'
    this.repair =
      'Verify that the resource identifier is correct. If the resource does not exist, create it before retrying.'
  }
}
