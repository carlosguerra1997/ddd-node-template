import DEV from '@config/environments/dev'
import { EnvConfiguration } from '@config/EnvConfiguration'

const { NODE_ENVIRONMENT } = process.env

let currentConfig: EnvConfiguration

switch (NODE_ENVIRONMENT) {
default:
  currentConfig = DEV
}

export { currentConfig as config }