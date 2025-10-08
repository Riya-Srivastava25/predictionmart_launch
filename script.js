function calculatePayoff() {
  const price = parseFloat(document.getElementById("price").value);
  const shares = parseFloat(document.getElementById("shares").value);
  if (isNaN(price) || isNaN(shares)) {
    document.getElementById("payoffResult").innerText = "Enter valid values.";
    return;
  }

  const totalCost = price * shares;
  const payout = shares * 1;
  const profit = payout - totalCost;

  document.getElementById("payoffResult").innerText = `If correct: Profit = $${profit.toFixed(2)}, Total Payout = $${payout}`;
}

  let currentPrice = 50.0;

  function simulatePrice() {
    const change = (Math.random() * 10 - 5).toFixed(2); // Random between -5 and +5
    currentPrice = Math.max(0, (parseFloat(currentPrice) + parseFloat(change))).toFixed(2); // Ensure >= 0
    document.getElementById("priceDisplay").innerText = "Current Price: $" + currentPrice;
  }

function addData() {
  const nextIndex = chart.data.labels.length + 1;
  chart.data.labels.push(nextIndex);
  const newPrice = Math.max(0.01, Math.min(0.99, data[data.length - 1] + (Math.random() - 0.5) * 0.1));
  chart.data.datasets[0].data.push(newPrice);
  chart.update();
}
