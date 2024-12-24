Db Structure is as follows :

Tables : users, chatHistory ,chatStatus

createStatements

CREATE TABLE
  `users` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `name` varchar(255) DEFAULT NULL,
    `email` varchar(255) DEFAULT NULL,
    `isActive` tinyint DEFAULT NULL,
    `password` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci


  CREATE TABLE
  `chat_history` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `user_id` bigint DEFAULT NULL,
    `chat_start_time` timestamp NULL DEFAULT NULL,
    `chat_end_time` timestamp NULL DEFAULT NULL,
    `chat_description` varchar(255) DEFAULT NULL,
    `chat_status` int DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `chat_history_relation_1` (`user_id`),
    KEY `chat_history_relation_2` (`chat_status`),
    CONSTRAINT `chat_history_relation_1_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
    CONSTRAINT `chat_history_relation_2_chat_status` FOREIGN KEY (`chat_status`) REFERENCES `chat_status` (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci


  CREATE TABLE
  `chat_status` (
    `id` int NOT NULL AUTO_INCREMENT,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `description` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci


  Project Flow ----> user is registered ---> user logs in ---> users gets a token ( can be stored in frontend for further req ) ----> user upload a file ( token sent is validated and file is uploaded ) -----> users sees the uploaded files and filters the chat-history based on chat_status as uploaded from the file.

  CONTROLLERS 
  USER - login , register 
  CHAT - uploadFile , getFiles ( contains the filter as well for chat_Status will be a post req)
