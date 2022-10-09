
// let f1 = document.forms;
// console.log(f1);

// let f1 = document.forms.f1;
// console.log(f1);

// let f1 = document.forms['f1'];
// console.log(f1);

// let f1 = document.forms[0];
// console.log(f1);

// let f1 = document.forms[0];
// console.log(f1);
// console.log(f1.name);
// console.log(f1.elements);
// console.log(f1.elements.get);
// console.log(f1.elements['get']);
// console.log(f1.elements[2]);
// console.log(f1.login);

// console.log(f1.login);
// console.log(f1.login.name);

// f1.get.addEventListener('click', function () {
// console.log('click works');
//   let userLogin = f1.login.value;
//   let userPassword = f1.password.value;
// console.log(userLogin);
// console.log(userPassword);
  // f1.login.value = '';
  // f1.password.value = "";
//   f1.reset()
// })

// let f2 = document.forms.f2;
// console.log(f2)

// for (let i = 0; i < f2.elements.length; i += 1){
//   f2.elements[i].onclick = function () {
//     // document.body.style.background = f2.elements[i].value;
//     document.body.style.background = this.value;
//   }
// }

// function radioColor() {
//   if (event.target.type === 'radio') {
//     document.body.style.backgroundColor = event.target.value;
//   }
// }


let f4 = document.forms.f4;

f4.show.addEventListener('click', function () {
  // console.log(this);
  // console.log(event.target.checked);
  // f4.hide.checked = true;
  // this.checked = false;
  // if (f4.show.checked) {
  //   f4.area.style.display = 'block'
  // } else {
  //   f4.area.style.display = "none";
    
  // }
  f4.area.style.display = f4.show.checked ? 'block' : 'none';
  console.log(f4.area.style.display);

})