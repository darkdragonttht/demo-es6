function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camero'),
    new Car('Focus')
];

var xe = cars.find(function (car){
    return car.model === 'Focus';
});
console.log(xe);

//th2
var posts = [
    {id: 1, title: 'New post'},
    {id: 2, title: 'Old post'}
];

var comment = {postId: 1, comment: 'Great Post'};

function postForComment (posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment));