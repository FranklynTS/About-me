alert('Welcome to my game, My name is Franklyn');
console.log('How much do you know about me?');

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
var hero = prompt('Which do I prefer, DC or Marvel?').toLowerCase();
if ( hero === 'DC'){
    alert(' Correct');
    console.log('You choose wisely' + hero);
} else{
    alert(' Sorry wrong choice');
    console.log('Sorry wrong choice');
}
//question 4
var weather = prompt('Do I prefer Summer or Winter').toLowerCase();
if ( weather === 'winter'){
    alert('Correct');
    console.log('Correct');
} else {
    alert('Close but not quite');
    console.log('Close but not quite');
}
//question 5
var comp = prompt('Do I use an Apple or PC?').toLowerCase();
if (comp === 'pc'){
    alert('You are correct');
    console.log('You are correct');
}else{
    alert('Never an Apple!');
    console.log('Never an Apple');
}
