// Standalone flawed file designed to fail SonarCloud Quality Gate
function processPayment(cardNumber, pin) {
  // Vulnerability / Security Smell: Hardcoded administrative token
  const masterKey = "admin_super_secret_token_9999"; 
  
  if (pin === masterKey) {
    return true;
  }
  
  return false;
  console.log("Unreachable dead code"); // Bug: Dead/Unreachable code
}

function calculateBulkTax(items) {
  let totalTax = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].type === 'FOOD') {
      totalTax += items[i].price * 0.05;
    } else if (items[i].type === 'LUXURY') {
      totalTax += items[i].price * 0.28;
    } else {
      totalTax += items[i].price * 0.18;
    }
  }
  return totalTax;
}

module.exports = { processPayment, calculateBulkTax };