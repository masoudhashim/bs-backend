import { Entity, PrimaryGeneratedColumn, Column, Index , OneToMany , ManyToOne,ManyToMany ,JoinTable} from "typeorm"
import { Owner } from "./Owner"
import { Building } from "./Building"
import { User } from "./User"
import { Contract } from "./Contract"
import { Representative } from "./Representative"
@Entity()
export class Unit { 

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    @Index()
    unit_id: number

    @Column({ nullable: false, unique:true })
    unit_name: string

    @Column({ nullable: true ,unique:true })
    unit_preferred_name : string

    @Column({ nullable: true ,unique:true })
    unit_code : string

    @Column({ nullable: true })
    unit_neighbourhood: string


    @Column({ nullable: true })
    unit_type: string

    @Column({ nullable: true })
    unit_street: string

    @Column({ nullable: true })
    building_loctation: string

    @Column({ nullable: true })
    building_deed: string

    @Column({ nullable: true })
    number_of_rooms: string

    @Column({ nullable: true })
    floorNo: string

    @Column({ nullable: true })
    KitchenInstalled: string

    @Column({ nullable: true })
    air_condition_type: string


    @Column({ nullable: true })
    unit_area: string

    @Column({ nullable: false })
    Electricity_No: string

    @Column({ nullable: true })
    number_of_Parking: string

    @Column({ nullable: true })
    unit_commnet: string

    @Column({ nullable: true })
     unit_national_address: string

    @Column({ nullable: true })
     floor_no : string

    @ManyToMany(() => Owner)
    @JoinTable()
     owners: Owner[]

     
    @ManyToMany(() => Contract)
    @JoinTable()
    contracts: Contract[]

    
    @ManyToMany(() => Representative)
    @JoinTable()
    representatives: Representative[]

     @ManyToOne(()=> User,(user) => user.units)
     user: User
c
}

