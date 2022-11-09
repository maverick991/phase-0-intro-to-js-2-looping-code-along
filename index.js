// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];
function writeCards(cards){
    let birthdayMessages = [];
    for (let i = 0; i < cards.length; i++) {
        birthdayMessages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return birthdayMessages;
}
function countDown(number){
    let b = 11;
    while (b > 0){
        console.log(number);
        b--;
        number-=1;
    }
    return number;
}