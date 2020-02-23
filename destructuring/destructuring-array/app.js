const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [name, name2, ...rest] = companies;
console.log(name);
console.log(name2);
console.log(rest);