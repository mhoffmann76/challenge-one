const btnEncrypt = document.querySelector(".btnEncrypt");

btnEncrypt.addEventListener("click", () => {
  const regex = /^[a-z0-9\s]+$/;
  if (!regex.test(mensagem.value)) {
    mensagem.value = mensagem.value.replace(/[^a-z0-9\s]/g, "");
    document.getElementById("resultado").innerHTML =
      "Atenção!!!\nFavor digitar letras minusculas e sem acento!";
      mensagem.value = "";
  } else {
    encrypt();
  }
});

const btnDescrypt = document.querySelector(".btnDescrypt");

btnDescrypt.addEventListener("click", () => {
  descrypt();
});

const btnCopy = document.querySelector(".btnCopy");
btnCopy.addEventListener("click", () => {
  copy();
});

const btnClear = document.querySelector(".btnClear");
btnClear.addEventListener("click", () => {
  clear();
});

function encrypt() {
  const mensagem = document.getElementById("mensagem").value;

  const mensagemCodificada = btoa(mensagem);

  document.getElementById("resultado").innerHTML = mensagemCodificada;
}

function descrypt() {
  const mensagemCodificada = document.getElementById("mensagem").value;
  const mensagemDecodificada = atob(mensagemCodificada);
  document.getElementById("resultado").innerHTML = mensagemDecodificada;
}

function copy() {
  let textCopy = document.getElementById("resultado");
  textCopy.select();
  textCopy.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function clear() {
  let textClear = document.getElementById("resultado");
  textClear.innerText = "";
}
