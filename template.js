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
//data1();
// Ternary

let data2 = function () {
    const number = -10;
    let result = (number > 0) ? "pozitif" : "negatif";
    console.log(result);
}
//data2();

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
//data3();

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
//data4();

//////////////////////////////////////////////////////////////////
// Loop
// for
let data5 = function () {
    for (let i = 1; i <= 10; i++) {
        document.writeln(i + " ")
    }
}
//data5();

// while
let data6 = function () {
    document.writeln("<br/>")
    let i = 1;
    while (i <= 10) {
        document.writeln(i + " ")
        i++;
    }
}
//data6();

// do-while
let data7 = function () {
    document.writeln("<br/>")
    let i = 1;
    do {
        document.writeln(i + " ")
        i++;
    }
    while (i <= 10);
}
//data7();

//////////////////////////////////////////////////////////////////
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

let result = () => {
    let userData = Number(prompt("Lütfen bir sayı giriniz"));
    if (userData % 2 == 0) {
        console.log("Çift sayıdır");
    } else {
        console.log("Tek sayıdır");
    }
}
//result()

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak.

//////////////////////////////////////////////////////////////////
// break: döngünün çalışmasına izin verme
// return: metotun çalışmasına izin verme
// continue: sadece bir seferlik o şartta çalışma

// return  : metotun çalışmasını durdurur
// break   : döngünün çalışmasını durdurur
// continue: sadece 1 kereye mahsus durur sonra devam eder.

// SORU 1<=userData<=50 
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği 
// Örnek: 1<=user 1+2+3+...userdatası
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ? 
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan program?
let sumExamples = () => {
    let commonSum = 0;
    let oddSum = 0, oddCounter = 0, oddNumber = "";
    let evenSum = 0, evenCounter = 0, evenNumber = "";
    let user = Number(prompt("Lütfen bitiş sayısı giriniz"));

    // Loop
    for (let i = 1; i <= user; i++) {
        if (user == 44) {
            console.log("secret-key sayısı sistemde çıkış yapıldı ");
            break;
        }

        if (i === 50) {
            console.log("50 sayısının üstünde toplama yapamıyorum");
            break;
        }

        if (i === 7) {
            console.log("7 sayısını toplamayacağım.");
            continue;
        }

        // tek çift
        if (i % 2 == 0) {
            evenCounter++;
            evenSum = evenSum + i;
            evenNumber = evenNumber + " " + i
        } else {
            oddCounter++;
            oddSum += i;
            oddNumber = oddNumber + " " + i
        }
        commonSum += i;
    } //end for 1 2 3 4 5
    console.log("Toplam: " + commonSum);

    console.log("Tek sayılar: " + oddNumber);
    console.log("Tek sayı Adeti: " + oddCounter);
    console.log("Tek Toplam: " + oddSum);

    console.log("Çift sayılar: " + evenNumber);
    console.log("Çift sayısı: " + evenCounter);
    console.log("Çift Toplam: " + evenSum);
}
//sumExamples()

///////////////////////////////////////////////////////////////////////////////////data1
// Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin

// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// NOT: cast kullalım ?

// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

// Örnek-7:
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

//////////////////////////////////////////////////////////////////
// try catch
let tryCatchTutorials = () => {
    try {
        alertx("deneme");
    } catch (error) {
        console.log("Hata mesajı: " + error.message);
        console.log("Hata mesajı adı: " + error.name);
        console.error(error);
    } finally {
        console.log("port.closed")
    }
    console.log("son satır");
}
//tryCatchTutorials();

// error handling
// debug nasıl atılır ?
//////////////////////////////////////////////////////////////////
// Diziler
let arrayTutorials = () => {
    let dizi = [9, 3, 1, 6, 2];
    // dizi[0]=1;
    // dizi[1]=2;
    // dizi[2]=3;
    //console.log(dizi);
    //console.log(dizi[1]);
    // console.log(dizi[0]);
    // console.log(dizi[4]);
    // console.log(dizi[dizi.length-1]);

    console.log(dizi);
    console.log(typeof dizi);
    dizi.push(99); //sona ekleme
    dizi.unshift(11);//başa ekleme

    dizi.pop(); //sona çıkar
    dizi.shift(); //baştan çıkar
    dizi.sort();
    dizi.reverse();
    console.log(dizi);

    //dongüler
    //iterative
    for (let i = 0; i < dizi.length; i++) {
        document.writeln(dizi[i] + " ");
    }
    // for in
    document.writeln("<br/>");
    for (let temp in dizi) {
        document.writeln(temp);
    }

    // for of
    document.writeln("<br/>");
    for (let temp of dizi) {
        document.writeln(temp);
    }

    // for in off
    document.writeln("<br/>");
    for (let temp in dizi) {
        document.writeln(temp + " => " + dizi[temp] + "<br/>");
    }

    // forEach
    document.writeln("<br/>");
    dizi.forEach(function (value, index, array) {
        document.writeln(index + " => " + value + "<br/>");
    });

    // forEach interpolation
    document.writeln("<br/>");
    dizi.forEach(function (value, index, array) {
        document.writeln(`${index} => ${value} <br/>`);
    });
}
//arrayTutorials();

// Ödev: rastgele 5 tane sayıyı diziye atan algoritma yazınız ?
// let numbers = [];
// for (var i = 0; i < 5; i++) {
//   numbers[i] = Math.floor(Math.random() * 100);
// }
// console.log(numbers);


