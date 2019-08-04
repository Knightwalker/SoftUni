<?php
    include_once 'header.php';
?>

<div id="gameofthrones_content" class="container-fluid">
    <div id="asoiaf_frame_top" style="background-image: url(images/frame/frame_glow_top.png);"></div>
    <div id="asoiaf_frame_topleft" style="background-image: url(images/frame/frame_glow_topleft.png);"></div>
    <div id="asoiaf_frame_topright" style="background-image: url(images/frame/frame_glow_topright.png);"></div>
    <div id="asoiaf_frame_left" style="background-image: url(images/frame/content_glow_sides.png);"></div>
    <div id="asoiaf_frame_right" style="background-image: url(images/frame/content_glow_sides.png);"></div>
    <div id="asoiaf_frame_bottom" style="background-image: url(images/frame/frame_glow_bottom.png);"></div>
    <div id="asoiaf_frame_bottomleft" style="background-image: url(images/frame/frame_glow_bottomleft.png);"></div>
    <div id="asoiaf_frame_bottomright" style="background-image: url(images/frame/frame_glow_bottomright.png);"></div>
    <div id="asoiaf_content_top" style="background-image: url(images/content/content_top.png);"></div>
    <div id="asoiaf_content_bottom" style="background-image: url(images/content/content_bot.jpg);"></div>

    <div id="gameofthrones_content_background"></div>
    <div id="gameofthrones_content_main">
    	<?php 
    		include_once 'loginsystem/register.php'; 
    		include_once 'loginsystem/login.php'; 
    	?>  
	</div> <!-- END id gameofthrones_content_main -->

    <div id="gameofthrones_content_left">
     	<?php 
     		include_once 'widgets.php'; 
     	?>
    </div> <!-- END id gameofthrones_content_left -->

</div> <!-- END id gameofthrones_content -->

<?php
    include_once 'footer.php';
?>

<script type="text/javascript">
	
document.getElementById("loginsystem_register_get_login").addEventListener("click", function() {Limbo_Loginsystem('register_get_login');});
document.getElementById("loginsystem_login_get_register").addEventListener("click", function() {Limbo_Loginsystem('login_get_register');});

function Limbo_Loginsystem(param) {
var target = param;

var fade_out_from = 10;
var fade_in_from = 0;

var fadeout = document.getElementById("")
var fadein = document.getElementById("")

if (target == "register_get_login") {
		var fadeout = document.getElementById("gameofthrones_loginsystem_register")
		var fadein = document.getElementById("gameofthrones_loginsystem_login")
} else if (target == "login_get_register") {
		var fadeout = document.getElementById("gameofthrones_loginsystem_login")
		var fadein = document.getElementById("gameofthrones_loginsystem_register")
}

lust_fadeout();

	function lust_fadeout() {
		var newSetting = fade_out_from / 10;
		fadeout.style.opacity = newSetting;
		fade_out_from--;

		if (fade_out_from == 0) {
			fadeout.style.opacity = 0;
			fadeout.style.display = "none";
			clearTimeout(loopTimer);
			fade_out_from = 10;
			lust_fadein();
			return false;
		}

		var loopTimer = setTimeout(lust_fadeout, 50);
	}

	function lust_fadein() {
		var newSetting = fade_in_from / 10;
		fadein.style.display = "block";
		fadein.style.opacity = newSetting;
		fade_in_from++;

		if (fade_in_from == 10) {
			fadein.style.opacity = 1;
			clearTimeout(loopTimer);
			fade_in_from = 0;
			return false;
		}

		var loopTimer = setTimeout(lust_fadein, 50);
	}

} // END FUNCTION Limbo_Loginsystem

</script>