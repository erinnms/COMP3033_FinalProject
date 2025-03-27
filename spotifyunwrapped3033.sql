-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2025 at 11:36 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spotifyunwrapped3033`
--

-- --------------------------------------------------------

--
-- Table structure for table `topartists`
--

CREATE TABLE `topartists` (
  `userID` text NOT NULL,
  `firstArtist` text NOT NULL,
  `secondArtist` text NOT NULL,
  `thirdArtist` text NOT NULL,
  `fourthArtist` text NOT NULL,
  `fifthArtist` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='no null values, holds top 5 artists and username';

--
-- Dumping data for table `topartists`
--

--INSERT INTO `topartists` (`userID`, `firstArtist`, `secondArtist`, `thirdArtist`, `fourthArtist`, `fifthArtist`) VALUES
--('TotallyNotMess', 'Arcane', 'Lil Peep', ' Grahm Barham', 'XXXTENTATCION', 'Don Toliver');

-- --------------------------------------------------------

--
-- Table structure for table `topgenres`
--

CREATE TABLE `topgenres` (
  `userID` text NOT NULL DEFAULT 'Username',
  `firstGenre` text NOT NULL DEFAULT 'GenreOne',
  `secondGenre` text NOT NULL DEFAULT 'GenreTwo',
  `thirdGenre` text NOT NULL DEFAULT 'GenreThree'
) ENGINE=CSV DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Table that receives the user''s ID and then thei top 3 genres';

-- --------------------------------------------------------

--
-- Table structure for table `topletter`
--

CREATE TABLE `topletter` (
  `userID` text NOT NULL,
  `topLetter` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='no null values, holds most listened to letter';

--
-- Dumping data for table `topletter`
--

INSERT INTO `topletter` (`userID`, `topLetter`) VALUES
--('totallynotmess', 'R'),
--('JohnDoe', 'R'),
--('', 'R');

-- --------------------------------------------------------

--
-- Table structure for table `topsongs`
--

CREATE TABLE `topsongs` (
  `userID` text NOT NULL,
  `firstSong` text NOT NULL,
  `secondSong` text NOT NULL,
  `thirdSong` text NOT NULL,
  `fourthSong` text NOT NULL,
  `fifthSong` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Cannot be Null, Stores top 5 songs and username';

--
-- Dumping data for table `topsongs`
--

--INSERT INTO `topsongs` (`userID`, `firstSong`, `secondSong`, `thirdSong`, `fourthSong`, `fifthSong`) VALUES
--('TotallyNotMess', 'Fantastic (from the series Arcane League of Legends)', 'Ma Meilleure Ennemie - from the series Arcane League of Legends', 'The Spins', 'Feel It - From The Original Series “Invincible”', 'Open Your Eyes (feat. Alex Seaver)');

-- --------------------------------------------------------

--
-- Table structure for table `toptracks`
--

CREATE TABLE `toptracks` (
  `userID` text NOT NULL,
  `t1` text NOT NULL,
  `t2` text NOT NULL,
  `t3` text NOT NULL,
  `t4` text NOT NULL,
  `t5` text NOT NULL,
  `t6` text NOT NULL,
  `t7` text NOT NULL,
  `t8` text NOT NULL,
  `t9` text NOT NULL,
  `t10` text NOT NULL,
  `t11` text NOT NULL,
  `t12` text NOT NULL,
  `t13` text NOT NULL,
  `t14` text NOT NULL,
  `t15` text NOT NULL,
  `t16` text NOT NULL,
  `t17` text NOT NULL,
  `t18` text NOT NULL,
  `t19` text NOT NULL,
  `t20` text NOT NULL
) ENGINE=CSV DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='top 20 saved tracks';

--
-- Dumping data for table `toptracks`
--

--INSERT INTO `toptracks` (`userID`, `t1`, `t2`, `t3`, `t4`, `t5`, `t6`, `t7`, `t8`, `t9`, `t10`, `t11`, `t12`, `t13`, `t14`, `t15`, `t16`, `t17`, `t18`, `t19`, `t20`) VALUES
--('TotallyNotMess', 'Remember Me - from the series Arcane League of Legends', '90s Rap Mashup', 'SOMETHING TO CHASE', 'OIL MONEY', 'Day Late & A Buck Short', 'Medusa', 'i can see clearly', 'nuts', 'Fireball (feat. John Ryan)', 'Whenever', ' Wherever', 'La La La (Brasil 2014) (feat. Carlinhos Brown)', 'Suavemente', 'La Dueña del Swing', 'Not Like Us', 'El Dorado', 'Enemy with JID (Opening Title Version)', 'Drunk Wishing', 'Bang Bang', 'Pepas');
--COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
