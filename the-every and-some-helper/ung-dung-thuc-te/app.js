//ung dung thuc te
function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
};

var username = new Field('2cool');
var password = new Field('my_password');
var birthday = new Field('10/10/2010');

console.log(username.validate());

var fields = [username, password, birthday];
var formIsValid = fields.every(function(field){
    return field.validate();
});

if (formIsValid) {
    console.log('đăng ký thành công');
} else {
    console.log('đăng ký thất bại');
}