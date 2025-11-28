<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <style>
        body{
            background-color: aqua;
        }
    </style>
</head>
<body>

 <nav class="navbar navbar-expand-lg bg-danger">
 <div class="container-fluid">
     <a class="navbar-brand" href="#">
     </a>
     <div class="collapse navbar-collapse body" id="navbar nav">
         <ul class="navbar-nav">
             <li class="nav-item">
                 <a class="nav-link active" href="?menu=profil">profil</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="?menu=sejarah">sejarah</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="?menu=jurusan">jurusan</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="?menu=prestasi">prestasi</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="?menu=kegiatan">kegiatan</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="?menu=kontak">kontak</a>
             </li>
         </ul>
     </div>
 </div>
 </nav>


    <div>
        <section>


                <?php 
                if (isset($_GET['menu'])) {
                $isi = $_GET['menu'];
                if($isi == "sejarah"){
                require_once "pages/sejarah.php";
                }
                if($isi == "jurusan"){
                require_once "pages/jurusan.php";
                }
                if($isi == "profil"){
                require_once "pages/profil.php";
                }
                if($isi == "prestasi"){
                require_once "pages/prestasi.php";
                }
                if($isi == "kegiatan"){
                require_once "pages/kegiatan.php";
                }
                if($isi == "kontak"){
                require_once "pages/kontak.php";
                }
                } else {
                    require_once "pages/profil.php";
                }
                
                if (isset($_POST['tombol'])) {
                    $nama=$_POST['nama'];
                    $pesan=$_POST['pesan'];
                    $email=$_POST['email'];

                 echo $nama;
                 echo '<br>';
                 echo $email;
                 echo '<br>';
                 echo $pesan;
                }
                ?>
        </section>
        <footer>
                <p>
                    web ini dibuat oleh alfian
                </p>
        </footer>
    </div>
</body>
</html>