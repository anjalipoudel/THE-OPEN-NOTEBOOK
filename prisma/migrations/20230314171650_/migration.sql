-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `pnone` INTEGER NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `bio` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `User_userId_key`(`userId`),
    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_pnone_key`(`pnone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
