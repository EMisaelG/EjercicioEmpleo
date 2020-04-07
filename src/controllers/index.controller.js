const { Pool } = require('pg');


const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'toor',
    database: 'ejercicio',
    port: '5432'
})

const obtenerUsuarios = async (req, res) => {
    const respuesta = await pool.query('SELECT * FROM usuario');
    res.status(200).json(respuesta.rows);
};

const crearUsuario = async (req, res) => {
    const {nick, nombre, apellidoPa, apellidoMa, constra, rol, correo } = req.body;
    const respuesta = await pool.query('INSERT INTO usuario (nick, nombre, apellidoPa, apellidoMa, constra, rol, correo) VALUES ($1 $2 $3 $4 $5 $6 $7)', [nick, nombre, apellidoPa, apellidoMa, constra, rol, correo]);
    res.json({
        message: 'Creado',
        body: {
            usuario: {nick, nombre, apellidoPa, apellidoMa, constra, rol, correo}
        }
    })
};

const obtenerUsuario = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM usuario WHERE id = $1', [id]);
    res.json(response.rows);
};

const actualizarUsuario = async (req, res) => {
    const id = parseInt(req.params.id);
    const {nick, nombre, apellidoPa, apellidoMa, constra, rol, correo} = req.body;

    const respuesta =await pool.query('UPDATE usuario SET nick = $1, nombre = $2, apellidoPa = $3, apellidoMa = $4, constra = $5, rol = $6, correo = $7 WHERE id = $8', [
        nick,
        nombre,
        apellidoPa,
        apellidoMa,
        constra,
        rol,
        correo,
        id
    ]);
    res.json('Actualizado');
};

const eliminarUsuario = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM usuario where id = $1', [
        id
    ]);
    res.json(`Usuario ${id} eliminado`);
};

module.exports = {
    obtenerUsuarios,
    crearUsuario,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario

}