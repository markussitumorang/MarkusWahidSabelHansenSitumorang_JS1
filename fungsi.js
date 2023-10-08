// 1. If, Else, dan Nested If
var nilai = 75;
var ifElseResult;

if (nilai >= 90) {
    ifElseResult = "Nilai Anda A";
} else if (nilai >= 80) {
    ifElseResult = "Nilai Anda B";
} else if (nilai >= 70) {
    ifElseResult = "Nilai Anda C";
} else {
    ifElseResult = "Nilai Anda D";
}

// 2. Switch Case
var hari = "Senin";
var switchCaseResult;

switch (hari) {
    case "Senin":
        switchCaseResult = "Hari ini adalah Senin.";
        break;
    case "Selasa":
        switchCaseResult = "Hari ini adalah Selasa.";
        break;
    case "Rabu":
        switchCaseResult = "Hari ini adalah Rabu.";
        break;
    default:
        switchCaseResult = "Hari ini adalah hari lain.";
}

// 3. For Statement
var HasilforLoop = "";

for (var i = 1; i <= 5; i++) {
    HasilforLoop += "Data Ke" + i + "\n";
}

// 4. While dan Do While
var angka = 1;
var whileDoWhileResult = "";

while (angka <= 5) {
    whileDoWhileResult += "Nilai angka: " + angka + "\n";
    angka++;
}

var counter = 1;
do {
    whileDoWhileResult += "Counter ke-" + counter + "\n";
    counter++;
} while (counter <= 5);

// 5. Function
function tambah(a, b) {
    return a + b;
}

var hasil = tambah(5, 3);

// Menampilkan hasil ke konsol
console.log("Hasil Program JavaScript");
console.log("1. If, Else, dan Nested If:");
console.log(ifElseResult);
console.log("2. Switch Case:");
console.log(switchCaseResult);
console.log("3. For Statement:");
console.log(HasilforLoop);
console.log("4. While dan Do While:");
console.log(whileDoWhileResult);
console.log("5. Function:");
console.log("Hasil penambahan: " + hasil);