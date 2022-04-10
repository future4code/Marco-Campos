import { connection } from "./connection"


class Migrations {
    migrationTable = async () =>{
        await connection
        .raw(`
      CREATE TABLE IF NOT EXISTS (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) UNIQUE NOT NULL,
         type VARCHAR(255) NOT NULL,
         generation VARCHAR(255) NOT NULL
      );
   `)

    }
}
export const migrations = new Migrations()