export function formatNumberToIndianSystem(number: string) {
  const lastThree = number.slice(-3);

  let otherDigits = number.slice(0, -3);

  if (otherDigits) {
    otherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  }

  return otherDigits ? `₹ ${otherDigits},${lastThree}` : `₹ ${lastThree}`;
}
