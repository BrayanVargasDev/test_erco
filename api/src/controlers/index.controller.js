// conexion a db

const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'bvargas27',
    database: 'miDB',
    port: '5432'
})


const getCountries = async (req, res) => {
    const response = await pool.query('SELECT * FROM public.countries');
    res.status(200).json(response.rows);
}

const getStatesByIdCountry = async (req, res) => {
    let idCountry = req.params.idCountry;
    const response = await pool.query(`SELECT * FROM public.states WHERE public.states."ID_COUNTRY" = ${idCountry}`)
    res.status(200).json(response.rows);
}

const getCitiesByIdState = async (req, res) => {
    let idState = req.params.idState;
    const response = await pool.query(`SELECT * FROM public.cities WHERE public.cities."ID_SATE" = ${idState}`)
    res.status(200).json(response.rows);
}


module.exports = {
    getCountries,
    getStatesByIdCountry,
    getCitiesByIdState,
}