// find elements
var anotherColor = $(".change-color")
var button = $("button")

// handle click and add class
button.on("click", function(){
  anotherColor.toggleClass("another-color")
})
