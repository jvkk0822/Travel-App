USE poptvbvbgawow5vo;

DROP TABLE IF EXISTS Comments;
-- Create table for burgers.
CREATE TABLE Comments
(
id int NOT NULL AUTO_INCREMENT,
person VARCHAR(255) NOT NULL,
city VARCHAR(255) NOT NULL,
country VARCHAR(255) NOT NULL,
body VARCHAR(255) NOT NULL,
createdAt TIMESTAMP,
updatedAt TIMESTAMP,
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS Countries;
CREATE TABLE Countries (
    `list_tag` VARCHAR(2) CHARACTER SET utf8,
    `list_geopoliticalarea` VARCHAR(58) CHARACTER SET utf8,
    `list_travel_transportation` VARCHAR(9513) CHARACTER SET utf8,
    `list_health` TEXT CHARACTER SET utf8,
    `list_local_laws_and_special_circumstances` MEDIUMTEXT CHARACTER SET utf8,
    `list_safety_and_security` MEDIUMTEXT CHARACTER SET utf8,
    `list_entry_exit_requirements` MEDIUMTEXT CHARACTER SET utf8,
    `list_destination_description` VARCHAR(3459) CHARACTER SET utf8,
    `list_iso_code` VARCHAR(2) CHARACTER SET utf8,
    `list_travel_embassyAndConsulate` MEDIUMTEXT CHARACTER SET utf8,
    `list_last_update_date` VARCHAR(39) CHARACTER SET utf8,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP
);
