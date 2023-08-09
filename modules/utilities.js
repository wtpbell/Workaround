function formatNumber(number) {
    if (typeof number === 'number') {
      return number.toLocaleString('en-US');
    } else {
      return Number(number).toLocaleString('en-US');
    }
  };
  
  export default formatNumber;