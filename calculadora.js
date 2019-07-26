// Números no Visor quando pressionado os botões
function calcNum(num) {
   if (typeof gvisor == 'undefined') {
      document.calcform.visor.value = '';
   }
   document.calcform.visor.value = document.calcform.visor.value + num;
   gvisor = 1;
}

// Limpa a calculadora
function calcLimpar() {
   document.calcform.visor.value = '';
   delete gvalor;
   delete goper;
   delete gvisor;
}

// Executar as operações
function calcOper(oper, valor1, valor2) {
   if (oper == "somar") {
      var valor = +valor1 + +valor2 ; //Poderia usar parseFloat(valor1) + parseFloat(valor2)
   } else {
      if (oper == "subtrair") {
         var valor = valor1 - valor2;
      } else {
         if (oper == "multiplicar") {
            var valor = valor1 * valor2;
         } else {
            if (oper == "dividir") {
               var valor = valor1 / valor2;
            } else {
               if (oper == "porcentagem") {
                  var valor = (valor1 * valor2) / 100;
               } else {
                  if (oper == "raiz") {
                     var valor = Math.sqrt(valor1);
                  } else {
                     if (oper == "potencia") {
                        var valor = Math.pow(valor1, 2);
                     }
                  }
               }
            }
         }
      }
   }

   return(valor);
}

// Ações do usuário
function calcParse(oper) {
   var valor = document.calcform.visor.value;
   delete gvisor;

   if (typeof goper != 'undefined' && oper == 'resultado') {
      gvalor = calcOper(goper, gvalor, valor);
      document.calcform.visor.value = gvalor;
      delete oper;
      delete gvalor;
      return(0);
   }

   if (typeof gvalor != 'undefined') {
      gvalor = calcOper(goper, gvalor, valor);
      goper = oper;
      document.calcform.visor.value = gvalor;
   } else {
      gvalor = valor;
      goper = oper;
   }
}