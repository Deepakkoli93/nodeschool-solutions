var a = process.argv
var s = 0
var i = 0
for(i=2;i<a.length; i++)
{
	s = s+Number(a[i])
}
console.log(s)
