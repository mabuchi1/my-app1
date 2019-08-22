$(function(){

  function buildHTML(point){
    
    $(".content-player__name__result__1a").remove();
    $(".content-player__name__result__1b").remove();
    $(".content-player__name__result__1c").remove();
    $(".content-player__name__result__1d").remove();

    if(point.user_name == gon.name0){
      var html = `<li class="point" data-point="${point.id}" data-user-id="${point.user_id}">${point.point}</li>`;
      $(".content-player__name__point").append(html);
      gon.res1 = gon.res1 + point.point;
      gon.rank0 = gon.res1;
      var re = `<li class="content-player__name__result__0">${gon.res1}</li>`
      $(".content-player__name__result__0").remove();
      $(".content-player__name__result").append(re);
      $('.content-player__name__point').animate({ scrollTop: $('.content-player__name__point')[0].scrollHeight});
    }else if(point.user_name == gon.name1){
      var html = `<li class="point1" data-point1="${point.id}" data-user-id="${point.user_id}">${point.point}</li>`;
      $(".content-player__name__point1").append(html);
      gon.res2 = gon.res2 + point.point;
      gon.rank1 = gon.res2;
      var re = `<li class="content-player__name__result__1">${gon.res2}</li>`
      $(".content-player__name__result__1").remove();
      $(".content-player__name__result1").append(re);
      $('.content-player__name__point1').animate({ scrollTop: $('.content-player__name__point1')[0].scrollHeight});
    }else if(point.user_name == gon.name2){
      var html = `<li class="point2" data-point2="${point.id}" data-user-id="${point.user_id}">${point.point}</li>`;
      $(".content-player__name__point2").append(html);
      gon.res3 = gon.res3 + point.point;
      gon.rank2 = gon.res3;
      var re = `<li class="content-player__name__result__2">${gon.res3}</li>`
      $(".content-player__name__result__2").remove();
      $(".content-player__name__result2").append(re);
      $('.content-player__name__point2').animate({ scrollTop: $('.content-player__name__point2')[0].scrollHeight});
    }else if(point.user_name == gon.name3){
      var html = `<li class="point3" data-point3="${point.id}" data-user-id="${point.user_id}">${point.point}</li>`;
      $(".content-player__name__point3").append(html);
      gon.res4 = gon.res4 + point.point;
      gon.rank3 = gon.res4;
      var re = `<li class="content-player__name__result__3">${gon.res4}</li>`
      $(".content-player__name__result__3").remove();
      $(".content-player__name__result3").append(re);
      $('.content-player__name__point3').animate({ scrollTop: $('.content-player__name__point3')[0].scrollHeight});
    }

    var rank = new Array();
    rank.push(gon.rank0, gon.rank1, gon.rank2, gon.rank3);
    rank.sort(compareFunc);
    gon.flag = 0;
    if (rank[3] == gon.res1 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1a">${gon.one}</div>`;
      $(".contenta-a1").append(re_a);
      gon.flag = 1;
    }else if (rank[2] == gon.res1 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1a">${gon.two}</div>`;
      $(".contenta-a1").append(re_a);
      gon.flag = 1;
    }else if (rank[1] == gon.res1 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1a">${gon.three}</div>`;
      $(".contenta-a1").append(re_a);
      gon.flag = 1
    }else if (rank[0] == gon.res1 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1a">${gon.four}</div>`;
      $(".contenta-a1").append(re_a);
    }

    gon.flag = 0;
    if (rank[3] == gon.res2 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1b">${gon.one}</div>`;
      $(".contenta-a2").append(re_a);
      gon.flag = 1;
    }
    if (rank[2] == gon.res2 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1b">${gon.two}</div>`;
      $(".contenta-a2").append(re_a);
      gon.flag = 1
    }
    if (rank[1] == gon.res2 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1b">${gon.three}</div>`;
      $(".contenta-a2").append(re_a);
      gon.flag = 1
    }
    if (rank[0] == gon.res2 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1b">${gon.four}</div>`;
      $(".contenta-a2").append(re_a);
    }
    
    gon.flag = 0;
    if (rank[3] == gon.res3 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1c">${gon.one}</div>`;
      $(".contenta-a3").append(re_a);
      gon.flag = 1;
    }
    if (rank[2] == gon.res3 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1c">${gon.two}</div>`;
      $(".contenta-a3").append(re_a);
      gon.flag = 1
    }
    if (rank[1] == gon.res3 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1c">${gon.three}</div>`;
      $(".contenta-a3").append(re_a);
      gon.flag = 1
    }
    if (rank[0] == gon.res3 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1c">${gon.four}</div>`;
      $(".contenta-a3").append(re_a);
    }
    
    gon.flag = 0;
    if (rank[3] == gon.res4 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1d">${gon.one}</div>`;
      $(".contenta-a4").append(re_a);
      gon.flag = 1;
    }
    if (rank[2] == gon.res4 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1d">${gon.two}</div>`;
      $(".contenta-a4").append(re_a);
      gon.flag = 1
    }
    if (rank[1] == gon.res4 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1d">${gon.three}</div>`;
      $(".contenta-a4").append(re_a);
      gon.flag = 1
    }
    if (rank[0] == gon.res4 && gon.flag == 0){
      var re_a = `<div class="content-player__name__result__1d">${gon.four}</div>`;
      $(".contenta-a4").append(re_a);
    }
    
  }

  function compareFunc(a, b) {
    return a - b;
  }

  $("#new_point").on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      buildHTML(data);
      $('#new_point')[0].reset();
      $('.send').attr('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })


  var reloadPoints = function(){
    var last_point_id = $(".point:last").data("point");
    var user_point_id = $(".point").data("user-id");
    var last_point_name = $(".content-player__name").data("user-name");

    var last_point1_id = $(".point1:last").data("point1");
    var user_point1_id = $(".point1").data("user-id");
    var last_point1_name = $(".content-player__name1").data("user-name");
    
    var last_point2_id = $(".point2:last").data("point2");
    var user_point2_id = $(".point2").data("user-id");
    var last_point2_name = $(".content-player__name2").data("user-name");
    
    var last_point3_id = $(".point3:last").data("point3");
    var user_point3_id = $(".point3").data("user-id");
    var last_point3_name = $(".content-player__name3").data("user-name");

    var group_id = $(".content__header-name").data("id");

    $.ajax({
      url: `/groups/${group_id}/api/points`,
      type: 'GET',
      dataType: 'json',
      data: {
        id: last_point_id,
        user_id: user_point_id,
        name: last_point_name,
        
        id1: last_point1_id,
        user1_id: user_point1_id,
        name1: last_point1_name,
        
        id2: last_point2_id,
        user2_id: user_point2_id,
        name2: last_point2_name,

        id3: last_point3_id,
        user3_id: user_point3_id,
        name3: last_point3_name
    }
  })
    .done(function(point){
      te = ""
      point.forEach(function(point){
        te = buildHTML(point)
      })
    })
    .fail(function(){
      alert("error")
    });
  };
  var group_id = $(".content__header-name").data("id");
  if(`/groups/${group_id}/points` === window.location.pathname){
    setInterval(reloadPoints, 5000);
    }
});