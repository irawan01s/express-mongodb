const bcrypt = require('bcryptjs')
const moment = require('moment')
const User = require('../models/user')
const HttpError = require('../helpers/httpError')

const salt = bcrypt.genSaltSync(12)

const dateOnly = (dateTime) => {
  const tmpDateTime = dateTime
  const result = tmpDateTime
  // const tmpDateTime = new Date(dateTime)
  // const result = `${tmpDateTime.getFullYear()}-${tmpDateTime.getMonth()}-${tmpDateTime.getDate()}`
  return result
}

exports.getUsers = async (req, res, next) => {
  const { id } = req.query
  let userStatement = {}
  if (id) {
    userStatement = { _id: id }
  }
  let users
  try {
    users = await User.find(userStatement).then((u) => {
      const birthDateFormat = moment(u.birthDate).format('YYYY-MM-DD')
      delete u.phone
      u.birthDate = birthDateFormat
      // console.log(u)
      return u
    })
  }
  catch (error) {
    const err = new HttpError(error, 400)
    return next(err)
  }
  // const result = users.map((u) => {
  //   const birthDateFormat = moment(u.birthDate).format('YYYY-MM-DD')
  //   delete u.phone
  //   // u.birthDate = birthDateFormat
  //   // console.log(u)
  //   return u
  // })
  // console.log(result)
  res.status(200).json({
    status: true,
    message: 'success',
    data: users
  })
}

exports.createUser = async (req, res, next) => {
  const {
    name,
    userName,
    email,
    phone,
    password,
    address,
    birthPlace,
    birthDate,
    parentName,
    createdBy
  } = req.body

  let hashPassword
  try {
    hashPassword = await bcrypt.hashSync(password, salt)
  }
  catch (error) {
    const err = new HttpError(error, 400)
    return next(err)
  }

  const createBy = createdBy || 'test'

  const createdUser = new User({
    name,
    userName,
    password: hashPassword,
    email,
    phone,
    address,
    birthPlace,
    birthDate,
    parentName,
    createdBy: createBy
  })

  console.log(createdUser)

  // try {
  //   await createdUser.save()
  // }
  // catch (error) {
  //   const err = new HttpError(error, 400)
  //   return next(err)
  // }

  res.status(201).json({
    status: false,
    message: 'Succsess',
    data: null
  })
}
