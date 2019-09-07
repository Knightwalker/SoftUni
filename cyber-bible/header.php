<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GOVNO</title>
    <link rel="stylesheet" href="./style.css">
    <!-- Google Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">

    <script src="./core/csi.js"></script>

    <script>
        function openHomePage() {
            location.href = "./index.php";
        }
        function openCoursePage() {
            location.href = "./courses.php";
        }
        function openCSharpPage() {
            location.href = "./csharp.php";
        }
        function openSQLPage() {
            location.href = "./mssql.php";
        }
        function openJSPage() {
            location.href = "./js.php";
        }
    </script>
    
</head>

<body>

<div id="navigation">
    <div id="logo">KARTINKA</div>
    <div id="home" onclick="openHomePage()" class="navButton">Home</div>
    <div id="courses" onclick="openCoursePage()" class="navButton">Courses</div>
    <div id="aboutUs" class="navButton">About us</div>
    <div id="login" class="navButton">Log in</div>
</div>