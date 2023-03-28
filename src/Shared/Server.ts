import express from 'express'
import * as http from 'http'

import { EnvConfiguration } from '@config/EnvConfiguration'
import { Logger } from '@shared/Domain/Logger'

export class Server {
  private express: express.Application
  private http: http.Server

  constructor (
    private config: EnvConfiguration,
    private logger: Logger,
    private router: express.Router
  ) {
    this.express = express()
    this.express.use(this.router)
  }

  public async start (): Promise<void> {
    this.http = this.express.listen(this.config.PORT, () => {
      this.logger.info(`Aplicación levantada en el puerto ${this.config.PORT}`)
    })
  }

  public async stop (): Promise<void> {
    this.logger.info('Servidor parado con éxito')
    await this.http.close()
  }
}