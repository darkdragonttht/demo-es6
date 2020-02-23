function signup({username, password, email, dateOfBirth, city}) {
        return {username, password, email, dateOfBirth, city};
}

const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@example.com',
    dateOfBirth: '1/1/1990',
    city: 'New York',
};

console.log(signup(user));