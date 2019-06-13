function getDollarFormatter(formatter) {
  return function dollarFormatter(value) {
    return formatter(',', '$', true, value);
  }
}