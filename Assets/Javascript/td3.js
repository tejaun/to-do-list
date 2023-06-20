// Marking of Completion of Todos By Clicking

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Deletion of Todos by Clicking "X"

$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(function(event) {
      $(this).remove();
    });
  event.stopPropagation();
});

// Creation of New Todos by Clicking "+"

$("input[type='text']").keypress(function(event) {
  // Checking for "Enter" Key
  if (event.which === 13) {
    // Grab the New Todo Text From the Input and Clear the Text Box
    var todoText = $(this).val();
    $(this).val("");

    // Create a new <li> and add to the <ul>
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$('.fa-plus').click(function(){
  $("input[type='text']").fadeToggle();
});