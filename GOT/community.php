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
    		include_once 'categories.php';
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

<style type="text/css">

/*Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
	#category1_body {
		display: grid;
		grid-template-columns: 50px 1fr 1fr 50px 50px 140px;
		grid-template-rows: repeat(3, 100px);
		grid-gap: 5px;
	}

	#category1_newpost {grid-column: 1; grid-row: 1;}
	#category1_regulations {grid-column: 2; grid-row: 1;}
	#category1_lore {grid-column: 3; grid-row: 1;}
	#category1_stats_topics {grid-column: 4; grid-row: 1;}
	#category1_stats_replies {grid-column: 5; grid-row: 1;}
	#category1_stats_lastposter {grid-column: 6; grid-row: 1;}

	.container_category {border: 1px solid rgba(255,255,255,.15);}
}

/*Large devices (desktops, 992px and up)*/
@media (min-width: 992px) and (max-width: 1199px) {
	#category1_body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(3, 100px);
		grid-gap: 5px;
	}

	#category1_newpost {display: none;}
	#category1_regulations {grid-column: 1; grid-row: 1;}
	#category1_lore {grid-column: 2; grid-row: 1;}
	#category1_stats_topics {display: none;}
	#category1_stats_replies {display: none;}
	#category1_stats_lastposter {display: none;}

	.container_category {border: 1px solid rgba(255,255,255,.15);}
}

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) and (max-width: 991px) { 
	#category1_body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(3, 100px);
		grid-gap: 5px;
	}

	#category1_newpost {display: none;}
	#category1_regulations {grid-column: 1; grid-row: 1;}
	#category1_lore {grid-column: 2; grid-row: 1;}
	#category1_stats_topics {display: none;}
	#category1_stats_replies {display: none;}
	#category1_stats_lastposter {display: none;}

	.container_category {border-bottom: 1px solid rgba(255,255,255,.15);}
 }

/*Small devices (landscape phones, 576px and up)*/
@media (max-width: 767px) { 
	#category1_body {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(6, 100px);
		grid-gap: 0px;
	}

	#category1_newpost {display: none;}
	#category1_regulations {grid-column: 1; grid-row: 1;}
	#category1_lore {grid-column: 1; grid-row: 2;}
	#category1_stats_topics {display: none;}
	#category1_stats_replies {display: none;}
	#category1_stats_lastposter {display: none;}

	.container_category {border-bottom: 1px solid rgba(255,255,255,.15);}
}

#category1_posticon {background-image: url(images/forum/post_old.png); background-size: contain; height: 100%; background-repeat: no-repeat;}

.container_category {
	display: flex;
	padding: 15px;
	background-color: rgba(255,255,255,.05);
}

.category_icon {
	width: 50px;
	height: 50px;
}

#regulations_icon {background-image: url('images/forum/regulation.png'); background-size: cover;}
#lore_icon {background-image: url('images/forum/lore.png'); background-size: cover;}

.category_description {flex: 1; vertical-align: top; padding-left: 10px;}
.category_description h1 {text-transform: uppercase; color: #ffffff;}



.category_head {
	display: block;
	background-color: #7a177a;
	height: 40px;
    line-height: 40px;
	padding-left: 10px;
    font-family: 'Cinzel', serif;
    font-weight: 700;
    color: #ffffff;
}


#category_container {background-color: #1b1b1b; color: #9d9a8c;}

/* MODERN STYLE */

.category_modern_row {display: flex;}
.forum_modern {flex: 1;}
	#forum_modern_status {width: 50px;}
	#forum_modern_container {flex: 1; display: flex; padding: 15px; background-color: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.15); position: relative;}
	#forum_modern_icon {background-size: contain; width: 50px; height: 50px;}
	#forum_modern_description {flex: 1; vertical-align: top; padding-left: 10px;}
	#forum_modern_description h1 {text-transform: uppercase; color: #ffffff;}

	#forum_modern_statistics {display: flex; position: absolute; bottom: 0; right: 0; color: silver; font-size: 10px; text-align: center; text-transform: uppercase;}
		#forum_modern_topics {flex: 1;}
		#forum_modern_replies {flex: 1;}
		#forum_modern_lastposter {flex: 1;}
		#forum_modern_line {flex: 1; padding-left: 2px; padding-right: 2px;}

/* CLASSIC STYLE */

.forum_classic {display: flex;}
	#forum_classic_status {width: 50px;}
	#forum_classic_container {flex: 1; display: flex; padding: 15px;}
	#forum_classic_icon {background: #242a49; border-radius: 100px; box-shadow: #000 2px 2px 1px; background-size: contain; width: 60px; height: 60px;}
	#forum_classic_description {flex: 1; margin: auto; padding-left: 10px;}
	#forum_classic_description h1 {text-transform: uppercase; color: #ffffff;}

	#forum_classic_topics {
		margin: auto;
		width: 50px;
		color: silver;
	    display: block;
	    font-size: 10px;
	    padding-top: 4px;
	    text-align: center;
	    text-transform: uppercase;
	}

	#forum_classic_replies {
		margin: auto;
		width: 50px;
		color: silver;
	    display: block;
	    font-size: 10px;
	    padding-top: 4px;
	    text-align: center;
	    text-transform: uppercase;
	}

	#forum_classic_lastposter {
		margin: auto;
		width: 140px;
	}
</style>