<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CekLogin
{
    public function handle(Request $request, Closure $next, $roles): Response
    {
        if (!Auth::check()) {
            return redirect('admin');
        }
        $user = Auth::user();
        if ($user->level == $roles) {
            return $next($request);
        }
        return redirect('admin');
    }
}