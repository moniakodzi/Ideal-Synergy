import routes from './route.js';
import express, { json } from 'express';
import MongoService from './services/MongoService.js'
const app = express()
const port = 3000
app.use(json());
app.use(routes)

app.listen(port, () => {
  console.log(`IdealSynergy backend server just started. And waiting for requests on localhost:${port}`)
})