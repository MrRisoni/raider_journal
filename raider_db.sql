-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 11, 2021 at 05:55 AM
-- Server version: 10.6.4-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `raider_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `email`, `created_at`) VALUES
(1, 'trollman', '2021-11-11 05:42:06');

-- --------------------------------------------------------

--
-- Table structure for table `bosses`
--

CREATE TABLE `bosses` (
  `id` int(10) UNSIGNED NOT NULL,
  `raid_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `bosses`
--

INSERT INTO `bosses` (`id`, `raid_id`, `title`) VALUES
(1, 1, 'Altimor'),
(2, 1, 'Shriekwing'),
(3, 1, 'Innerva'),
(4, 1, 'Hungering Destro'),
(5, 1, 'Sludgefist'),
(6, 1, 'Stone Legion Generals'),
(7, 1, 'Xymox'),
(8, 1, 'Kaelthas'),
(9, 1, 'Council of Blood'),
(10, 1, 'Denathrius');

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `title` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `title`) VALUES
(10, 'Death Knight'),
(11, 'Demon Hunter'),
(7, 'Druid'),
(12, 'Hunter'),
(6, 'Mage'),
(8, 'Monk'),
(2, 'Paladin'),
(4, 'Priest'),
(9, 'Rogue'),
(3, 'Shaman'),
(5, 'Warlock'),
(1, 'Warrior');

-- --------------------------------------------------------

--
-- Table structure for table `difficulties`
--

CREATE TABLE `difficulties` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `title` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `difficulties`
--

INSERT INTO `difficulties` (`id`, `title`) VALUES
(3, 'Heroic'),
(1, 'LFR'),
(4, 'Mythic'),
(2, 'Normal');

-- --------------------------------------------------------

--
-- Table structure for table `expansions`
--

CREATE TABLE `expansions` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `title` varchar(22) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `expansions`
--

INSERT INTO `expansions` (`id`, `title`) VALUES
(1, 'Shadowlands');

-- --------------------------------------------------------

--
-- Table structure for table `raids`
--

CREATE TABLE `raids` (
  `id` int(10) UNSIGNED NOT NULL,
  `expansion_id` tinyint(3) UNSIGNED NOT NULL,
  `title` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `raids`
--

INSERT INTO `raids` (`id`, `expansion_id`, `title`) VALUES
(1, 1, 'Castle Nathria'),
(2, 1, 'Sanctum of Domination');

-- --------------------------------------------------------

--
-- Table structure for table `raid_progress`
--

CREATE TABLE `raid_progress` (
  `id` int(10) UNSIGNED NOT NULL,
  `boss_id` int(10) UNSIGNED NOT NULL,
  `difficulty_id` tinyint(3) UNSIGNED NOT NULL,
  `toon_id` int(10) UNSIGNED NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `raid_progress`
--

INSERT INTO `raid_progress` (`id`, `boss_id`, `difficulty_id`, `toon_id`, `created_at`) VALUES
(1, 1, 4, 1, '2021-11-02');

-- --------------------------------------------------------

--
-- Table structure for table `toons`
--

CREATE TABLE `toons` (
  `id` int(10) UNSIGNED NOT NULL,
  `class_id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(45) NOT NULL,
  `is_main` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `toons`
--

INSERT INTO `toons` (`id`, `class_id`, `name`, `is_main`) VALUES
(1, 2, 'Matak', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `bosses`
--
ALTER TABLE `bosses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `raid_id` (`raid_id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `difficulties`
--
ALTER TABLE `difficulties`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `expansions`
--
ALTER TABLE `expansions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `raids`
--
ALTER TABLE `raids`
  ADD PRIMARY KEY (`id`),
  ADD KEY `expansion_id` (`expansion_id`);

--
-- Indexes for table `raid_progress`
--
ALTER TABLE `raid_progress`
  ADD PRIMARY KEY (`id`),
  ADD KEY `boss_id` (`boss_id`),
  ADD KEY `difficulty_id` (`difficulty_id`),
  ADD KEY `toon_id` (`toon_id`);

--
-- Indexes for table `toons`
--
ALTER TABLE `toons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `class_id` (`class_id`),
  ADD KEY `class_id_2` (`class_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bosses`
--
ALTER TABLE `bosses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `difficulties`
--
ALTER TABLE `difficulties`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `expansions`
--
ALTER TABLE `expansions`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `raids`
--
ALTER TABLE `raids`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `raid_progress`
--
ALTER TABLE `raid_progress`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `toons`
--
ALTER TABLE `toons`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bosses`
--
ALTER TABLE `bosses`
  ADD CONSTRAINT `bosses_ibfk_1` FOREIGN KEY (`raid_id`) REFERENCES `raids` (`id`);

--
-- Constraints for table `raids`
--
ALTER TABLE `raids`
  ADD CONSTRAINT `raids_ibfk_1` FOREIGN KEY (`expansion_id`) REFERENCES `expansions` (`id`);

--
-- Constraints for table `raid_progress`
--
ALTER TABLE `raid_progress`
  ADD CONSTRAINT `raid_progress_ibfk_1` FOREIGN KEY (`boss_id`) REFERENCES `bosses` (`id`),
  ADD CONSTRAINT `raid_progress_ibfk_2` FOREIGN KEY (`difficulty_id`) REFERENCES `difficulties` (`id`),
  ADD CONSTRAINT `raid_progress_ibfk_3` FOREIGN KEY (`toon_id`) REFERENCES `toons` (`id`);

--
-- Constraints for table `toons`
--
ALTER TABLE `toons`
  ADD CONSTRAINT `toons_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
