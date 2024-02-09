const btnPrint = document.querySelector('button');
const resultList = document.querySelector('#resultPrints');

btnPrint.addEventListener('click', () => {
    const userInputToPrint = btnPrint.innerHTML;

    for(let i = 0; i < 10; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = `${i + 1}. ${userInputToPrint}`;
        resultList.appendChild(newLi);
    }
    
});