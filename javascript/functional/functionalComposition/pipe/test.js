const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const priceCalculator = ({
  taxPercentage = 0.3,
  serviceFees = 10,
  price,
  discount = 0,
  percentCoupon = 0,
  valueCoupon = 0,
  weight = 0,
  $PerKg = 0,
}) => {
  const applyTax = (val) => val * (1 + taxPercentage);
  const applyServiceFees = (val) => val + serviceFees;
  const applyPercentCoupon = (val) => val - val * percentCoupon;
  const applyValueCoupon = (val) => val - valueCoupon;
  const applyDiscount = (val) => val - discount;
  const applyShippingCost = (val) => val + weight * $PerKg;

  return pipe(
    applyPercentCoupon,
    applyDiscount,
    applyValueCoupon,
    applyShippingCost,
    applyServiceFees,
    applyTax
  )(price);
};

console.log(priceCalculator({price: 10}))