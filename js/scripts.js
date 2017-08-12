// $(document).ready(function() {
  // var item2 = $("#css-item2").text();
  // var item1 = $("#css-item").text();
  // alert(item1 + " " + item2);
  // alert($("#css-item").text());
// })

$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  })
})
