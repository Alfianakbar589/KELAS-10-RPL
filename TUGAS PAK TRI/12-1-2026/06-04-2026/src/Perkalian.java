/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Akbar
 */

public class Perkalian {

    // Method 1
    static int perkalian(int a, int b) {
        return a * b;
    }

    // Method 2
    static int perkalian(int a, int b, int c) {
        return a * b * c;
    }

    // Method 3
    static double perkalian(double a, double b) {
        return a * b;
    }

    public static void main(String[] args) {
        System.out.println("Hasil 1 = " + perkalian(5, 6));
        System.out.println("Hasil 2 = " + perkalian(3, 4, 2));
        System.out.println("Hasil 3 = " + perkalian(1.5, 2.0));
    }
}
    
