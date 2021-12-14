let total=0;

let num=10;

for(let i=0;i<=num;i++)
{
    console.log("Value of i = " + i);
}


let a;
let b;
let star="";

for(a=1;a<=9;a++)
{
 
 for(b=9;b>=a;b--)
 {
     document.write(" ~");

 }
   for(let q=1;q<=(2*a-1);q++)
{
  
    document.write(" * ");
}

document.write("<br>");
 }

/*

document.write("End of Loop here");
document.write("\n");


for(let q=5;q>=0;q--)
{
 for(let u=q;u>=0;u--)
 {

   document.write("*");

 }
    
 document.write("<br>");

}*/