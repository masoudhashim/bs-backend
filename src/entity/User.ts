import { Entity, PrimaryGeneratedColumn, Column, Index , OneToMany,ManyToMany} from "typeorm"
import { Owner } from "./Owner"
import { Unit } from "./Unit"
import { Building } from "./Building"
import { Deed } from "./Deed"
import { Representative } from "./Representative"
import { Tenant } from "./Tenant"
import { Contract } from "./Contract"


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    first_name: string


    @Column({ nullable: false })
    middle_name: string
    
    @Column({ nullable: false })
    @Index()
    id_number: string
    

    @Column({ nullable: false })
    last_Name: string

    @Column({ nullable: false , unique:true })
    email: string
    

    @Column(
        {
            default: true
        }
    )
    isActive: boolean

    @OneToMany(() => Owner, (owner) => owner.user)
    owners: Owner[]
  
    @OneToMany(() => Unit, (unit) => unit.user)
    units: Unit[]
  
    @OneToMany(() => Building, (building) => building.user)
    buildings: Building[]
  
    @OneToMany(() => Deed, (deed) => deed.user)
    deeds: Deed[]
  
  
    @OneToMany(() =>  Representative, (representative) => representative.user)
    representatives:  Representative[]
  
    @OneToMany(() =>  Tenant, (tenant) => tenant.user)
    tenants: Tenant[]
  
  
    @OneToMany(() =>  Contract, (Contract) => Contract.user)
    Contracts: Contract[]
  

}   
