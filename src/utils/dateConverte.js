export function DateConverter(data) {
  const dataOriginal = new Date(data);
  const dia = dataOriginal.getUTCDate();
  const mes = dataOriginal.getUTCMonth() + 1; // Mês começa em 0 (janeiro)
  const ano = dataOriginal.getUTCFullYear();

  // Formate a data no formato desejado (dd/mm/yyyy)
  const dataFormatada = `${dia}/${mes}/${ano}`;
  return dataFormatada;
}
