$(document).ready(function() {
 var $form = $('.form1')

 $form.on('submit', function (e) {
   e.preventDefault()
   console.log($(this).serializeArray())

var inputArr = data.map(function (input) {
  return input.value
})

$('h1').text.(inputArr.join(','))

 })


})
