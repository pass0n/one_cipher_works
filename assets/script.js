const txtInput = document.getElementById("inputArea");
const txtOutput = document.getElementById("outputArea");
const btnCripto = document.getElementById("btnCripto");
const btnDecripto = document.getElementById("btnDecripto");

const txtReplace = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

btnCripto.addEventListener("click", () => {
  txtOutput.value = codificar(txtInput.value);
  txtInput.value = "";
});

btnDecripto.addEventListener("click", () => {
  txtInput.value = decodificar(txtOutput.value);
  txtOutput.value = "";
});

function codificar(txtCodificado) {
  return txtReplace.reduce((acc, replace) => acc.replace(replace[0], replace[1]), txtCodificado.toLowerCase());
}

function decodificar(txtDeodificado) {
  return txtReplace.reduceRight((acc, replace) => acc.replace(replace[1], replace[0]), txtDeodificado.toLowerCase());
}
