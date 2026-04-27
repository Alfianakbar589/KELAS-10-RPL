
public class Siswa {
    Siswa() {
        System.out.println("ini adalah Constructor-1"); 
    }  
    Siswa(String nama) {
        System.out.println("ini constructor -2");
        System.out.println("Nama saya adalah: "+nama);
    }
    Siswa(String nama, int usia) {
        System.out.println("ini constructor -3");
        System.out.println("nama saya ada;ah:" +nama);
        System.out.println("Umur saya adalah " +usia);
    }
        Siswa(String nama, int usia, String alamat) {
        System.out.println("ini constructor -4");
        System.out.println("nama saya ada;ah:" +nama);
        System.out.println("Umur saya adalah " +usia);
        System.out.println("Alamat saya berada di: " +alamat);
    }  
}
