const db = require('./db');

const comments = (comment) =>{
    this.comment_id = comment.comment_id,
    this.body = comment.body
    this.createdAt = comment.createdAt
    this.updateAt = comment.updateAt
    this.comment_owner_id = comment.comment_owner_id
    this.article_id = comment.article_id
}

comments.getComment = (req) => {
    db.query(`SELECT * FROM comments WHERE article_id = "${req.body.aid}" `, (err, res) =>{
        if (err){
            console.log("error: ", err)
            return err;
        }
        data = JSON.parse(JSON.stringify(res))
        console.log(data)
    });
    return data
}
comments.createComment = (req) => {
    console.log(req)
    let data
    db.query(`insert into comments (body, createdAt, comment_owner_id, article_id)
    values ("${req.body.body}", "${req.body.date}", "${req.body.oid}", "${req.body.aid}")`, (err, res) => {
        if (err){
            console.log("error: ", err)
            return data = 0;
        }else 
        data = JSON.parse(JSON.stringify(res))
        console.log(data)
    });
    return data
}

comments.deleteComment = (req) => {
    let data
    db.query(`delete from comments where comment_id = "${req.body.cid}" `, (err, res) => {
        if (err){
            console.log("error: ", err)
            return data = 0;
        }else{ data = 1}
    });
    return data
}

module.exports = comments;