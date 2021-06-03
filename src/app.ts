import express from 'express'
import compression from 'compression'
import cors from 'cors'
import routes from './routes'
import config from '@config'
import logger from 'morgan'
import bodyParser from 'body-parser'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
    this.errorHandler()
  }

  public boot (): express.Application {
    console.log(`App starting at http://localhost:${config.app.port}`)
    return this.express
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(compression())
    this.express.use(logger('dev'))
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
  }

  private routes (): void {
    this.express.use(...routes)
  }

  private errorHandler (): void {
    this.express.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.error(err)
      res.status(400).json({
        message: err.error?.details,
        type: err.type
      })
    })
  }
}

export default App
