
// let f1 = document.forms;
// console.log(f1);

// let f1 = document.forms.f1;
// console.log(f1);

// let f1 = document.forms['f1'];
// console.log(f1);

// let f1 = document.forms[0];
// console.log(f1);

let f1 = document.forms[0];
// console.log(f1);
// console.log(f1.name);
// console.log(f1.elements);
// console.log(f1.elements.get);
// console.log(f1.elements['get']);
// console.log(f1.elements[2]);
// console.log(f1.login);

// console.log(f1.login);
// console.log(f1.login.name);

f1.get.addEventListener('click', function () {
// console.log('click works');
  let userLogin = f1.login.value;
  let userPassword = f1.password.value;
console.log(userLogin);
console.log(userPassword);
  // f1.login.value = '';
  // f1.password.value = "";
  f1.reset()
})