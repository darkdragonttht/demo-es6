function getMessage() {
    const year = new Date().getFullYear();
    return `the year is ${year}`;
}

console.log(getMessage());

//template
const deviced_id = 4;
const guild = 20;
const username = 'hello';

const data = `{ "deviced_id": "${deviced_id}", "guild":"${guild}","username":"${username}","}`;
console.log(data);