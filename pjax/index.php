<?php
$act = empty($_GET['act']) ? 'home' : $_GET['act'];
$rnd = rand(12345,98765);
if(isset($_SERVER['HTTP_X_PJAX'])){
	include("./$act.htm"); 
	die();
}
?>
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<title><?=$act?> - pjax</title>
<script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<style>
pre { float: left; }
#main{ width:450px; float:left; margin:30px 0 0 -120px; padding:10px; border:1px solid #CCC; }
ul li{ display:inline-block; float:left; padding:5px 10px; }
h1{ margin:0px 0px 10px 0px; }
</style>
</head>
<body>

<nav style="width:720px;">
<ul style="float:right">
    <li><a href="?act=home">home</a></li>
    <li><a href="?act=dgwap">dgwap</a></li>
    <li><a href="?act=aliens">3个怪物</a></li>
</ul>
</nav>

<pre>

               ／￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
               |　<b>It's <?=date("H:i:s A ").$rnd;?></b>
               ＼＿　 ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
        .--.     (  )
       /    \   ( )
      ## a  a  .
      (   '._)
       |'-- |
     _.\___/_   ___<label><input type="checkbox" name="pjax" checked />pjax</label>___
   ."\> \Y/|<'.  '._.-'
  /  \ \_\/ /  '-' /
  | --'\_/|/ |   _/
  |___.-' |  |`'`
    |     |  |
    |    / './
   /__./` | |
      \   | |
       \  | |
       ;  | |
       /  | |
 jgs  |___\_.\_
      `-"--'---'

">
<a href="https://github.com/defunkt/jquery-pjax" target='_blank'>github.com/defunkt/jquery-pjax</a>
<a href="https://pjax.herokuapp.com/" target='_blank'>https://pjax.herokuapp.com/</a>
</pre>

<div id="main">
<?php include("./$act.htm"); ?>
</div>

<script src="pages.js"></script>
<script src="pjax.js"></script>
<script>
$(function(){
  $(document).pjax('ul a', '#main')
})
</script>
</body>
</html>
