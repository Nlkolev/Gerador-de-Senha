
//Aqui ele gera o caractere aleatorio

function gerarSenha (tamanho) {
    const caracteres="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    let senha = "";
    for (let i = 0; i < tamanho; i++){
        senha += caracteres.charAt(Math.floor(Math.random()* caracteres.length));
    }
    return senha;
}
//este comando ativa quando clicado na caixa de texto
const caixaSenha = document.getElementById("caixaSenha");

caixaSenha.addEventListener("click", function(){
    const tamanhoSenha = Number(prompt("Sua senha terá quantos caracteres?"));
    const novaSenha = gerarSenha(tamanhoSenha);
    this.value = novaSenha;
    navigator.clipboard.writeText(novaSenha).then(() => {
        alert("senha copiada com sucesso!");
    });
});

//este comando ativa quando clicado no botão
const botaoGerador = document.getElementById("botaoGerador");

botaoGerador.addEventListener("click", function () {
    const tamanhoSenha = Number(prompt("Sua senha terá quantos caracteres?"));
    const novaSenha = gerarSenha(tamanhoSenha);
    caixaSenha.value = novaSenha;
    navigator.clipboard.writeText(novaSenha).then(() => {
        alert("senha copiada com sucesso!");
    });
 });