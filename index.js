import routes from './route.js';
import express, { json } from 'express';
const app = express()
const port = 3000
app.use(json());
app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})