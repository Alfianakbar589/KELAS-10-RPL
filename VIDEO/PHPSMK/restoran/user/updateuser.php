<?php 
    if (isset($_GET["id"])) {
        $id = $_GET["id"];

        $sql = "SELECT * FROM tbluser WHERE iduser = $id";
        $row = $db->getITEM($sql);
    }
?>

<h3>update user</h3>

<div class="mb-3">

    <form action="" method="post">
        <div class="mb-3 w-50">
            <label for="" class="form-label">nama:</label>
            <input type="text" name="user" required value="<?php echo $row['user']; ?>" class="form-control">

        </div>

        <div class="mb-3 w-50">
            <label for="" class="form-label">email:</label>
            <input type="email" name="email" required value="<?php echo $row['email']; ?>" class="form-control">

        </div>

        <div class="mb-3 w-50">
            <label for="" class="form-label">password:</label>
            <input type="password" name="password" required value="<?php echo $row['password']; ?>" class="form-control">

        </div>

        <div class="mb-3 w-50">
            <label for="" class="form-label">konfirmasi password:</label>
            <input type="password" name="konfirmasi" required value="<?php echo $row['password']; ?>" class="form-control">
            
        </div>

        <div class="mb-3 w-50">

            <label for="" class="form-label">level:</label><br>
            <select name="level" id="">
                <option value="admin" <?php if ($row["level"] === "admin") echo "selected" ?>>admin</option>
                <option value="koki" <?php if ($row["level"] === "koki") echo "selected" ?>>koki</option>
                <option value="kasir" <?php if ($row["level"] === "kasir") echo "selected" ?>>kasir</option>
            </select>

        </div>

        <div>
            <input type="submit" name="simpan" value="Simpan" class="btn btn-primary">
        </div>

    </form>
</div>

<?php 

    if (isset($_POST["simpan"])) {
        $user = $_POST["user"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $konfirmasi = $_POST["konfirmasi"];
        $level = $_POST["level"];


        if ($password === $konfirmasi) {
            $sql = "UPDATE tbluser SET user = '$user', email = '$email', password = '$password', level = '$level' WHERE iduser = $id";
            $db->runSQL($sql);

            header("location:?f=user&m=select");

        } else {
            echo "<h3>password tidak sama dengan konfirmasiI</h3>";
        }
    }

?>