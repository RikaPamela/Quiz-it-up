const pool = require('../config/dbconfig')

//logining a user
// @desc POST single logged user
  // @route POST /users
  const login = (request, response) => {
    const { email,  password } = request.body

    pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  //registering a user
  // const createUser = (request, response) => {
  //   const { firstname,lastname, email, userType, password } = request.body

  //   pool.query('INSERT INTO users (firstname, lastname, email, userType, password) VALUES ($1, $2, $3, $4, $5) RETURNING *', [firstname, lastname, email, userType, password ], (error, results) => {
  //     if (error) {
  //       throw error
  //     }
  //     response.status(200).send({message : User added with ID: ${results.rows[0].id}})
  //   })
  // }

//get all users
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  //get single user by id
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  //post a new user and registering a user
  const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }
  
  //PUT updated data in an existing user
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  //delete a user
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }