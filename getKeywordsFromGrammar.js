import { readdirSync } from 'fs';
import fs from 'fs';

let files = readdirSync('./src/language/grammars/');
let blacklist = [''];


files = files.filter(item => !blacklist.includes(item));

const regex = /"([^"]+)"|'([^']+)'/g;
let keywords = new Set();
for (let file of files) {
    const content = fs.readFileSync('./src/language/grammars/'+file, 'utf-8');
    const lines = content.split(/\r?\n/);
    for (let line of lines){
        if (!line.includes("import") && !line.trim().startsWith("//")&&!line.trim().startsWith("terminal")&&!line.trim().startsWith("hidden")){
            let matches = line.match(regex);
            if (matches){
                for (let match of matches){
                    keywords.add(match);
                }
            }
        }
    }
}






const data = 'KEYWORDS:\nkeywords = (' + [...keywords].join(" \n| ") + ")\n;";

fs.writeFileSync('./src/language/grammars/keywords.langium', data, 'utf-8');

console.log('File written successfully to: ./src/language/grammars/keywords.langium');