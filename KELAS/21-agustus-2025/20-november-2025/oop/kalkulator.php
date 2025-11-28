<?php 

    class kalkulator{
        function penjumlahan(){
            echo "penjumlahan";
        }
        function pengurangan(){
            echo "pengurangan";
        }
        function perkalian(){
            echo "perkalian";
        }
        function pembagian(){
            echo "pembagian";
        }

    }
        
    $kalku = new Kalkulator();
    $kalku->penjumlahan();
    $kalku->pengurangan();
    $kalku->perkalian();
    $kalku->pembagian();
?>