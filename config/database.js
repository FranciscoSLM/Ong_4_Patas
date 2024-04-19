module.exports = {
  dialect: 'postgres',
    username: 'postgres',
    password: 'RcJoosonevjVS0tXxFiQ',
    host: 'ong-quatro-patas.cyafqex6p0ng.us-east-1.rds.amazonaws.com',
    port: 5432,
    database: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false 
      }
    }
  };
  