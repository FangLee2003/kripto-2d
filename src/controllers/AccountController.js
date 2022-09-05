const path = require('path')
const express = require('express')
const app = express()
const jwt = require("jsonwebtoken");
const {MongoClient} = require("mongodb");
const client = new MongoClient("mongodb+srv://fanglee:fanglee1808@fanglee.ofypspm.mongodb.net/?retryWrites=true&w=majority")
const db = client.db('test')
const User = require('../models/User')

class AccountController {
    async get(req, res) {
        try {
            const token = jwt.decode('supsersecret')
            const user = await User.findOne({token}).lean();

            if (!user) {
                return res.redirect('/login')
            }

            return res.render('account.ejs', {
                email: user.email,
                name: user.name,
                phone: user.phone,
                country: user.country
            })
        } catch (err) {
            console.log(err)
            res.redirect('/login')
        }
    }

    async post(req, res) {
        try {
            const token = await jwt.decode('supsersecret')
            const user = await User.findOne({token}).lean();

            await db.collection("users").updateOne({email: user.email},
                {
                    $set: {
                        name: req.body.name,
                        phone: req.body.phone,
                        country: req.body.country
                    }
                }
            )
            return res.redirect("/account")
        } catch (err) {
            console.log(err)
            res.redirect("/account")
        }
    }
}

module.exports = new AccountController()

