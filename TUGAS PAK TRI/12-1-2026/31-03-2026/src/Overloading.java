/**
 *
 * @author Akbar
 */
public class Overloading {
    void DataKelas(String namaKelas) {
        System.out.println("Kelas kita adalah: " + namaKelas);
    }
    void DataKelas(String namaKelas, int jumlahSiswa) {
        System.out.println("Kelas kita adalah: " + namaKelas);
        System.out.println("Disini ada " + jumlahSiswa + " siswa");
    }
}
