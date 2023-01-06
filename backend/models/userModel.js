const db = require('./db');

const users = (user) =>{
    this.user_id = user.user_id,
    this.username = user.username
    this.email = user.email
    this.password = user.password
    this.follow = user.follow
    this.bio = user.bio
    this.image = user.image
}

users.getUser = (req) => {
    db.query(`SELECT email, username, bio, image, follow FROM users WHERE username = "${req.body.username}"`, (err, res) =>{
        if (err){
            console.log("error: ", err)
            return err;
        }
        data = JSON.parse(JSON.stringify(res))
        console.log(data)
    });
    return data
}

users.getProfile = (req) => {
    db.query(`SELECT username, bio, image, follow FROM users WHERE username = "${req.body.username}"`, (err, res) =>{
        if (err){
            console.log("error: ", err)
            return err;
        }
        data = JSON.parse(JSON.stringify(res))
        console.log(data)
    });
    return data
}
users.createUser = (req) => {
    console.log(req)
    let data
    db.query(`insert into users (username, email, password)
    values ("${req.body.username}", "${req.body.email}", "${req.body.password}")`, (err, res) => {
        if (err){
            console.log("error: ", err)
            return data = 0;
        }else 
        data = JSON.parse(JSON.stringify(res))
        console.log(data)
    });
    return data
}

users.updateUser = (req) => {
    let data
     db.query(`update users set email = "${req.body.email}", bio = "${req.body.bio}", image = "${req.body.image}"
    where user_id = "${req.body.uid}"`, (err, res) => {
        if (err){
            console.log("error: ", err)
            return data = 0;
        }else{ data = 1}
    });
    return data
}


module.exports = users;