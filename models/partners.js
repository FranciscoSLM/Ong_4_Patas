const partners = (sequelize, DataTypes) => {
    const Partners = sequelize.define('Partners', {
        nome: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        telefone: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Partners'
    });

    return Partners; 
}
module.exports=partners
