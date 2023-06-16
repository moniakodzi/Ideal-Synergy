import { ExplainVerbosity,ObjectId } from 'mongodb';
import db from '../services/MongoService.js'

const getExampleUser = async (req, res, next) => {
  const userId = req.query?.id ?? undefined
  const collection = db.collection('ExampleCollection');
  const userData = await collection.findOne({ _id: new ObjectId(userId)})

  if (userData !== null) {
    res.status(200).send(userData)
  } else {
    res.status(400).send("User not exist!")
  }
}

const postExampleUser = async(req, res, next) => {
  const email = req.query?.email ?? undefined
  const password = req.query?.password ?? undefined

  const collection = db.collection('ExampleCollection');
  const userData = await collection.insertOne({email: email, password: password })

  if (userData !== null) {
    res.status(200).send(userData)
  } else {
    res.status(400).send("User not exist!")
  }
}

const putExampleUser = (req, res, next) => {
  const exampleUser = {
    user_id: 1314,
    username: "MoniaEngine",
    password: "Panda1313",
    name: "Monia",
    lastname: "Kol",
    age: 35,
    email: "moniakol@gmail.com",
    skills: {
      js: false,
      java: true,
      cypress: false,
      python: true,
    }
  }
  res.status(200).send(exampleUser)
}

const patchExampleUser = (req, res, next) => {
  const exampleUser = {
    user_id: 1314,
    username: "MoniaEngine",
    password: "Panda1313",
    name: "Monia",
    lastname: "Kol",
    age: 35,
    email: "moniakol@gmail.com",
    skills: {
      js: false,
      java: true,
      cypress: false,
      python: true,
    }
  }
["JS","Python","Java"]

  res.status(200).send(exampleUser)
}

const deleteExampleUser = async (req, res, next) => {
  const userId = req.query?.id ?? undefined
  const collection = db.collection('ExampleCollection');
  const result = await collection.deleteOne({ _id: new ObjectId(userId)})

  if (result.deletedCount === 1) {
    res.status(200).send("User deleted succesfuly")
  } else {
    res.status(400).send("User not exist!")
  }
}

const userController = {
  getExampleUser,
  postExampleUser,
  putExampleUser,
  patchExampleUser,
  deleteExampleUser
}

export default userController