/*tallest mountain */

let array=[30,5,20,50,10,4,1];
for(let i=0;i<array.length; i++){
    let tallno=array[0];
    if(array[i]>tallno){
        tallno=array[i];
         console.log(tallno);
    }
   // console.log(tallno);
}

/* Cherokee here */
let startpopulation= 200;
 let birthrate= 20;
let noofweek=5;
let weekPopulation;

    weekPopulation=(birthrate/100)* startpopulation;
let x= (noofweek * weekPopulation);
let totalPop = startpopulation + x;
console.log('There will be '+totalPop    + ' Cherokee hare after ' +noofweek+ ' weeks');


/* Palindrome */

let words='maam';
let palinBool=true;
let letter=words.length-1;
for(let i=0;i<words.length;i++){
 
    if(words[i]!==words[letter]){
        palinBool=false;
    }
    letter=letter-1;

}

    console.log(palinBool);

/* Hangman lite */
    let word='apple';
    let letters='p';
    let count=0;
    for(let i=0;i<word.length;i++){
        if(word[i]=== letters){
            count++;
        }
    }
    console.log('yeah the letter ' +letters+  ' exist ' +count+ ' in my word');
   


/* Change Machine */

   let money=137;
   let bills=[20, 10, 5, 1, .25];
   let result=[ 0, 0, 0, 0, 0];
   let amount;
   for (let i = 0; i< bills.length; i = i+ 1){
   result[i] = Math.floor(money/bills[i]);
    money = money - (result[i] * bills[i]);
 }

    console.log(result); 

    









