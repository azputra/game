let tanya = true;
while (tanya) {
    

    // menangkap pilihan player
    let p = prompt ('silahkan pilih : Gajah / Semut / Orang');

    //menangkap pilihan computer
    //membangkitkan / mengenerate bilangan random
    let comp = Math.random()

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.66) {
        comp = 'semut';
    } else {
        comp = 'orang';
    }

    //menentukan rules
    let hasil = '';
    if (p == comp) {
        hasil = 'Hasilnya Seri'
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG'
        // } else{
        //     hasil = 'KALAH'
        // }
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Anda Memasukan Pilihan Yang Salah';
    }

    //tampil hasilnya
    alert ('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : ' + hasil);

tanya = confirm ('Lagi?')
}

alert ('terima kasih sudah bermain')