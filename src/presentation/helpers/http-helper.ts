import { HttpResponse } from "../protocols";
import { ServerError } from "../errors";
import { ResourceNotFoundError } from "./resource-not-found-error";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const notFound = (error: any = new ResourceNotFoundError()): HttpResponse => ({
  statusCode: 404,
  body: error
})

export const unnavailable = (error?: Error): HttpResponse => ({
  statusCode: 503,
  body: error
})
