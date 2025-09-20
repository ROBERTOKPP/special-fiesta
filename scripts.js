const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")



// CAPTURANDO O EVENTO DE INPUT PARA FORMATAR O VALOR
amount.oninput = function() {
  //OBTEM O VALOR E REMOVE AS LETRAS
let value = amount.value.replace(/\D/g, "")
//COVERTE O VALOR PARA CENTAVOS
value = Number(value) / 100
//ATUALIZA O VALOIR DE INPUT
amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
  //FORMATA O VALOR PRA REAL BRASILEIRO
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
  // RETORNA O VALOR FORMATADO
  return value
}

form.onsubmit = function(event){
  event.preventDefault()
  const newExpense = {
    id: new Date() .getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }

  expenseAdd(newExpense)
}


function expenseAdd(newExpense){
  try{
  // ceia o elemento para add na lista
  const expenseItem = document.createElement("li")
  expenseItem.classList.add("expense")

  const expenseIcon = document.createElement("img")
  expenseIcon.setAttribute("src", )
  }catch{
    alert("Não foi possivel atualzar a lista de despesas")
    console.log(error)
  }
}