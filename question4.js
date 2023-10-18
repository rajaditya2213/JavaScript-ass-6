//Q4. Declare Three Variable , one using let , one using var, and one using const, all inside the block scope.Assign the value
//and log their values to the console before the and they are declare to demonstarte varaible hoisting.

{
     console.log(x);   //Undeifned
     console.log(y);   //Reference error
     console.log(z);   //refernce Error

     var x="PW";       
     let y="Skilss";
     const z="!";

     console.log(x);   //"PW"
     console.log(y);  //"Skilss"
     console.log(z);  //"!"
}