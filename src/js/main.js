var $header = $("header");
var $mobileButton = $(".navbar-toggler");
var $clientText = $(".client-text");
var $clientWrapper = $clientText.find(".client-text-wrapper");
var $clientTrigger = $clientText.find(".client-text-trigger");
var $clientSlider = $(".client-image-slider");
var activeClient = 0;

$mobileButton.click(navbarAnimation);
$clientTrigger.click(clientAnimation);

function clientAnimation() {
	let margin = $clientTrigger.index($(this));
	activeClient = margin;
	$clientSlider.children().removeClass("client-image-overlay-red").removeClass("client-image-overlay-grey").removeClass("client-image-scale");
	$clientSlider.children().eq(margin).addClass("client-image-scale");
	$clientSlider.children().eq((margin + 1) % 3).addClass("client-image-overlay-red");
	$clientSlider.children().eq((margin + 2) % 3).addClass("client-image-overlay-grey");
	$clientTrigger.removeClass("trigger-active");
	$(this).addClass("trigger-active");
	$clientWrapper.animate({"margin-left" : "-480" * margin}, 400);
}


function navbarAnimation(){
	$mobileButton.off();
	$header.toggleClass("mobile-nav").delay(260).promise().then(function(){
		$mobileButton.click(navbarAnimation);
	});
}

