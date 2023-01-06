// 1.
console.log(hello);                          
var hello = 'world';
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';                    


// 2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// test(); hoisted
// needle = 'magnet';
// console.log(needle); // logs magnet

// 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// brendan = 'super cool';
// brendan = 'only okay'; // only inside the print function
// console.log(brendan); // logs 'super cool'

// 4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// var food = 'chicken';
// console.log(food); // logs 'chicken'
// eat(); hoisted
// food = 'half-chicken';
// console.log(food); // logs 'half chicken'

// 5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// mean(); // error mean is not a function

// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre
// console.log(genre); // logs undefined
// genre = "disco";
// rewind(); hoisted
// genre = "rock";
// console.log(genre); // logs rock
// var genre = "r&b";
// console.log(genre); // logs r&b
// console.log(genre); // logs disco


// 7. 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = "san jose";
// console.log(dojo); // logs san jose
// learn(); hoisted
// dojo = "seattle";
// console.log(dojo); // logs seattle
// var dojo = "burbank";
// console.log(dojo); // logs burbank
// console.log(dojo); // logs san jose
