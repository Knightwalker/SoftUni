<?php include("header.php"); ?>

<body>
	<header id="header-grid">
		<div id="logo">
			<p class="inline-block-child">Software</p>
			<div id="logo-parent" class="inline-block-child">
				<p id="logo-child">|0101|</p>
				<p>|1010|</p>
			</div>
			<p class="inline-block-child">Highschool</p>
		</div>
		<span id="menu_trigger">
			<span class="m_line"></span>
			<span class="m_line"></span>
			<span class="m_line"></span>
		</span>
		<div id="menu">menu</div>
	</header>

	<div id="slider">
		<section id="slider-wrapper">
	  		<h1>Online programming courses in</h1>
	  		<p>HTML, CSS, JavaScript, PHP and more.</p>	
		</section>	
		<div id="slider-pointer">Choose a path</div>
	</div>

	<div id="chooseyourpath-grid">
		<div id="chooseyourpath_php">PHP</div>
		<div id="chooseyourpath_javascript">JavaScript</div>
		<div id="choosed_path">PHP</div>
	</div>

	<div id="php_courses_grid">
		<div id="line_start" class="line_vertical"></div>
		<div id="line_mid_v1" class="line_vertical"></div>
		<div id="line_mid_h1" class="line_horizontal"></div>
		<div id="line_left_h1" class="line_horizontal"></div>
		<div id="line_right_h1" class="line_horizontal"></div>
		<div id="line_left_left_h1" class="line_horizontal_halved"></div>
		<div id="line_right_right_h1" class="line_horizontal_halved"></div>
		<div id="line_left_left_v1" class="line_vertical_halved"></div>
		<div id="line_right_right_v1" class="line_vertical_halved"></div>
		<!-- HTML & CSS Fundamentals-->
		<div id="htmlandcss_fundamentals_block" class="courses_block">
			<div id="htmlandcss_fundamentals_img"></div>
			<div class="courses_block_details">
				<p class="courses_block_details_h1">HTML &amp; CSS Fundamentals</p>
				<p class="courses_block_details_p1">Requirements: None</p>
				<p class="courses_block_details_p2">Rewards: Certificate</p>
			</div>
		</div>
		<!-- PHP Fundamentals-->
		<div id="php_fundamentals_block" class="courses_block">
			<div id="htmlandcss_fundamentals_img"></div>
			<div class="courses_block_details">
				<p class="courses_block_details_h1">PHP Fundamentals</p>
				<p class="courses_block_details_p1">Requirements: None</p>
				<p class="courses_block_details_p2">Rewards: Certificate</p>
			</div>
		</div>
	</div>

	<footer></footer>

</body>

	<!-- JavaScript Fonts -->
<script type="text/javascript">
	document.getElementById("menu_trigger").addEventListener("click", MenuTrigger);
	
	var menuTrigger = 0;

	function MenuTrigger() {
		if (menuTrigger == 0) {
			document.getElementById("menu_trigger").id = "menu_trigger_opened";
			menuTrigger = 1;
		} else if (menuTrigger == 1) {
			document.getElementById("menu_trigger_opened").setAttribute("id", "menu_trigger");
			menuTrigger = 0;
		}
	}

	document.getElementById("chooseyourpath_php").addEventListener("click", function() {ChoosedPath('php');});
	document.getElementById("chooseyourpath_javascript").addEventListener("click", function() {ChoosedPath('javascript');});

	function ChoosedPath(param1) {
	var language = param1;
		if (language == "php") {
			document.getElementById("choosed_path").innerHTML = "PHP";
		} else if (language == "javascript") {
			document.getElementById("choosed_path").innerHTML = "JavaScript";
		}
	}

</script>

</html>