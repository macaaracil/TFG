import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import pool from './db.js'; // conexión a la base de datos

const app = express();
const PORT = 3000;

// Middleware  JSON
app.use(bodyParser.json());

//  probar conexión a la base de datos
app.get('/api/usuarios', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al conectar con la base de datos' });
    }
});

// registrar un usuario
app.post('/api/registro', async (req, res) => {
    const { nombre, correo, contraseña, rol } = req.body;

    // Validaciones 
    if (!nombre || !correo || !contraseña) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        // Verificar si el correo ya está registrado
        const [usuarioExistente] = await pool.query('SELECT id FROM usuarios WHERE correo = ?', [correo]);
        if (usuarioExistente.length > 0) {
            return res.status(400).json({ error: 'El correo ya está registrado' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(contraseña, 10);

        // Insertar el nuevo usuario en la base de datos
        await pool.query(
            'INSERT INTO usuarios (nombre, correo, contraseña, rol) VALUES (?, ?, ?, ?)',
            [nombre, correo, hashedPassword, rol || 'padre']
        );

        res.status(201).json({ mensaje: 'Usuario registrado con éxito' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
