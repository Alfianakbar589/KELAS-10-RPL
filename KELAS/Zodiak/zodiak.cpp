#include <iostream>
using namespace std;

int main() 
{
    int tgl,bln;
    cout << "PROGRAM ZODIAK ANDA! \n" << endl;
    cin>>bln;
    cout<<"Inputkan Tanggal Lahir Anda: ";
    cin>>tgl;

    if (bln>0&&bln<=12)
    {
        if (bln==1)
        {
            if (tgl>=1 &&tgl<=19)
            {
                cout<<"Bintang Anda Capricorn";
            }
        else if (tgl>=20 && tgl<=31)
            {
                cout<<"Bintang Anda Aquarius \n";
            }
           else {
                cout<<"Tanggal tidak Valid";
                }
        }
    }
 else
   cout<<"Bln yang anda input tidak valid";
    if (bln>0&&bln<=12)
    {
        if (bln==2)
        {
            if (tgl>=1 &&tgl<=19)
            {
                cout<<"Bintang Anda Aquarius";
            }
        else if (tgl>=20 && tgl<=28)
            {
                cout<<"Bintang Anda Pisces \n";
            }
           else {
                cout<<"Tanggal tidak Valid";
                }
        }
    }

    if (bln>0&&bln<=12)
    {
        if (bln==3)
        {
            if (tgl>=1 &&tgl<=19)
            {
                cout<<"Bintang Anda Pisces";
            }
        else if (tgl>=20 && tgl<=31)
            {
                cout<<"Bintang Anda Aries \n";
            }
           else {
                cout<<"Tanggal tidak Valid";
                }
        }
    }

    if (bln>0&&bln<=12)
    {
        if (bln==4)
        {
            if (tgl>=1 &&tgl<=19)
            {
                cout<<"Bintang Anda Aries";
            }
        else if (tgl>=20 && tgl<=31)
            {
                cout<<"Bintang Anda Taurus \n";
            }
           else {
                cout<<"Tanggal tidak Valid";
                }
        }
    }

    if (bln>0&&bln<=12)
    {
        if (bln==5)
        {
            if (tgl>=1 &&tgl<=19)
            {
                cout<<"Bintang Anda Taurus";
            }
        else if (tgl>=20 && tgl<=31)
            {
                cout<<"Bintang Anda Gemini \n";
            }
           else {
                cout<<"Tanggal tidak Valid";
                }
        }
    }

    if (bln>0&&bln<=12)
    {
        if (bln==6)
        {
            if (tgl>=1 &&tgl<=19)
            {
                cout<<"Bintang Anda Gemini";
            }
        else if (tgl>=20 && tgl<=31)
            {
                cout<<"Bintang Anda Cancer \n";
            }
           else {
                cout<<"Tanggal tidak Valid";
                }
        }
    }

    if (bln>0&&bln<=12)
    {
        if (bln==7)
        {
            if (tgl>=1 &&tgl<=19)
            {
                cout<<"Bintang Anda Cancer";
            }
        else if (tgl>=20 && tgl<=31)
            {
                cout<<"Bintang Anda Leo \n";
            }
           else {
                cout<<"Tanggal tidak Valid";
                }
        }
    }

    if (bln>0&&bln<=12)
    {
        if (bln==8)
        {
            if (tgl>=1 &&tgl<=19)
            {
                cout<<"Bintang Anda Leo";
            }
        else if (tgl>=20 && tgl<=31)
            {
                cout<<"Bintang Anda Virgo \n";
            }
           else {
                cout<<"Tanggal tidak Valid";
                }
        }
    }

    if (bln>0&&bln<=12)
    {
        if (bln==9)
        {
            if (tgl>=1 &&tgl<=19)
            {
                cout<<"Bintang Anda Virgo";
            }
        else if (tgl>=20 && tgl<=31)
            {
                cout<<"Bintang Anda Libra \n";
            }
           else {
                cout<<"Tanggal tidak Valid";
                }
        }
    }

    if (bln>0&&bln<=12)
    {
        if (bln==10)
        {
            if (tgl>=1 &&tgl<=19)
            {
                cout<<"Bintang Anda Libra";
            }
        else if (tgl>=20 && tgl<=31)
            {
                cout<<"Bintang Anda Scorpio \n";
            }
           else {
                cout<<"Tanggal tidak Valid";
                }
        }
    }

    if (bln>0&&bln<=12)
    {
        if (bln==11)
        {
            if (tgl>=1 &&tgl<=19)
            {
                cout<<"Bintang Anda Scorpio";
            }
        else if (tgl>=20 && tgl<=31)
            {
                cout<<"Bintang Anda Sagitarius \n";
            }
           else {
                cout<<"Tanggal tidak Valid";
                }
        }
    }

    if (bln>0&&bln<=12)
    {
        if (bln==12)
        {
            if (tgl>=1 &&tgl<=19)
            {
                cout<<"Bintang Anda Sagitarius";
            }
        else if (tgl>=20 && tgl<=31)
            {
                cout<<"Bintang Anda Capricorn \n";
            }
           else {
                cout<<"Tanggal tidak Valid";
                }
        }
    }

    
   return 0;
}