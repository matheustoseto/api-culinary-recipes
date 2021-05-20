import express from 'express'
import compression from 'compression'

const app = express()
const port = 3000

app.use(compression())

app.get('/', (req: any, res: any) => {
  res.send('The sedulous hyena ate the antelope!')
})

app.listen(port, () => {
  return console.log(`server is listening on ${port}`)
})
