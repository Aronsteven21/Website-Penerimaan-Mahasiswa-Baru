// scripts.js - validasi form dan interaksi sederhana

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm')
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault()

      // Ambil nilai
      const fullname = form.fullname.value.trim()
      const email = form.email.value.trim()
      const gender = form.querySelector('input[name="gender"]:checked')
      const programs = Array.from(form.querySelectorAll('input[name="program[]"]:checked')).map((i) => i.value)
      const prodi = form.prodi.value
      const fileInput = form.photo
      const file = fileInput.files[0]

      // Validasi
      if (!fullname) {
        alert('Nama lengkap wajib diisi.')
        form.fullname.focus()
        return
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Masukkan alamat email yang valid.')
        form.email.focus()
        return
      }
      if (!gender) {
        alert('Pilih jenis kelamin.')
        return
      }
      if (programs.length === 0) {
        alert('Pilih minimal satu program minat.')
        return
      }
      if (!prodi) {
        alert('Pilih program studi yang diinginkan.')
        form.prodi.focus()
        return
      }
      if (!file) {
        alert('Upload foto/berkas wajib diisi.')
        fileInput.focus()
        return
      }
      // file size limit 2MB
      if (file.size > 2 * 1024 * 1024) {
        alert('Ukuran file maksimal 2MB.')
        fileInput.focus()
        return
      }
      // jenis file diperbolehkan: jpg jpeg png pdf
      const allowed = ['image/jpeg', 'image/png', 'application/pdf']
      if (!allowed.includes(file.type)) {
        alert('Format berkas tidak didukung. Gunakan JPG, PNG, atau PDF.')
        fileInput.focus()
        return
      }

      // Jika semua valid -> tampilkan ringkasan (alert)
      const summary = `
Pendaftaran berhasil (simulasi).
Nama: ${fullname}
Email: ${email}
Jenis Kelamin: ${gender.value}
Program Minat: ${programs.join(', ')}
Pilihan Prodi: ${prodi}
File: ${file.name}
      `
      alert(summary)

      // Di implementasi nyata -> kirim ke server di sini
      form.reset()
    })
  }
})
