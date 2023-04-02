import { Container } from '@shared/Container'
import { Server } from '@shared/Server'
import { ServerLogger } from '@shared/Infrastructure/Logger/ServerLogger'

const container = new Container()

const logger = container.get<ServerLogger>('logger')
const server = container.get<Server>('server')

server
  .start()
  .catch((error: Error) => {
    logger.error(error.message)
    process.exit(1)
  })