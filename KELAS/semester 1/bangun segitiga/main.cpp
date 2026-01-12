#include <iostream>
using namespace std;

int main() {
    int n = 5;

    cout << "Segitiga Kiri Bawah" << endl;
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= i; j++) {
            cout << "+";
        }
        cout << endl;
    } 

    cout << endl << "Segitiga Kanan Bawah" << endl;
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        for(int j = 1; j <= i; j++) {
            cout << "+";
        }
        cout << endl;
    }

    cout << endl << "Segitiga Kiri Atas" << endl;
    for(int i = n; i >= 1; i--) {
        for(int j = 1; j <= i; j++) {
            cout << "+";
        }
        cout << endl;
    }

    cout << endl << "Segitiga Kanan Atas" << endl;
    for(int i = n; i >= 1; i--) {
        for(int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        for(int j = 1; j <= i; j++) {
            cout << "+";
        }
        cout << endl;
    }

    cout << endl << "Segitiga Sama Sisi" << endl;
    for(int i = 1; i <= n; i++) {
        
        for(int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        for(int j = 1; j <= (2 * i - 1); j++) {
            cout << "+";
        }
        cout << endl;
    }

    return 0;
}
