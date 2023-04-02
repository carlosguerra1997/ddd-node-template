import { Logger } from '@shared/Domain/Logger'

import { logger } from '@shared/Infrastructure/Logger/index'

export class ServerLogger implements Logger {
  critical (message: string): void {
    logger.error(message)
  }

  error (message: string): void {
    logger.error(message)
  }

  info (message: string): void {
    logger.info(message)
  }

  warning (message: string): void {
    logger.warn(message)
  }
}