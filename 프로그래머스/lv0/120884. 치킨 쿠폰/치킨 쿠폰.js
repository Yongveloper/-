function solution(chicken) {
  let coupon = chicken;
  let serviceChicken = 0;
  while (coupon >= 10) {
    serviceChicken += Math.floor(coupon / 10);
    coupon = (coupon % 10) + Math.floor(coupon / 10);
  }
  return serviceChicken;
}
