function hitungGaji(jumlahHariHadir, potongan) {
    const gajiPokok = 5000000;
    const tambahanPerHari = 200000;
    const bonus = 500000;

    let totalGaji = gajiPokok;

    // Hitung tambahan berdasarkan kehadiran
    totalGaji += jumlahHariHadir * tambahanPerHari;

    // Berikan bonus jika hadir lebih dari 20 hari
    if (jumlahHariHadir > 20) {
        totalGaji += bonus;
    }

    // Kurangkan potongan jika ada
    if (potongan > 0) {
        totalGaji -= potongan;
    }

    return totalGaji;
}

// Contoh penggunaan
const gajiPegawai1 = hitungGaji(22, 0); // Hadir 22 hari, tanpa potongan
const gajiPegawai2 = hitungGaji(18, 250000); // Hadir 18 hari, potongan 250.000

console.log("Gaji Pegawai 1: Rp" + gajiPegawai1);
console.log("Gaji Pegawai 2: Rp" + gajiPegawai2);