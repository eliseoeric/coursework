
DROP TABLE IF EXISTS `quotes`;

CREATE TABLE `quotes` (  `quote` varchar(255) NOT NULL,  `id` int(11) NOT NULL AUTO_INCREMENT,  PRIMARY KEY (`id`),  UNIQUE KEY `id_UNIQUE` (`id`),  UNIQUE KEY `quote_UNIQUE` (`quote`)) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

INSERT INTO `quotes` VALUES ('Do not stop when you are tired. STOP when you areDONE. --Unknown',4),('Every great story on the planet happened when someonedecided not to give up, but kept going no matter what. -- Spryte Loriano',3),('Hard work beats talent when talent does not work hard. --Tim Notke',1),('Lifeis 10% what happens to you and 90% how you react to it. -- Charles R.Swindoll',5),('test',6),('When you want to succeed as bad as you want to breathethen you will be successful. --Eric Thomas',2);

UNLOCK TABLES;

