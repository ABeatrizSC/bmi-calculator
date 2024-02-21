const bttnCalculate = document.getElementById('button-calculate');

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { 
        calculateBMI();
    }
});


function calculateBMI() {
    let weight = parseFloat(document.getElementById('input-weight').value);
    let height = parseFloat(document.getElementById('input-height').value);

    removeStyleInvalidFields();
    if (areTheFieldsValid(weight, height)) {
        let bmi = (weight / (height * height)).toFixed(2);
        
        showTheResultOnScreen(bmi);
        document.getElementById('input-weight').value = '';
        document.getElementById('input-height').value = '';
    }
}

function showTheResultOnScreen(bmi) {
    const answerBMIElement = document.getElementById('answer-bmi');
    const answerCategorieElement = document.getElementById('answer-category');
    const containerAnswer = document.getElementById('container-answer');

    answerBMIElement.innerText = bmi;

    if (bmi < 18.50) {
        answerCategorieElement.innerText = 'Abaixo do peso';
        answerCategorieElement.style.color = 'Yellow';

    } else if (bmi <= 24.9) {
        answerCategorieElement.innerText = 'Peso normal';
        answerCategorieElement.style.color = 'Green';
    } else if (bmi < 29.9 ){
        answerCategorieElement.innerText = 'Sobrepeso';
        answerCategorieElement.style.color = 'Orange';
    } else {
        answerCategorieElement.innerText = 'Obesidade';
        answerCategorieElement.style.color = 'Red'; 
    }

    containerAnswer.style.display = 'block';
}

function areTheFieldsValid(weight, height) {
    const weightValidationPattern = new RegExp(/^\d{0,3}(\.\d{0,2})?$/i);
    const heightValidationPattern = new RegExp(/^\d{1}(\.\d{0,2})+$/i);
    
    isWeightValid = weightValidationPattern.test(weight) && weight > 0;
    isHeightValid = heightValidationPattern.test(height);

    if (isWeightValid && isHeightValid) {
        return true;
    }

    setInvalidFieldsStyle(isWeightValid, isHeightValid);

    return false; 
}

function setInvalidFieldsStyle(isWeightValid, isHeightValid) {
    const inputStyleArray = document.getElementsByClassName('input-style');
    const errorMessagesArray = document.getElementsByClassName('error-message'); 

    if (!isWeightValid) {
        inputStyleArray[0].classList.add('invalid-field');
        errorMessagesArray[0].style.visibility = 'visible';
    }

    if (!isHeightValid) {
        inputStyleArray[1].classList.add('invalid-field');
        errorMessagesArray[1].style.visibility = 'visible';
    }

    document.getElementById('container-answer').style.display = 'none';
}

function removeStyleInvalidFields() {
    const inputStyleArray = document.getElementsByClassName('input-style');
    const errorMessagesArray = document.getElementsByClassName('error-message'); 

    for (let i = 0; i < inputStyleArray.length; i++) {
        if (inputStyleArray[i].classList.contains('invalid-field')) {
            inputStyleArray[i].classList.remove('invalid-field');
            errorMessagesArray[i].style.visibility = 'hidden'; 
        }
    }
}

bttnCalculate.addEventListener('click', calculateBMI);
