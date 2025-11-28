<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->string('idorder')->primary();
            $table->integer('idpelanggan');
            $table->date('tglorder');
            $table->float('total');
            $table->float('bayar');
            $table->float('kembali');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};