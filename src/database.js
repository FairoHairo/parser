const mysql = require('mysql2');
const fs = require('fs');
const DB = [];


for (let i = 21; i <= 23; i++) {
    let json = require(`../pages/${i}.json`);

    for (let elements of json) {
        DB.push(elements)
        // console.log(elements)
    }
}
console.log(DB.length)
const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    database: "courses",
    password: "admin"
})

DB.forEach((obj) => {
    let {title, rating, lengthInMinutes, url, price, requirements, description, authors, learn} = obj;
    let perHour = Math.ceil(+lengthInMinutes/60);
    let descrNormal = description.replace(/'|"|`/g, '')
    let learnNormal = learn.replace(/'|"|`/g, '')
    // let onlyInt = length.match(/[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?/)[0]
    connection.query(`INSERT INTO all_courses(title,author,acquired_skills, url, price, duration, rating, required_skills, description) VALUES('${title}','${authors}','${learnNormal}', '${url}', '${price}', '${perHour}', '${rating}', '${requirements}', '${descrNormal}')`, function(err, results) {
        if(err) {
            console.log(err)
            return
        };
        console.log(results);
    })
})

