var saveFiled = {
    extensions: 'jpg',
    name: 'repost',
    size: 14040
};

//thông thường
// function fileSummary(file) {
//     return `The file ${file.name}.${file.extensions} is of size ${file.size}`;
// }

//ES6
function fileSummary({name, extensions, size}, {color}){
    return `${color} The file ${name}.${extensions} is of size ${name}`;
}

console.log(fileSummary(saveFiled, {color: 'red'}));