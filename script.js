function inflationCalculator() {
    let inflation = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');

    inflation = parseFloat(inflation.value);
    money = parseFloat(money.value);

    let years = document.querySelector('#years');
    years = parseFloat(years.value);

    let worth = money + (money * (inflation / 100));


    for (let i = 1; i < years; i++) {
        worth += worth * (inflation / 100);
    }
    worth = worth.toFixed(2);

    let newEl = document.createElement('div');
    newEl.className = 'new-value';
    newEl.innerText = `${money} Euros today is worth the same as ${worth} Euros in ${years} years.`

    document.querySelector('.container').appendChild(newEl);
}   