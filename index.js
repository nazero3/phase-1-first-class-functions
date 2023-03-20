function receivesAFunction(fun) {
    fun();
}

const x = function(){
    console.log('funi');
}
function returnsANamedFunction(){
    return x;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('x');
    }
}