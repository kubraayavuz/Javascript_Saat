//Ekranda isim yazdırmak için önce prompt ile kullanıcıdan isim aldım.
//Sonra querySelector ile id bilgisini seçtim
//innerHTML ile ekranda gözükmesini sağladım.
let fullname = prompt("Lufen adınızı giriniz");
var username = document.querySelector("#myName");
username.innerHTML = fullname;

//Fonksiyon içerisinde gün-saat-dakika-saniye-amPm bilgilerini aldım.
//saatin 12'ye göre modunu aldım (eğer 13'se 1 yazmasını bekliyorum...)
//dakika ve saniyeyi 2 hanede göstermek için 10'dan küçükse ilk önce 0 yazmasını sağladım (9 ise 09 gibi)
//Sonrasında string biçimde saat:dakika:saniye:amPm bilgilerini bi değişkende tuttum.
//querySelector ile id bilgisini seçtim
//innerHTML ile ekranda saat bilgimin gözükmesini sağladım
function showTime() {
  let gun = new Date();
  let saat = gun.getHours();
  let dakika = gun.getMinutes();
  let saniye = gun.getSeconds();
  let amPm = saat >= 12 ? "PM" : "AM";

  saat = saat % 12;
  saat = saat ? saat : 12;
  dakika = dakika < 10 ? "0" + dakika : dakika;
  saniye = saniye < 10 ? "0" + saniye : saniye;

  let timeString = saat + ":" + dakika + ":" + saniye + " " + amPm;

  var clock = document.querySelector("#myClock");
  clock.innerHTML = timeString;
}
// 1 saniyede bir showTime fonksiyonunu çağırarak saati güncelledim.
setInterval(showTime, 1000);
showTime();
