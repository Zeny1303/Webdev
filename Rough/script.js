function abcd(){
    return function (){
        console.log("hey");
        return function(){
            console.log("khedo!");
        }
    }
}
// calling the functions

abcd()()();