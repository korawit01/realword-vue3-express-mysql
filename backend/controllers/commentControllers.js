const comments = require("../models/commentModel")


const getComment = (req, res) => {
    let data = comments.getComment(req)
    console.log(data)
    res.json(data)
}

const createComment = (req, res) => {
    let data = comments.createComment(req)
    if(data = 1){
        console.log("create success")
    }else{
        console.log("create fail")
    }
}

const deleteComment = (req, res) => {
    let data = comments.deleteComment(req)
    if(data = 1){
        console.log("update success")
    }else{
        console.log("update fail")
    }
}

module.exports = {
    getComment,
    createComment,
    deleteComment
};