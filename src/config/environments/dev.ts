import { EnvConfiguration } from '@config/EnvConfiguration'

import * as dotenv from 'dotenv'
dotenv.config()

const DEV: EnvConfiguration = {
  NODE_ENVIRONMENT: process.env.NODE_ENVIRONMENT || 'development',
  PORT: Number(process.env.PORT) || 3000
}

export default DEV