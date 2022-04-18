import BaseDatabase from "./data/baseDatabase";



class Migrations extends BaseDatabase {

    public migrationsData = () => {
        Migrations.connection.raw(`
            CREATE TABLE IF NOT EXISTS amaro_product (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL
            )

            CREATE TABLE IF NOT EXISTS amaro_tags (
                FOREIGN KEY product_id VARCHAR(255) REFERENCES amaro_product (id),
                name VARCHAR(255) NOT NULL
            )
        `)
    }
}
