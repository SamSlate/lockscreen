function returnAve(n){
    switch (n) {
        case 1:
            return [2, 5, 4]
        case 2:
            return [1, 4, 5, 6, 3]
        case 3:
            return [2, 5, 6]
        case 4:
            return [1, 2, 5, 8, 7]
        case 5:
            return [1, 2, 3, 4, 6, 7, 8, 9]
        case 6:
            return [3, 2, 5, 8, 9]
        case 7:
            return [4, 5, 8]
        case 8:
            return [7, 4, 5, 6, 9]
        case 9:
            return [8, 5, 6]
    }
}

function filterAndPrint(path){

    // 1 2 3
    // 4 5 6
    // 7 8 9

    var downward = true; //started downward
    if(path[1] == 1 | path[1] == 2 | path[1] == 3)
        downward = false; //can't go up
    if(path[0] == 7 | path[0] == 8 | path[0] == 9)
        downward = false; //can't go down from down
    if(path[0] == 4 | path[0] == 5 | path[0] == 6)
        if(!(path[1] == 7 | path[1] == 8 | path[1] == 9))
            downward = false; //middle and didn't go down

    if(downward)
        console.log(path);

}

function x(n, path_unclone){

    var path = path_unclone.slice(0);

    if(path[path.length-1] == n){
        console.log(path, n);
        throw "ERROR: " + n;
    }
    path.push(n);

    var aves = returnAve(path[path.length-1]) //avenues
    var vetArr = aves.filter(function(f){
        return !path.includes(f);
    });

    if(vetArr.length == 0)
        return filterAndPrint(path);  //exit case

    if(path.length >= 5)
        filterAndPrint(path);  //exit case

    vetArr.forEach(function(p){
        x(p, path);
    });

}

[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function(seed){
    x(seed, []);
});