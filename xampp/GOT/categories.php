<div id="category_container">

	<div id="category1_head" class="category_head">Developement</div>
	<div id="category1_body">

		<div id="category1_newpost"><div id="category1_posticon"></div></div>

		<div id="category1_regulations" class="container_category">
			<div id="regulations_icon" class="category_icon"></div>
			<div class="category_description">
				<h1>Regulations &amp; Guidelines</h1>
				<p>Welcome to the ASOIAF community board. Come here and learn the general rules of the forums, because it is important to understand what is allowed to do in here, so that you don't get punished.</p>
			</div>
		</div>

		<div id="category1_lore" class="container_category">
			<div id="lore_icon" class="category_icon"></div>
			<div class="category_description">
				<h1>Lore &amp; Wiki</h1>
				<p>Here you can trace the epic storyline of the game and can also find the general wiki with detailed system explanation, guide and other references.</p>
			</div>
		</div>

		<div id="category1_stats_topics"><div id="category_stats_topic">Topics</div></div>
		<div id="category1_stats_replies"><div id="category_stats_replies">Replies</div></div>
		<div id="category1_stats_lastposter"><div id="category_stats_lastposter">Lastposter</div></div>

	</div>	

	<?php

	//1. Display all categories
	$res_categories = get_all_categories($conn);
	if (mysqli_num_rows($res_categories) > 0) {
		while ($array_categories = mysqli_fetch_assoc($res_categories)) {
			$category_id = $array_categories["category_id"];
			$category_position = $array_categories["category_position"];
			$category_title = $array_categories["category_title"];	

			echo "<div id='category_{$category_id}_head' class='category_head'>{$category_title}</div>";
			echo "<div id='category_{$category_id}_body'>";

			//2. Display related categories_classic
			$res_categories_classic = get_related_categories_classic($conn, $category_id);
			while ($array_categories_classic = mysqli_fetch_assoc($res_categories_classic))	{
				echo "<div id='category_classic_row_{$array_categories_classic['category_classic_id']}'>";

				//5. Perform database query for forums
				$sql_forums = "SELECT * FROM forums WHERE forum_category_classic_id = {$array_categories_classic["category_classic_id"]} ORDER BY forum_position ASC";
				$res_forums = mysqli_query($conn, $sql_forums);
				//6. Display returned data from forums

				if (mysqli_num_rows($res_forums) >= 1) {
					while ($array_forums = mysqli_fetch_assoc($res_forums)) { 

						//FIX. Display topic number
						$sql_topic = "SELECT count(*) FROM topics WHERE topic_forum_id = {$array_forums["forum_id"]}";
               			$res_topic = mysqli_query($conn, $sql_topic);
						$row = mysqli_fetch_row($res_topic);
						$topics_count = $row[0];

						echo "<div id='forum_{$array_forums["forum_id"]}' class='forum_classic'>";
							echo "<div id='forum_classic_status'></div>";							
							echo "<div id='forum_classic_container'>";
								echo "<div id='forum_classic_icon'></div>";
								echo "<div id='forum_classic_description'>";
										echo "<a href=forum.php?forum=" . urlencode($array_forums["forum_id"]) . ">";
											echo "<h1>{$array_forums["forum_title"]}</h1>";
										echo "</a>";
									echo "<p>{$array_forums["forum_description"]}</p>";
								echo "</div>";
							echo "</div>";
							echo "<div id='forum_classic_topics'>{$topics_count}Topics</div>";
							echo "<div id='forum_classic_replies'>Replies</div>";
							echo "<div id='forum_classic_lastposter'>Lastposter</div>";
						echo "</div>";
					}
				}

				echo "</div>" /* END div category_classic */;
			}

			//3. Perform database query for categories_modern
			$sql_categories_modern = "SELECT * FROM categories_modern WHERE category_modern_category_id = {$category_id} ORDER BY category_modern_position ASC";
			$res_categories_modern = mysqli_query($conn, $sql_categories_modern);
			//4. Display returned data from categories_modern

			while ($array_categories_modern = mysqli_fetch_assoc($res_categories_modern)) {
				$category_modern_id = $array_categories_modern['category_modern_id'];
				$category_modern_category_id = $array_categories_modern['category_modern_category_id'];
				$category_modern_position = $array_categories_modern['category_modern_position'];

				echo "<div id='category_modern_row_{$category_modern_id}' class='category_modern_row'>";

				//5. Perform database query for forums
				$sql_forums_modern = "SELECT * FROM forums WHERE forum_category_modern_id = {$category_modern_id} ORDER BY forum_position ASC";
				$res_forums_modern = mysqli_query($conn, $sql_forums_modern);
				//6. Display returned data from forums

				if (mysqli_num_rows($res_forums_modern) >= 1) {
					while ($array_forums = mysqli_fetch_assoc($res_forums_modern)) {
						echo "<div id='forum_modern_{$array_forums["forum_id"]}' class='forum_modern'>";
							echo "<div id='forum_modern_status'></div>";							
							echo "<div id='forum_modern_container'>";
								echo "<div id='forum_modern_icon'></div>";
								echo "<div id='forum_modern_description'>";
									echo "<a href=forum.php?forum=" . urlencode($array_forums["forum_id"]) . ">";
										echo "<h1>{$array_forums["forum_title"]}</h1>";
									echo "</a>";
									echo "<p>{$array_forums["forum_description"]}</p>";
								echo "</div>";
								echo "<div id='forum_modern_statistics'>";	
									echo "<div id='forum_modern_topics'>Topics</div>";
									echo "<div id='forum_modern_line'>|</div>";
									echo "<div id='forum_modern_replies'>Replies</div>";
									echo "<div id='forum_modern_line'>|</div>";
									echo "<div id='forum_modern_lastposter'>Lastposter</div>";
								echo "</div>";	
							echo "</div>";
						echo "</div>";
					}
				}

				echo "</div>" /* END div category_modern */;
			}

			echo "</div>" /* END div category_body */;
		}
	}

	?>


</div> <!-- END category_container -->
		





