alert('Welcome to my game, My name is Franklyn');
console.log('How much do you know about me?');

var tally = 0

//Question 1
var name = prompt('What is your name?');
console.log('Hello ' + name);
alert('Hello ' + name);

//Question 2
var begin = confirm('Would you like to play a game ' + name + '?');
while (begin !== true){
    confirm ('Please play ' + name);
    begin = confirm ('Do you want to play?');
    console.log(name + ' choose ' + begin );
 }

//Question 3
function question (promptMessage, correctAnswer, alertMessage) {

    var input = prompt( promptMessage ).toLowerCase();
     if ( input === correctAnswer){
        tally ++
        alert('Correct!');
        console.log('Correct!');
    } else{
        alert( alertMessage);
        console.log( alertMessage);
    }

}

question('Which do I prefer, DC or Marvel?', 'dc', 'Sorry wrong choice');

question('Do I prefer summer or winter', 'winter', 'Close but not quite');

question('Do I use Apple or PC?', 'PC', 'Never an Apple!');

//question 4

// var weather = prompt('Do I prefer Summer or Winter').toLowerCase();
// if ( weather === 'winter'){
//      tally ++
//     alert('Correct');
//     console.log('Correct');
// } else {
//     alert('Close but not quite');
//     console.log('Close but not quite');
// }


// //question 5
// var comp = prompt('Do I use an Apple or PC?').toLowerCase();
// if (comp === 'pc'){
//      tally ++
//     alert('You are correct');
//     console.log('You are correct');
// }else{
//     alert('Never an Apple!');
//     console.log('Never an Apple');
// }

// //Question 6

for ( var i = 0; i < 3; i ++ ) {
    var age = prompt('How old am I?');
    if (age < 33){
         age = prompt('too low, try again.');
    }else if (age > 33){
        age = prompt('too high, try again');
    }
    else{
        tally ++
        alert( 'You guessed it!');
         console.log(' You guessed my age, ' + name);
         break;

    }
}

// Question 7
var stateArr = [ 'arizona', 'nevada', 'oregon', 'florida' ];
for ( var i = 0; i < 6; i ++ ) {
    var answer = prompt(" What States have I lived in? There are 4 answers").toLowerCase();
    if ( answer === stateArr[0] || answer === stateArr[1] ||answer === stateArr[2] || answer === stateArr[3] ){
       tally ++
        alert('You guessed it Right.. but you did have 4 correct answers.');
        console.log(' You guessed '  + answer );
        break;
    } else if (answer !== stateArr) {
        alert( 'Choose again please!')
        
    }

}
console.log( tally );
