  $(function(){
    var result = document.getElementById("result");

  $("#calc").on('click', function(){
    a = $(this).val();
    console.log(a)
      if (a == "="){
        result.value = ("return " + result.value)
      }else{
        result.value = result.value + a;
      }   
    });
  $("#result")
  });