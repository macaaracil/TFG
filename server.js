import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const PORT = 3000;

// Middleware para procesar datos JSON
app.use(bodyParser.json());

const USERS_FILE = 'usuarios.json';

// Ruta para registrar usuarios
app.post('/api/registro', async (req, res) => {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    let usuarios = [];
    try {
        const data = fs.readFileSync(USERS_FILE, 'utf-8');
        usuarios = JSON.parse(data);
    } catch {
        console.log('Archivo usuarios.json no encontrado. Se creará uno nuevo.');
    }

    const usuarioExistente = usuarios.find(user => user.email === email);
    if (usuarioExistente) {
        return res.status(400).json({ error: 'El email ya está registrado' });
    }

    const nuevoUsuario = { nombre, email, password };
    usuarios.push(nuevoUsuario);

    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(usuarios, null, 2));
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch {
        res.status(500).json({ error: 'Hubo un problema al registrar el usuario' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
