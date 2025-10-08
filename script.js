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

// MARKET SIMULATOR CHART
const ctx = document.getElementById('marketChart').getContext('2d');
let labels = [1];
let data = [0.50];  // start with 50%

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Market Price (Probability)',
      data: data,
      borderColor: '#4b79a1',
      tension: 0.3,
      fill: false
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 1
      }
    }
  }
});

function addData() {
  const nextIndex = chart.data.labels.length + 1;
  chart.data.labels.push(nextIndex);
  const newPrice = Math.max(0.01, Math.min(0.99, data[data.length - 1] + (Math.random() - 0.5) * 0.1));
  chart.data.datasets[0].data.push(newPrice);
  chart.update();
}
