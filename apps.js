var names = prompt("Please Enter your name ?")

document.write('Welcome '+ names +' in our Shop')
var order = prompt("What do you want Royal OR KN95 ? ");
while(order != 'Royal' && order != 'KN95')
{
    order = prompt("What do you want Royal OR KN95  ");
    
}
var iteamorded='';

if (order=='Royal')
{
    iteamorded = '<img src="./Images/RoyalMAsk.jpg" />';
}
else 
{
    iteamorded = '<img src="./Images/KN95.jpg" />';
}



var NumofcMasks = prompt('How many Mask do you want ?')

var Result ='';

for (var i=0 ; i<NumofcMasks; i++)
{
    Result=Result+iteamorded;
}

document.write(Result);
