var flag = 1;
var input = "";
var calc = "+";
var result = 0;

$(function(){
  $(".val").on('click', function(){
    var a = $(this).val();
    if (a >= 1 && a <=9){
      flag = 0 ;
      input += a;
      document.getElementById("result").value = input
      }
    });

  $(".calc").on('click', function(){
    var a = $(this).val();
      if( flag == 0 && a == "+" || flag == 0 && a == "*" || flag == 0 && a == "/" || flag == 0 && a == "-" || flag == 0 && a == "="){
        flag = 1;
        var work = result + calc + input;
        result = eval(work);
        input = "";
        document.getElementById("result").value = result;
      }
      if(a == "=" && flag == 1){
        calc = "+";
      }else{
        calc = a;
      }
      if(a == "C"){
        result = 0;
        calc = "+"
        input = "";
        document.getElementById("result").value = result
      }
    });
  });