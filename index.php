﻿<?php
session_start();
setcookie('href',"",time()-3600);


?>
<html>
<head class="head" id="head">
	<script type="text/javascript">var user = {name:null,level:null};</script>
	<?php 
function isLogin()
{
	return $_SESSION['account'] != null;
}
if(isLogin())
{  
     // include("php/mysql_connect.inc.php");
	  $id = $_SESSION['account'];
	 
        //若以下$id直接用$_SESSION['account']將無法使用
       /* $sql = "SELECT * FROM Member_Table where account='$id'";
        $result = mysql_query($sql);
        $row = mysql_fetch_row($result);*/
        echo "<script type='text/javascript'>";
		echo "user.name = '".$id ."';";
	    echo "user.level =999;";
		echo "</script>";
}
	?>
    <title>NawaNawa's Web</title>
	<script src='js/jquery-3.1.0.js'></script>
	<script src='js/JSLoader.js'></script>
<script>
<?php   
		$ImageLoadPath='Images/Busy Normal';
		$ImgArr=scandir($ImageLoadPath);
		echo "var ImageLoadingPath='" . $ImageLoadPath . "';\n";
        echo "var loadingImgList=[";
		foreach ($ImgArr as $key => $Img)
		{
			if($key>1  )
			{
			echo "'";
			echo $Img ;
			echo "'";
			if((count($ImgArr)-1)!=$key)echo ",";
			}
			
		}
		echo "];";
?>
</script>
	<style type="text/css">
        <!--
        @import url(css/drop-down-menu.css);
        @import url(css/structure.css);
		@import url(css/background.css);
		@import url(css/font.css);
        @import url(css/picturebox.css);
		@import url(css/style.css);
		@import url(css/lyrics.css);
		@import url(css/SSHH.css);
		@import url(css/LoadAnimation.css);
		@import url(css/PACE.css);
		@import url(code-prettify-master/styles/desert.css);
		@import url(css/input.css);
        -->
    </style>
    <link rel="Shortcut Icon" typeof="image/x-icon" href="Images/NawaNawa.ico">
</head>
<body onload="">
    <div class='container desktop'>
	<div class="icon" data-src="pages/index.content" data-icon="https://cdn0.iconfinder.com/data/icons/little-lori/24/Home-512.png">index</div>
            <div class="icon" data-src="http://www.cc.ntut.edu.tw/~jykuo/" data-target="iframe" data-icon="https://cdn1.iconfinder.com/data/icons/occupations-3/100/21-512.png"  >郭老網頁</div>
            <?php 
			if(isLogin())
			{
				echo '<div class="icon" data-src="php/edit.php"  data-icon="http://www.freeiconspng.com/uploads/edit-icon-png-24.png">Editor</div>';
				echo '<div class="icon" data-src="php/logout.php"  data-icon="https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-8/24/018_320_door_exit_logout-128.png">Logout</div>';		
			}
			else
			{
				echo '<div class="icon" data-src="php/login.php"  data-icon="https://cdn0.iconfinder.com/data/icons/flat-security-icons/512/lock-open-blue.png">Login</div>';			
}
			?>
			
            <div class="icon" data-src="http://twtraffic.tra.gov.tw/twrail/TW_QuickSearch.aspx" data-icon="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/ROC_Taiwan_Railways_Administration_Logo.svg/1200px-ROC_Taiwan_Railways_Administration_Logo.svg.png" data-target="iframe">台鐵</div>
            <div class="icon" data-src="http://www.cwb.gov.tw/V7/index.htm" data-icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ROC_Central_Weather_Bureau.svg/200px-ROC_Central_Weather_Bureau.svg.png" data-target="iframe">中央氣象局</div>
            <div class="icon" data-src="pages/cmd.html" data-icon="https://cdn0.iconfinder.com/data/icons/cosmo-multimedia/40/terminal-512.png" data-target="fullAeroAjax">JS cmd</div>
			<div class="icon" data-src="pages/colorSet.html" data-icon="http://icons.iconarchive.com/icons/sora-meliae/matrilineare/1024/Apps-preferences-color-icon.png" data-target="fullAeroJQLoad">Window Color Setting</div>
 
       </div>
		<div class="workbar" ></div>
        <footer class='footer' id="footer">
        Designed by NawaNawa in 2016 <a id = 'times'></a>
<script type='text/javascript'>


$.get('php/times.php',function(data,status){ $('#times').text('瀏覽人數 : ' + data + '人') ; });

</script>
         
	   </footer>
    </div>
</body>
</html>
