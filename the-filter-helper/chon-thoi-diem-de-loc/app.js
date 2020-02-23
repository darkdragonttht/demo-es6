//chọn thời điểm để lọc
var post = {id: 4, title: 'New post'};
var comments = [
    {postId: 4, comment: 'awesome post'},
    {postId: 3, comment: 'it was ok'},
    {postId: 4, comment: 'neat'}
];

var cmt = comments.filter(function (comment) {
    return comment.postId === post.id;
});

console.log(cmt);