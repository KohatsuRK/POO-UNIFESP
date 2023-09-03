import { Bike } from "./bike";
import { User } from "./user";

export class Rent {
    private constructor(
        public bike: Bike,
        public user: User,
        public dateFrom: Date,
        public dateTo: Date,
        public dateReturned?: Date
    ) {}

    public  create(rents: Rent[], bike: Bike, user: User, 
                  startDate: Date, endDate: Date): Rent {
        const canCreate = this.canRent(rents, startDate, endDate)
        if (canCreate) return new Rent(bike, user, startDate, endDate)
        throw new Error('Overlapping dates.')
    }

    public  canRent(rents: Rent[], startDate: Date, endDate: Date): boolean {
        for (const rent of rents) {
            if (startDate <= rent.dateTo && endDate >= rent.dateFrom) {
                return false
            }
        }
        return true
    }

}