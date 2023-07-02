// console
// console.log("console log");
// console.error("console error");
// console.warn("console warning");
// console.info("console info");

// document
//document.writeln("document data");

// Alert
//alert("Alert Data");

// variable , typeof
// var data = 44;
// console.log(typeof data+" => "+data);

// data=12.23;
// console.log(typeof data+" => "+data);

// data=true;
// console.log(typeof data+" => "+data);

// data="JavaScript Öğreniyorum";
// console.log(typeof data+" => "+data);

//  naming convensition
// var science="JS tutorials";
// var science44="JS tutorials";
// var _science44="JS tutorials";
// var $science44="JS tutorials";
// var scienceData="JS tutorials";

// var 44scienceData="JS tutorials";
// var ~scienceData="JS tutorials";

//  Whoisting 
// deneme=55;
// var deneme;
// console.log(typeof deneme+" => "+deneme);

//  Operator
// console.log(4+6);
// console.log(4-6);
// console.log(4*6);
// console.log(10/2);
// console.log(10%2);

// Operator && || ! > >= < <=

// =   ATAMA
// ==  EŞİTTİR ama Türüne bakmadan
// === EŞİTTİR ama Türüne bakacaksın

// x++


// Prompt
// var userData=prompt("Lütfen birşeyler yazınız");
// alert(userData);

// Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ?
// var data1 = Number(prompt("Lütfen 1.sayıyı giriniz"));
// var data2 = Number(prompt("Lütfen 2.sayıyı giriniz"));
// var result1 = ((data1 + data2));
// console.log(result1)

// Örnek-2
/* 
Kullanıcıdan aldığımız sayıyı dereceden fahrenhyat'a çeviren JS kodu yazınız ?
Formül: (derece*9/5)+32 
*/
// var degree, fahranhayt;
// degree = Number(prompt("Lütfen derece Giriniz"));
// fahranhayt = (degree * 9 / 5) + 32;
// console.log(degree + " Derece " + fahranhayt + " fahranhayt")

// Örnek-3
// y=3x+4k ==>1.dereceden 2 bilinmeyenli denklem algoritması
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
// var x= Number(prompt("Lütfen x değerini Giriniz"));
// var k= Number(prompt("Lütfen k değerini Giriniz"));
// var result3=3*x+4*k;
//console.log(result3)

// örnek-4
// operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3));
// console.log(4+3*2*(3/3-1*6+9/1+(3/3)));

/////////////////////////////////////////////////////////////////
// cast
// Number(prompt("Lütfen derece Giriniz"));
// String(prompt("Lütfen derece Giriniz"));

// var=Global, 
// var sayi1=44;
// var sayi1=44;

// let= local variable , 
// let sayi2=44;
// sayi2=23;

// const=sabit,local variable
// const sayi3=99;
// sayi3=23; // yazamazsınız
// console.log(sayi3);

// undefined NaN isNaN infinity
// undefined // tanımsız bir değişkene atanmış degerdir
// let data4;
// console.log(data4);

// NaN 
// console.log("kelime"/4)

//infinity
// console.log(555/0);

//null      // boş veri tipidir ve herhangi biri null olarak atandığında
//isNaN()   // eksik veya hatalı girişler için kullanılır
//Infinity: Sonsuzluk

/////////////////////////////////////////////////////////////////
// Math
// console.log(Math.PI);
// console.log(Math.E);

// console.log(Math.sqrt(16));
// console.log(Math.pow(2,5));
// console.log(Math.abs(-15));

// console.log(Math.min(-15,100,9,52));
// console.log(Math.max(-15,100,9,52));

// console.log(Math.sin(45));

// console.log(Math.floor(8.9));
// console.log(Math.ceil(8.1));
// console.log(Math.round(5.4));
// console.log(Math.round(5.5));

// console.log(Math.floor(Math.random()*9+1));

/////////////////////////////////////////////////////////////////
// Sayı
// let number1;

// number1=44;
// console.log(number1);

// number1=44.55;
// console.log(number1);
// console.log(typeof number1);

// number1=Number(number1);

// isNaN => false=Sayı
//  isNaN => true =Sayı değil
// console.log(isNaN(44)); 

// //Bilimsel Göster
// let bilimsel=1400000;
// console.log(bilimsel);

// let bilimsel2=1.4E+6;
// console.log(bilimsel2);

// Sayı Sistemleri
// let binary=0b010;
// console.log(binary);

// let octal=0o7521;
// console.log(octal);

// let decimal=7852;
// console.log(decimal);

// let hexadecimal=0xA25;
// console.log(hexadecimal);

/////////////////////////////////////////////////////////////////
// Kelime // String
// const vocabulary="Veri Java işlemleri Java ";
// console.log(vocabulary.length);
// console.log(vocabulary.trim().length);
// console.log(vocabulary.toLowerCase());
// console.log(vocabulary.toUpperCase());
// console.log(vocabulary.startsWith("Java"));
// console.log(vocabulary.endsWith("asd"));

// console.log(vocabulary.concat("sona ekle").concat(" data"));
// console.log(vocabulary.replace(vocabulary,"Eski data"));

// console.log(vocabulary.substring(1));
// console.log(vocabulary.substring(0,3));

// console.log(vocabulary.charAt(0));

// console.log(vocabulary.indexOf("Java"));
// console.log(vocabulary.lastIndexOf("Java"));

/////////////////////////////////////////////////////////////////
// ÖDEV NOT:5 adımı beraber yapalım
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız");
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

//////////////////////////////////////////////////////////////////
// Function
// 1  parametresizReturnsuz
// function parametresizReturnsuz(){
//     console.log("parametresiz Returnsuz")
// }
// parametresizReturnsuz();

// // 2  parametreli Returnsuz
// function parametreliReturnsuz(surname){
//     console.log("parametreli Returnsuz "+ surname)
// }
// parametreliReturnsuz("Mızrak");

// // 3  parametresiz Returnlu 
// function parametresizReturnlu(){
//     //console.log("parametresizReturnlu")
//     return "parametresiz Returnlu";
// }
// let data3=parametresizReturnlu();
// console.log(data3);

// // 4  parametreli Returnlu
// function parametreliReturnlu(number){
//     //console.log("parametresizReturnlu")
//     return "parametreli Returnlu "+number;
// }
// let data4=parametreliReturnlu(44);
// console.log(data4);

//////////////////////////////////////////////////////////////////
// Conditional(if/Else)
let data1 = function () {
    const number = -10;
    if (number > 0) {
        console.log("pozitif");
    } else {
        console.log("negatif");
    }
}
data1();
// Ternary

let data2 = function () {
    const number = -10;
    let result = (number > 0) ? "pozitif" : "negatif";
    console.log(result);
}
data2();

// if else if else
let data3 = function () {
    let number = 555;
    if (number == 1) {
        console.log("1");
    } else if (number == 2) {
        console.log("2");
    } else if (number == 3) {
        console.log("3");
    } else if (number == 4) {
        console.log("4");
    } else if (number == 5) {
        console.log("5");
    } else {
        console.log("1<=x<=5 dışındadır");
    }
}
data3();

// Switch Case
let data4 = function () {
    let number = 555;
    switch (number) {
        case 1:
            console.log("1");
            break;
        case 2:
            console.log("2");
            break;
        case 3:
            console.log("3");
            break;
        case 4:
            console.log("4");
            break;
        case 5:
            console.log("5");
            break;

        default:
            console.log("1<=x<=5 dışındadır");
            break;
    }
}
data4();

//////////////////////////////////////////////////////////////////
// Loop
// break return continue
// try catch
// errorn handling
// debugger

// Callback function
// promise
// Asyn/await

