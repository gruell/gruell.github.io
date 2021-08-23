gsap.registerPlugin(ScrollTrigger);


const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#gettingUp',
        markers: false, 
        start: 'top 30%',
        end: 'top 10%',
        scrub: 4,
    }
});

t2.add(function () {
    $('#standingUp').attr("src","Panel5/GettingUp3.jpg");
  });

gsap.to('#gettingUp', {
    y: '30px', 
    scrollTrigger: {
        trigger: '#gettingUp',
        pin: true,
        markers: false, 
        scrub: true,
        start: 'top 30%',
        end: 'top 10%',
    }
});

gsap.to('#standingUp', {
    scrollTrigger: {
        trigger: '#gettingUp',
        markers: false, 
        scrub: true, 
        start: 'top 40%',
        end: 'top 20%',
        onLeave: function () {
            $('#standingUp').attr("src","Panel5/GettingUp3.jpg");
          },
    }
});

firstTimeLight = true;

gsap.to('#panelTrigger', {
    scrollTrigger: {
        trigger: '#panelTrigger',
        markser: false, 
        start: 'top 20%',
        end: 'top 20%',
        onEnter: function () {
            if(firstTimeLight)
            {
                firstTimeLight = false;
                disableScroll();
            }
            
          },
    }
});

firstTimeBed = true;

gsap.to('#panelDrag', {
    scrollTrigger: {
        trigger: '#panelDrag',
        markser: false, 
        start: 'top',
        end: 'top 20%',
        onEnter: function () {
            if(firstTimeBed) {
                firstTimeBed = false;
                disableScroll();
            }
          },
    }
});

firstTimeCloset = true;

gsap.to('#closetDiv', {
    scrollTrigger: {
        trigger: '#closetDiv',
        markser: false, 
        start: 'top',
        end: 'top 20%',
        onEnter: function () {
            if (firstTimeCloset){
                firstTimeCloset = false;
                disableScroll();
            }
          },
    }
});


function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}




gsap.to('#standingUp', {
    scrollTrigger: {
        trigger: '#gettingUp',
        attr: {src: "Panel5/GettingUp3.jpg"},
        markers: false, 
        start: 'top 30%',
        end: 'top 10%',
    }
})

gsap.to('#kitchen1', {
    scrollTrigger: {
        trigger: '#lightSwitch',
        markser: false, 
        scrub: true, 
        start: 'top 80%',
        end: 'top 80%',
        onLeave: function () {
            $('#kitchen1').attr("src","Panel7/Kitchen2.jpg");
          },
    }
});

firstTimeFreezer = true;

gsap.to('#freezer', {
    scrollTrigger: {
        trigger: '#freezer',
        markser: false, 
        start: 'top 17%',
        end: 'top 20%',
        onEnter: function () {
            if(firstTimeFreezer)
            {
                firstTimeFreezer = false;
                disableScroll();
            } 
          },
    }
});

firstTimeEgg = true;

gsap.to('#crackingEggPanels', {
    scrollTrigger: {
        trigger: '#crackingEggPanels',
        markser: false, 
        start: 'top 22%',
        end: 'top 30%',
        onEnter: function () {
            if(firstTimeEgg)
            {
                firstTimeEgg = false;
                disableScroll();
            } 
          },
    }
});

firstTimeScreen = true; 

gsap.to('#desktop', {
    scrollTrigger: {
        trigger: '#desktop',
        markser: false, 
        start: 'top 5%',
        end: 'top 30%',
        onEnter: function () {
            if(firstTimeScreen)
            {
                firstTimeScreen = false;
                disableScroll();
            } 
          },
    }
});


gsap.to('#panelSmall2', {
    y: '20px', 
    scrollTrigger: {
        trigger: '#panelSmall2',
        pin: true,
        markers: false, 
        start: 'top 60%',
        end: 'bottom 60%',
        toggleActions: 'restart pause resume reset'
    }
})

$( function() {
    var triggerPosition = $( '#pullTrigger' ).position();
    $( '#panelDrag' ).draggable({
        drag: function() {
            $('#bedPanel').attr("src","Panel3/Bed/Bed_2.jpg");
            $("div").removeClass("stillInBed");
            firstTimeBed = false;
            enableScroll();
        }
    }
    );
    $('#pullTrigger').draggable({ 
        axis: 'y' , 
        containment: '#triggerContainment', 
        grid: [ 20, 20 ],
        start: function() {
            triggerPosition = $( '#pullTrigger' ).position();
          },
          drag: function() {
            triggerPosition = $( '#pullTrigger' ).position();
            updateBasedOnPullTrigger(triggerPosition);
                      },
          stop: function() {
            triggerPosition = $( '#pullTrigger' ).position();
            updateBasedOnPullTrigger(triggerPosition);
          }});
  } );

function updateBasedOnPullTrigger(newPos) {
      console.log(" New: " + newPos.top);
      var name = "";
      if(newPos.top < 70) {
        name = "Panel1_1/Window_1.jpg";
      }
      else if (newPos.top < 100)
      {
          name = "Panel1_1/Window_2.jpg";
      }
      else if (newPos.top < 130)
      {
          name = "Panel1_1/Window_3.jpg";
      }
      else if (newPos.top < 160)
      {
          name = "Panel1_1/Window_4.jpg";
      }
      else {
          name = "Panel1_1/Window_5.jpg";
          $("div").removeClass("eyeClosed");
          firstTimeLight = false;
          enableScroll();
          
      }
      $('#eye_panel').attr("src",name);
  };

