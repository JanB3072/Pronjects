<?php
	header("Content-type","text/html;charset=utf-8");
	$username=$_POST["loginName"];
	$userpass=$_POST["loginPass"];
	// 数据处理
	$con=mysql_connect("localhost","root","root");
	mysql_select_db("biaodan",$con);
	// 执行sql语句
	$phpstr="";
	$sqlstr="select * from bdtable where bdname='".$username."' and bdpass='".$userpass."'";
	$result=mysql_query($sqlstr,$con);
	$rows=mysql_num_rows($result);
	if($rows>0){
		$phpstr='1';
	}else{
		$phpstr='0';

	}
	mysql_close($con);
	echo $phpstr;
?>