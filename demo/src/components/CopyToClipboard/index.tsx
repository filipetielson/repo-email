export function copyToClipboard(text) {
  // Cria um elemento de input para inserir o texto
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);

  // Seleciona o texto no input
  input.select();
  input.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Copia o texto para a área de transferência
  document.execCommand('copy');

  // Remove o elemento de input
  document.body.removeChild(input);
}
