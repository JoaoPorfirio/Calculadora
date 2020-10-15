function Mostrar() {
  document.getElementById("MA").style.animation = "fly 0.5s";
  document.getElementById("MA").style.display = "Block";
  document.getElementById("abrir").style.display = "none";
  document.getElementById("aside1").style.display = "none";
  document.getElementById("aside2").style.display = "none";
  document.form.textbox.value = "0";
}
function Fechar() {
  document.getElementById("MA").style.animation = "backfly 0.5s";
  document.form.h.value = "";
  document.form.textbox.value = "";

  let i = 0;
  const timer = setInterval(function () {
    if (i === 2) {
      document.getElementById("MA").style.display = "none";
    }
    if (i === 2) {
      document.getElementById("aside1").style.display = "block";
      document.getElementById("aside1").style.animation = "down 200ms";
    }
    if (i === 2) {
      document.getElementById("aside2").style.display = "block";
      document.getElementById("aside2").style.animation = "down 400ms";
      clearInterval(timer);
    }
    if (i === 2) {
      document.getElementById("abrir").style.display = "block";
    }
    i = i + 2;
  }, 200);
}
valor = 0;
function insert(num) {
  //cria uma função insert, que recebe um valor num
  var x = document.form.textbox.value; //cria uma váriavel x e dentro dela atribui-se o valor do objeto textbox.
  if (valor === 5 || document.form.textbox.value === "0") {
    if (valor === 5) {
      document.form.textbox.value = "";
      document.form.h.value = "";
      valor = 0;
    } else if (valor != 5) {
      document.form.textbox.value = "";
      valor = 0;
    }
  }
  if (valor == 0) {
    document.form.textbox.value = document.form.textbox.value + num;
    //atribui ao objeto textbox, dentro do form, o valor dele mesmo mais o num.
  }
}
function clean() {
  //cria uma função clean.
  var x = document.form.textbox.value; //cria uma váriavel x e dentro dela atribui-se o valor do objeto textbox.
  document.form.h.value = "";
  document.form.textbox.value = "0"; //atribui um valor de string vazia ao objeto textbox.
}
function total() {
  //cria uma função total.
  var x = document.form.textbox.value; //cria uma váriavel x e dentro dela atribui-se o valor do objeto textbox.
  if (x) {
    //Verifica se X é verdadeiro.
    document.form.h.value = `${document.form.textbox.value} =`;
    document.form.textbox.value = `${eval(x)}`;
    valor = 5;
    //console.log(x) //Se for, realiza uma operação usando os valores presentes no objeto textbox.
  }
}
