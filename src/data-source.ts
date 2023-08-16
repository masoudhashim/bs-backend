import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { City } from "./entity/City"
import { Owner } from "./entity/Owner"
import { Building } from "./entity/Building"
import {Unit} from "./entity/Unit"
import { Representative } from "./entity/Representative"
import { Deed } from "./entity/Deed"
import { Tenant } from "./entity/Tenant"
import { Contract } from "./entity/Contract"
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
    entities: [User,City, Owner,Building,Unit,Representative,Deed,Tenant,Contract],
    migrations: [],
    subscribers: [],
})
