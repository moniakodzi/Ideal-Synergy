import db from '../services/MongoService.js'

const getExampleData = async (req, res) => {
    const collection = db.collection('ExampleCollection');
    const exampleData = await collection.findOne()
  
    if (exampleData !== null) {
      res.status(200).send(exampleData)
    } else {
      res.status(400).send("exampleData not exist!")
    }
  }

  const exampleDataController = {
    getExampleData
  }
  
  export default exampleDataController