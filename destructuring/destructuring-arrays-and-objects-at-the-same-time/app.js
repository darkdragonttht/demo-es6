const companies = [
    {name: 'Google', address: 'Mountain View'},
    {name: 'Facebook', address: 'Menlo Park'},
    {name: 'Uber', address: 'San Francisco'}
];
const [{address}] = companies;
console.log(address);

//th2
const Google = {
    locations: ['Mountain View', 'Menlo Park', 'San Francisco']
};

const {locations : [add]} = Google;
console.log(add);
