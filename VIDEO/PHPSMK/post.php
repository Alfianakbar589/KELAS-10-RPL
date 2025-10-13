<form action="nav.php" method="post">
    email :
    <input type="email" name="email">
    pasword :
    <input type="password" name="password">
    <input type="submit" name="kirim" value="login">
</form>

<?php 

    if (isset($_POST['kirim'])) {

        $email = $_POST['kirim'];
        $password = $_POST['password'];

        echo $email;
        echo '<br>';
        echo $password;
    }

?>