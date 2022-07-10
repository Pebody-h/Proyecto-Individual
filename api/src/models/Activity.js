const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            //     validateNumber(value){
            //         if(isNaN(value) === true){
            //             throw new Error(`${value} no es un numero`)
            //         }
            //         if(!isNaN(value)){
            //             let res = Number(value)
            //             if(res < 1 || res > 5){
            //                 throw new Error('La dificultad debe ser un numero estre 1 y 5')
            //             }
            //         }        
            //     }
            }
        },
        duration:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        season:{
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false
        }
    })
}

// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)