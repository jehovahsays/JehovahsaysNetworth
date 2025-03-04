
<?php
	foreach($_POST as $variable => $value) 
	{
		$handle = fopen("HTTP_REFERER", "a");
		fwrite($handle, "\n" . $value . "</br>" . "\r\n");
		fclose($handle);
	}
	
// When visitor edits page they return to page that was edited.
header('Location: ' . $_SERVER['HTTP_REFERER']);
	
?>