/* Build a wiki viewer where I can:

1. Type entries "string" in a search box
2. When I click on the search button, I can see the resulting Wikipedia entries listed in the #result field.
3. I can click on the #random button to get a random article

*/

$(document).ready(function(){

  $("#searchbox").keypress(function(e){

  if(e.which==13){
  $("#searchbox").empty();
  var searchQuery = this.value;
  $.ajax({
    url:"https://en.wikipedia.org/w/api.php?action=opensearch&format=json",
    dataType:"jsonp",
    data:{search:searchQuery},
    success:function(data){

     $(".resultField").remove();

     for(var i = 0, n = data[1].length; i < n; i++){
      var $newDiv = $("<div class='resultField' />");
      $(".container").append($newDiv);
      $newDiv.append("<h3>" + data[1][i] + "</h3>")
             .append("<p>" + data[2][i] + "</p>")
             .append("<a href='" + data[3][i] + "' target='_blank'>" + data[3][i] + "</a>");


     } // for loop


    }


  }); // ajax

  } // Enter key down


  });

});
