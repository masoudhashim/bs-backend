import { Entity, PrimaryGeneratedColumn, Column, Index , OneToMany , ManyToOne,ManyToMany ,JoinTable} from "typeorm"
import { Owner } from "./Owner"

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

    @Column({ nullable: true })
    number_of_units: string

    @Column({ nullable: true })
    number_of_floors: string

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

}

