s_array = [];

function submit()
{
    var d_array = [];
for (var j = 1; j <= 4;j++)
{
var n = document.getElementById('s'+ j).value;
console.log(n);
s_array.push(n);

}
console.log(s_array);
var len = s_array.length;
console.log(len);

for (var k = 0; k<len;k++)
{
d_array.push('<h4>NAME - '+s_array[k]+' </h4>');
console.log(d_array);

}
console.log(d_array);
document.getElementById('display_1').innerHTML=d_array;

var rc1 = d_array.join(' ');
console.log(rc1);
document.getElementById('display_2').innerHTML=rc1;
document.getElementById('submit_button').style.display='none';
document.getElementById('sort_button').style.display='inline';
}
function sorting()
{
s_array.sort();
console.log(s_name);
var ds_array=[];
var len = s_array.length;
console.log(len);

for (var k = 0; k<len;k++)
{
d_array.push('<h4>NAME - '+s_array[k]+' </h4>');
console.log(ds_array);

}
console.log(ds_array);
document.getElementById('display_1').innerHTML=ds_array;

var rc1 = ds_array.join(' ');
console.log(rc1);
document.getElementById('display_2').innerHTML=rc1;
}