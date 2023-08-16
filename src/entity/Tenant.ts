import { Entity, PrimaryGeneratedColumn, Column, Index ,ManyToOne, OneToMany,ManyToMany ,JoinTable} from "typeorm"
import { Owner } from "./Owner"
import { Unit } from "./Unit"
import { User } from "./User"
import { Contract } from "./Contract"

@Entity()
export class Tenant {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    first_name: string


    @Column({ nullable: false })
    middle_name: string

    @Column({ nullable: false })
    last_Name: string

        
    @Column({ nullable: false })
    @Index()
    id_number: string
        
    @Column({ nullable: false })
    @Index()
    nationality: string

    @Column({ nullable : true})
    date_of_birth: Date
    
    @Column({ nullable: true })
    gender: string  
    
    @Column({ nullable: false , unique:true })
    email: string  

    @Column(
        {
            default: true
        }
    )
    isActive: boolean

    @ManyToMany(() => Contract)
    @JoinTable()
    contracts: Contract[]
    
    @ManyToOne(()=> User,(user) => user.tenants)
    user: User
  

}   