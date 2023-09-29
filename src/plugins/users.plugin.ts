import { User } from "../interfaces/interface";
import { getAgePlugin } from "./get-age.pliugin";
import { genUUID } from "./get-uuid.plugin";

export const createUser = ( name: string, birthdayDate: string ): User => {
    
    return {
        id: genUUID(),
        name: name,
        birthdayDate: getAgePlugin(birthdayDate),
    }
    
}