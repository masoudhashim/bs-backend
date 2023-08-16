import { Entity, PrimaryGeneratedColumn, Column, Index , OneToMany , ManyToOne,ManyToMany ,JoinTable} from "typeorm"
import { Owner } from "./Owner"
import { Unit } from "./Unit"
import { Deed } from "./Deed"
import { Representative } from "./Representative"
import { User } from "./User"
import { Contract } from "./Contract"

@Entity()
export class Building { 

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    @Index()
    building_id: number

    @Column({ nullable: false, unique:true })
    biulding_name: string

    @Column({ nullable: true ,unique:true })
    building_preferred_name : string

    @Column({ nullable: true ,unique:true })
    building_code : string

    @Column({ nullable: true })
    building_neighbourhood: string

    @Column({ nullable: true })
    building_street: string

    @Column({ nullable: true })
    building_loctation: string

    @Column({ nullable: true })
    building_deed: string

    @Column({ nullable: false })
    water_No: string

    @Column({ nullable: true })
    number_of_units: string

    @Column({ nullable: true })
    number_of_elevators: string

    @Column({ nullable: true })
    number_of_Parking: string

    @Column({ nullable: true })
    building_commnet: string

    @Column({ nullable: true })
    bu_national_address: string


    @Column({ nullable: true })
     floor_no : string

     @ManyToMany(() => Owner)
     @JoinTable()
     owners: Owner[]
    
     @ManyToMany(() => Representative)
     @JoinTable()
     Representatives: Representative[]

    @ManyToMany(() => Contract)
    @JoinTable()
    contracts: Contract[]

     @OneToMany(() => Deed, (deed) => deed.building)
     deeds: Deed[]
     @OneToMany(() => Contract, (Contract) => Contract.building)
     contracts: Contract[]
     @OneToMany(() => Unit, (unit) => unit.building)
     units: Unit[]
    
    @ManyToOne(()=> User, (user)=> user.buildings )
    user: User

}

