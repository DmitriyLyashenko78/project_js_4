/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
   let str1 = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            str1 = str1 + str[i].toUpperCase()
        } else {
            str1 = str1 + str[i]
        }
    }
    return str1
}

console.log(capitalizeWords('a'))
