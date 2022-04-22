// ------------------------------------ TOMBOL MULAI

const mulai = document.getElementById("mulai");
const nama = document.getElementById("nama");
const tinggi = document.getElementById("tinggi");
const berat = document.getElementById("berat");
let BMI = 0;

mulai.addEventListener("click", function (e) {
  if (!nama.value || !tinggi.value || !berat.value) {
    e.preventDefault();
    alert("Silakan isi nama, tinggi badan, dan berat badan");
  }
  let patternNama = /^[a-zA-Z_ ]*$/;
  let patternAngka = /^[0-9]+$/;

  if (!patternNama.test(nama.value)) {
    e.preventDefault();
    alert("input nama hanya alfabet");
  }

  if (!patternAngka.test(berat.value)) {
    e.preventDefault();
    alert("input berat hanya angka");
  }

  if (!patternAngka.test(tinggi.value)) {
    e.preventDefault();
    alert("input tinggi hanya angka");
  }

  BMI = (berat.value / tinggi.value / tinggi.value) * 10000;
});

// --------------------------------- TOMBOL LANJUT

const lanjut = document.querySelectorAll(".lanjut");
const kirim = document.getElementById("kirim");

let jumlahSoal = 10;
let currentSoal = 1;
let indexLanjut = 0;

for (let i = 0; i < lanjut.length; i++) {
  console.log(lanjut[i].attributes.href.value);
}

lanjut[0].addEventListener("click", function () {
  if (
    document.querySelector(`input[name="opsi${currentSoal}"]:checked`) === null
  ) {
    alert("harus jawab");
  } else {
    lanjut[indexLanjut].setAttribute("href", `#soal-${currentSoal + 1}`);
    currentSoal++;
    indexLanjut++;
  }
});

lanjut[1].addEventListener("click", function () {
  if (
    document.querySelector(`input[name="opsi${currentSoal}"]:checked`) === null
  ) {
    alert("harus jawab");
  } else {
    lanjut[indexLanjut].setAttribute("href", `#soal-${currentSoal + 1}`);
    currentSoal++;
    indexLanjut++;
  }
});

lanjut[2].addEventListener("click", function () {
  if (
    document.querySelector(`input[name="opsi${currentSoal}"]:checked`) === null
  ) {
    alert("harus jawab");
  } else {
    lanjut[indexLanjut].setAttribute("href", `#soal-${currentSoal + 1}`);
    currentSoal++;
    indexLanjut++;
  }
});

lanjut[3].addEventListener("click", function () {
  if (
    document.querySelector(`input[name="opsi${currentSoal}"]:checked`) === null
  ) {
    alert("harus jawab");
  } else {
    lanjut[indexLanjut].setAttribute("href", `#soal-${currentSoal + 1}`);
    currentSoal++;
    indexLanjut++;
  }
});

lanjut[4].addEventListener("click", function () {
  if (
    document.querySelector(`input[name="opsi${currentSoal}"]:checked`) === null
  ) {
    alert("harus jawab");
  } else {
    lanjut[indexLanjut].setAttribute("href", `#soal-${currentSoal + 1}`);
    currentSoal++;
    indexLanjut++;
  }
});

lanjut[5].addEventListener("click", function () {
  if (
    document.querySelector(`input[name="opsi${currentSoal}"]:checked`) === null
  ) {
    alert("harus jawab");
  } else {
    lanjut[indexLanjut].setAttribute("href", `#soal-${currentSoal + 1}`);
    currentSoal++;
    indexLanjut++;
  }
});

lanjut[6].addEventListener("click", function () {
  if (
    document.querySelector(`input[name="opsi${currentSoal}"]:checked`) === null
  ) {
    alert("harus jawab");
  } else {
    lanjut[indexLanjut].setAttribute("href", `#soal-${currentSoal + 1}`);
    currentSoal++;
    indexLanjut++;
  }
});

lanjut[7].addEventListener("click", function () {
  if (
    document.querySelector(`input[name="opsi${currentSoal}"]:checked`) === null
  ) {
    alert("harus jawab");
  } else {
    lanjut[indexLanjut].setAttribute("href", `#soal-${currentSoal + 1}`);
    currentSoal++;
    indexLanjut++;
  }
});

lanjut[8].addEventListener("click", function () {
  if (
    document.querySelector(`input[name="opsi${currentSoal}"]:checked`) === null
  ) {
    alert("harus jawab");
  } else {
    lanjut[indexLanjut].setAttribute("href", `#soal-${currentSoal + 1}`);
    currentSoal++;
    indexLanjut++;
  }
});

// ------------------------------------------------ TOMBOL KIRIM

const mainContainer = document.getElementById("main-container");
const saranContainer = document.getElementById("saran-container");
const daftarSaran = document.getElementById("daftar-saran");