//////////////////////////////////////////////////////////////////

let arr = () => {
    let tempArray = [2, 6, 5, 3, 1];
    return tempArray;
}

let tutorialArray = () => {
    let dizi = arr();
    //console.log(dizi);

    // ForEach
    // callbackfn: (value: T, index: number, array: T[]
    dizi.forEach(function (value, index, array) {
        document.writeln(` ${index} => ${value} <br/>`);
    });

    // Filter
    // predicate: (value: T, index: number, array: T[]
    // Not: var olan dizi değerini değiştirmiyor
    let newFilter = dizi.filter(function (value, index) {
        return value % 2 == 0;
    });
    document.writeln(newFilter + "<br/>");

    dizi.filter(function (value, index) {
        return value % 2 == 0;
    }).forEach(function (value, index, array) {
        document.writeln(` ${index} => ${value} <br/>`);
    });
    //console.log(dizi);

    // Map
    // Not: var olan dizi değerini değiştirmiyor
    // callbackfn: (value: T, index: number, array: T[]
    dizi.map(function (value, index, array) {
        return value += 1000;
    }).forEach(function (value, index, array) {
        document.writeln(` ${index} => ${value} <br/>`);
    });
    //console.log(dizi);

    // Fill
    // value: T, start?: number, end?: number
    // eğer başlangıç veya bitiş vermezseniz 0 indisten itibareb verilen değeri doldurur.
    dizi.fill("44").forEach(function (value, index, array) {
        document.writeln(` ${index} => ${value} <br/>`);
    });
    document.writeln("<br/>")
    dizi.fill("23", 0, 2).forEach(function (value, index, array) {
        document.writeln(` ${index} => ${value} <br/>`);
    });
}
//tutorialArray()

//////////////////////////////////////////////////////////////////
// Object
let obj = () => {
    let student = {
        "name": "Hamit",
        "surname": "Mızrak",
        "number": 44,
        "isLogin": true,
        "softwareTech": ["Html5", "Css3", "Js"],
        "fullName": function () {
            console.log(`${this["name"]} ${this.surname}`);
        },
        "java": {
            name: "Java",
            year: 5
        }
    };
    // variable
    console.log(student);
    console.log(student.name.toUpperCase());
    console.log(student.java.year);

    // nested Object
    console.log(student["java"]["year"]);

    // Function calling
    student.fullName();

    // object literal
    student.city = "Malatya";
    console.log(student.city);

    console.log("*********");
    // bütün objeyi ekrandan göster
    for (let temp in student) {
        console.log(`${temp} => ${student[temp]}`);
    }
}
//obj();

// constructorda this önemli bir keyword(kalıtımlama)
// object constructor
let obj2 = () => {
    let Student = function (name, surname) {
        this.name = name;
        this.surname = surname;
        console.log(this);
    }
    let result = new Student("Hamit", "Mızrak");
}
//obj2();

// stringify,parse
let obj3 = () => {
    let obje = {
        "adi": "Hamit",
        "soyadi": "Mızrak",
    };
    console.log(obje);

    // Obje => String'e çevir
    let value = JSON.stringify(obje);
    console.log(value);

    // String => Obje'e çevir
    let parse = JSON.parse(value);
    let name = parse.adi;
    console.log(name);
}
//obj3();

// Bir fonksiyona başka bir obje bağlamak.
// this.adi yoktur varmış gibi devam ediyorum.
// call,apply
// parametresiz Constructor(ister anonymous ister arrow Function yazabilirsiniz)
let notParameterCallApplyBind = () => { // function(){}

    // Function
    let functionOtherObject = function () {
        document.writeln(`Parametresiz function: ${this.adi}<br/>`)
    }

    // Obje
    let objeData = {
        "adi": "HamitM",
    };

    //Function call,apply,bind (parametresiz)
    // call
    functionOtherObject.call(objeData);
    // apply
    functionOtherObject.apply(objeData);
    // bind: değişkene ver değişken objesini kullanb
    let deneme = functionOtherObject.bind(objeData);
    deneme();
}
notParameterCallApplyBind();


// parametreli Constructor(ister anonymous ister arrow Function yazabilirsiniz)
let parameterCallApplyBind = () => {

    // Function
    let functionOtherObject = function (number1) {
        document.writeln(`Parametreli function: ${this.adi} Number1=> ${number1} <br/>`)
    }

    // Obje
    let objeData = {
        "adi": "HamitM",
    };

    //Function call,apply,bind (parametreli)
    // call
    functionOtherObject.call(objeData,"44");
    // apply
    functionOtherObject.apply(objeData,["44"]);

    // bind: değişkene ver değişken objesini kullanb
    let deneme = functionOtherObject.bind(objeData,"44");
    deneme();
}
parameterCallApplyBind();

//////////////////////////////////////////////////////////////////
// Araştırma 
// DRY
// KISS
// YAGNI
// DUMMY CODE
// CLEAN CODE
// SPAGETTI CODES
// S.O.L.I.D

//////////////////////////////////////////////////////////////////
// setInterval(Anonymous Function)
setInterval(function(){
    console.log("Anonymous Function");
},2000)

// setInterval(Arrow Function)
setInterval(()=>{
    console.log("Arrow Function");
},3000)

// Monad
// callbackfunction
// promise

// D.O.M
// event
// jquery

// Sıfırdan project yaz(Frontend ile)
// Git/ Linux learning

// SQL
