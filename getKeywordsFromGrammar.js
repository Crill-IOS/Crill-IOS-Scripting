import { readdirSync } from 'fs';

let files = readdirSync('./src/language/grammars/');
let blacklist = ['common.langium'];


files = files.filter(item => !blacklist.includes(item));

console.log(files);