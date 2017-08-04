alert('Welcome to my game, My name is Franklyn');
console.log('How much do you know about me?');

var tally = 0

//Question 1
var name = prompt('What is your name?');
console.log('Hello ' + name);
alert('Hello ' + name);

//Question 2
var begin = confirm('Would you like to play a game ' + name + '?');
while (!begin){
    alert('Please play ' + name); //dont need confirm, can use alert or 
    begin = confirm ('Do you want to play?');
    console.log(name + ' choose ' + begin );
 }


var questionArr = ['Which do i prefer, DC or Marvel?', 'Do I like Summer or Winter better?', ' Do I use a Pc or Apple?' ];
var correctAnsArr = ['dc', 'winter', 'pc'];
var messageArr = ['Sorry wrong choice', ' Close but not quite ', 'Never an Apple'];

for ( var i = 0; i<3 ; i ++ ) {
    question( questionArr[i], correctAnsArr[i], messageArr[i] );

}
// //Question 3 & 4 & 5
// function question (promptMessage, correctAnswer, alertMessage) {

//     var input = prompt( promptMessage ).toLowerCase();
//      if ( input === correctAnswer){
//         tally ++
//         alert('Correct!');
//         console.log('Correct!');
//     } else{
//         alert( alertMessage);
//         console.log( alertMessage);
//     }

// }

// question('Which do I prefer, DC or Marvel?', 'dc', 'Sorry wrong choice');

// question('Do I prefer summer or winter', 'winter', 'Close but not quite');

// question('Do I use Apple or PC?', 'PC', 'Never an Apple!');

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
        alert('too low, try again.');
    }else if (age > 33){
        alert('too high, try again');
    }
    else{
        tally ++
        alert( 'You guessed it!');
         console.log(' You guessed my age, ' + name);
         break;

    }
        console.log( 'i:' + i);
        if (i === 2){
        alert( 'you\'re out of guesses!');
        }
}

// Question 7
var stateArr = [ 'arizona', 'nevada', 'oregon', 'florida' ];
for ( var i = 0; i < 5; i ++ ) {
    var answer = prompt(" What States have I lived in? There are 4 answers").toLowerCase();
    //if ( stateArr.indexOf( answer ) !== -1);
    if ( stateArr.includes( answer ) ){
    // if ( answer === stateArr[0] || 
    //      answer === stateArr[1] ||
    //      answer === stateArr[2] || 
    //      answer === stateArr[3] ){
       tally ++
        alert('You guessed it Right.. but you did have 4 correct answers.');
        console.log(' You guessed '  + answer );
        break;
    } else {
        alert( 'Choose again please!');
        
    }
     console.log( 'i:' + i);
        if (i === 5){
        alert( 'you\'re out of guesses!');
        }
}
console.log( tally );
//