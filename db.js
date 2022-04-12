async function connect (){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root@localhost:3306/datab");
    global.connection = connection;
    return connection;
}

async function insertdatab(datab){
   const conn = await connect();
   const sql = 'INSERT INTO registros(name,email,phone,link) VALUES (?,?,?,?);';
   const values = [datab.name, datab.email, datab.phone, datab.link];
   await conn.query(sql, values);
}


module.exports = {insertdatab}



