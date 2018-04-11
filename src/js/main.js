var $header = $("header");
var $mobileButton = $(".navbar-toggler");
var $clientText = $(".client-text");
var $clientWrapper = $clientText.find(".client-text-wrapper");
var $clientTrigger = $clientText.find(".client-text-trigger");

var $clientSlider = $(".client-image-slider");
var $clientOverlayRed = $clientSlider.find(".clients-overlay-red");
var $clientOverlayGrey = $clientSlider.find(".clients-overlay-grey");
var activeClient = 0;

$mobileButton.click(navbarAnimation);
$clientTrigger.click(clientAnimation);

function clientAnimation() {
	let margin = $clientTrigger.index($(this));
	activeClient = margin;
	$clientOverlayRed.removeClass("clients-overlay-1 clients-overlay-2 clients-overlay-0");
	$clientOverlayGrey.removeClass("clients-overlay-1 clients-overlay-2 clients-overlay-0")
	$clientOverlayRed.addClass("clients-overlay-" + ( (margin + 1) % 3));
	$clientOverlayGrey.addClass("clients-overlay-" + ( (margin + 2) % 3));
	$clientTrigger.removeClass("trigger-active");
	$(this).addClass("trigger-active");
	$clientWrapper.animate({"margin-left" : "-380" * margin}, 400);
}


function navbarAnimation(){
	$mobileButton.off();
	$header.toggleClass("mobile-nav").delay(260).promise().then(function(){
		$mobileButton.click(navbarAnimation);
	});
}

