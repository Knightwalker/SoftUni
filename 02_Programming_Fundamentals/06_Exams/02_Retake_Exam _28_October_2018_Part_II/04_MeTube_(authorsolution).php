<?php

$input = null;
$videoStats = [];
$viewStats = [];
while(($input=readline())!= 'stats time'){
    $tokens = explode('-',$input);
    if(count($tokens)==1){
        $tokens = explode(':',$input);

        if($tokens[0] == 'like'){
if(array_key_exists($tokens[1],$viewStats)){
    $viewStats[$tokens[1]]+=1;
}
        }else if($tokens[0] == 'dislike'){
            if(array_key_exists($tokens[1],$viewStats)){
                $viewStats[$tokens[1]]-=1;
            }
        }

    }else {
        $videoName = $tokens[0];
        $views = intval($tokens[1]);
        if(!array_key_exists($videoName,$videoStats)){
            $videoStats[$videoName] = 0;
            $viewStats[$videoName] = 0;
        }
        $videoStats[$videoName] += $views;
    }


}
$order = readline();
if($order == 'by likes'){
arsort($viewStats);
    foreach ($viewStats as $key=>$value){
        echo "$key - $videoStats[$key] views - {$viewStats[$key]} likes" . PHP_EOL;


    }
}
else if($order =='by views'){
    arsort($videoStats);
    foreach ($videoStats as $key=>$value){
        echo "$key - $value views - {$viewStats[$key]} likes" . PHP_EOL;


    }
}