import { Entity, PrimaryGeneratedColumn, Column, Index , OneToMany} from "typeorm"
import { Owner } from "./Owner"


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

}   
