function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1 + arg2);
        case 'sub':
            return sub(arg1 - arg2);
        case 'devis':
            return devis(arg1 / arg2);
        case 'multy':
            return multy(arg1 * arg2);
    }
}


function sum(x, y) {
    return (x + y);
}

function sub(x, y) {
    return (x - y);
}
function devis(x, y) {
    return (x / y);
}
function multy(x, y) {
    return (x * y);
}
