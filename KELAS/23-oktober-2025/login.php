<h1>login</h1>

<form action="" method="post">
    Email:
    <input type="email" name="email" placeholder="email">
    <br>
    Password:
    <input type="password" name="password" placeholder="password">
    <br>
    <input type="submit" name="login" value="login">
</form>
<?php 
    if (isset($_POST['login'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        if ($email == 'fian@gmail.com' && $password == '12345') {
            session_start();
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            header("location:index.php");
        } else {
            echo "email atau password tidak valid";
        }
    }
?>