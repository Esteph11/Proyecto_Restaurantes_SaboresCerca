const express = require('express');  
const bodyParser = require('body-parser');  
const cors= require('cors')
  
const Roles = require('./models/Roles');  
const Usuarios = require('./models/Usuarios');  
const Negocios = require('./models/Negocios');  
const Menus = require('./models/Menus');  
const Comentarios = require('./models/Comentarios');  
const Promociones = require('./models/Promociones');  
const PuntosFidelidad = require('./models/PuntosFidelidad');  

const app = express();  
const PORT = 3000;  
app.use(express.json())

app.use(cors());

// Middleware  
app.use(bodyParser.json());  

//Login

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar usuario en la base de datos por el correo
        const usuario = await Usuario.findOne({ where: { email } });

        if (!usuario || usuario.password !== password) {
            return res.status(400).json({ mensaje: 'Credenciales incorrectas' });
        }

        // devuelve el usuario (sin la contraseña por seguridad)
        res.status(200).json({
            id_usuario: usuario.id_usuario,
            nombre: usuario.nombre,
            email: usuario.email,
            rol: usuario.rol
        });

    } catch (error) {
        res.status(500).json({ mensaje: 'Ocurrió un error en el servidor' });
    }
});

//RUTAS USUARIOS, aunque no los gestionamos en frontend, es necesario crearlos?

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ 'mensaje': 'Ocurrió un error' });
    }
});

