
var array1 = [1,2,3,4,4,5,5,6];

function removeDuplicatesFromSingleDimensionArray(array){
var obj ={};
array.forEach(function(item){
  obj[item]= true;
  
})
return (Object.keys(obj))
}
console.log(removeDuplicatesFromSingleDimensionArray(array1));

/********************************************************************/
var array2 = [{ title: "C++", author: "Bjarne" },
              { title: "Java", author: "Aguardo" },
              { title: "Python", author: "Guido" },
              { title: "Java", author: "James" }];

function removeDuplicatesFromArrayOfObjects(array){
  var obj = {};
  array.forEach(function (item){
    obj[item.author] = item.title
  })
  return (obj)
}


console.log(removeDuplicatesFromArrayOfObjects(array2));

/********************************************************************/
function find_duplicate_in_array(arra1) {
        var object = {};
        var result = [];

        arra1.forEach(function (item) {
          if(!object[item])
              object[item] = 0;
            object[item] += 1;
        })

        for (var prop in object) {
           if(object[prop] >= 2) {
               result.push(prop);
           }
        }

        return result;

}
document.write(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
/********************************************************************/
