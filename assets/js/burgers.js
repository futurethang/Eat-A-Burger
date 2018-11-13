// Within this script I ill grab the inputs to the new burger form and listen for clicks to the burger button and use Sequalize to enact either a create or update to the database

$(function () {

  $(".eat_or_delete").on('click', function (e) {
    var id = $(this).data("id");
    var isDevoured = $(this).data("devoured");

    var newDevoureState = { devoured: isDevoured };

    $.ajax("api/burgers" + id, {
      type: "PUT",
      data: newDevoureState
    }).then(function () {
      console.log("changed devour state to", newDevoureState);
      location.reload();
    });
  })

  


})