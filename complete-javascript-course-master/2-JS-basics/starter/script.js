// console.log("Hello World!!! Hello Q10Viking.");
// var firstName = "Huang";
// alert("Good evening.");
// var lastName = prompt("What's your last Name?");
// console.log("Hello "+firstName+" "+lastName);

// var values = ["Hello","World","CAU"];
// console.log(values);
// var person = {
//     name: "Q10Viking",
//     generateAge: function() {
//         this.age = 23;
//     }
// }

// console.log(person);
// person.generateAge();
// console.log(person);
/**
 {name: "Q10Viking", generateAge: ƒ}
 {name: "Q10Viking", generateAge: ƒ, age: 23}
 */


 var john = {
     name: "Q10Viking",
     call: function(){
         console.log(this.name);
     }
 }

var school = {
    name: "CAU"
}

school.call = john.call;
school.call();
//OUTPUT: CAU

 /*
 Q10Viking
{name: "Q10Viking", call: ƒ}

Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
*/