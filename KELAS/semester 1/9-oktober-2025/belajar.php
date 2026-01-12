belajar 
<h1>saya belajar php</h1>
<?php 
    echo "<h1>saya belajar php</h1>";
    $nama = "Muhammad Alfian Akbar";
    $kelas = "10";
    $umur = "16";
    $alamat = "Banjarkemantren";
    $hobi = "Sepak Bola";
    $citacita = "Sukses";
    $enter = "<br/>";

    echo $nama;
    echo $enter;

    echo $kelas;
    echo $enter;

    echo $umur;
    echo $enter;

    echo $alamat;
    echo $enter;

    echo $hobi;
    echo $enter;

    echo $citacita;
    echo $enter;


    // echo "Nama:";
    // echo "Muhammad Alfian Akbar";

    // echo '<br/>';

    // echo "Kelas:";
    // echo "X-RPL";

    // echo '<br/>';

    // echo "Umur:";
    // echo "16 Tahun";

    // echo '<br/>';

    // echo "Alamat:";
    // echo "Banjarkemantren";

    // echo '<br/>';

    // echo "Hobi:";
    // echo "Sepak bola";

    // echo '<br/>';

    // echo "citacita:";
    // echo "Sukses";


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <h1>Identitas</h1>
        <table>
            <tbody>
                <tr>
                    <td>nama :</td>
                    <td><?= $nama  ?></td>
                </tr>
                <tr>
                    <td>kelas :</td>
                    <td><?= $kelas ?></td>
                </tr>
                <tr>
                    <td>umur :</td>
                    <td><?= $umur ?></td>
                </tr>
                <tr>
                    <td>alamat :</td>
                    <td><?= $alamat ?></td>
                </tr>
                <tr>
                    <td>hobi :</td>
                    <td><?= $hobi ?></td>
                </tr>
                <tr>
                    <td>citacita :</td>
                    <td><?= $citacita ?></td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
