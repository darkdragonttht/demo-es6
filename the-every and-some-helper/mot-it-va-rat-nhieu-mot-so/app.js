//một số và rất nhiều
var computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compad', ram: 4},
    {name: 'Acer', ram: 32}
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];
    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

"---"

allComputersCanRunProgram;
onlySomeComputersCanRunProgram;

"+++"

computers.every(function (computer){ //dùng trong trường hợp tất cả các phần tử trong mảng của 1 biến
    return computer.ram > 16;
});

computers.some(function (computer){ //dùng trong trường hợp một vài các phần tử trong mảng của 1 biến
    return computer.ram > 16;
});