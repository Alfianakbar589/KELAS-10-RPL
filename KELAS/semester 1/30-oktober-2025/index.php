<form action="" method="post">
    Tanggal :
    <input type="number" name="tanggal" placeholder="masukkan tanggal">
    <br>
    Bulan :
    <input type="number" name="bulan" placeholder="masukkan bulan">
    <br>

    <input type="submit" name="kirim" value="zodiak anda">
</form>

<form action="" method="post">
    <input type="number" name="a" placeholder="angka 1">
    <input type="number" name="b" placeholder="angka 2">
    <select name="hitung" id="">
        <option name="hitung" value="+">+</option>
        <option name="hitung" value="-">-</option>
        <option name="hitung" value="*">*</option>
        <option name="hitung" value="/">/</option>
    </select>
    <input type="submit" value="hitung" placeholder="hasil">
</form>

<?php 


    if (isset($_POST['hitung'])) {
        $hitung = $_POST['hitung'];
        $a = $_POST['a'];
        $b = $_POST['b'];

        if ($hitung == '+') {
            echo "penjumlahan dari $a + $b adalah : ";
            echo $a + $b;
        }
        if ($hitung == '-') {
            echo "pengurangan dari $a - $b adalah : ";
            echo $a - $b;
        }
        if ($hitung == '*') {
            echo "perkalian dari $a * $b adalah : ";
            echo $a * $b;
        }
        if ($hitung == '/') {
            echo "pembagian dari $a / $b adalah : ";
            echo $a / $b;
        }
    }
    
    if (isset($_POST['kirim'])) {
        $tanggal = $_POST['tanggal'];
        $bulan = $_POST['bulan'];

        zodiak($bulan,$tanggal);
    }

    function belajar(){
        echo "Hari ini saya belajar  function";
    }

    // memanggil function

    function cekTanggal($tanggal){
    

    if ($tanggal > 0 && $tanggal < 32) {
        return true; 
    }else {
        return false;
    }
    }
    cekTanggal(1);
    cekTanggal(0);
    cekTanggal(100);

    $tanggal= 24;
    $bulan= 10;
    

    function zodiak ($bulan,$tanggal){

        if ($tanggal > 0 && $tanggal <32 && $bulan >0 && $bulan <13) {
       if ($bulan == 1) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda capricorn ";
        }else {
            echo "zodiak anda aquarius ";
        }
       } 

       if ($bulan == 2) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda aquarius ";
        }else {
            echo "zodiak anda pisces ";
        }
       }

       if ($bulan == 3) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda pisces ";
        }else {
            echo "zodiak anda aries ";
        }
       }

       if ($bulan == 4) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda aries ";
        }else {
            echo "zodiak anda taurus ";
        }
       }

       if ($bulan == 5) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda taurus ";
        }else {
            echo "zodiak anda gemini ";
        }
       }

       if ($bulan == 6) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda gemini ";
        }else {
            echo "zodiak anda cancer ";
        }
       }

       if ($bulan == 7) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda cancer ";
        }else {
            echo "zodiak anda leo ";
        }
       }

       if ($bulan == 8) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda leo ";
        }else {
            echo "zodiak anda virgo ";
        }
       }

       if ($bulan == 9) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda virgo ";
        }else {
            echo "zodiak anda libra ";
        }
       }

       if ($bulan == 10) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda libra ";
        }else {
            echo "zodiak anda scorpio ";
        }
       }

       if ($bulan == 11) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda scorpio ";
        }else {
            echo "zodiak anda sagitarius ";
        }
       }

       if ($bulan == 12) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda sagitarius ";
        }else {
            echo "zodiak anda capricorn ";
        }
       }

    }else {
        echo "tanggal atau bulan salah";
    }
    }


    function cekBulan($bulan){
        if ($bulan > 0 && $bulan < 13) {
            return true;
        }else {
            return false;
        }
    }
    cekBulan(bulan: 1) ;
        if (cekBulan(bulan: 1)) {
            // echo "bulan atau tanggal benar";
        }else {
            echo "bulan atau tanggal salah ";
        }

    function luasPersegiPanjang($p,$l){
        $luas= $p * $l;
        return $luas;
    }
    
    $p=10;
    $l=20;
    $t=30;

    echo"<br>";
    echo"volume balok dengan p=5 l=3 dan tinggi 15 adalah: ";

    echo luasPersegiPanjang(5,3) * 15;
    


?>