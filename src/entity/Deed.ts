import { Entity, PrimaryGeneratedColumn, Column, Index , ManyToOne,ManyToMany ,JoinTable} from "typeorm"
import { Owner } from "./Owner"
import { Unit } from "./Unit"
import { Building } from "./Building"
import { User } from "./User"

@Entity()
export class Deed { 

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    @Index()
    deed_no: number
 
    @ManyToOne(() => User, (user)   => user.deeds)
    user: User


    @Column({ nullable: false, unique:true })
     issuer: string
     @ManyToMany(() => Unit)
     @JoinTable()
     owners: Owner[]
     @ManyToOne(() => Building, (building)   => building.deeds)
     building: Building
}

