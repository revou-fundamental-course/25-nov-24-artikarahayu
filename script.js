// Ambil elemen yang diperlukan dari HTML
const bmiForm = document.getElementById('bmiForm'); // Form input BMI
const bmiResultSection = document.getElementById('bmiResultSection'); // Bagian hasil BMI
const bmiOutput = document.getElementById('bmiOutput'); // Elemen untuk menampilkan hasil BMI

// Tambahkan event listener untuk menangani submit form
bmiForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah reload halaman setelah submit form

    // Ambil nilai dari input form
    const gender = document.getElementById('gender').value; // Nilai jenis kelamin
    const weight = parseFloat(document.getElementById('weight').value); // Nilai berat badan
    const height = parseFloat(document.getElementById('height').value); // Nilai tinggi badan

    // Debugging: Tampilkan nilai di console untuk memastikan data diambil dengan benar
    console.log("Gender:", gender); // Cek nilai jenis kelamin
    console.log("Weight:", weight); // Cek nilai berat badan
    console.log("Height:", height); // Cek nilai tinggi badan

    // Validasi input untuk memastikan semua data diisi
    if (!gender || isNaN(weight) || isNaN(height)) {
        alert('Harap isi semua data dengan benar!'); // Pesan error jika ada input kosong
        return; // Hentikan eksekusi jika validasi gagal
    }

    // Hitung BMI
    const heightInMeters = height / 100; // Konversi tinggi badan dari cm ke meter
    const bmi = (weight / (heightInMeters ** 2)).toFixed(2); // Rumus BMI: berat badan / (tinggi badan dalam meter)^2

    // Tentukan status berdasarkan nilai BMI
    let status = '';
    if (bmi < 18.5) {
        status = 'Kekurangan Berat Badan'; // Jika BMI kurang dari 18.5
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal (Ideal)'; // Jika BMI di antara 18.5 dan 24.9
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Kelebihan Berat Badan'; // Jika BMI di antara 25 dan 29.9
    } else {
        status = 'Obesitas'; // Jika BMI 30 atau lebih
    }

    // Tampilkan hasil BMI di layar
    bmiOutput.innerHTML = `
        <p>BMI Anda: <strong>${bmi}</strong></p> <!-- Menampilkan nilai BMI -->
        <p>Status: <strong>${status}</strong></p> <!-- Menampilkan status BMI -->
    `;
    bmiResultSection.style.display = 'block'; // Tampilkan bagian hasil BMI
    bmiForm.style.display = 'none'; // Sembunyikan form input
});

// Fungsi untuk mereset form
function resetForm() {
    bmiForm.reset(); // Reset semua input form
    bmiForm.style.display = 'block'; // Tampilkan kembali form input
    bmiResultSection.style.display = 'none'; // Sembunyikan bagian hasil BMI
}
