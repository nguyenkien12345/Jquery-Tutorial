<?php
	include("connection.php");
	/*============================
	* Dua du lieu trong bang Cities vao mot mang
	*==============================*/
	
	$citySQL = "SELECT * 
				FROM `cities` 
				WHERE `status` = 1 
				ORDER BY `order` ASC, `name` ASC";
	$cityResult = mysqli_query($citySQL,$link);
	
	while($row = mysqli_fetch_assoc($cityResult)){
		
		$cityArr[] = array('id' => $row['id'], 'name'=>$row['name']);
	}
	
	
	/*============================
	* Dua du lieu trong bang District vao mot mang
	*==============================*/
	
	$districtSQL = "SELECT * 
				FROM `districts` 
				WHERE `status` = 1 
				ORDER BY `order` ASC, `name` ASC";
	$districtResult = mysqli_query($districtSQL,$link);
	
	while($row = mysqli_fetch_assoc($districtResult)){		
		$districtArr[$row['cityid']][] = array('id' => $row['id'], 'name'=>$row['name']);
	}
	
	
	/*============================
	* Dua du lieu trong bang Ward vao mot mang
	*==============================*/
	
	$wardSQL = "SELECT * 
				FROM `ward` 
				WHERE `status` = 1 
				ORDER BY `order` ASC, `name` ASC";
	$wardResult = mysqli_query($wardSQL,$link);
	
	while($row = mysqli_fetch_assoc($wardResult)){		
		$wardArr[$row['districtid']][] = array('id' => $row['id'], 'name'=>$row['name']);
	}
	
	$data = array();
	$data['cities']		= $cityArr;
	$data['district'] 	= $districtArr;
	$data['ward'] 		= $wardArr;
	echo json_encode($data);
?>