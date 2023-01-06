const users = require("../models/userModel")


const getUser = (req, res) => {
    let data = users.getProfile()
    console.log(data)
    res.json(data)
}

const getProfile = (req, res) => {
    let data = users.getProfile(req)
    console.log(data)
    res.json(data)
}

const createUser = (req, res) => {
    // console.log(req)
    let data = users.createUser(req)
    if(data = 1){
        console.log("create success")
    }else{
        console.log("create fail")
    }
}

const updateUser = (req, res) => {
    let data = users.updateUser(req)
    if(data = 1){
        console.log("update success")
    }else{
        console.log("update fail")
    }
}

module.exports = {
    getUser,
    getProfile,
    createUser,
    updateUser
};