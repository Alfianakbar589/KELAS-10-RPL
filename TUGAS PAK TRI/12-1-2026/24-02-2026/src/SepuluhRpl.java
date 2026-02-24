public class SepuluhRpl {
    public static void main(String[] args) {
        MuridRpl objek = new MuridRpl();
        System.out.println(objek.nama);
        System.out.println("Nama Anda Adalah : "+ objek.nama);
        System.out.println("No Absen Anda Adalah : "+ objek.absen);
        System.out.println("Umur Anda Adalah : "+ objek.usia);
        
        objek.DataSiswa();
        
        int Tampilanluas=objek.MenghitungPersegi();
        System.out.println("Luas Persegi Adalah : "+Tampilanluas);
        
        SiswaRpl siswa2 = new SiswaRpl();
        siswa2.hobiSiswa();
    }
    
}
