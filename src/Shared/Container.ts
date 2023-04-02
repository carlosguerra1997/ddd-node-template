import { asClass, asFunction, asValue, AwilixContainer, createContainer, InjectionMode } from 'awilix'

import { config } from '@config/index'

import { Router } from '@shared/Infrastructure/Router/index'
import { Server } from '@shared/Server'
import { ServerLogger } from '@shared/Infrastructure/Logger/ServerLogger'
import { realpathSync } from 'fs'

export class Container {
  private container: AwilixContainer

  constructor () {
    this.container = createContainer({
      injectionMode: InjectionMode.CLASSIC
    })

    this.register()
  }

  public register (): void {
    this.container.register({
      config: asValue(config),
      logger: asClass(ServerLogger).singleton(),
      router: asFunction(Router).singleton(),
      server: asClass(Server).singleton()
    })

    const rootPath = realpathSync(`${__dirname}/../`)

    this.container.loadModules([
      `${rootPath}/Shared/Infrastructure/Router/**/*.ts`,
      `${rootPath}/Shared/Infrastructure/Middleware/**/*.ts`,
      `${rootPath}/modules/User/**/*.ts`
    ], {
      formatName: 'camelCase',
      resolverOptions: { 
        injectionMode: InjectionMode.CLASSIC
      }
    })
  }

  public get<T> (name: string): T {
    return this.container.resolve<T>(name)
  }
}