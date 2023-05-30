var arr=[];
var size=parseInt(prompt("enter the size of array"));

for(i=0; i<size; i++)
{
	arr[i]=parseInt(prompt("enter values"));
	
}
for(j=0; j<arr.length; j++)
{	c=arr[j];
	a=c.toString();
	b=a.length;
	if(b==2)
	{
		document.write(c);
		document.write("<br>");
	}

}