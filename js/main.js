$('img.delete').click(function(){
  $(this).closest(".cart-items").remove();
  // $('.cart-items').toggleClass('d-none');
});
// $('form label').on("click",function(e) {
//   e.preventDefault();
//   var checkbox = $(this).children("input");
//   $(checkbox[0]).attr('checked', !checkbox.attr('checked'));
// });

// $('input').click(function(event){
//   event.preventDefault();
//   var checkBox = $(this).find(':checkbox');
//   checkBox.prop("checked", !checkBox.prop("checked"));
// })


$('.nav-pills a').on('click', function (e) {
  e.preventDefault();

})

$(document).ready(function() {
  var numitems =  $("ol li").length;
  
  $("ol").css("column-count",Math.round(numitems/21));
  });


  $("ul").on('click','li',function(){
    $("ul li.active").removeClass("active"); 
    $(this).toggleClass("active");  // adding active class
});



$('label input').click(function(){
  if($(this).is(':checked')){
      //uncheck all the other boxes 
      $('label input').prop('checked', false);
      //re-check this one
      $(this).prop('checked', true);
      //show the div
      // $('').show();
      //update the displayed value to that of the checked box
      $('form #move-available span').html( $(this).val() );
  }
  else{
      //clicked box was unchecked, hide the div and clear the displayed number
      // $('#hiddenDiv').hide();
      $('form #move-available span').html('');
  }
});

$('#two label input').click(function(){
  if($(this).is(':checked')){
      //uncheck all the other boxes 
      $('.column label input').prop('checked', false);
      //re-check this one
      $(this).prop('checked', true);
      //show the div
      // $('').show();
      //update the displayed value to that of the checked box
      $('.submit b').html( $(this).val() );
  }

  
  // else{
  //     //clicked box was unchecked, hide the div and clear the displayed number
  //     // $('#hiddenDiv').hide();
  //     $('form button span').html('');
  // }
});

$('#one label input').click(function(){
  if($(this).is(':checked')){
      //uncheck all the other boxes 
      $('.column.two label input').prop('checked', false);
      //re-check this one
      $(this).prop('checked', true);
      //show the div
      // $('').show();
      //update the displayed value to that of the checked box
      $('.submit em').html( $(this).val() );
  }

  
  // else{
  //     //clicked box was unchecked, hide the div and clear the displayed number
  //     // $('#hiddenDiv').hide();
  //     $().html('');
  // }
});

$('.story-slider').slick({
  
  centerMode:true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll:3,
  infinite: true,
  arrows:true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  speed:0,
  cssEase: 'linear',
  

 
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows:true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.harmburger').click(function(){
  $(this).toggleClass('nav-open')
  $('.navbar ul').toggleClass('show');
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 500) { //use `this`, not `document`
      $('.navbar').css({
          'display': 'none'
      });
      $('.navbar ul').removeClass('show');
      $('.harmburger').removeClass('nav-open')
      
  }
  else{
    
    $('.navbar').css({
      'display': 'flex'
  });
  }
});
$(document).ready(function(){
  // to fade in on page load
  $("body").css("display", "none");
  $("body").fadeIn(500); 
  // to fade out before redirect
  $('.navbar a').click(function(e){
      redirect = $(this).attr('href');
      e.preventDefault();
      $('body').fadeOut(500, function(){
          document.location.href = redirect
      });
  });
})



$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('#tabs a').click(function (t) {
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var e = $(this.hash);
      e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length && (t.preventDefault(), $("html, body").animate({
          scrollTop: e.offset().top
      }, 600, function () {
          var t = $(e);
          if (t.focus(), t.is(":focus")) return !1;
          t.attr("tabindex", "-1"), t.focus()
      }))
  }
});

window.onload = function () {
	[].forEach.call(document.querySelectorAll("label input"), function (el) {
		el.addEventListener("click",function () {
			[].forEach.call(document.querySelectorAll("label"), function(label){
				label.style.color = "#fff";
			});

			document.querySelector("label[for='" + this.id + "']").style.color = "black";
		});
	});
}


$('input#three:checkbox,input#threes:checkbox').change(function(){
  if($(this).is(":checked")) {
      $('#move-available input').toggleClass("d-flex");
  } 
});

  $('label').on('click', function (e) {
    // Do whatever you want; the event that'd fire if the "special" element has been clicked on has been cancelled.
    $('#move-available input').removeClass("d-flex");
   });




var currencyInput = document.querySelector('input[type="currency"]')
var currency = 'USD' 

 // format inital value
onBlur({target:currencyInput})

// bind event listeners
currencyInput.addEventListener('focus', onFocus)
currencyInput.addEventListener('blur', onBlur)


function localStringToNumber( s ){
  return Number(String(s).replace(/[^0-9.-]+/g,""))
}

function onFocus(e){
  var value = e.target.value;
  e.target.value = value ? localStringToNumber(value) : ''
}

function onBlur(e){
  var value = e.target.value

  var options = {
      maximumFractionDigits : 2,
      currency              : currency,
      style                 : "currency",
      currencyDisplay       : "symbol"
  }
  
  e.target.value = value 
    ? localStringToNumber(value).toLocaleString(undefined, options)
    : ''
}


