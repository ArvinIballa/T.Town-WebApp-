export const openHomePage = true;

export const addThousandsSeparator = (n, thousandsSeparatorSymbol) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparatorSymbol)
}