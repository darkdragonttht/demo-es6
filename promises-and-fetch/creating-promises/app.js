promise = new Promise((resolve, reject) => {
    var request = new XHTMLRequest()
    //make request
    request.onload = () => {
        resolve();
    }
});

promise
    .then(() => console.log('finally finished!'))
    .then(() => console.log('i was also ran!!!'))
    .catch(() => console.log('uh oh!!'));

//console 2
uri = "https://jsonplaceholder.typicode123.com/posts124/";
fetch(uri)
    .then(response => console.log(response))
    .catch(error => console.log('BAD', error));//trường hợp domain không tồn tại nó mới trả về catch
