
//PIRVELI DAVALEBA. PIRVELI DAVALEBA. PIRVELI DAVALEBA.

// var age = parseInt(prompt("შეიყვანეთ ასაკი:"));

// if(age >= 18){
//     var name = prompt("შენი სახელი");
//     var surname = prompt("შენი გვარი");
//     console.log(`გამარჯობა ${name} ${surname}`);
// }else{
//     alert("თქვენ ხართ არასრულწლოვანი");
// }


//MEORE DAVALEBA. MEORE DAVALEBA. MEORE DAVALEBA.


// var startGame = confirm("დავიწყოთ?");
// var count = 0;
// if(startGame){
//     var question1 = prompt("რა ფერია თოვლი? a)ლურჯი b)მწვანე c)თეთრი d)ვარდისფერი");
//     if(question1 == 'c'){
//         count++;
//     }
//     var question2 = prompt("სად მდებარეობს პარიზი? a)იტალია b)საფრანგეთი c)შვედეთი d)ყაზახეთი");
//     if(question2 == 'b'){
//         count++;
//     }
//     var question3 = prompt("რა არის ვაშლი? a)ხილი b)თამაში c)ქვეყანა d)კომპიუტერი");
//     if(question3 == 'a'){
//         count++;
//     }
//     var question4 = prompt("2*2=? a)1 b)2 c)3 d)4");
//     if(question4 == 'd'){
//         count++;
//     }
    
//     switch(count){
//         case 0:
//         console.log(`შენ დააგროვე მინიმალური ${count} ქულა, დაუკვირდი კითხვებს`);
//         break;
//         case 1:
//         console.log(`შენ დააგროვე ${count} ქულა, მეტი მუშაობა გჭირდება`);
//         break;
//         case 2:
//         console.log(`შენ დააგროვე ${count} ქულა, რაც ცოდნის 50%-ია`);
//         break;
//         case 3:
//         console.log(`შენ დააგროვე ${count} ქულა, 1 გაკლია მაქსიმალურამდე`);
//         break;
//         case 4:
//         console.log(`შენ დააგროვე მაქსიმალური ${count} ქულა, ყოჩაღ!`);
//         break;
//     }
    
// }else{
//     alert("არ გინდა, ნუ გინდა!");
// }


// შექმენით კალკულატორი, 
// კალკულატორს უნდა შეეძლოს მომხმარებლის მიერ შემოტანილ 
// 2 რიცხვზე გარკვეული მათემატიკური ოპერაციის შესრულება 
// რომელსაც მომხმარებელი აირჩევს, 
// მათემატიკური მოქმედებები შემდეგია 
// („+“ , “ –„ , “ *“ , “ /“ , “ =“ );


//MESAME DAVALEBA. MESAME DAVALEBA. MESAME DAVALEBA.

// var start = confirm("დავიწყოთ გამოთვლა?");

// if(start){
//     var x = Number(prompt("შეიტანე x"));
//     var y = Number(prompt("შეიტანე y"));
//     var operation = prompt("აირჩიე მოქმედება: +, -, *, /, =");

//     switch(operation){
//         case '+':
//             console.log(x+y);
//             break;
//         case '-':
//             console.log(x-y);
//             break;
//         case '*':
//             console.log(x*y);
//             break;
//         case '/':
//             console.log(x/y);
//             break;
//         case '=':
//             if(x>y){
//                 console.log(`x ანუ ${x} უფრო მეტია`);
//             }else if(x<y){
//                 console.log(`y ანუ ${y} უფრო მეტია`);
//             }else{
//             console.log(`რიცხვები ტოლია ${x}=${y}`);
//             }
//             break;
//         default:
//             console.log("არასწორი ოპერაცია");
//     }
// }else{
//     alert("არ გინდა, ნუ გინდა");
// }