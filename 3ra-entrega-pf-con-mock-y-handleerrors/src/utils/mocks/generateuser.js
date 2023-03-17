import { faker } from "@faker-js/faker"
import { generateProduct } from "./generateproduct.js";

faker.locale = 'es'

export const generateUser = () => {

    const numOfProducts = parseInt(faker.random.numeric(1, {bannedDigits: ['0'] }))
    const products = []

    for (let i = 0; i < numOfProducts; i++) {
        products.push(generateProduct())
    }

    return {
        name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        birthDate: faker.date.birthdate(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        sex: faker.name.sex(),
        products,
    }

}