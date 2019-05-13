<?php
$submissions = [];
$results = [];

while (1) {
    $input = explode('-', readline());

    if ('exam finished' === $input[0]) {
        break;
    }

    if ('banned' === $input[1]) {
        unset($results[$input[0]]);
        continue;
    }
    $username = $input[0];
    $technology = $input[1];
    $score = $input[2];

    if (!key_exists($username, $results)) {
        $results[$username] = $score;
    } else {
        if ($score > $results[$username]) {
            $results[$username] = $score;
        }
    }

    if (!key_exists($technology, $submissions)) {
        $submissions[$technology] = 1;
    } else {
        $submissions[$technology]++;
    }


}
uksort($results,function ($key1, $key2) use ($results){
    $score1 = $results[$key1];
    $score2 = $results[$key2];
    if ($score1 === $score2){
        return $key1<=>$key2;
    }
    return $score2 <=> $score1;
});

uksort($submissions,function ($key1, $key2) use ($submissions){
    $score1 = $submissions[$key1];
    $score2 = $submissions[$key2];
    if ($score1 === $score2){
        return $key1<=>$key2;
    }
    return $score2 <=> $score1;
});

echo 'Results:' . PHP_EOL;
foreach ($results as $key => $value) {
    echo "$key | $value\n";
}

echo 'Submissions:' . PHP_EOL;
foreach ($submissions as $key => $value) {
    echo "$key - $value\n";
}