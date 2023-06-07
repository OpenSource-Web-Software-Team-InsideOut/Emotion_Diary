// 페이지 진입시 부드럽게 
$(document).ready(function() {
  $('#goList').click(function() {
    $('#emotionDiv').css('opacity', 0);
    var url = 'DiarayList.html';
    $.ajax({
      url: url,
      dataType: 'html',
      success: function(data) {
        setTimeout(function() {
          $('#emotionDiv').html(data).css('opacity', 1);
        }, 500);
      }
    });
  });
});



// 비 내리는 함수
var makeItRain = function() {
    //clear out everything
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 5 and 2
      var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  }
  
  var arr = new Array();
  arr = [30, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
                                                
  var arr2 = new Array();
  var arr3 = new Array();
  arr2 = ["기쁨", "행복", "설렘", "즐거움", "평온", "슬픔", "아픔", "우울함", "절망", "외로움", "지루함", "부끄러움", "죄책감", "두려움", "놀람", "분노", "짜증", "혼란", "후회", "불안"];
  arr3 = ["JOY", "HAPPINESS", "EXCITEMENT", "PLEASURE", "CALM", "SADNESS", "PAIN", "DEPRESSION", "DESPAIR", "LONELINESS", "BOREDOM", "SHAME", "GUILT", "FEAR", "SURPRISE","ANGER", "ANNOYANCE", "CONFUSION",  "REGRET","ANXIETY"];
  var buttonbol = true;
// arr2 내용 html 화면에 출력
function printText()
{
  var emotionDiv = document.createElement("div");
  emotionDiv.id = "emotionDiv";
  emotionDiv.className = "emotion";
  for (var i = 0; i < arr2.length; i++) 
  {
      var span = document.createElement("span");
      span.id = "emotion" + i;
      
      if(i == 2)
      {
        span.className = "particletext hearts";
      }
      if(i == 3)
      {
        span.className = "particletext confetti";
      }
      if(i == 15)
      {
        span.className = "particletext fire";

      }
      if(i == 17)
      {
          span.dataset.content = "혼란 CONFUSION";
      }
 
    
        span.innerHTML = arr2[i] + "&nbsp;" + arr3[i] + "&nbsp;";
        if(buttonbol == true)
        {
          var span2 = document.createElement("span");
          span2.id = "emotionDiv";
          span2.className = "emotion";
          span2.innerHTML = "<br>";
          emotionDiv.appendChild(span2);
        }
        else
        {
          if(i == 3 || i == 6 || i == 9 || i == 11 || i == 14 || i == 17 )
          {
            var span2 = document.createElement("span");
            span2.id = "emotionDiv";
            span2.className = "emotion";
            span2.innerHTML = "<br>";
            emotionDiv.appendChild(span2);
          }
          
        }
    
      emotionDiv.appendChild(span);
  }
  document.body.appendChild(emotionDiv);
}
function changeSize() 
  {
    for (var i = 0; i < arr2.length; i++) {
        var size = 3.125 + 0.05 * arr[i] + "rem";
        document.getElementById("emotion" + i).style.fontSize = size;
    }
  }
printText();
changeSize();
setTextanimation();

var changebutton = document.querySelector('.button_container');

  function getmain(element) {
    element.classList.add('emotion');
}
function removemain(element){
    element.classList.remove('emotion');
  }

  
  var emotionDiv = document.getElementById('emotionDiv');
  changebutton.addEventListener('click', () => {
    if(buttonbol == true)
    {
      buttonbol = false;
      emotionDiv.remove();
      printText();
      changeSize();
      setTextanimation();

      emotionDiv = document.getElementById('emotionDiv');

      removemain(emotionDiv);
      emotionDiv.style.textAlign = "left";
      emotionDiv.style.left = "0px";
      emotionDiv.style.top = "0px";
      emotionDiv.style.width = "100%";
      emotionDiv.style.height = "100%";
      emotionDiv.style.color = "#f1ebe5";
      emotionDiv.style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
      emotionDiv.style.lineHeight = "1000%";

      var band = document.querySelector('.container > *');

      band.style.left = "2%";
      band.style.top = "33%";

      
    }
    else
    {
      buttonbol = true;
      emotionDiv.remove();
      printText();
      changeSize();
      setTextanimation();

      emotionDiv = document.getElementById('emotionDiv');

      getmain(emotionDiv);
      emotionDiv.style.left = "30%";
      emotionDiv.style.width = "40%";
      emotionDiv.style.lineHeight = "12%";
      emotionDiv.style.textAlign = "center";
    }    

  });


  


  function hearts() {
    $.each($(".particletext.hearts"), function(){
       var heartcount = ($(this).width()/400)*5;
       for(var i = 0; i <= heartcount; i++) {
          var size = ($.rnd(130,120)/10);
          $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }

 function confetti() {
  $.each($(".particletext.confetti"), function(){
     var confetticount = ($(this).width()/100)*5;
     for(var i = 0; i <= confetticount; i++) {
        $(this).append('<span class="particle c' + $.rnd(1,2) + '" style="top:' + $.rnd(10,50) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(3,4) + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
     }
  });
}
 
 function fire() {
    $.each($(".particletext.fire"), function(){
       var firecount = ($(this).width()/1000)*10;
       for(var i = 0; i <= firecount; i++) {
          var size = $.rnd(60,12);
          $(this).append('<span class="particle" style="top:' + $.rnd(40,70) + '%; left:' + $.rnd(-10,100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,20)/10) + 's;"></span>');
       }
    });
 }
 
 jQuery.rnd = function(m,n) {
       m = parseInt(m);
       n = parseInt(n);
       return Math.floor( Math.random() * (n - m + 1) ) + m;
 }

 function setTextanimation()
 {
  var timeoutId;
  var timeoutId2;
  var timeoutId3;
  var timeoutId4;
   const body = document.body;
   const targetText = new Array();
   for(var i = 0; i < 20; i++)
   {
     targetText[i] = document.getElementById("emotion" + i);
   }
 
 
   //기쁨 JOY
 
   function getjoy(element) {
     element.classList.add('joy');
 }
 function removejoy(element){
     element.classList.remove('joy');
   }
 
   
   targetText[0].addEventListener('mouseover', () => {
     body.style.background = '#fbceb1';
     targetText[0].style.color = "white";
     targetText[0].style.textShadow = "0 1px 10px black";
     getjoy(targetText[0]);
 
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 0)
         {
             targetText[i].style.color = '#fbcfb1dd';
             targetText[i].style.textShadow = "0 0 0px black";
             targetText[i].style.transition = "color 0.0s ease";
         }
     }
   });
 
   targetText[0].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
   
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
 
     }
     removejoy(targetText[0]);
   });
 // 행복 HAPPINESS
   targetText[1].addEventListener('mouseover', () => {
     body.style.background = '#fbceb1';
     targetText[1].style.color = '#f6aca2';
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 1)
         {
             targetText[i].style.color = '#fbcfb1dd';
             targetText[i].style.textShadow = "0 0 0px black";
             targetText[i].style.transition = "color 0.0s ease";
         }
     }
   });
 
   targetText[1].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     document.querySelector(".emotion").style.color = "#f1ebe5";
 
     for(var i = 0; i < 20; i++)
     {
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
     }
   });
 // 설렘 EXCITEMENT
   targetText[2].addEventListener('mouseover', () => {
     body.style.background = '#fbceb1';
     targetText[2].style.color = 'white';
     targetText[2].style.textShadow = "0 0 1px black";
     targetText[2].style.transition = "color 0.5s ease";
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 2)
         {
             targetText[i].style.color = '#fbcfb1dd';
             targetText[i].style.textShadow = "0 0 0px black";
             targetText[i].style.transition = "color 0.0s ease";
         }
     }
   });
 
   targetText[2].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     document.querySelector(".emotion").style.color = "#f1ebe5";
 
     for(var i = 0; i < 20; i++)
     {
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
     }
   });
   
   $("#emotion2").hover(function() {
     timeoutId2 = setTimeout(hearts, 500);
  }, function() {
     clearTimeout(timeoutId2);
  });
 //즐거움 PLEASURE
  targetText[3].addEventListener('mouseover', () => {
     body.style.background = '#fbceb1';
     targetText[3].style.color = 'white';
     targetText[3].style.textShadow = "0 0 1px black";
     targetText[3].style.transition = "color 0.5s ease";
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 3)
         {
             targetText[i].style.color = '#fbcfb1dd';
             targetText[i].style.textShadow = "0 0 0px black";
             targetText[i].style.transition = "color 0.0s ease";
         }
     }
   });
   
 
   targetText[3].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     document.querySelector(".emotion").style.color = "#f1ebe5";
 
     for(var i = 0; i < 20; i++)
     {
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
     }
   });
   $("#emotion3").hover(function() {
     timeoutId4 = setTimeout(confetti, 500);
  }, function() {
     clearTimeout(timeoutId4);
  });
   //평온 CALM
 
   targetText[4].addEventListener('mouseover', () => {
     body.style.background = '#fbceb1';
     targetText[4].style.color = "white";
     targetText[4].style.textShadow = "0 1px 10px black";
     targetText[4].style.transition = "all 1.0s ease";
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 4)
         {
             targetText[i].style.color = '#fbcfb1dd';
             targetText[i].style.textShadow = "0 0 0px black";
             targetText[i].style.transition = "color 0.0s ease";
         }
     }
   });
 
   targetText[4].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     document.querySelector(".emotion").style.color = "#f1ebe5"; 
     for(var i = 0; i < 20; i++)
     {
             targetText[i].style.color = "#f1ebe5";
             targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
             targetText[i].style.transition = "color 0.0s ease";
     }
     targetText[4].style.transition = "all 1.0s ease";
   });
   
 //슬픔 SADNESS
 targetText[5].addEventListener('mouseover', () => {
     body.style.background = '#1984D5';
     targetText[5].style.color = "white";
     targetText[5].style.textShadow = "0 0 1px black";
     targetText[5].style.transition = "color 0.5s ease";
     for(var i = 0; i < 20; i++)
     {
         if(i != 5)
         {
             targetText[i].style.color = "#1677BF";
             targetText[i].style.textShadow = "0 0 0px black";
             targetText[i].style.transition = "color 0.0s ease";
         }
     }   
     timeoutId = setTimeout(makeItRain, 1000);
   });
 
   targetText[5].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
         
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
 
     }
     targetText[5].style.transition = "color 0.5s ease";
     clearTimeout(timeoutId);
   });
 //아픔
 const band = document.getElementById("sickband");
   targetText[6].addEventListener('mouseover', () => {
     band.style.opacity = 1;
     band.style.zIndex = 3;
     
     band.style.transition = "opacity 1s ease";
     body.style.background = '#1984D5';
     targetText[6].style.color = "white";
     targetText[6].style.textShadow = "0 0 1px black";
     targetText[6].style.transition = "opacity 1s color 1s ease";
     for(var i = 0; i < 20; i++)
     {
         if(i != 6)
         {
           targetText[i].style.color = "#1677BF";
           targetText[i].style.textShadow = "0 0 0px black";
           targetText[i].style.transition = "color 0.0s ease";
         }
     }   
   });
   
   targetText[6].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     band.style.opacity = 0;
     for(var i = 0; i < 20; i++)
     {
         
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
 
     }
     targetText[6].style.transition = "color 0.5s ease";
   });
   
   //우울함
   targetText[7].addEventListener('mouseover', () => {
     body.style.background = '#1984D5';
     targetText[7].style.color = "white";
     targetText[7].style.textShadow = "0 0 1px black";
     targetText[7].style.transition = "opacity 1s color 1s ease";
 
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 7)
         {
           targetText[i].style.color = "#1677BF";
           targetText[i].style.textShadow = "0 0 0px black";
           targetText[i].style.transition = "color 0.0s ease";
         }
     }
   });
 
   targetText[7].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
   
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
 
     }
   });
 //절망
   targetText[8].addEventListener('mouseover', () => {
     body.style.background = '#1984D5';
     targetText[8].style.color = "white";
     targetText[8].style.textShadow = "0 0 1px black";
     targetText[8].style.transition = "opacity 1s color 1s ease";
 
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 8)
         {
           targetText[i].style.color = "#1677BF";
           targetText[i].style.textShadow = "0 0 0px black";
           targetText[i].style.transition = "color 0.0s ease";
         }
     }
   });
 
   targetText[8].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
   
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
 
     }
   });
 //외로움
   targetText[9].addEventListener('mouseover', () => {
     body.style.background = '#1984D5';
     targetText[9].style.color = "white";
     targetText[9].style.textShadow = "0 0 1px black";
     targetText[9].style.transition = "opacity 1s color 1s ease";
 
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 9)
         {
           targetText[i].style.color = "#1677BF";
           targetText[i].style.textShadow = "0 0 0px black";
           targetText[i].style.transition = "color 0.0s ease";
         }
     }
   });
 
   targetText[9].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
   
       targetText[i].style.color = "#f1ebe5";
       targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
       targetText[i].style.transition = "color 0.0s ease";
     }
   });
 
   targetText[10].addEventListener('mouseover', () => {
     body.style.background = '#f6ddff';
     targetText[10].style.color = "DarkViolet";
     targetText[10].style.removeProperty("text-shadow");
     targetText[10].style.transition = "text-Shadow 1.0s, color 3.0s ease";
     
     for(var i = 0; i < 20; i++)
     {
       if(i != 10)
       {
         targetText[i].style.color = "#d4bbdd";
         targetText[i].style.textShadow = "0 0 0px black";
         targetText[i].style.transition = "color 0.0s ease";
       }
     }
   });
 
 targetText[11].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
       targetText[11].style.color = "#f1ebe5";
     }
     
   });
 
   targetText[11].addEventListener('mouseover', () => {
     body.style.background = '#f6ddff';
     targetText[11].style.color = "Red";
     targetText[11].style.removeProperty("text-shadow");
     targetText[11].style.transition = "text-Shadow 1.0s, color 6.0s ease";
     
     for(var i = 0; i < 20; i++)
     {
       if(i != 11)
       {
         targetText[i].style.color = "#d4bbdd";
         targetText[i].style.textShadow = "0 0 0px black";
         targetText[i].style.transition = "color 0.0s ease";
       }
     }
   });
 
 targetText[11].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
     }
     targetText[11].style.transition = "text-Shadow 1.0s, color 8.0s ease";
     
   });
 
 
   function getguilty(element) {
     element.classList.add('guilty');
 }
 function removeguilty(element){
     element.classList.remove('guilty');
   }
   
 // 죄책감 GUILT
   targetText[12].addEventListener('mouseover', () => {
     body.style.background = '#f6ddff';
     targetText[12].style.color = "DarkViolet";
     targetText[12].style.removeProperty("text-shadow");
     targetText[12].style.transition = "text-Shadow 1.0s, color 3.0s ease";
     getguilty(targetText[12]);
     
     for(var i = 0; i < 20; i++)
     {
       if(i != 12)
       {
         targetText[i].style.color = "#d4bbdd";
         targetText[i].style.textShadow = "0 0 0px black";
         targetText[i].style.transition = "color 0.0s ease";
       }
     }
   });
 
 targetText[12].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
       if( i != 12)
       {
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
       }
       targetText[12].style.color = "#f1ebe5";
       removeguilty(targetText[12]);
     }
     
   });
 
   targetText[13].addEventListener('mouseover', () => {
     body.style.background = '#f6ddff';
     targetText[13].style.color = "DarkViolet";
     targetText[13].style.removeProperty("text-shadow");
     targetText[13].style.transition = "text-Shadow 1.0s, color 3.0s ease";
     
     for(var i = 0; i < 20; i++)
     {
       if(i != 13)
       {
         targetText[i].style.color = "#d4bbdd";
         targetText[i].style.textShadow = "0 0 0px black";
         targetText[i].style.transition = "color 0.0s ease";
       }
     }
   });
 
 targetText[13].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
       targetText[13].style.color = "#f1ebe5";
     }
     
   });
 
   targetText[14].addEventListener('mouseover', () => {
     body.style.background = '#f6ddff';
     targetText[14].style.color = "DarkViolet";
     targetText[14].style.removeProperty("text-shadow");
     targetText[14].style.transition = "text-Shadow 1.0s, color 3.0s ease";
     
     for(var i = 0; i < 20; i++)
     {
       if(i != 14)
       {
         targetText[i].style.color = "#d4bbdd";
         targetText[i].style.textShadow = "0 0 0px black";
         targetText[i].style.transition = "color 0.0s ease";
       }
     }
   });
 
 targetText[14].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
         targetText[i].style.color = "#f1ebe5";
         targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
         targetText[i].style.transition = "color 0.0s ease";
       targetText[14].style.color = "#f1ebe5";
     }
     
   });
 
   //분노 ANGER
   targetText[15].addEventListener('mouseover', () => {
     body.style.background = '#CC2A5D';
 
     targetText[15].style.color = "black";
     targetText[15].style.transition = "color 6.0s ease";
     targetText[15].style.textShadow = "0 0 0px black"
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 15)
         {
             targetText[i].style.color = "#9B2248";
             targetText[i].style.textShadow = "0 0 0px black";
             targetText[i].style.transition = "color 0.0s ease";
         }
     }
     timeoutId3 = setTimeout(fire, 1000);
   });
 
   targetText[15].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
             targetText[i].style.color = "#f1ebe5";
             targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
             targetText[i].style.transition = "color 0.0s ease";
     }
     targetText[15].style.transition = "color 4.0s ease";
     clearTimeout(timeoutId3);
   });
 //짜증
   targetText[16].addEventListener('mouseover', () => {
     body.style.background = '#CC2A5D';
     targetText[16].style.color = "white";
     targetText[16].style.textShadow = "0 0 1px black";
     targetText[16].style.transition = "opacity 1s color 1s ease";
 
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 16)
         {
           targetText[i].style.color = "#9B2248";
           targetText[i].style.textShadow = "0 0 0px black";
           targetText[i].style.transition = "color 0.0s ease";
         }
     }
   });
 
   targetText[16].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
   
       targetText[i].style.color = "#f1ebe5";
       targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
       targetText[i].style.transition = "color 0.0s ease";
     }
   });
 
 
 
   
   
 //혼란 CONFUSION
 targetText[17].addEventListener('mouseover', () => {
     body.style.background = '#CC2A5D';
     
     targetText[17].style.color = "white";
     targetText[17].style.textShadow = "0 1px 10px black";
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 17)
         {
             targetText[i].style.color = "#9B2248";
             targetText[i].style.textShadow = "0 0 0px black";
             targetText[i].style.transition = "color 0.0s ease";
         }
     }
   });
 
 targetText[17].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
 
       targetText[i].style.color = "#f1ebe5";
       targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
       targetText[i].style.transition = "color 0.0s ease";
             
     }
   });
 // 후회 REGRET
   targetText[18].addEventListener('mouseover', () => {
     body.style.background = '#CC2A5D';
     
     targetText[18].style.color = "white";
     targetText[18].style.textShadow = "0 1px 10px black";
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 18)
         {
             targetText[i].style.color = "#9B2248";
             targetText[i].style.textShadow = "0 0 0px black";
             targetText[i].style.transition = "color 0.0s ease";
         }
     }
   });
 
 targetText[18].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
 
       targetText[i].style.color = "#f1ebe5";
       targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
       targetText[i].style.transition = "color 0.0s ease";
             
     }
   });
 
   targetText[19].addEventListener('mouseover', () => {
     body.style.background = '#CC2A5D';
     
     targetText[19].style.color = "white";
     targetText[19].style.textShadow = "0 1px 10px black";
 
     for(var i = 0; i < 20; i++)
     {
         if(i != 19)
         {
             targetText[i].style.color = "#9B2248";
             targetText[i].style.textShadow = "0 0 0px black";
             targetText[i].style.transition = "color 0.0s ease";
         }
     }
   });
 
 targetText[19].addEventListener('mouseout', () => {
     body.style.background = 'linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%)';
     for(var i = 0; i < 20; i++)
     {
 
       targetText[i].style.color = "#f1ebe5";
       targetText[i].style.textShadow = "0 8px 9px #c4b59d, 0px -2px 1px #fff";
       targetText[i].style.transition = "color 0.0s ease";
             
     }
   });
 }

  // 텍스트 암호화
 function WordShuffler(holder,opt){
    var that = this;
    var time = 0;
    this.now;
    this.then = Date.now();
    
    this.delta;
    this.currentTimeOffset = 0;
    
    this.word = null;
    this.currentWord = null;
    this.currentCharacter = 0;
    this.currentWordLength = 0;
  
  
    var options = {
      fps : 20,
      timeOffset : 1,
      textColor : '#000',
      fontSize : "50px",
      useCanvas : false,
      mixCapital : false,
      mixSpecialCharacters : false,
      needUpdate : true,
      colors : [
        '#f44336','#e91e63','#9c27b0',
        '#673ab7','#3f51b5','#2196f3',
        '#03a9f4','#00bcd4','#009688',
        '#4caf50','#8bc34a','#cddc39',
        '#ffeb3b','#ffc107','#ff9800',
        '#ff5722','#795548','#9e9e9e',
        '#607d8b'
      ]
    }
  
    if(typeof opt != "undefined"){
      for(key in opt){
        options[key] = opt[key];
      }
    }
  
  
    
    this.needUpdate = true;
    this.fps = options.fps;
    this.interval = 1000/this.fps;
    this.timeOffset = options.timeOffset;
    this.textColor = options.textColor;
    this.fontSize = options.fontSize;
    this.mixCapital = options.mixCapital;
    this.mixSpecialCharacters = options.mixSpecialCharacters;
    this.colors = options.colors;
  
     this.useCanvas = options.useCanvas;
    
    this.chars = [
      'A','B','C','D',
      'E','F','G','H',
      'I','J','K','L',
      'M','N','O','P',
      'Q','R','S','T',
      'U','V','W','X',
      'Y','Z'
    ];
    this.specialCharacters = [
      '!','§','$','%',
      '&','/','(',')',
      '=','?','_','<',
      '>','^','°','*',
      '#','-',':',';','~'
    ]
  
    if(this.mixSpecialCharacters){
      this.chars = this.chars.concat(this.specialCharacters);
    }
  
    this.getRandomColor = function () {
      var randNum = Math.floor( Math.random() * this.colors.length );
      return this.colors[randNum];
    }
  
    //if Canvas
   
    this.position = {
      x : 0,
      y : 50
    }
  
    //if DOM
    if(typeof holder != "undefined"){
      this.holder = holder;
    }
  
    if(!this.useCanvas && typeof this.holder == "undefined"){
      console.warn('Holder must be defined in DOM Mode. Use Canvas or define Holder');
    }
  
  
    this.getRandCharacter = function(characterToReplace){    
      if(characterToReplace == " "){
        return ' ';
      }
      var randNum = Math.floor(Math.random() * this.chars.length);
      var lowChoice =  -.5 + Math.random();
      var picketCharacter = this.chars[randNum];
      var choosen = picketCharacter.toLowerCase();
      if(this.mixCapital){
        choosen = lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
      }
      return choosen;
      
    }
  
    this.writeWord = function(word){
      this.word = word;
      this.currentWord = word.split('');
      this.currentWordLength = this.currentWord.length;
  
    }
  
    this.generateSingleCharacter = function (color, character) {
        var span = document.createElement('span');
        span.style.color = color;
        
        // Check if character is &nbsp; and replace it with a regular space
        if (character === '&') {
          span.innerHTML = ' ';
        } 
        else if (character === 'n') {
            span.innerHTML = ' ';
        } 
        else if (character === 'b') {
            span.innerHTML = ' ';
        } 
        else if (character === 's') {
            span.innerHTML = ' ';
        } 
        else if (character === 'p') {
            span.innerHTML = ' ';
        } 
        else if (character === ';') {
            span.innerHTML = ' ';
        } 
        else {
          span.innerHTML = character;
        }
        
        return span;
      }
      
  
    this.updateCharacter = function (time) {
      
        this.now = Date.now();
        this.delta = this.now - this.then;
  
         
  
        if (this.delta > this.interval) {
          this.currentTimeOffset++;
        
          var word = [];
  
          if(this.currentTimeOffset === this.timeOffset && this.currentCharacter !== this.currentWordLength){
            this.currentCharacter++;
            this.currentTimeOffset = 0;
          }
          for(var k=0;k<this.currentCharacter;k++){
            word.push(this.currentWord[k]);
          }
  
          for(var i=0;i<this.currentWordLength - this.currentCharacter;i++){
            word.push(this.getRandCharacter(this.currentWord[this.currentCharacter+i]));
          }
  
  
          if(that.useCanvas){
            c.clearRect(0,0,stage.x * stage.dpr , stage.y * stage.dpr);
            c.font = that.fontSize + " sans-serif";
            var spacing = 0;
            word.forEach(function (w,index) {
              if(index > that.currentCharacter){
                c.fillStyle = that.getRandomColor();
              }else{
                c.fillStyle = that.textColor;
              }
              c.fillText(w, that.position.x + spacing, that.position.y);
              spacing += c.measureText(w).width;
            });
          }else{
  
            if(that.currentCharacter === that.currentWordLength){
              that.needUpdate = false;
            }
            this.holder.innerHTML = '';
            word.forEach(function (w,index) {
              var color = null
              if(index > that.currentCharacter){
                color = that.getRandomColor();
              }else{
                color = that.textColor;
              }
              that.holder.appendChild(that.generateSingleCharacter(color, w));
            }); 
          }
          this.then = this.now - (this.delta % this.interval);
        }
    }
  
    this.restart = function () {
      this.currentCharacter = 0;
      this.needUpdate = true;
    }
  
    function update(time) {
      time++;
      if(that.needUpdate){
        that.updateCharacter(time);
      }
      requestAnimationFrame(update);
    }
  
    this.writeWord(this.holder.innerHTML);
  
  
    console.log(this.currentWord);
    update(time);
  }