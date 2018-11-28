<?php
$content = file_get_contents('http://baza.taniec.pl/frame.php?nr=4258');
$content = str_replace('<head>','<head><link rel="stylesheet" href="http://ottt.pwr.edu.pl/layout/styles/layout_ptt.css">', $content);
$content = str_replace('<!-- Bootstrap core CSS -->','<!-- Bootstrap core CSS --> <link rel="stylesheet" href="http://baza.taniec.pl/strony_turniejow/bts/bootstrap.css?t=1461943080">', $content);
$content = str_replace('href="?','href="http://baza.taniec.pl/frame.php?', $content);
$content = str_replace('href="pliki','href="http://baza.taniec.pl/pliki', $content);

echo $content;
    // Code will end here ?>