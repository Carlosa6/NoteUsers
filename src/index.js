require('dotenv').config();

const app = require('./app');
require('./database');


//iniciar el programa
async function main(){
    await app.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`);
}

main();
