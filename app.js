//1)task

function checkValue (str) {
  var putString = ""//будет хранить перевернутую строчку 

  for( var i = str.length -1; i >= 0; i -- ){
     putString += str[i]  //пробегаемся  от конца строки и сохраняем значение каждого индекса
  }
   return  putString  //и возращаем  это значение 
}

var input  = "123456789"  //задем изначальное значение  строки 
var checkValue = checkValue(input) //вызываем функции внутри переменной 

console.log(checkValue)

// 2) task
const cardNumber = '4815154823541789'

function hideNumberCard (cardNumber,symbols = "*") {

var visibleSymbols = 6  //количесто которое будет маскировать цифры 
var replaseNumbers = cardNumber.length - visibleSymbols -4 // затем мы от общей длины карты вычесляем значение символов которые будут закрыты и в конце количесто символов которые будут видны 
var maskedSymbol = symbols.repeat(visibleSymbols)// здесь идет повотор определеного количесва символов для закрытия цифп
var allNumbers = cardNumber.slice(0,visibleSymbols) + maskedSymbol + cardNumber.slice(-4) // а здесь общая конкатинация 

return allNumbers 
}

const hideNumberCards = hideNumberCard(cardNumber) //идет вызов внутри переменной

console.log(hideNumberCards)