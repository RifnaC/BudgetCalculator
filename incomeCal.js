const submitIncome = document.getElementById("submitIncome");
const tableIncome = document.getElementById("tableIncome");
const totalIncome = document.getElementById("totalIncome");

const submitExpense = document.getElementById("submitExpense");
const tableExpense = document.getElementById("tableExpense");
const totalExpense = document.getElementById("totalExpense");
 
submitIncome.addEventListener("click", function() {
  if (incomeAmt.value == '') {
    alert('Enter the salary');
  } else {
    tableIncome.style.display = "block";
    const incomeSource = document.getElementById("incomeSrc").value;
    const incomeAmount = document.getElementById("incomeAmt").value;

    const newRow = tableIncome.insertRow(-1);
    const incomeCell = newRow.insertCell(0);
    const amountCell = newRow.insertCell(1);

    incomeCell.innerHTML = incomeSource;
    amountCell.innerHTML = incomeAmount;
    incomeCell.width = '100%';

    calculateTotal(tableIncome, totalIncome);
  }
});

submitExpense.addEventListener("click", function() {
  if (expenseAmt.value == '') {
    alert('Enter the Expense');
  } else {
    tableExpense.style.display = "block";
    const expenseSource = document.getElementById("expenseSrc").value;
    const expenseAmount = document.getElementById("expenseAmt").value;

    const newRow = tableExpense.insertRow(-1);
    const expenseCell = newRow.insertCell(0);
    const amountCell = newRow.insertCell(1);

    expenseCell.innerHTML = expenseSource;
    amountCell.innerHTML = expenseAmount;
    expenseCell.width = '100%';

    calculateTotal(tableExpense, totalExpense);
    createChart();
  }
});

function calculateTotal(table, totalElement) {
  let rows = table.rows.length;
  let total = 0;

  for (let index = 1; index < rows; index++) {
    total += parseInt(table.rows[index].cells[1].innerHTML);
  }

  totalElement.innerHTML = `Total: ${total}`;
}

function createChart() {
  const incomeSum = parseInt(totalIncome.innerText.split(':')[1].trim());
  const expenseSum = parseInt(totalExpense.innerText.split(':')[1].trim());

  const xValues = ["Income", "Expense"];
  const yValues = [incomeSum, expenseSum];
  const barColors = ["#00aba9", "#2b5797"];

  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Income Vs Expense"
      }
    }
  });
}
