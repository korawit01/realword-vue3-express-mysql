const db = require('./db');

const articles = (article) =>{
    this.article_id = article.article_id,
    this.title = article.title
    this.description = article.description
    this.body = article.body
    this.createdAt = article.createAt
    this.updateAt = article.updateAt
    this.favoritesCount = article.favoritesCount
    this.tagList = article.tagList
    this.article_owner_id = article.article_owner_id
}

articles.getPagin = (req) => {
    let offset = 5 * req.body.pagin
    let rowCount = 5
    db.query(`SELECT * FROM articles LIMIT ${offset}, ${rowCount}`, (err, res) =>{
        if (err){
            console.log("error: ", err)
            return err;
        }
        data = JSON.parse(JSON.stringify(res))
        console.log(data)
    });
    return data
}

articles.getAll = () => {
    db.query(`SELECT * FROM articles`, (err, res) =>{
        if (err){
            console.log("error: ", err)
            return err;
        }
        data = JSON.parse(JSON.stringify(res))
        console.log(data)
    });
    return data
}
articles.createArticle = (req) => {
    console.log(req)
    let data
    db.query(`insert into articles (title, description, body, createdAt, favoritesCount, tagList, article_owner_id)
    values ("${req.body.title}", "${req.body.description}", "${req.body.body}", "${req.body.date}", 0, "${req.body.tagList}", "${req.body.owner_id}")`, (err, res) => {
        if (err){
            console.log("error: ", err)
            return data = 0;
        }else 
        data = JSON.parse(JSON.stringify(res))
        console.log(data)
    });
    return data
}

articles.updateArticle = (req) => {
    let data
     db.query(`update articles set title = "${req.body.title}", description = "${req.body.description}, body = "${req.body.body}""
    where article_id = "${req.body.aid}"`, (err, res) => {
        if (err){
            console.log("error: ", err)
            return data = 0;
        }else{ data = 1}
    });
    return data
}

articles.deleteArticle = (req) => {
    let data
    db.query(`delete from articles where article_id = "${req.query.aid}" `, (err, res) => {
        if (err){
            console.log("error: ", err)
            return data = 0;
        }else{ data = 1}
    });
    return data
}

module.exports = articles;