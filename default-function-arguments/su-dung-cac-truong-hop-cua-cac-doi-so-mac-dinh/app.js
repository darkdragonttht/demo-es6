function User(id){
    this.id = id;
}

function generatedId(){
    return Math.random() * 9999999;
}

function createAdminUser(user = new User(generatedId())) {
    user.admin = true;
    return user;
}

const user = new User(generatedId());

createAdminUser();