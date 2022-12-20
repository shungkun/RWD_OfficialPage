jQuery(function($) {
    
	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});
	
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-collapse li a').bind('click', function(event) {
			var $anchor = $(this);
			var nav = $($anchor.attr('href'));
			if (nav.length) {
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			
			event.preventDefault();
			}
		});
						
	});	
	
	//Initiat WOW JS
	new WOW().init();
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});
        
    //Google Map
    var get_latitude = $('#google-map').data('latitude');
    var get_longitude = $('#google-map').data('longitude');

    function initialize_google_map() {
        var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize_google_map);
	
});

function ShowValue() {
    var map_destination = "%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%A4%A7%E9%87%8C%E5%8D%80%E7%AB%8B%E6%96%B0%E4%BA%8C%E8%A1%9789%E8%99%9F";  //公司地址之URL代碼
    var map_origin = document.getElementById("Tx_map_roigin").value;    //取得客戶輸入的出發地址
    if (map_origin == "") { //判斷是否輸入地址為空
        alert("Error! Please enter your address."); //錯誤！請輸入地址！
        return;
    }
    map_origin = encodeURIComponent(map_origin);
    var planning = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyAjnLiwMrvcaS_8B3B95G6S7QYVuGzUOyw&origin=" + map_origin + "&destination=%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%A4%A7%E9%87%8C%E5%8D%80%E7%AB%8B%E6%96%B0%E4%BA%8C%E8%A1%9789%E8%99%9F";   //暫存地圖渲染程式
    if (document.getElementById("CB_highways").checked) planning += "&avoid=highways";  //判斷是否為自行開車
    document.getElementById("Map").src = planning;  //進行google map的導航圖形渲染

    $("#qrcode").attr("src", "http://chart.apis.google.com/chart?cht=qr&chl=" + "https://www.google.com.tw/maps/dir/" + map_origin + "/%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%A4%A7%E9%87%8C%E5%8D%80%E7%AB%8B%E6%96%B0%E4%BA%8C%E8%A1%9789%E8%99%9F" + "&chs=200x200");
}