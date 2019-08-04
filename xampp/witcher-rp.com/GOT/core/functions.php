<?php

	//1. Perform database query for categories
	//2. Display returned data from categories
	function get_all_categories($conn) {
		$sql_categories = "SELECT * FROM categories ORDER BY category_position ASC";
		$res_categories = mysqli_query($conn, $sql_categories);
		return $res_categories;	
	}

	//3. Perform database query for categories_classic
	//4. Display returned data from categories_classic
	function get_related_categories_classic($conn, $category_id) {
		$sql_categories_classic = "SELECT * FROM categories_classic WHERE category_classic_category_id = {$category_id} ORDER BY category_classic_position ASC";
		$res_categories_classic = mysqli_query($conn, $sql_categories_classic);
		return $res_categories_classic;
	}

?>