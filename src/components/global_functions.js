export const addThousandsSeparator = (n, thousandsSeparatorSymbol) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparatorSymbol)
}

export const addDelay = ( function() {
  var timer = 0;
  return function(callback, ms) {
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
  };
})();