// Ruta para crear un nuevo usuario
app.post('/usuarios', async (req, res) => {
    try {
        const { nombre, email, password, rol } = req.body;

        // Hashear la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(password, 10);

        const nuevoUsuario = await Usuario.create({
            nombre,
            email,
            password: hashedPassword,
            rol
        });

        res.status(201).json(nuevoUsuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear usuario' });
    }
}); 

// CRUD para Roles  
app.post('/roles', async (req, res) => {  
    try {  
        const role = await Roles.create(req.body);  
        res.status(201).json(role);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.get('/roles', async (req, res) => {  
    try {  
        const roles = await Roles.findAll();  
        res.status(200).json(roles);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.put('/roles/:id', async (req, res) => {  
    try {  
        const [date] = await Roles.update(req.body, {  
            where: { id: req.params.id },  
        });  
        if (date) {  
            const dateRole = await Roles.findByPk(req.params.id);  
            res.status(200).json(dateRole);  
        } else {  
            res.status(404).json({ message: 'Rol no encontrado' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.delete('/roles/:id', async (req, res) => {  
    try {  
        const deleted = await Roles.destroy({  
            where: { id: req.params.id },  
        });  
        if (deleted) {  
            res.status(204).send(); // No content  
        } else {  
            res.status(404).json({ message: 'Rol no encontrado' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

// CRUD para Usuarios  
app.post('/usuarios', async (req, res) => {  
    try {  
        const usuario = await Usuarios.create(req.body);  
        res.status(201).json(usuario);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.get('/usuarios', async (req, res) => {  
    try {  
        const usuarios = await Usuarios.findAll();  
        res.status(200).json(usuarios);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.put('/usuarios/:id', async (req, res) => {  
    try {  
        const [date] = await Usuarios.update(req.body, {  
            where: { id_usuario: req.params.id },  
        });  
        if (date) {  
            const dateUsuario = await Usuarios.findByPk(req.params.id);  
            res.status(200).json(dateUsuario);  
        } else {  
            res.status(404).json({ message: 'Usuario no encontrado' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.delete('/usuarios/:id', async (req, res) => {  
    try {  
        const deleted = await Usuarios.destroy({  
            where: { id_usuario: req.params.id },  
        });  
        if (deleted) {  
            res.status(204).send(); // No content  
        } else {  
            res.status(404).json({ message: 'Usuario no encontrado' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

// CRUD para Negocios  
app.post('/negocios', async (req, res) => {  
    try {  
        const negocio = await Negocios.create(req.body);  
        res.status(201).json(negocio);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.get('/negocios', async (req, res) => {  
    try {  
        const negocios = await Negocios.findAll();  
        res.status(200).json(negocios);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.put('/negocios/:id', async (req, res) => {  
    try {  
        const [date] = await Negocios.update(req.body, {  
            where: { id_negocio: req.params.id },  
        });  
        if (date) {  
            const dateNegocio = await Negocios.findByPk(req.params.id);  
            res.status(200).json(dateNegocio);  
        } else {  
            res.status(404).json({ message: 'Negocio no encontrado' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.delete('/negocios/:id', async (req, res) => {  
    try {  
        const deleted = await Negocios.destroy({  
            where: { id_negocio: req.params.id },  
        });  
        if (deleted) {  
            res.status(204).send(); // No content  
        } else {  
            res.status(404).json({ message: 'Negocio no encontrado' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

// CRUD para Menus  
app.post('/menus', async (req, res) => {  
    try {  
        const menu = await Menus.create(req.body);  
        res.status(201).json(menu);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.get('/menus', async (req, res) => {  
    try {  
        const menus = await Menus.findAll();  
        res.status(200).json(menus);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.put('/menus/:id', async (req, res) => {  
    try {  
        const [date] = await Menus.update(req.body, {  
            where: { id_menu: req.params.id },  
        });  
        if (date) {  
            const dateMenu = await Menus.findByPk(req.params.id);  
            res.status(200).json(dateMenu);  
        } else {  
            res.status(404).json({ message: 'Menú no encontrado' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.delete('/menus/:id', async (req, res) => {  
    try {  
        const deleted = await Menus.destroy({  
            where: { id_menu: req.params.id },  
        });  
        if (deleted) {  
            res.status(204).send(); // No content  
        } else {  
            res.status(404).json({ message: 'Menú no encontrado' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

// CRUD para Comentarios  
app.post('/comentarios', async (req, res) => {  
    try {  
        const comentario = await Comentarios.create(req.body);  
        res.status(201).json(comentario);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.get('/comentarios', async (req, res) => {  
    try {  
        const comentarios = await Comentarios.findAll();  
        res.status(200).json(comentarios);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.put('/comentarios/:id', async (req, res) => {  
    try {  
        const [date] = await Comentarios.update(req.body, {  
            where: { id_comentario: req.params.id },  
        });  
        if (date) {  
            const dateComentario = await Comentarios.findByPk(req.params.id);  
            res.status(200).json(dateComentario);  
        } else {  
            res.status(404).json({ message: 'Comentario no encontrado' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.delete('/comentarios/:id', async (req, res) => {  
    try {  
        const deleted = await Comentarios.destroy({  
            where: { id_comentario: req.params.id },  
        });  
        if (deleted) {  
            res.status(204).send(); // No content  
        } else {  
            res.status(404).json({ message: 'Comentario no encontrado' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

// CRUD para Promociones  
app.post('/promociones', async (req, res) => {  
    try {  
        const promocion = await Promociones.create(req.body);  
        res.status(201).json(promocion);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.get('/promociones', async (req, res) => {  
    try {  
        const promociones = await Promociones.findAll();  
        res.status(200).json(promociones);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.put('/promociones/:id', async (req, res) => {  
    try {  
        const [date] = await Promociones.update(req.body, {  
            where: { id_promocion: req.params.id },  
        });  
        if (date) {  
            const datePromocion = await Promociones.findByPk(req.params.id);  
            res.status(200).json(datePromocion);  
        } else {  
            res.status(404).json({ message: 'Promoción no encontrada' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.delete('/promociones/:id', async (req, res) => {  
    try {  
        const deleted = await Promociones.destroy({  
            where: { id_promocion: req.params.id },  
        });  
        if (deleted) {  
            res.status(204).send(); // No content  
        } else {  
            res.status(404).json({ message: 'Promoción no encontrada' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

// CRUD para Puntos de Fidelidad  
app.post('/puntos-fidelidad', async (req, res) => {  
    try {  
        const puntosFidelidad = await PuntosFidelidad.create(req.body);  
        res.status(201).json(puntosFidelidad);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.get('/puntos-fidelidad', async (req, res) => {  
    try {  
        const puntosFidelidad = await PuntosFidelidad.findAll();  
        res.status(200).json(puntosFidelidad);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.put('/puntos-fidelidad/:id', async (req, res) => {  
    try {  
        const [date] = await PuntosFidelidad.update(req.body, {  
            where: { id_fidelidad: req.params.id },  
        });  
        if (date) {  
            const datePuntos = await PuntosFidelidad.findByPk(req.params.id);  
            res.status(200).json(datePuntos);  
        } else {  
            res.status(404).json({ message: 'Puntos de fidelidad no encontrados' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.delete('/puntos-fidelidad/:id', async (req, res) => {  
    try {  
        const deleted = await PuntosFidelidad.destroy({  
            where: { id_fidelidad: req.params.id },  
        });  
        if (deleted) {  
            res.status(204).send(); // No content  
        } else {  
            res.status(404).json({ message: 'Puntos de fidelidad no encontrados' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message }); // Corregido el paréntesis
    }  
});  

// Inicializar la conexión a la base de datos  
    app.listen(PORT, () => {  
        console.log(`Servidor corriendo en http://localhost:${PORT}`);  
    }); 

