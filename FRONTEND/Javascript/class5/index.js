for(let i=5;i>=1;i--)
    {
        console.log(i);
    }
    console.log("..........");

    //task 1:generate random numbers and add them upto 5times.
     let sum=0;
     for(let i=0;i<5;i++){
    let random=(Math.floor(Math.random()*10));
    let result =sum+random;
      console.log("the random sum is",result);
     }

//nested loops
for(let i=0;i<5;i++)
{
    for(let j=1;j<=2;j++)
    {
        console.log(j);
    }
    console.log(i);
}