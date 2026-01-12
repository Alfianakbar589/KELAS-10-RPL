<?php 

session_start();



    if (isset($_SESSION['email'])) {
        echo $_SESSION['email']; 
        echo "logout".'<a href="logout.php">logut</a>';

    }else {
        echo "register" . '<a href="index.php"></a>' . ' <br>';
        echo "login" . '<a href="login.php"></a>' .' <br>';

    }
?>
