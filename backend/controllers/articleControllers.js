const articles = require("../models/articleModel")


const getPagin = (req, res) => {
    let data = articles.getPagin(req)
    console.log(data)
    res.json(data)
}

const getArticle = (req, res) => {
    let data = articles.getAll()
    console.log(data)
    res.json(data)
}

const createArticle = (req, res) => {
    // console.log(req)
    let data = articles.createArticle(req)
    if(data = 1){
        console.log("create success")
    }else{
        console.log("create fail")
    }
}

const updateArticle = (req, res) => {
    let data = articles.updateArticle(req)
    if(data = 1){
        console.log("update success")
    }else{
        console.log("update fail")
    }
}

const deleteArticle = (req, res) => {
    
    let data = articles.deleteArticle(req)
    if(data = 1){
        console.log("delete success")
    }else{
        console.log("delete fail")
    }
}

module.exports = {
    getPagin,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
};