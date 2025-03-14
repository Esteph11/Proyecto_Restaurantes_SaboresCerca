-- --------------------------------------------------------

--
-- Base de datos: `SaboresCerca`
--

-- --------------------------------------------------------

create database SaboresCerca;

	SHOW DATABASES;
    USE SaboresCerca;


CREATE TABLE Roles (  
    id INT AUTO_INCREMENT PRIMARY KEY,  
    nombre VARCHAR(50) NOT NULL  
);  

CREATE TABLE Usuarios (  
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,  
    nombre VARCHAR(100),  
    email VARCHAR(100),  
    telefono VARCHAR(15),  
    direccion VARCHAR(250),  
	id_rol INT,  
    FOREIGN KEY (id_rol) REFERENCES Roles(id)  
);  

CREATE TABLE Negocios (  
    id_negocio INT AUTO_INCREMENT PRIMARY KEY,  
    nombre_negocio VARCHAR(100),  
    direccion VARCHAR(250),  
    telefono VARCHAR(15),  
    horario VARCHAR(100),  
    categoria VARCHAR(50),  
    descripcion TEXT   
);  

CREATE TABLE Menus (  
    id_menu INT AUTO_INCREMENT PRIMARY KEY,  
    id_negocio INT,  
    platillo VARCHAR(100),  
    precio DECIMAL(10,2),  
    descripcion TEXT,  
    FOREIGN KEY (id_negocio) REFERENCES Negocios(id_negocio)  
);  

CREATE TABLE Comentarios (  
    id_comentario INT AUTO_INCREMENT PRIMARY KEY,  
    id_usuario INT,  
    id_negocio INT,  
    calificacion INT CHECK (calificacion BETWEEN 1 AND 5),  
    notas TEXT,  
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,  
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),  
    FOREIGN KEY (id_negocio) REFERENCES Negocios(id_negocio)  
);  

CREATE TABLE Promociones (  
    id_promocion INT AUTO_INCREMENT PRIMARY KEY,  
    id_negocio INT,  
    descripcion TEXT,  
    fecha_inicio DATETIME,  
    fecha_fin DATETIME,  
    FOREIGN KEY (id_negocio) REFERENCES Negocios(id_negocio)  
);  

CREATE TABLE PuntosFidelidad (  
    id_fidelidad INT AUTO_INCREMENT PRIMARY KEY,  
    id_usuario INT,  
    puntos_acumulados INT DEFAULT 0,  
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)  
);  

INSERT INTO Roles (nombre) VALUES  
('Usuario'),   
('Administrador'); 

INSERT INTO Usuarios (nombre, email, telefono, direccion, id_rol) VALUES  
('Admin', 'administrador.admin@example.com', '9999-1111', 'Calle de la Esquina 1', 2);  -- id_rol = 2 para Administrador  

/*1. Insertar datos en la tabla Usuarios*/
INSERT INTO Usuarios (nombre, email, telefono, direccion, id_rol) VALUES  
('Juan Pérez', 'juan.perez@example.com', '9876-1234', 'Calle Falsa 123, Tegucigalpa',1),  
('María López', 'maria.lopez@example.com', '9678-1234', 'Avenida Siempre Viva 742, San Pedro Sula',1),  
('Carlos Hernández', 'carlos.hernandezez@example.com', '9876-4321', 'Callejón del Beso 5, La Ceiba',1),  
('Lucía Maradiaga', 'lucia.mardiaga@example.com', '9678-4321', 'Boulevard de los Sueños 456, Choluteca',1),  
('Ana Castillo', 'ana.castillo@example.com', '9432-1780-', 'Plaza Mayor 789, Comayagua',1);  

/*2. Insertar datos en la tabla Negocios*/
INSERT INTO Negocios (nombre_negocio, direccion, telefono, horario, categoria, descripcion) VALUES  
('Sopa de Caracol', 'Calle 2, Tegucigalpa', '9780-111', '10:00-21:00', 'Gastronomía Hondureña', 'Auténtica sopa de caracol y otros platillos típicos.'),  
('Pizzas Arsenal', 'Avenida 10, San Pedro Sula', '9780-2222', '12:00-22:00', 'Pizzería', 'Las mejores pizzas al horno de leña de la ciudad.'),  
('Burgers Playa Blanca', 'Avenida Principal, La Ceiba', '9780-3333', '11:00-23:00', 'Comida Rápida', 'Hamburguesas frescas y jugosas junto al mar.'),  
('Comida Saludable Oro Verde', 'Calle de la Naturaleza, Choluteca', '9780-4444', '09:00-19:00', 'Comida Vegetariana', 'Platillos veganos que sorprenden.'),  
('Dulces Tradicionales de Karla', 'Plaza Central, Comayagua', '9780-5555', '10:00-18:00', 'Repostrería', 'Deliciosos postres tradicionales de dulce de leche.');  

/*3. Insertar datos en la tabla Menus*/
INSERT INTO Menus (id_negocio, platillo, precio, descripcion) VALUES  
(1, 'Sopa de Caracol', 150.00, 'Sopa tradicional hecha con caracol y especias.'),  
(1, 'Tacos de Pollo', 75.00, 'Tacos de pollo acompañados de salsa roja.'),  
(2, 'Pizza Tradicional', 120.00, 'Pizza de pepperoni con masa fina.'),  
(3, 'Hamburguesa Playa', 100.00, 'Hamburguesa con queso, cebolla y salsa especial.'),  
(4, 'Ensalada Vegana', 90.00, 'Ensalada fresca con vegetales orgánicos y aderezo de limón.');  

/*Insertar datos en la tabla Comentarios*/
INSERT INTO Comentarios (id_usuario, id_negocio, calificacion, notas, fecha) VALUES  
(1, 1, 5, '¡La mejor sopa de caracol de Tegucigalpa!', NOW()),  
(2, 2, 4, 'Muy buena pizza, aunque un poco lenta la atención.', NOW()),  
(3, 3, 3, 'Las hamburguesas son buenas, pero no son muy grandes.', NOW()),  
(4, 4, 5, 'Comida vegana deliciosa, altamente recomendado.', NOW()),  
(5, 5, 5, 'Postres únicos y deliciosos, deben probarlos.', NOW());  

/*Insertar datos en la tabla Promociones*/
INSERT INTO Promociones (id_negocio, descripcion, fecha_inicio, fecha_fin) VALUES  
(1, '20% de descuento en sopa de caracol los miércoles', NOW(), DATE_ADD(NOW(), INTERVAL 1 MONTH)),  
(2, 'Compra una pizza y obtén una bebida gratis', NOW(), DATE_ADD(NOW(), INTERVAL 2 MONTH)),  
(3, 'Combo de hamburguesa y papas con un descuento especial', NOW(), DATE_ADD(NOW(), INTERVAL 3 MONTH)),  
(4, 'Descuento del 15% para los que traigan a un amigo', NOW(), DATE_ADD(NOW(), INTERVAL 1 MONTH)),  
(5, '2x1 en postres todos los viernes', NOW(), DATE_ADD(NOW(), INTERVAL 1 MONTH));  

/* Insertar datos en la tabla PuntosFidelidad*/
INSERT INTO PuntosFidelidad (id_usuario, puntos_acumulados) VALUES  
(1, 40),  
(2, 20),  
(3, 25),  
(4, 35),  
(5, 15);  

SELECT * FROM Usuarios;
SELECT * FROM Negocios;
SELECT * FROM Menus;
SELECT * FROM Comentarios;
SELECT * FROM Promociones;
SELECT * FROM PuntosFidelidad;