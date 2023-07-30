import { Entity, PrimaryGeneratedColumn, Column, Index , ManyToOne, JoinTable, ManyToMany } from "typeorm"
import { User } from "./User"
import { Building } from "./Building"

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

    @Column({ nullable : false , unique:true})
    @Index()
    email:string

    @ManyToOne(() => User, (user)   => user.owners)
    user: User
   
    @ManyToMany(() => Building)
    @JoinTable()
    buildings: Building[]

}
