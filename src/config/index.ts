import DEV from '@config/environments/dev'
import { EnvConfiguration } from '@config/EnvConfiguration'

const { NODE_ENV } = process.env

let currentConfig: EnvConfiguration

switch (NODE_ENV) {
default:
  currentConfig = DEV
}

export { currentConfig as config }