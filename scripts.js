const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");
const expenseList = document.querySelector("ul");

// CAPTURANDO O EVENTO DE INPUT PARA FORMATAR O VALOR
amount.oninput = function () {
  //OBTEM O VALOR E REMOVE AS LETRAS
  let value = amount.value.replace(/\D/g, "");
  //COVERTE O VALOR PARA CENTAVOS
  value = Number(value) / 100;
  //ATUALIZA O VALOIR DE INPUT
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  //FORMATA O VALOR PRA REAL BRASILEIRO
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  // RETORNA O VALOR FORMATADO
  return value;
}

form.onsubmit = function (event) {
  event.preventDefault();
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };

  expenseAdd(newExpense);
};

function expenseAdd(newExpense) {
  try {
    // ceia o elemento para add na lista
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    // criar o icone da categoria
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);
    //criar a info da despesa.

    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;
    expenseInfo.append(expenseName, expenseCategory);

    const expenseAmount = document.createElement("span");
    expenseAmount.classList.add("expense-amount");
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount
      .toUpperCase()
      .replace("R$", "")}`;

    const removeIcon = document.createElement("img");
    removeIcon.classList.add("remove-icon");
    removeIcon.setAttribute("src", "img/remove.svg");
    removeIcon.setAttribute("alt", "remover")


    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);
    expenseList.append(expenseItem);
  } catch (error) {
    alert("Não foi possivel atualzar a lista de despesas");
    console.log(error);
  }
}

//atualizar os totais

function updateTotals(){
try {
  
} catch (error) {
  
}
}
