import { Entity, PrimaryGeneratedColumn, Column, Index , ManyToOne, JoinTable, ManyToMany } from "typeorm"
import { User } from "./User"
import { Building } from "./Building"
import { Unit } from "./Unit"
import { Representative } from "./Representative"
import { Deed } from "./Deed"
import { Contract } from "./Contract"

@Entity()
export class Owner {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    firstName: string

    @Column()
    middleName: string

    @Column({ nullable: false })
    lastName: string

    @Column({ nullable : false })
    @Index()
    id_number:string

    @Column({ nullable : false , unique:true})
    @Index()
    mobile_number:string

    @Column({ nullable : true})
    date_of_birth:Date

    @Column({ nullable: true })
    gender: string  
    

    @Column({ nullable: true })
    job_info: string  
    

    @Column({ nullable : false , unique:true})
    @Index()
    email:string

    @ManyToOne(() => User, (user)   => user.owners)
    user: User
   
    @ManyToMany(() => Building)
    @JoinTable()
    buildings: Building[]
   
    @ManyToMany(() =>  Contract)
    @JoinTable()
    contracts: Contract[]


    @ManyToMany(() => Unit)
    @JoinTable()
    units: Unit[]

    @ManyToMany(() => Deed)
    @JoinTable()
    deeds: Deed[]


    @ManyToMany(() => Representative)
    @JoinTable()
    representatives: Representative[]

}
