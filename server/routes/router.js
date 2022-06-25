const { Router } = require('express')
const express = require('express')
const route = express.Router()

const services = require('../services/render')

// @description Root Router
// @Method GET /
route.get('/' , services.homeRoutes)

// @description add users
// @Method GET /add-user
route.get('/add-user', services.add_user)


// @description for update user
// @Method GET /update-user
route.get('/update-user', services.update_user)

module.exports = route