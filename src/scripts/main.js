const bttnCalculate = document.getElementById('button-calculate');

function calculateBMI() {
    const weight = parseFloat(document.getElementById('input-weight').value);
    const height = parseFloat(document.getElementById('input-height').value);
    
    let bmi = (weight / (height * height));
    console.log(bmi);
}

bttnCalculate.addEventListener('click', calculateBMI);
