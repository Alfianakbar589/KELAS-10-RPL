import java.util.Scanner;

/**
 *
 * @author Akbar
 */
public class zodiak {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan tanggal lahir (1-31): ");
        int tanggal = input.nextInt();

        System.out.print("Masukkan bulan lahir (1-12): ");
        int bulan = input.nextInt();

        String zodiak;

        if (bulan == 1) {
            if (tanggal <= 20) {
                zodiak = "Capricorn";
            } else {
                zodiak = "Aquarius";
            }

        } else if (bulan == 2) {
            if (tanggal <= 20) {
                zodiak = "Aquarius";
            } else {
                zodiak = "Pisces";
            }

        } else if (bulan == 3) {
            if (tanggal <= 20) {
                zodiak = "Pisces";
            } else {
                zodiak = "Aries";
            }

        } else if (bulan == 4) {
            if (tanggal <= 20) {
                zodiak = "Aries";
            } else {
                zodiak = "Taurus";
            }

        } else if (bulan == 5) {
            if (tanggal <= 20) {
                zodiak = "Taurus";
            } else {
                zodiak = "Gemini";
            }

        } else if (bulan == 6) {
            if (tanggal <= 20) {
                zodiak = "Gemini";
            } else {
                zodiak = "Cancer";
            }

        } else if (bulan == 7) {
            if (tanggal <= 20) {
                zodiak = "Cancer";
            } else {
                zodiak = "Leo";
            }

        } else if (bulan == 8) {
            if (tanggal <= 20) {
                zodiak = "Leo";
            } else {
                zodiak = "Virgo";
            }

        } else if (bulan == 9) {
            if (tanggal <= 20) {
                zodiak = "Virgo";
            } else {
                zodiak = "Libra";
            }

        } else if (bulan == 10) {
            if (tanggal <= 20) {
                zodiak = "Libra";
            } else {
                zodiak = "Scorpio";
            }

        } else if (bulan == 11) {
            if (tanggal <= 20) {
                zodiak = "Scorpio";
            } else {
                zodiak = "Sagittarius";
            }

        } else if (bulan == 12) {
            if (tanggal <= 20) {
                zodiak = "Sagittarius";
            } else {
                zodiak = "Capricorn";
            }

        } else {
            zodiak = "Bulan tidak valid";
        }

        System.out.println("Zodiak Anda adalah: " + zodiak);
    }
}
