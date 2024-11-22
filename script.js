function copyToClipboard(button) {
    const codeBox = button.previousElementSibling; // Seleciona o elemento <code>
    const textToCopy = codeBox.innerText;

    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(textToCopy).then(() => {
        button.innerText = "Copiado!";
        setTimeout(() => (button.innerText = "Copiar"), 2000); // Volta ao texto original após 2 segundos
    });
}
