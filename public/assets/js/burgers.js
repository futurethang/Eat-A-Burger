// Within this script I ill grab the inputs to the new burger form and listen for clicks to the burger button and use Sequalize to enact either a create or update to the database

$(function () {

  $(".eat_or_put_back").on('click', function (e) {
    var id = $(this).data("id");
    var isDevoured = $(this).data("devoured");
    // console.log(isDevoured, "before");
    if (isDevoured) { isDevoured = false }
    else (isDevoured = true);
    console.log(isDevoured, "after");

    var newDevourState = { devoured: isDevoured };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devour state to", newDevourState);
        location.reload();
      });
  })

  $(".delete").on('click', function () {
    if ($(this).data("devoured") === true) {
      var id = $(this).data("id");
      console.log(id);
      
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(function (res) {
          console.log("Hey O!", res);
          location.reload(true);
        });
    }
  })

  $(".create-form").on('submit', function (e) {
    e.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };

    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("new burger added to the menu");
        location.reload();
      }
    );
  });

})