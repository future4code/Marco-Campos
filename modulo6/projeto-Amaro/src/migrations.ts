import { connection } from "./connection"


class Migrations {
    migrationTable = async () =>{
        await connection
        .raw(`
      CREATE TABLE IF NOT EXISTS amaro_product(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS amaro_tags(
         id VARCHAR(255) NOT NULL,
         name VARCHAR(255) NOT NULL,
         FOREIGN KEY (product_id) REFERENCES amaro_product (id)
      )
   `)

    }
}
export const migrations = new Migrations()