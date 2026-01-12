<?php 

    if (!isset($_SESSION['email'])) {
        header("location:index.php");
    }

?>


<h1>Selamat datang, <?php echo $_SESSION['email'] ?></h1>

