import { ObjectId } from 'mongodb';
import db from '../services/MongoService.js'

const getUser = async (req, res, next) => {
  const userId = req.query?.id ?? undefined
  const collection = db.collection('Users');
  const userData = await collection.findOne({ _id: new ObjectId(userId)})

  if (userData !== null) {
    res.status(200).send(userData)
  } else {
    res.status(400).send("User not exist!")
  }
}

const postUser = async(req, res, next) => {
  const email = req.query?.email ?? undefined
  const password = req.query?.password ?? undefined

  const collection = db.collection('Users');
  const userData = await collection.insertOne({email: email, password: password })

  if (userData !== null) {
    res.status(200).send(userData)
  } else {
    res.status(400).send("User not exist!")
  }
}

const putUser = (req, res, next) => {
  const User = {
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
  res.status(200).send(User)
}

const patchUser = (req, res, next) => {
  const User = {
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

  res.status(200).send(User)
}

const deleteUser = async (req, res, next) => {
  const userId = req.query?.id ?? undefined
  const collection = db.collection('Users');
  const result = await collection.deleteOne({ _id: new ObjectId(userId)})

  if (result.deletedCount === 1) {
    res.status(200).send("User deleted succesfuly")
  } else {
    res.status(400).send("User not exist!")
  }
}

const userController = {
  getUser,
  postUser,
  putUser,
  patchUser,
  deleteUser
}

export default userController