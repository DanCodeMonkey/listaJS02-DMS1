function calcMedia(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let outputMedia = (num1 + num2) / 2;

    document.getElementById("outMedia").innerText = outputMedia;

}

function pow(){
    let base = window.prompt("Digite a base");
    let expoente = window.prompt("Digite o expoente");

    Math.pow(base, expoente);

    document.getElementById("outPow").innerText = "Resultado no console";
    console.log("Resultado: "+ Math.pow(base, expoente));
}

function bissexto(){
    let ano = Number(document.getElementById("ano").value);

    if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
        document.getElementById("outBissexto").innerText = "Esse ano é bissexto!";
    }else{
        document.getElementById("outBissexto").innerText = "Esse ano não é bissexto!";
    }

}

function calcPagamento() {
    const valUnit = parseFloat(document.getElementById('valUnit').value);
    const quant = parseInt(document.getElementById('quant').value);
    const formaPagamento = document.querySelector('input[name="pagamento"]:checked')?.value;

    if (!valUnit || !quant || !formaPagamento) {
      document.getElementById('resultado').textContent = "Por favor, preencha todos os campos.";
      return;
    }

    let total = valUnit * quant;
    let desconto = 0;

    if (total >= 1000) {
      desconto += total * 0.10;
    }

    if (formaPagamento === 'pix') {
      desconto += total * 0.10;
    } else if (formaPagamento === 'debito') {
      desconto += total * 0.05;
    }

    const totalComDesconto = total - desconto;

    document.getElementById('resultado').innerHTML =
      `Forma de pagamento: <strong>${formaPagamento}</strong><br>` +
      `Desconto aplicado: <strong>R$ ${desconto.toFixed(2)}</strong><br>` +
      `Total a pagar: <strong>R$ ${totalComDesconto.toFixed(2)}</strong>`;
  }

function classNota(){
    let nota = Number(document.getElementById("nota").value);

   if(nota > 10 || nota < 0){
    document.getElementById("outNota").innerText = "Digite uma nota valida";
   }else if(nota < 4 ){
    document.getElementById("outNota").innerText = "REPROVADO";
   }else if(nota >= 4 && nota < 5.9){
    document.getElementById("outNota").innerText = "RECUPERAÇÃO";
   }else{
    document.getElementById("outNota").innerText = "APROVADO";
   }
}