let arraySaran = [
  "Ayo mulai berolahraga, selain menyehatkan berolahraga juga dapat mencegah datangnya penyakit berat seperti penyakit jantung, struk dll.",
  "Tahukah anda bahwa vitamin dan supplement kesehatan merupakan salah satu faktor penting untuk menjaga imunitas tubuh kita. Dengan terjaga nya imunitas, tubuh kita akan dengan mudah mencegah segala penyakit untuk datang ke tubuh. Jadi sebaiknya mulai konsumsi vitamin mulai dari sekarang dan tetap perhatikan maksimal penggunaan perhari nya untuk usia tertentu.",
  "Tahukah anda, mengkonsumsi sayur dan buah-buahan bisa meningkatkan istem kekebalan tubuh. Selain itu buah dan sayur juga dipercaya bisa meningkatkan daya ingat dan membuat tubuh lebih bugar. Ayo konsumsi sayur dan buah mulai dari sekarang",
  "Ayo mulai perbanyak konsumsi makanan dengan kandungan protein tinggi, karena protein dipercaya dapat menurunkan berat badan, meningkatkan massa dan kekuatan otot, mencegah kerontokan rambut, dan menjaga kekuatan tulang.",
  "Begadang tidak baik untuk tubuh, sebaiknya anda mulai mengatur jam tidur anda setiap harinya dengan cara beraktivitas padat di siang hari agar pada malam hari tubuh lelah dan bisa tidur dengan cepat.",
  "Kesehatan nomor 1, ayo segera cek kesehatan anda ke faskes terdekat anda.",
  "Jangan sampai obesitas mengintai kehidupan kita, ayo segera rutin menimbang berat badan minimal 1x dalam sebulan.",
  "Segera cek ke faskes terdekat, karena kita wajib mengetahui kadar kolesterol dan gula anda supaya hidup kita makin disiplin dalam menjaga pola makan.",
  "Segera cek ke faskes terdekat, karena kita wajib mengetahui kadar tersebut supaya hidup kita makin disiplin dalam menjaga pola makan.",
  "Mulai kurangi, karena dikhawatirkan kesehatan mata kita akan terganggu. Perbanyak konsumsi buah-buahan dan sayuran matang.",
  "Saran kami, lakukan jemur dipagi hari karena sinar matahari dipercaya dapat memicu otak untuk melepaskan hormon serotonin, membantu mencegah gangguan pada tulang, meningkatkan kekebalan tubuh dan mengurangi risiko depresi.",
];

let arrayJawaban = [];

kirim.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    document.querySelector(`input[name="opsi${currentSoal}"]:checked`) === null
  ) {
    alert("harus jawab");
  } else {
    for (let i = 1; i <= jumlahSoal; i++) {
      const jawaban = document.querySelector(
        `input[name="opsi${i}"]:checked`
      ).value;
      arrayJawaban.push(jawaban);
    }
    console.log(arrayJawaban);

    // mainContainer.classList.add("hidden");
    // saranContainer.classList.remove("hidden");
    mainContainer.setAttribute("style", "display:none");
    saranContainer.setAttribute("style", "display:flex");

    let totalPoin = 0;
    let maxScore = 3 * jumlahSoal;
    for (let i = 0; i < arrayJawaban.length; i++) {
      let jawab = arrayJawaban[i];
      if (jawab === "tidak") {
        totalPoin += 1;
        const saranEl = document.createElement("tr");
        saranEl.innerHTML = `<td>${arraySaran[i]}</td>`;
        daftarSaran.appendChild(saranEl);
      } else if (jawab === "jarang") {
        totalPoin += 2;
      } else if (jawab === "sering") {
        totalPoin += 3;
      }
    }

    // -------- KATEGORI SEHAT

    let kategoriSehat;
    const persentase = Math.floor((totalPoin / maxScore) * 100);
    if (persentase >= 70) {
      kategoriSehat = "Pertahankan Gaya Hidup Anda!";
    } else if (persentase >= 45) {
      kategoriSehat = "Perbaiki Gaya Hidup Anda!";
    } else {
      kategoriSehat = "Gaya Hidup Anda Enggak Banget!";
    }

    document.getElementById("data").innerHTML = `<h2>${nama.value}</h2>`;

    // ------- HITUNG BMI

    let categoryBMI;

    if (BMI < 18.5) {
      categoryBMI = "Kurang Gizi";
    } else if (BMI < 24.9) {
      categoryBMI = "Berat Badan Ideal";
    } else if (BMI < 29.9) {
      categoryBMI = "Berat Badan Berlebih";
    } else if (BMI < 39.9) {
      categoryBMI = "Gemuk";
    } else {
      categoryBMI = "Obesitas";
    }

    let bmiInfo = document.createElement("h2");
    bmiInfo.innerHTML = `BMI: ${BMI.toFixed(2)} - ${categoryBMI}`;
    document.getElementById("data").appendChild(bmiInfo);

    let textPersentase = document.createElement("h2");
    textPersentase.setAttribute("id", "textPersentase");
    textPersentase.innerHTML = persentase + "% - " + kategoriSehat;
    // console.log(saranContainer);
    document.getElementById("data").appendChild(textPersentase);
  }
});
