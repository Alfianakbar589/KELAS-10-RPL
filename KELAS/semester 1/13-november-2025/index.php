<form action="" method="post">
     <label for="nis">Nis :</label>
    <input type="number" name="nis" id="nis" required placeholder="masukkan nis"><br>
     <label for="nama">Nama :</label>
    <input type="text" name="nama" id="nama" required placeholder="masukkan nama"><br>
     <label for="alamat">Alamat :</label>
    <input type="text" name="alamat" id="alamat" placeholder="masukkan alamat"><br>
     <label for="telpon">Telpon :</label>
    <input type="text" name="telpon" id="telpon" placeholder="masukkan telpon"><br>
     
    <input type="submit" name="simpan" value="simpan"><br>
</form>



    

<?php 

    $db='dbsekolah';
    $host='localhost';
    $user='root';
    $password='';

    $koneksi = mysqli_connect($host, $user, $password, $db);

    if (isset($_POST['simpan'])) {
        $nis = $_POST['nis'];
        $nama = $_POST['nama'];
        $alamat = $_POST['alamat'];
        $telpon = $_POST['telpon'];

        // echo $nis, "-", $nama, "-", $alamat, "-", $telpon;

        $sql = "INSERT INTO tblsiswa (nis, nama, alamat, telpon) VALUES ($nis, '$nama', '$alamat', '$telpon')"; 
        echo $sql;
        $query = mysqli_query($koneksi, $sql);
    }
        $sql = "SELECT * FROM tblsiswa";
        $query = mysqli_query($koneksi, $sql);
        

        ?>


        <table border="1px">
        <thead>
            <tr>
                <th>NIS</th>
                <th>NAMA</th>
                <th>ALAMAT</th>
                <th>TELPON</th>
            </tr>
        </thead>
        <tbody>

     <?php  
         while ($siswa = mysqli_fetch_array($query)){
    ?>
        <tr>
            <td><?= $siswa['nis']?></td>
            <td><?= $siswa['nama']?></td>
            <td><?= $siswa['alamat']?></td>
            <td><?= $siswa['telpon']?></td>

        </tr>

            <?php 
            // echo $siswa['nis']," - ",$siswa['nama']," - ",$siswa['alamat']," - ",$siswa['telpon'];
         }
             ?>
</tbody>
</table>
