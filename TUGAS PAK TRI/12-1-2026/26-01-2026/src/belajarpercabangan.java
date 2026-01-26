import java.util.Scanner;

/**
 *
 * @author Akbar
 */
public class belajarpercabangan {

    public static void main(String[] args) {
        Scanner inputuser = new Scanner(System.in);
        System.out.print("Masukkan nilai: ");
        int n = inputuser.nextInt();

        String besaran;
        String nilaiHuruf;

        if (n < 0 || n > 100) {
            System.out.println("Nilai tidak valid! Masukkan nilai 0 - 100");
        } else {
            if (n >= 85) {
                besaran = "Sangat Baik";
                nilaiHuruf = "A";
            } else if (n >= 70) {
                besaran = "Baik";
                nilaiHuruf = "B";
            } else if (n >= 60) {
                besaran = "Cukup";
                nilaiHuruf = "C";
            } else {
                besaran = "Kurang";
                nilaiHuruf = "D";
            }

            System.out.println("Nilai Anda : " + n);
            System.out.println("Besaran : " + besaran);
            System.out.println("Nilai Huruf : " + nilaiHuruf);

            if (n >= 70) {
                System.out.println("Status : LULUS");
            } else {System.out.println("Status : TIDAK LULUS");}
        }
    }
}
