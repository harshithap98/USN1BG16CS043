var rate=[124,48,268];
var tip=[],bill=[];
var i;
for(i=0 ; i<3; i++)
{
    if(rate[i]<50)
    {
        tip[i]=0.2*rate[i];
        bill[i]=rate[i]+tip[i];
    }
    if(rate[i]>50&&rate[i]<200)
    {
        tip[i]=0.15*rate[i];
        bill[i]=rate[i]+tip[i];
    }
    if(rate[i]>200)
    {
        tip[i]=0.1*rate[i];
        bill[i]=rate[i]+tip[i];
    }
} 
console.log("the bills are");
console.log(tip);
console.log(bill);