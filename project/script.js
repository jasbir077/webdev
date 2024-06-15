function calculateCalories() {

    const sets = parseFloat(document.getElementById('sets').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const weight = parseFloat(document.getElementById('weight').value);

    const setsCalories = sets * 5; 
    const distanceCalories = distance * weight * 0.5;


    const totalCalories = setsCalories + distanceCalories;

    document.getElementById('calories-output').textContent = `Calories burned: ${totalCalories.toFixed(2)}`;

    document.getElementById('sets').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('weight').value = '';
}