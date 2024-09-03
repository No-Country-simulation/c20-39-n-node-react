-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: tuFulbito
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS tuFulbito;
USE tuFulbito;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS User;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL UNIQUE,
    nombre_real VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    imagen_id INT,  -- Referencia a la tabla de imágenes
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS Role;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE Role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for many-to-many relation between User and Role
--

DROP TABLE IF EXISTS UserRole;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE UserRole (
    user_id INT,
    role_id INT,
    PRIMARY KEY(user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES Role(id) ON DELETE CASCADE
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Image`
--

DROP TABLE IF EXISTS Image;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE Image (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    url VARCHAR(255) NOT NULL,  -- URL de la imagen
    descripcion TEXT,  -- Descripción opcional de la imagen
    fecha_subida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES User(id) ON DELETE CASCADE
);
/*!40101 SET character_set_client = @saved_cs_client */;

ALTER TABLE User
ADD CONSTRAINT fk_imagen_id
FOREIGN KEY (imagen_id) REFERENCES Image(id) ON DELETE SET NULL;

--
-- Table structure for table `Cancha`
--

DROP TABLE IF EXISTS Cancha;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE Cancha (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    jugadores INT NOT NULL,
    descripcion TEXT,
    fotos JSON,  -- Almacena las URLs de las fotos en formato JSON
    horarios_disponibles JSON,  -- Almacena los horarios disponibles en formato JSON
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Alquiler`
--

DROP TABLE IF EXISTS Alquiler;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE Alquiler (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cancha_id INT,
    usuario_id INT,
    horario_inicio DATETIME NOT NULL,
    horario_fin DATETIME NOT NULL,
    fecha_alquiler TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cancha_id) REFERENCES Cancha(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES User(id) ON DELETE CASCADE
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for many-to-many relation between User and Alquiler
--

DROP TABLE IF EXISTS UserAlquiler;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE UserAlquiler (
    user_id INT,
    alquiler_id INT,
    PRIMARY KEY(user_id, alquiler_id),
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (alquiler_id) REFERENCES Alquiler(id) ON DELETE CASCADE
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Resena`
--

DROP TABLE IF EXISTS Resena;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE Resena (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    cancha_id INT,
    calificacion INT NOT NULL,  -- Se elimina el CHECK para evitar el error de sintaxis
    comentario TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (cancha_id) REFERENCES Cancha(id) ON DELETE CASCADE
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for many-to-many relation between User and Resena
--

DROP TABLE IF EXISTS UserResena;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE UserResena (
    user_id INT,
    resena_id INT,
    PRIMARY KEY(user_id, resena_id),
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (resena_id) REFERENCES Resena(id) ON DELETE CASCADE
);
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