$( "#closet" ).click(function() {
    $('#closet').attr("src","Panel6/Closet2.jpg");
    firstTimeCloset = false;
    enableScroll();
  });

firstTimeFreezerAnimation = true;

$( "#freezer" ).click(function() {
    $('#freezer').attr("src","Panel8/Fridge2.jpg");
    $('#inFrontOfFreezer').attr("src","Panel8/Fridge5.jpg");
    $("div").removeClass("closedFridge");

    if(firstTimeFreezerAnimation) {
        firstTimeFreezerAnimation = false;
        firstTimeFreezer = false;
        setTimeout(function (){
            $("#fridge6").toggle();
            setTimeout(function (){
                $("#fridge7").toggle();
                setTimeout(function (){
                    $("#fridge8").toggle();
                    enableScroll();
                    setTimeout(function (){
                        $("#eggCrack").toggle();
                        $('#eggTriggerContainment').toggle();
                      }, 1000); 
                  }, 1000); 
              }, 1000); 
          }, 1000); 
    }
  });

firstTimeCracked = true;

$( function() {
    var eggTriggerPosition = $( '#eggPullTrigger' ).css("left");
    $('#eggPullTrigger').draggable({ 
        axis: 'x' , 
        containment: '#eggTriggerContainment', 
        grid: [ 50, 50 ],
        start: function() {
            eggTriggerPosition = $( '#eggPullTrigger' ).css("left");
          },
          drag: function() {
            eggTriggerPosition = $( '#eggPullTrigger' ).css("left");
            updateBasedOnEggPullTrigger(eggTriggerPosition);
                      },
          stop: function() {
            eggTriggerPosition = $( '#eggPullTrigger' ).css("left");
            updateBasedOnEggPullTrigger(eggTriggerPosition);
          }});
  } );


function updateBasedOnEggPullTrigger(newPos) {
    console.log(" New: " + newPos);
    var name = "";
    if(newPos == "0px") {
      name = "Panel9/Egg.jpg";
    }
    else if (newPos == "50px")
    {
        name = "Panel9/Egg2.jpg";
    }
    else if (newPos == "100px")
    {
        name = "Panel9/Egg3.jpg";
    }
    else if (newPos == "150px")
    {
        name = "Panel9/Egg4.jpg";
    }
    else if (newPos == "200px")
    {
        name = "Panel9/Egg5.jpg";
        if(firstTimeCracked) {
            firstTimeCracked = false;
            firstTimeEgg = false;
            setTimeout(function (){
                $("#eggCooking1").toggle();
                enableScroll();
                setTimeout(function (){
                    $("#eggCooking2").toggle();
                    setTimeout(function (){
                        $("#eggCooking3").toggle();
                      }, 1000); 
                  }, 1000); 
              }, 1000); 
            }
    }
    $('#crackingEgg').attr("src",name);
};


$( function() {
    var panTriggerPosition = $( '#panPullTrigger' ).css("left");
    $('#panPullTrigger').draggable({ 
        axis: 'x' , 
        containment: '#panTriggerContainment', 
        grid: [ 60, 60 ],
        start: function() {
            panTriggerPosition = $( '#panPullTrigger' ).css("left");
          },
          drag: function() {
            panTriggerPosition = $( '#panPullTrigger' ).css("left");
            updateBasedOnPanPullTrigger(panTriggerPosition);
                      },
          stop: function() {
            panTriggerPosition = $( '#panPullTrigger' ).css("left");
            updateBasedOnPanPullTrigger(panTriggerPosition);
          }});
  } );


function updateBasedOnPanPullTrigger(newPos) {
    console.log(" New: " + newPos);
    var name = "";
    if(newPos == "0px") {
      name = "Panel11/Pan1.jpg";
    }
    else if (newPos == "60px")
    {
        name = "Panel11/Pan2.jpg";
    }
    else if (newPos == "120px")
    {
        name = "Panel11/Pan3.jpg";
    }
    else if (newPos == "180px")
    {
        name = "Panel11/Pan4.jpg";
    }
    $('#movingPan').attr("src",name);
};

$( function() {
    $( "#windowStack div" ).draggable({ stack: "#windowStack div"});
}) ;

firstTimeHeya = true;

$( function() {
    $( "#heyYou" ).draggable({ start: function() {
        console.log("HI");
        if(firstTimeHeya)
        {
            firstTimeScreen = false;
            firstTimeHeya = false;
            enableScroll();
            setTimeout(function (){
                $("#end1").toggle();
                setTimeout(function (){
                    $("#end2").toggle();
                    setTimeout(function (){
                        $("#end3").toggle();
                      }, 1000); 
                  }, 1000); 
              }, 1000); 
        }
        
    }});
}) ;



  //$("#closetDiv").click(function() {
 //   $('img',this).toggle();
//});​








