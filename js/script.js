var text;
var fizz;
var buzz;
var fizzbuzz;

// for (var i = 1; i < 101 ; i++) {
//   fizz = i % 3;
//   buzz = i % 5;
//   fizzbuzz = i % 15;
//
//   if (fizz == 0) {
//     text = 'fizz';
//     console.log(text);
//   }
//   else if (buzz == 0) {
//     text = 'buzz';
//     console.log(text);
//   }
//   else if (fizzbuzz == 0) {
//     text = 'fizzbuzz';
//     console.log(text);
//   }
//   else {
//     text = i;
//   }
//   document.getElementById('num').innerHTML += '<li>' + text + '</li>';
// }

j = 1;
while (j < 101) {
  fizz = j % 3;
  buzz = j % 5;
  fizzbuzz = j % 15;

  if (fizz == 0) {
    text = 'fizz';
    console.log(text);
  }
  else if (buzz == 0) {
    text = 'buzz';
    console.log(text);
  }
  else if (fizzbuzz == 0) {
    text = 'fizzbuzz';
    console.log(text);
  }
  else {
    text = j;
  }
  document.getElementById('num').innerHTML += '<li>' + text + '</li>';
  j++
}
