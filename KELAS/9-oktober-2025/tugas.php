<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>web sekolah SMPN 1 BUDURAN</title>

    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <style>
        .container {
        background-color: blue;
        padding: 20px 20px;
        max-width: 500px;
        margin: auto;
        }
        .section {
        background-color: white;
        margin-bottom: 30px;
        padding: 30px;
        border-radius: 20px;
        }
        body{
        background-color: blue;
        }
    </style>
</head>
<body>

</body>
</html>



<?php
    $menu = ['profil','alamat','kontak','kegiatan','jadwal','Berita'];

    $img = ['spenturan.png'];

    $isiprofil = " Sekolah Menengah Pertama Negeri 1 Buduran (SMPN 1 Buduran) merupakan salah satu dari 46 Sekolah Negeri di Kabupaten Sidoarjo, sekolah ini terletak di Jalan Pulau Bawean 425 Desa Wadungasih, Kecamatan Buduran. Kabupaten Sidoarjo.";

    $isialamat = "Jl. Bawean No.425, Binangun Indah, Wadungasih, Kec. Buduran, Kabupaten Sidoarjo, Jawa Timur 61252";

    $kontak = "Telp: 031-8961169 - 031-8955326 | Email: smpnbuduransatu@gmail.com";

    $Berita = "SMPN 1 Buduran adalah sekolah menengah negeri terakreditasi A yang berlokasi di Kecamatan Buduran, Kabupaten Sidoarjo, Jawa Timur. Sekolah ini berfokus pada pembentukan karakter siswa yang beriman, berprestasi, dan melek teknologi, serta peduli lingkungan";

    $kegiatan = "Kegiatan: Upacara , Ekstrakurikuler, dll.";
    $jadwal = "Senin - Rabu: 07.00 - 14.00 WIB | Kamis: 07.00 - 13.30 | Jumat: 07.00 - 11.10";
?>

     <h1>SMPN 1 BUDURAN</h1>
     <nav>
        <div style="background-color: aqua;">
        <a href="#profil"><?= $menu[0]; ?></a>
        <a href="#alamat"><?= $menu[1]; ?></a>
        <a href="#kontak"><?= $menu[2]; ?></a>
        <a href="#kegiatan"><?= $menu[3]; ?></a>
        <a href="#jadwal"><?= $menu[4]; ?></a>
        <a href="#berita"><?= $menu[5]; ?></a>
        </div>
    </nav>

    <div class="row g-0 bg-body-secondary position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src="images/spenturan.png" class="w-50" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Berita</h5>
    <p>SMPN 1 Buduran adalah sekolah menengah negeri terakreditasi A yang berlokasi di Kecamatan Buduran, Kabupaten Sidoarjo, Jawa Timur. Sekolah ini berfokus pada pembentukan karakter siswa yang beriman, berprestasi, dan melek teknologi, serta peduli lingkungan</p>
  </div>
</div>
    <div class="container body">
        <div class="section" id="profil">
            <h1><?= $menu[0]; ?></h1>
            <p><?= $isiprofil; ?></p>
        </div><br>

        <div class="section" id="alamat">
            <h1><?= $menu[1]; ?></h1>
            <p><?= $isialamat; ?></p>
        </div><br><br><br><br><br>

        <div class="section" id="kontak">
            <h1><?= $menu[2]; ?></h1>
            <p><?= $kontak; ?></p>
        </div><br>

        <div class="section" id="kegiatan">
            <h1><?= $menu[3]; ?></h1>
            <p><?= $kegiatan; ?></p>
        </div><br>

        <div class="section" id="jadwal">
            <h1><?= $menu[4]; ?></h1>
            <p><?= $jadwal; ?></p>
        </div>
    </div>