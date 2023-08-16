import { Entity, PrimaryGeneratedColumn, Column, Index , OneToMany , ManyToOne,ManyToMany ,JoinTable} from "typeorm"
import { Owner } from "./Owner"
import { Building } from "./Building"
import { User } from "./User"
import { Tenant } from "./Tenant"
import { Unit } from "./Unit"
import { Representative } from "./Representative"
@Entity()
export class Contract { 

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    @Index()
    ejar_id: number

    @Column({ nullable: false,  })
    start_date: Date

    @Column({ nullable: false,  })
    end_date: Date


    @Column({ nullable: true })
    contract_status: string

     @ManyToMany(() => Owner)
     @JoinTable()
     owners: Owner[]

     @ManyToMany(() =>  Representative)
     @JoinTable()
     representatives: Representative[]

     @ManyToMany(() => Tenant)
     @JoinTable()
     tenants: Tenant[]


     @ManyToOne(()=> User,(user) => user.units)
     user: User

     @ManyToOne(() => Unit, (unit) => unit.contracts)
     unit: Unit

     @ManyToOne(() => Building, (building)   => building.contracts)
     building: Building
}

