
let answer1=prompt("are u intersted to take js?");
let  answer2=prompt("are u intersted to take CSS?");
let  answer3=prompt("are u intersted to take HTML?");
let userAnswers=[];
function chechAnswers(answer)
{

    if (answer=="yes"||answer=="no")
    {
        userAnswers.push(answer);
    }
    else
    {

        userAnswers.push("invalid");
    }
    //return userAnswers;
}

chechAnswers(answer1);
chechAnswers(answer2);
chechAnswers(answer3);

function printing (printedArray)
{
    for (let i=0;i<printedArray.length;i++)
{

    console.log(printedArray[i]);
    
}
}

printing(userAnswers);
// let answers =[answer1,answer2,answer3] ;
