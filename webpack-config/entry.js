const path = require('path');
const fs = require('fs');
let entries = {};

if(process.env.cate){
    let key = `${process.env.cate}`;
    entries[key] =  `./src/views/${key}/index.js`;
}else{
    let files = fs.readdirSync(path.resolve(__dirname, '../src/views'));
    files.forEach((file) => {
        let key = `${file}`;
        entries[key] =  `./src/views/${key}/index.js`;
    });
}


module.exports = entries;