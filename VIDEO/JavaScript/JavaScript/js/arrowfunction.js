let fungsi = function (nama) {
    console.log("Belajar Function " + nama);
};

fungsi("Udin");


let contoh = (nama) => {
    console.log("Belajar Function " + nama);
};

contoh("Josep");

let tambah = function (a,b) {
    return a + b;
};

console.log(tambah(2, 3));

let plus = (a, b) => a + b;

console.log(plus(2, 3));

let hasil = (a) => a * 2;

console.log(hasil(4));

let lagi = () => console.log("Coba lagi");

lagi();

let belajar = () => {
    console.log("Baris satu");
    console.log("Baris dua");
    console.log("Baris tiga");
    console.log("Baris selanjutnya");
}
belajar();

let nilai = 4;
let uji = (nilai < 7) ? () => predikat="Gagal" : () => predikat="Lulus" ; // --> 
console.log(uji());