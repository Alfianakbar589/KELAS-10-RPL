<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Kategori;
use App\Models\Pelanggan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class FrontController extends Controller
{
    public function index()
    {
        $kategoris = Kategori::all();
        $menus = Menu::paginate(3);

        return view('menu', [
            'kategoris' => $kategoris,
            'menus' => $menus,
        ]);
    }
    public function create()
    {
    }
    public function store(Request $request)
    {
        $data = $request->validate([
            'pelanggan' => 'required',
            'alamat' => 'required',
            'telp' => 'required',
            'jeniskelamin' => 'required',
            'email' => 'required | email | unique:pelanggans',
            'password' => 'required | min:3',
        ]);
        Pelanggan::create([
            'pelanggan' => $data['pelanggan'],
            'alamat' => $data['alamat'],
            'telp' => $data['telp'],
            'jeniskelamin' => $data['jeniskelamin'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'aktif' => 1,
        ]);
        return redirect('/');
    }
    public function show($id)
    {
        $kategoris = Kategori::all();
        $menus = Menu::where('idkategori', $id)->paginate(3);

        return view('kategori', [
            'kategoris' => $kategoris,
            'menus' => $menus,
        ]);
    }
    public function edit($id)
    {
    }
    public function update(Request $request, $id)
    {
    }
    public function destroy($id)
    {
    }
    public function register()
    {
        $kategoris = Kategori::all();

        return view('register', ['kategoris' => $kategoris]);
    }
    public function login()
    {
        $kategoris = Kategori::all();

        return view('login', ['kategoris' => $kategoris]);
    }
    public function postLogin(Request $request)
    {
        $data = $request->validate([
            'email' => 'required',
            'password' => 'required | min:3',
        ]);
        $pelanggan = Pelanggan::where('email', $data)->where('aktif', 1)->first();
        if ($pelanggan) {
            if (Hash::check($data['password'], $pelanggan['password'])) {
                $data = [
                    'idpelanggan' => $pelanggan['idpelanggan'],
                    'email' => $pelanggan['email'],
                ];
                $request->session()->put('idpelanggan', $data);
                return redirect('/');
            } else {
                return back()->with('pesan', 'Password Salah!');
            }
        } else {
            return back()->with('pesan', 'Email Belum Terdaftar!');
        }
    }
    public function logout()
    {
        session()->flush();
        return redirect('/');
    }
}