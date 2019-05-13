<?php
class Team
{
    private $teamName;
    private $creator;
    private $names = [];
 
    public function __construct($teamName, $creator)
    {
        $this->teamName = $teamName;
        $this->creator = $creator;
    }
 
    public function getNames()
    {
        return $this->names;
    }
 
    public function getTeamName()
    {
        return $this->teamName;
    }
 
    public function getCreator() {
        return $this->creator;
    }
 
    public function addName($name)
    {
        $this->names[] = $name;
    }
 
    public function sortNames()
    {
        sort($this->names);
    }
}
 
$teamCount = intval(readline());
$allTeams = [];
$creatorExists = false;
 
for ($i = 0; $i < $teamCount;$i++){
    list($creator, $teamName) = explode("-", readline());
    $creatorExists = false;
    if (!array_key_exists($teamName, $allTeams)) {
        foreach ($allTeams as $team) {
            if ($team->getCreator() === $creator) {
                $creatorExists = true;
                break;
            }
        }
 
        if ($creatorExists) {
            echo "$creator cannot create another team!" . PHP_EOL;
            continue;
        }
 
        echo "Team $teamName has been created by $creator!" . PHP_EOL;
        $currTeam = new Team($teamName, $creator);
        $allTeams[$teamName] = $currTeam;
    } else {
        echo "Team $teamName was already created!" . PHP_EOL;
    }
}
 
$command = readline();
$nameExists = false;
$repeater = false;
$teamExists = 0;
$teamsToDisband = [];
 
 
while ($command !== "end of assignment") {
    list($name, $addTeamName) = explode("->", $command);
    $nameExists = false;
    $repeater = false;
    $teamExists = 0;
 
    //check if team exists
    foreach ($allTeams as $team) {
        if ($addTeamName !== $team->getTeamName()) {
            $teamExists++;
        }
    }
 
    if ((count($allTeams) - $teamExists) === 0) {
        echo "Team $addTeamName does not exist!" . PHP_EOL;
        $command = readline();
        continue;
    }
    //
 
    //check if creator exists
    foreach ($allTeams as $team) {
        if ($name === $team->getCreator()) {
            $repeater = true;
            break;
        }
    }
 
    if ($repeater) {
        echo "Member $name cannot join team $addTeamName!" . PHP_EOL;
        $command = readline();
        continue;
    }
    //
 
    //check if name is already on a team
    foreach ($allTeams as $team) {
        if (in_array($name, $team->getNames())) {
            $nameExists = true;
            break;
        }
    }
 
    if ($nameExists) {
        echo "Member $name cannot join team $addTeamName!" . PHP_EOL;
        $command = readline();
        continue;
    } else {
        $allTeams[$addTeamName]->addName($name);
    }
    //
 
    $command = readline();
}
 
usort($allTeams, function(Team $team1, Team $team2) use ($allTeams) {
    $countNames1 = count($team1->getNames());
    $countNames2 = count($team2->getNames());
 
    $name1 = $team1->getTeamName();
    $name2 = $team2->getTeamName();
 
    if ($countNames1===$countNames2) {
        return $name1 <=> $name2;
    }
 
    return $countNames2 <=> $countNames1;
});
 
foreach ($allTeams as $team) {
    $currTeam = $team->getNames();
    if (count($team->getNames()) === 0) {
        $teamsToDisband[] = $team->getTeamName();
        continue;
    }
    echo $team->getTeamName().PHP_EOL;
    echo "- {$team->getCreator()}" . PHP_EOL;
    $team->sortNames();
    foreach ($team->getNames() as $teamMembers) {
        echo "-- $teamMembers" . PHP_EOL;
    }
}
echo "Teams to disband:" . PHP_EOL;
foreach ($teamsToDisband as $disbandedTeam) {
    echo $disbandedTeam . PHP_EOL;
}