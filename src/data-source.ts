import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { City } from "./entity/City"
import { Owner } from "./entity/Owner"
try {
    
} catch (error) {
    
}
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "bs-office23",
    synchronize: true,
    logging: false,
    entities: [User,City, Owner],
    migrations: [],
    subscribers: [],
})
