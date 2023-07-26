import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Owner } from "../entity/Owner"

export class OwnerController {

    private ownerRepository = AppDataSource.getRepository(Owner)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.ownerRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const owner = await this.ownerRepository.findOne({
            where: { id }
        })

        if (!owner) {
            return "unregistered owner"
        }
        return owner
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, middle_name,id_number,mobile_number,email } = request.body;

        const owner = Object.assign(new Owner(), {
            firstName,
            lastName,
            middle_name,
            id_number ,
            mobile_number ,
            email 
        })

        return this.ownerRepository.save(owner)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        let ownerToUpdate = await this.ownerRepository.findOneBy({ id })
        const ownerData = request.body;
        if (!ownerToUpdate) {
            return "this owner not exist"
        }
        this.ownerRepository.merge(ownerToUpdate,ownerData)
       // userToUpdate.firstName = userRepository.
        await this.ownerRepository.save(ownerToUpdate)

        return "owner has been update"
    }
    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let ownerToRemove = await this.ownerRepository.findOneBy({ id })

        if (!ownerToRemove) {
            return "this owner not exist"
        }

        await this.ownerRepository.remove(ownerToRemove)

        return "owner has been removed"
    }

}