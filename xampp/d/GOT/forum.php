<?php
    include_once 'header.php';

    $forum_id = $_GET['forum'];
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

    	<div id="forum_container">
            <?php
                //1. Perform database query for topics
                $sql_topic = "SELECT * FROM topics WHERE topic_forum_id = {$forum_id}";
                $res_topic = mysqli_query($conn, $sql_topic);
                //2. Display returned data from topics
                if (mysqli_num_rows($res_topic) >= 1) {
                    $array_topic = mysqli_fetch_assoc($res_topic);
                    echo "<div id='topic_{$array_topic["topic_id"]}'>{$array_topic["topic_title"]}";
                    echo "</div>";
                } else {
                    echo "<a href='community.php'>Return To Forum Index</a>";
                    echo "<p>There are no topics in this forum yet.</p>";
                }
            ?>
        </div>

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
    
#forum_container {
    background-color: #1b1b1b;
    color: #9d9a8c;
}

</style>