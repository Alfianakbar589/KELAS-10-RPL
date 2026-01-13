/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Akbar
 */
public class Operator {
    // kode
    
    public static void main(String[] args) {

        int a = 12, b = 4;

        // === Aritmatika ===
        System.out.println("=== Aritmatika ===");
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));
        System.out.println("a % b = " + (a % b) + "\n");

        // === Penugasan ===
        System.out.println("=== Penugasan ===");
        a += 6;  System.out.println("a += 6 → " + a);
        a -= 2;  System.out.println("a -= 2 → " + a);
        a *= 3;  System.out.println("a *= 3 → " + a);
        a /= 4;  System.out.println("a /= 4 → " + a + "\n");

        int x = 18, y = 9;

        // === Pembanding ===
        System.out.println("=== Pembanding ===");
        System.out.println("x == y : " + (x == y));
        System.out.println("x != y : " + (x != y));
        System.out.println("x > y  : " + (x > y));
        System.out.println("x <= y : " + (x <= y) + "\n");

        // === Logika ===
        System.out.println("=== Logika ===");
        System.out.println("(x > y && y == 9) : " + (x > y && y == 9));
        System.out.println("(x < y || y == 9) : " + (x < y || y == 9));
        System.out.println("!(x == 18) : " + !(x == 18));
    }
}

