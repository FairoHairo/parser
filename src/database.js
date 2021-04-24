const mysql = require('mysql2');
const fs = require('fs');
const DB = []

for (let i = 11; i <= 13; i++) {
    let json = undefined;
    try {
        json = require(`../pages/${i}.json`);
    } catch (error) {
        console.log(error)
    }
    console.log('lol')
    if (json != undefined) {
        if (json != null || json != undefined) {
            for (let elements of json) {
                DB.push(elements)
                // console.log(elements)
            }
        }
    }


}
console.log(DB, DB.length)
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "admin",
//     database: "courses",
//     password: "admin"
// })

// DB.forEach((obj) => {
//     let {title, rating, length, url, price, requirements, description, authors, learn} = obj;
//     let onlyInt = length.match(/[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?/)[0]
//     connection.query(`INSERT INTO all_courses(title,author,acquired_skills, url, price, duration, rating, required_skills, description) VALUES('${title}','${authors}','${learn}', '${url}', '${price}', '${onlyInt}', '${rating}', '${requirements}', '${description}')`, function(err, results) {
//         if(err) console.log(err);
//         console.log(results);
//     })
// })