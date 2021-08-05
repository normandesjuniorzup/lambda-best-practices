'use strict';

module.exports.discount = async (event) => {
  const value = event.value
  const discount = event.discount

  return this.calculateDiscount(value, discount)
};

module.exports.calculateDiscount = (value, discount) => {
  if (discount > value) return 0
  return value - discount
};
