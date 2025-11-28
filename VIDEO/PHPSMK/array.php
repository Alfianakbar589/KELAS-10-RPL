<?php 
    // Array Dimensi

    // $nama = array("Bandi", "Cipto", "Tia", "Ryo",100, 2.5);

    // var_dump($nama);

    // echo "<br>";

    // echo $nama[5];

    // echo "<br>";

    // for ($i=0; $i < 6; $i++) { 
    //     echo $i, " = ";
    //     echo $nama[$i], "<br>";
    // }

    // foreach ($nama as $k) {
    //     echo $k, "<br>";
    // }

    // Array Asosiatif

    $nama = array(
        "Bandi" => "Solo",
        "Cipto" => "Palembang",
        "Tia" => "Aceh",
        "Ryo" => "Situbondo"
    );

    var_dump($nama);

    echo "<br>";

    // echo $nama["Tia"];

    foreach ($nama as $k => $v) {
        echo $k, " = ", $v, "<br>";
    }
?>