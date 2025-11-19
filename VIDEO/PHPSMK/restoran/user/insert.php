<h3>Insert User</h3>

<div class="mb-3">

    <form action="" method="post">
        <div class="mb-3 w-50">
            <label for="" class="form-label">nama:</label>
            <input type="text" name="user" required placeholder="Nama" class="form-control">

        </div>

        <div class="mb-3 w-50">
            <label for="" class="form-label">email:</label>
            <input type="email" name="email" required placeholder="Email" class="form-control">

        </div>

        <div class="mb-3 w-50">
            <label for="" class="form-label">password:</label>
            <input type="password" name="password" required placeholder="Password" class="form-control">

        </div>

        <div class="mb-3 w-50">
            <label for="" class="form-label">konfirmasi password:</label>
            <input type="password" name="konfirmasi" required placeholder="Password" class="form-control">

        </div>

        <div class="mb-3 w-50">
            <label for="" class="form-label">level:</label><br>
            <select name="level" id="">
                <option value="admin">admin</option>
                <option value="koki">koki</option>
                <option value="kasir">kasir</option>
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
        $password = hash('sha256', $_POST["password"]);
        $konfirmasi = hash('sha256', $_POST["konfirmasi"]);
        $level = $_POST["level"];

        if ($password === $konfirmasi) {
            $sql = "INSERT INTO tbluser VALUES ('', '$user', '$email', '$password', '$level', 1)";
            $db->runSQL($sql);


            header("location:?f=user&m=select");

        } else {
            echo "<h3>password tidak sama dengan konfirmasi</h3>";
        }
    }
?>