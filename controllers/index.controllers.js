const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '8713',
    database: 'firstapi',
    port: '5432'
});

const obtenerHora = async (req, res) => {

    try {
        const { dato1, dato2 } = req.body;
        /* const dato1 = '03:00:00';
        const dato2 = 'UTC-3' */
        const fecha = new Date('2009-11-06 03:00:00');
        const date = fecha.getFullYear()+'-'+(fecha.getMonth() +1)+'-'+fecha.getDate() ;
        const query = `SELECT TIMESTAMP WITH TIME ZONE '${date} ${dato1}' AT TIME ZONE '${dato2}'`;
        const response = await pool.query(query);
        res.status(200).json(response.rows);
        
    } catch (error) {
        console.log(error);        
    }
}


module.exports = {    
    obtenerHora    
}