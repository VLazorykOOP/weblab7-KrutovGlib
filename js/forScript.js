function runTask() {
    var currentDate = new Date();
    var info = "Web-розробник: Гліб Крутов\n" +
               "Поточна дата і час: " + currentDate.toLocaleString();
               document.getElementById('output').value = info;
}

function searchNumbers() {
    // Отримати введений текст
    var inputText = document.getElementById('textInput').value;
    // Використовуйте регулярний вираз для пошуку цифр
    var numbers = inputText.match(/\d/g);
    // Вивести результат
    var resultTextArea = document.getElementById('result');
    resultTextArea.value = numbers ? numbers.join(', ') : 'Чисел не знайдено';
}

function removeNegativeElements(event) {
     // Отримати введений рядок
                 // Отримати введений рядок
                 var inputArray = document.getElementById('inputArray').value;
                 
                 // Розділити рядок за допомогою пробілів і перетворити в масив чисел
                 var array = inputArray.split(/\s+/).map(Number);
 
                 // Видалити від'ємні елементи
                 var filteredArray = array.filter(function (element) {
                     return element >= 0;
                 });
 
                 // Вивести результат
                 document.getElementById('result6').value = filteredArray.join(', ');
}