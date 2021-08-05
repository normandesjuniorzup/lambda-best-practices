'use strict';

module.exports.discount = async (event) => {
  const value = parseInt(event.queryStringParameters.value)
  const discount = parseInt(event.queryStringParameters.discount)

  const result = this.calculateDiscount(value, discount)
  

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        totalWithDiscount: result
      },
      null,
      2
    ),
  };
};

module.exports.calculateDiscount = (value, discount) => {
  if (discount > value) return 0;
  return value - discount;
};
