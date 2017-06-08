

$('.carousel[data-mixed] ul').anoSlide(
{
	items: 5,
	speed: 500,
	prev: 'a.prev[data-prev]',
	next: 'a.next[data-next]',
	lazy: true,
	delay: 100
})


function setSliderContainer() {
	var mq = checkMQ(); //function to check mq value
	if ( mq == 'desktop' ) {
		var	slides = projectsSlider.children('li'), // projectsSlider = $('.cd-slider')
			slideWidth = slides.eq(0).width(),
			marginLeft = Number(projectsSlider.children('li').eq(1).css('margin-left').replace('px', '')),
			sliderWidth = ( slideWidth + marginLeft )*( slides.length ) + 'px',
			slideCurrentIndex = projectsSlider.children('li.current').index(); //index of the first visible slide
		
		projectsSlider.css('width', sliderWidth);
		//if the first visible slide is not the first <li> child, update the projectsSlider translate value
		( slideCurrentIndex != 0 ) && setTranslateValue(projectsSlider, ( slideCurrentIndex * (slideWidth + marginLeft) + 'px'));
	} else {
		//on mobile, reset style
		projectsSlider.css('width', '');
		setTranslateValue(projectsSlider, 0);
	}
	resizing = false;
}
function setTranslateValue(item, translate) {
	item.css({
	    '-moz-transform': 'translateX(-' + translate + ')',
	    '-webkit-transform': 'translateX(-' + translate + ')',
		'-ms-transform': 'translateX(-' + translate + ')',
		'-o-transform': 'translateX(-' + translate + ')',
		'transform': 'translateX(-' + translate + ')',
	});
}
 
var resizing = false;
setSliderContainer();
$(window).on('resize', function(){
	//on resize - update projectsSlider width and translate value
	if( !resizing ) {
		window.requestAnimationFrame(setSliderContainer);
		resizing = true;
	}
});

// LEO SCTIPT

$(document).ready(function(){
    $("#menu").on("click","button", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 3500);
    });
});

//Calculator script

