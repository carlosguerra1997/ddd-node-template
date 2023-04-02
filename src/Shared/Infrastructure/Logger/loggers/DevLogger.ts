import winston, { createLogger, Logger } from 'winston'

const alignColorsAndTime = winston.format.combine(
  winston.format.colorize({
    all: true
  }),
  winston.format.label({
    label: '[LOGGER]'
  }),
  winston.format.printf(
    info => `${info.label}: ${info.message}`
  )
)

export const devLogger: Logger = createLogger({
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(alignColorsAndTime)
    })
  ]
})
