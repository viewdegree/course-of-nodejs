const fs = require('fs');
fs.readFile('./data/name.json', (err, data) => {
    if (!err) {
        setTimeout(() => {
            console.log('我需要三秒');
        }, 3000);
        console.log(data.toString());
    }
})
console.log('我要最后再执行');
