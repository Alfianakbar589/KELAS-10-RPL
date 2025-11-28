<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return view('backend.user.select', ['users' => $users]);
    }
    public function create()
    {
        return view('backend.user.insert');
    }
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required | min:3',
        ]);
        User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'level' => $request->level,
        ]);
        return redirect('admin/user');
    }
    public function show($id)
    {
        $users = User::where('id', $id)->get();
        $levels = User::where('level', $users[0]['level']);
        $jumlah = $levels->count();
        if ($jumlah == 1) {
            session()->flash('pesan', 'Data hanya satu, tidak bisa dihapus!');
        } else {
            User::where('id', $id)->delete();
        }
        return redirect('admin/user');
    }
    public function edit($id)
    {
        $user = User::where('id', $id)->first();
        return view('backend.user.update', ['user' => $user]);
    }
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'password' => 'required | min:3',
        ]);
        User::where('id', $id)->update([
            'password' => bcrypt($data['password']),
        ]);
        return redirect('admin/user');
    }
    public function destroy($id)
    {
    }
}