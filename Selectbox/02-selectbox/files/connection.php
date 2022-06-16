<?php
	$link = mysqli_connect("localhost","root","","db1656");
	if(!$link){
		echo "Could not connect to mysql";
		exit;
	}
	
	if(!mysqli_select_db("db1656",$link)){
		echo "Could not select database";
		exit;	
	}
?>