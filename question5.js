//Q5. Declare a variable using let inside a block scope and attempt to log its value to the console before
//it is assigned a value to demostate the temproral dead zone.

{
     console.log(x)      //Refrence Error

     let x='Hello I Learn JavaScript'       
     console.log(x);          //Hello I Learn JavaScript


}