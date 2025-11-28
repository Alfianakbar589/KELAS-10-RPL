<?php 
    // $nama = array("Bandi", "Cipto", "Tia",100, 2.5);

    // var_dump($nama);
    // echo "<br>";

    // foreach ($nama as $key) {
    //     echo $key, "<br>";
    // }



    $nama = array(
        "Bandi" => "Solo",
        "Cipto" => "Palembang",
        "Tia" => "Aceh",
    );

    var_dump($nama);
    echo "<br>";
    foreach ($nama as $k => $v) {
        echo $k, " - ", $v, "<br>";
    }

?>