const getExampleUser = (req, res, next) => {
  const exampleUser = {
    user_id: 1313,
    username: "KamilEngine",
    password: "Panda13",
    name: "Kamil",
    lastname: "Adams",
    age: 35,
    email: "kamiladamsk@gmail.com",
    skills: {
      js: true,
      java: true,
      cypress: true,
      python: false,
    }
  }
  res.status(200).send(exampleUser)

}

const postExampleUser = (req, res, next) => {
  const exampleUser = {
    user_id: 1313,
    username: "KamilEngine",
    password: "Panda13",
    name: "Kamil",
    lastname: "Adams",
    age: 35,
    email: "kamiladamsk@gmail.com",
    skills: {
      js: true,
      java: true,
      cypress: true,
      python: false,
    }
  }
  res.status(201).send(exampleUser)
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
  res.status(200).send(exampleUser)
}

const deleteExampleUser = (req, res, next) => {
  message = {
    message: "User deleted succesfuly"
  }
  res.status(200).send(message)
}

 const userController ={
  getExampleUser,
  postExampleUser,
  putExampleUser,
  patchExampleUser,
  deleteExampleUser
}

export default userController