let i=0;

for(i=0;i<=10; i++)
{
    console.log(i);
    if(i==4)
    {
        break;
    }
  
}

//Continue will continue when i==4, it won't print and will continue starting the loop that's why we do not have # 4 in the outcome

for(i=0;i<=10; i++)
{
    
    if(i==4)
    {
        continue; //when i==4, it won't print and will continue starting the loop that's why we do not have # 4 in the outcome

    }
    console.log(i);
}