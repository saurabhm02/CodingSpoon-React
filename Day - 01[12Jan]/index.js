
obj1 = {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main',
}

const {firstName, lastName, address} = obj1;
console.log(firstName, lastName, address);

const arr = [
    {
        name: 'John',
        address: '123 Main',
    },
    {
        name: 'Doe',
        address: '126 Main',
    },
];

const [ ob1, ob2 ] = arr;
const { fName, lName } = ob1;
console.log(fName, lName);


const alphaObj = {
    firstName: ['a', 'b', 'c'],
    lastName: ['d', 'e', 'f'],
}


const { firstName: fNames, lastName: lNames } = alphaObj;
const [a1, a2, a3] = fNames;
const [a4, a5, a6] = lNames;
console.log(a1, a2, a3);
console.log(a4, a5, a6);

alphaObj.firstName.map((e) => {
    return(console.log(e));
})
alphaObj.lastName.map((e) => {
    return(console.log(e));
});



obj1 = {
    firstName: 'John',
    lastName: 'Doe',
    address: {

        city: 'New York',
        state: 'NY',
    },
}

const bObj = obj1;
bObj['firstName'] = 'abhi';
console.log(bObj);
console.log(obj1);

const obj3 = {...obj1};
obj3['address']['city'] = 22;
console.log(obj3);
console.log(obj1);

const add = require('./add');

let sum = add(3, 4);
console.log(sum)

