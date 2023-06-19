//üç inputu da id'si ile seç ve inputlardaki değerleri farklı değişkenlere ata
let cho = document.querySelector('#cho');
let pro = document.querySelector('#pro');
let fat = document.querySelector('#fat');

//butonu seç ve butona hesaplama fonksiyonunu ata
let calButton = document.querySelector('.hesapla');
calButton.addEventListener('click', calculate);

//input değer atama fonksiyonu
let inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('change', function(e){
    input.value = e.target.value;
}));

//fonksiyonu oluştur
function calculate(){
    //girilen carb, protein ve yağ oranları:
    let choValue = parseFloat(cho.value);
    let proValue = parseFloat(pro.value);
    let fatValue = parseFloat(fat.value);    

    //yüzdelik hesaplama:
    let percent = 100 / (choValue + proValue + fatValue);

    //her değişkenin yüzdelik değeri:
    let choPercent = percent * choValue;
    let proPercent = percent * proValue;
    let fatPercent = percent * fatValue;

    //kalori hesaplama:
    let calorie = (choValue * 4) + (proValue * 4) + (fatValue * 9);

    //pasta grafiği:
    let pieChart = document.querySelector(".pie-chart");
    pieChart.style.background = `conic-gradient(
        dodgerblue 0% ${choPercent}%,
        yellow ${choPercent}% ${100 - proPercent}%,
        red ${100 - proPercent}% 100%
    )`;

    //değerleri sayfaya yazdırma:
    let choSpan = document.querySelector('#karbonhidrat').innerHTML = `Karbonhidrat: ${choPercent}`;
    let proSpan = document.querySelector('#protein').innerHTML = `Protein: ${proPercent}`;
    let fatSpan = document.querySelector('#yag').innerHTML = `Yağ: ${fatPercent}`;
    let totalCal = document.querySelector('.totalCal').innerHTML = `Toplam kalori: ${calorie}`

    //değerleri konsola yazdırma:
    console.log(`Karbonhidrat: ${choValue}, Protein: ${proValue}, Yağ: ${fatValue}`);
    console.log(`Percent: ${percent}`);
    console.log(`Toplam kalori: ${calorie}`);
    console.log(`choPercent: ${choPercent}, proPercent: ${proPercent}, fatPercent: ${fatPercent}`);
}