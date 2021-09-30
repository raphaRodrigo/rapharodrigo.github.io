// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "Hello World!" );

    $("#firstSpan").click(function(){
      alert("Hello World!")
  });

    $(".big").click(function(){
      //alert("Hello World!")
      $(this).css("background-color", "blue")
  });
});
