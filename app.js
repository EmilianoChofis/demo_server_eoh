const db = require('./db/connection');
const axios = require('axios');

const createClient = () => {
    axios.get('https://randomuser.me/api/')
        .then((response) => {
            const { name } = response.data.results[0];
            const sql = `INSERT INTO clients (name,last_name, created_at) VALUES ('${name.first}','${name.last}', '2024-02-01 19:07:41')`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                console.log('Cliente creado!');
                /*const sql = `INSERT INTO logs (description, time_stamp) VALUES ('Cliente creado', NOW())`;
                db.query(sql, (err, result) => {
                    if (err) throw err;
                    console.log('Log creado!');
                });*/
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

createPet = () => {
    const pets = [
         {
              name: 'Firulais',
              type: 'Perro',
              breed: 'Labrador',
              owner_id: 1,
              created_at: '2024-02-01 19:07:41'
         },
         {
              name: 'Mishi',
              type: 'Gato',
              breed: 'Siamés',
              owner_id: 2,
              created_at: '2024-02-01 19:07:41'
         },
         {
              name: 'Pirata',
              type: 'Perico',
              breed: 'Ara',
              owner_id: 3,
              created_at: '2024-02-01 19:07:41'
         },
            {
                name: 'Bobby',
                type: 'Perro',
                breed: 'Pug',
                owner_id: 4,
                created_at: '2024-02-01 19:07:41'
            },
            {
                name: 'Mota',
                type: 'Gato',
                breed: 'Egipcio',
                owner_id: 5,
                created_at: '2024-02-01 19:07:41'
            }

    ];

    const random = Math.floor(Math.random() * pets.length);

         const sql = `INSERT INTO pets (name, type, breed, owner_id, created_at) VALUES ('${pets[random].name}','${pets[random].type}','${pets[random].breed}',${pets[random].owner_id},'${pets[random].created_at}')`;
         db.query(sql, (err, result) => {
              if (err) throw err;
              console.log('Mascota creada');
         });

}

setInterval(createClient,5000);
setInterval(createPet,5000);