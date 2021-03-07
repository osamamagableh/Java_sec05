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
    iteamorded = '<img src="https://cdn.shopify.com/s/files/1/0316/2600/2563/products/ScreenShot2020-04-28at10.41.23AM.jpg?v=1595087476" />';
}
else 
{
    iteamorded = '<img src="https://www.idcband.com/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/k/n/kn95-disposable-facemask-stock1.jpg" />';
}



var NumofcMasks = prompt('How many Mask do you want ?')

var Result ='';

for (var i=0 ; i<NumofcMasks; i++)
{
    Result=Result+iteamorded;
}

document.write(Result);
