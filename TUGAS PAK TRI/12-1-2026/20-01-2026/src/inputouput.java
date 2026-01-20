/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.util.Scanner;

/**
 *
 * @author Akbar
 */
public class inputouput {

    public static void main(String[] args) {

        Scanner inputUser = new Scanner(System.in);

        System.out.print("Inputkan Nama Anda : ");
        String nama = inputUser.nextLine();
        System.out.println("Nama Yang Anda Input : " + nama);

        System.out.print("Berapakah Nomor Absen Anda : ");
        int absen = inputUser.nextInt();
        System.out.println("Nomor Absen Anda : " + absen);

        System.out.print("Berapakah Uang Sakumu : ");
        int uang = inputUser.nextInt();
        System.out.println("Uang Saku Anda Adalah : " + uang);

        System.out.print("Berapakah Umur kamu : ");
        int umur = inputUser.nextInt();
        System.out.println("Umur saya : " + umur + " tahun");

    }
}
