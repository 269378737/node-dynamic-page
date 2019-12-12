import * as Handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

function getTemplateString(tempalteName) {
    return fs.readFileSync(path.resolve(__dirname, '../views/partials/', tempalteName + '.hbs'), 'utf8')
}


Handlebars.registerPartial('header', getTemplateString('header'))