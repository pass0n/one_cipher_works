const txtInput = document.getElementById("input-text");
const txtOutput = document.getElementById("output-text");
const encryptButton = document.getElementById("btn-encrypt");
const decryptButton = document.getElementById("btn-decrypt");
const copyButton = document.querySelector(".copy-btn");
const onElement = document.querySelector(".output-container");
const offElement = document.querySelector(".empty-container");

const txtReplace = [
   ["e", "enter"],
   ["i", "imes"],
   ["a", "ai"],
   ["o", "ober"],
   ["u", "ufat"],
];

encryptButton.addEventListener("click", () => {
   if (txtInput.value) {
      txtOutput.value = codificar(txtInput.value);
      txtInput.value = "";

      onElement.style.display = "block";
      offElement.style.display = "none";
   }
});

decryptButton.addEventListener("click", () => {
   txtInput.value = decodificar(txtOutput.value);
   txtOutput.value = "";

   onElement.style.display = "none";
   offElement.style.display = "flex";
});

copyButton.addEventListener("click", () => {
   copyOutput(txtOutput.value);
});

function codificar(txtCodificado) {
   return txtReplace.reduce(
      (acc, replace) => acc.replace(replace[0], replace[1]),
      txtCodificado.toLowerCase()
   );
}

function decodificar(txtDeodificado) {
   return txtReplace.reduceRight(
      (acc, replace) => acc.replace(replace[1], replace[0]),
      txtDeodificado.toLowerCase()
   );
}

async function copyOutput(output) {
   try {
      await navigator.clipboard.writeText(output);
   } catch (err) {
      console.error("Erro ao copiar: ", err);
   }
}
