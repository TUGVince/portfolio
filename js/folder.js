
//Variables
var max = $(".file").length; //Maxium number of file

var outTime = 1000; //time to take out the file

$(".file").click(function(e){
  var n = e.target.id.replace("file","");
  var open = $(".open").length;
  if($(this).css("z-index") < 10)
  {
    $(this).animate({marginTop: "-450px"},outTime,
    function(){
      $(this).css("z-index",10+open+1);
      $(this).addClass("open"); //This file has been opened
      $(this).animate({marginTop: "-30px"});
    });
  }
  else{
    $(this).animate({marginTop: "-450px"},outTime,
    function(){
      $(this).css("z-index",max-(parseInt(n) - 1));
      $(this).removeClass("open"); //Closed
      $(this).animate({marginTop: "-30px"});
    });
  }
});

  

                          
                          
