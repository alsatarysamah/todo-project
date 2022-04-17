var firstName =prompt("enter you first name");
var fullName;
// js 
var gender =prompt("enter your gender : female or male");
var age=prompt("enter your age");
if (age <= 0)
alert ("your age must be more than 20 ");
var conf = confirm(" you wants to skip the welcoming message.");

if (gender =="male")
{
fullName="Mr."+firstName;
}
else  if (gender =="female")
{
    fullName="Ms."+firstName;

}
else 
{
    alert ("welcome",fullName);
   
}

alert ("your name is "+fullName);