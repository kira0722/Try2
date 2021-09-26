const mysql = require('mysql')
const { error } = require('console')

const conection = mysql.createConnection({
    host='localhost',
    user = kira22,
    password = 123,
    database = 'ppi'
})

conection.connect( (error)  =>{
    if(error) throw error
    console.log('la conexion funciona')
})

