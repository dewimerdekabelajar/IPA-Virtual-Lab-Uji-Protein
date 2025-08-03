let reagentAdded = false;
let shaken = false;
let selectedSample = "";

function addReagent() {
  selectedSample = document.getElementById('sampleSelect').value;
  if (!selectedSample) {
    alert("Pilih bahan makanan terlebih dahulu!");
    return;
  }
  reagentAdded = true;
  document.getElementById('testTube').src = 'img/tabung_reagen.png';
  document.getElementById('result').innerText = '';
}

function shakeTube() {
  if (!reagentAdded) {
    alert('Tambahkan reagen terlebih dahulu!');
    return;
  }
  shaken = true;
  const tube = document.getElementById('testTube');
  tube.style.transform = 'rotate(10deg)';
  setTimeout(() => {
    tube.style.transform = 'rotate(-10deg)';
  }, 200);
  setTimeout(() => {
    tube.style.transform = 'rotate(0deg)';
  }, 400);
}

function showResult() {
  if (reagentAdded && shaken) {
    const positiveSamples = ['putih_telur', 'susu', 'daging_ayam'];
    const isPositive = positiveSamples.includes(selectedSample);

    if (isPositive) {
      document.getElementById('testTube').src = 'img/tabung_positif.png';
      document.getElementById('result').innerText = 'Hasil: Warna ungu muncul → sampel mengandung protein.';
    } else {
      document.getElementById('testTube').src = 'img/tabung_negatif.png';
      document.getElementById('result').innerText = 'Hasil: Tidak ada perubahan warna → sampel tidak mengandung protein.';
    }
  } else {
    document.getElementById('result').innerText = 'Pastikan Anda sudah memilih bahan, menambahkan reagen, dan mengocok tabung.';
  }
}