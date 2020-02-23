function makeAjaxRequest (url, method = 'GET') {
    return method;
}

makeAjaxRequest('google.com', undefined); //nếu null nó sẽ truyền vào hàm là '', còn nếu truyền vào undefinded thì nó sẽ lấy mặc định hàm truyền vào
makeAjaxRequest('google.com', 'POST');