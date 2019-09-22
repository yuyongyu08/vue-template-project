const path = require('path');
const fs = require('fs');
let entries = {};

if(process.env.cate){
    let key = `${process.env.cate}`;
    entries[key] =  `./src/views/${key}/index.ts`;
}else{
    let dirPath = path.resolve(__dirname, '../src/views')
    let files = fs.readdirSync(dirPath);
    files.forEach((file) => {
        let fileStats = fs.statSync(`${dirPath}/${file}`);
        if (fileStats.isDirectory()) {
            let key = `${file}`;
            entries[key] =  `./src/views/${key}/index.ts`;
        }
    });
}

module.exports = entries;