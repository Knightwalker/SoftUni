let arr1 = [1, 2, 3, 4];
let arr2 = ["+", "-"];  
combos = [];

for(var i = 0; i < arr1.length; i++)
{
     for(var j = 0; j < arr2.length; j++)
     {
        //you would access the element of the array as array1[i] and array2[j]
        //create and array with as many elements as the number of arrays you are to combine
        //add them in
        //you could have as many dimensions as you need
        combos.push(arr1[i] + arr2[j])
     }
}