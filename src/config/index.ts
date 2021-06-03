import dotenv from 'dotenv'

dotenv.config({
  path: '.env.local'
})

export default {
  app: {
    port: process.env.PORT ?? 3333
  },
  aws: {
    access_key: process.env.ACCESS_KEY ?? '',
    secret_access_key: process.env.SECRET_ACCESS_KEY ?? '',
    region: process.env.REGION ?? ''
  }
}
