<?php
    include_once 'header.php';
?>



<?php
if (isset($_SESSION['u_id'])) {
echo $_SESSION['u_username'];
}
?>

</body>
</html>