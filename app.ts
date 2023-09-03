import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import crypto from 'crypto'

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    findUser(email: string): User {
        return this.users.find(user => user.email === email)
    }


    registerUser(user: User): void {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        user.id = crypto.randomUUID()
        this.users.push(user)
    }

    removeUser(email: string): void {
        this.users.splice(this.users.indexOf(this.findUser(email)), 1)
    }

    registerBike(bike: Bike): void{
        for(const rBike of this.bikes){
            if(rBike.id === bike.id){
                throw new Error('Duplicate id-Bike')
            }
        }
        bike.id = crypto.randomBytes(5).toString();
        this.bikes.push(bike)
    }

    rentBike(rent: Rent, user: User, bike: Bike, startDate: Date, endDate: Date): void{ 
        for(const rRent of this.rents){
            if (rRent.canRent(this.rents,startDate,endDate)){
                console.log('Avaliable Rent')
                rent = rRent.create(this.rents,bike,user,startDate,endDate)
            }
        }
        this.rents.push(rent)
    }

    returnBike(rent: Rent, dateReturned: Date): void{
        rent.dateTo = dateReturned;
    }
}