const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'SaboresCerca',
    'root',
    'admin123',
    {
        host:'localhost',
        port: 3306,
        dialect:'mysql'
    }

)

sequelize.authenticate()
    .then(()=> console.log('La conexion realizada correctamente'))
    .catch((error)=> console.log('ocurrio un error ',error ))


module.exports=sequelize;