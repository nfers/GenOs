import {createConnection} from 'typeorm';

createConnection({
    type: 'postgres',
    host: 'ec2-54-217-206-236.eu-west-1.compute.amazonaws.com',
    port: 5432,
    username: 'uwnkiiyspximda',
    password: '814d7a162074910cbd494f768d1ecf4290fa7e601adc46d7538d22d8c5e4e110',
    database: 'd7ij5eqrh6vl69',
    ssl: {
        rejectUnauthorized : false,
    }, 
    entities: [
       'src/entities/**/*.js'
    ],
    migrations: [
       'src/database/migrations/**/*.js'
    ],
    subscribers: [
       'src/subscriber/**/*.js'
    ],
    cli: {
       entitiesDir: 'src/entities',
       migrationsDir: 'src/database/migrations',
       subscribersDir: 'src/subscriber'
    }
}).then(connection => {
  console.log('Database connected')  
}).catch(error => console.log(error));