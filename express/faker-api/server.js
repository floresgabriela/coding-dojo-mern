const express = require("express");
const app = express();
const port = 8000;

app.listen(port, () => console.log(`listening on port: ${port}`));

const { faker } = require('@faker-js/faker');
const { application } = require("express");

const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    return newCompany;
}

// make sure these lines are above any app.get or app.post code blocks
// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );


app.get('/api/users/new', (req, res) => {
    res.json( createUser() );
})

app.get('/api/companies/new', (req, res) => {
    res.json( createCompany() );
})

app.get('/api/user/company', (req, res) => {
    res.json( {user: createUser(), company: createCompany()} );
})