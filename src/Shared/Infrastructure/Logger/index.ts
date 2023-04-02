import { Logger } from 'winston'

import { devLogger } from './loggers/DevLogger'

const { NODE_ENV } = process.env

let currentLogger: Logger

switch (NODE_ENV) {
default:
  currentLogger = devLogger
}

export { currentLogger as logger }