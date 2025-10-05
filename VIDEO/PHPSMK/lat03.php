<?php



    function belajar() {
        echo "Saya belajar PHP";
    }

    function luasPersegi($p = 5, $l = 3) {
        $luas = $p * $l;
        echo $luas;
    }

    function luas($p = 5, $l = 3) {
        $luas =  $p * $l;
        return $luas;
    }

    function output() {
        return "Belajar PHP";
    }

    echo luas(100, 25) * 5;
?>