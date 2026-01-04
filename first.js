async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;
    const result = document.getElementById("result");

    if (amount === "" || amount <= 0) {
        result.innerText = "❗ Please enter a valid amount";
        return;
    }

    try {
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const data = await res.json();

        const rate = data.rates[to];
        const converted = (amount * rate).toFixed(2);

        result.innerText = `${amount} ${from} = ${converted} ${to}`;
    } catch (error) {
        result.innerText = "⚠️ Error fetching data";
    }
}


function swapCurrency() {
    const from = document.getElementById("fromCurrency");
    const to = document.getElementById("toCurrency");

    let temp = from.value;
    from.value = to.value;
    to.value = temp;
}


function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");


for (let currency in countryList) {
    let option1 = document.createElement("option");
    option1.value = currency;
    option1.innerText = currency;
    fromSelect.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = currency;
    option2.innerText = currency;
    toSelect.appendChild(option2);
}


fromSelect.value = "USD";
toSelect.value = "INR";
