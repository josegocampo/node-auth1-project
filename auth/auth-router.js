const express = require("express")
const bcrypt = require("bcrypt")
const Users = require("../users/users-model")

const router = express.Router()


router.post("/register", async (req, res, next) =>{
    try{
        const { username } = req.body
        const user = await Users.findBy({ username }).first()

        if (user) {
			return res.status(409).json({
				message: "Username is already taken",
			})
        }
        
        res.status(201).json(await Users.add(req.body))

    }
    catch(err){
        next(err)
    }
})


router.post("/login", async (req, res, next) =>{
    try{
        const { username, password } = r
    }
    catch(err){
        next(err)
    }
})
