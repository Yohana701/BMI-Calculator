// Function to calculate BMI
function calculateBMI(heightFeet, heightInches, weightPounds) {
    // Convert height to inches
    const totalHeightInches = (heightFeet * 12) + heightInches;

    // Calculate BMI
    const bmi = (weightPounds * 703) / (totalHeightInches * totalHeightInches);

    return bmi;
}

// Function to determine BMI category
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

// Function to handle button click and perform BMI calculation
function handleCalculation() {
    const feetInput = document.getElementById('feet');
    const inchesInput = document.getElementById('inches');
    const weightInput = document.getElementById('weight');
    const resultDisplay = document.getElementById('result');

    // Get values from inputs
    const feet = parseFloat(feetInput.value);
    const inches = parseFloat(inchesInput.value);
    const weight = parseFloat(weightInput.value);

    // Check if inputs are valid numbers and non-negative
    if (!isNaN(feet) && !isNaN(inches) && !isNaN(weight) &&
        feet >= 0 && inches >= 0 && weight >= 0) {
        // Calculate BMI
        const bmi = calculateBMI(feet, inches, weight);

        // Determine BMI category
        const category = getBMICategory(bmi);

        // Display result including BMI category
        resultDisplay.textContent = `Your BMI is ${bmi.toFixed(2)}, which is ${category}.`;

    } else {
        // If inputs are not valid
        resultDisplay.textContent = 'Please enter valid non-negative numbers for height and weight.';
    }
}

// Event listener for button click
document.getElementById('calculateBtn').addEventListener('click', handleCalculation);
