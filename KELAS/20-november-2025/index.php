<?php 
    session_start();
?>

<form action="" method="post">
    Email :<input type="text" name="email" require placeholder="masukkan email" ><br>
    Password :<input type="password" name="password" require placeholder="masukkan password"><br>
    <input type="submit" name="login" value="login">
</form>


<?php 
    

    if (isset($_POST['login'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        $_SESSION['email'] = $email;
        
        
        echo "email = " . $email . '<br>';
        echo "password = " . $password . '<br>';
        echo "login = " . $login . '<br>';
    }

    $isi= "hello word";
    $hasil = isset($isi);
    echo $hasil;
    
    if (isset($isi)) {
        echo "ada isi";
    } else {
        echo "no isi";
    }

    var_dump($isi);

?>