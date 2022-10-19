// NHẬP XUẤT MẢNG
var numberList = [];

function createNumber() {
  var tetsNumber = +document.getElementById("exampleInputNumber").value;

  var newNumber = new number(tetsNumber);

  numberList.push(newNumber);
  document.getElementById("arr__number").innerHTML = showKq();
}

function showKq() {
  var kq = "";
  numberList.forEach((element) => {
    kq += element.number + " ";
  });
  return kq;
}

// BÀI 1 TỔNG DƯƠNG
function sumNumber() {
  var sum = 0;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i].number > 0) {
      sum += numberList[i].number;
    }
  }
  document.getElementById("sumNumber").style.display = "block";
  document.getElementById("sum__number").innerHTML = sum;
}

// BÀI 2 ĐẾM SỐ DƯƠNG
function countNumber() {
  var count = 0;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i].number > 0) {
      count++;
    }
  }
  document.getElementById("countNumber").style.display = "block";
  document.getElementById("count__number").innerHTML = count;
}

// BÀI 3 TÌM SỐ NHỎ NHẤT
function minNumber() {
  var min = numberList[0].number;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i].number < min) {
      min = numberList[i].number;
    }
  }

  document.getElementById("minNumber").style.display = "block";
  document.getElementById("min__number").innerHTML = min;
}

// BÀI 4 TÌM SỐ DƯƠNG NHỎ NHẤT
function minDNumber() {
  var min;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i].number > 0) {
      min = numberList[i].number;
      break;
    }
  }
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i].number < min && numberList[i].number > 0) {
      min = numberList[i].number;
    }
  }

  document.getElementById("minDNumber").style.display = "block";
  document.getElementById("min__Dnumber").innerHTML = min;
}

// BÀI 5 TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG
function tensNumber() {
  var tens = 0;
  var result;
  for (var i = numberList.length - 1; i >= 0; i--) {
    if (numberList[i].number % 2 === 0 && numberList[i].number > 0) {
      tens = numberList[i].number;
      break;
    }
  }
  if (tens === 0) {
    result = -1;
  } else {
    result = tens;
  }

  document.getElementById("tensNumber").style.display = "block";
  document.getElementById("tens__number").innerHTML = result;
}

// BÀI 6 ĐỔI CHỔ 2 VỊ TRÍ
function convertNumber() {
  var location1 = document.getElementById("location1").value;
  var location2 = document.getElementById("location2").value;
  var temporary = numberList[location1];
  numberList[location1] = numberList[location2];
  numberList[location2] = temporary;

  document.getElementById("convertNumber").style.display = "block";
  document.getElementById("convert__number").innerHTML = showKq();
}

// BÀI 7 SẮP XẾP MẢNG TĂNG DẦN
function increasingNumber() {
  var temp;
  for (var i = numberList.length - 1; i >= 0; i--) {
    var isSwapped = false;
    for (var j = 0; j < i; j++) {
      if (numberList[j].number > numberList[j + 1].number) {
        temp = numberList[j].number;
        numberList[j].number = numberList[j + 1].number;
        numberList[j + 1].number = temp;
        isSwapped = true;
      }
    }
    if (isSwapped === false) {
      document.getElementById("increasingNumber").style.display = "block";
      document.getElementById("increasing__number").innerHTML = showKq();
      return;
    }
  }
  document.getElementById("increasingNumber").style.display = "block";
  document.getElementById("increasing__number").innerHTML = showKq();
}

// BÀI 8 TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN TRÒN MẢNG
function primeNumber(n) {
  for (var i = 2; i <= n - 1; i++) {
    if (n % i === 0) {
      return 0;
    }
  }
  return 1;
}

function checkPrimeNumber() {
  var kq = -1;
  for (var i = 0; i < numberList.length; i++) {
    if (primeNumber(numberList[i].number) === 1) {
      kq = numberList[i].number;
      console.log(kq);
      document.getElementById("primeNumber").style.display = "block";
      document.getElementById("prime__number").innerHTML = kq;
      return;
    }
  }
  document.getElementById("primeNumber").style.display = "block";
  document.getElementById("prime__number").innerHTML = kq;
}

//  BÀI 9 NHẬP THÊM 1 MẢNG XEM MẢNG CÓ BN SỐ NGUYÊN

var numberListFloat = [];

function createNumberFloat() {
  var floatNumber = +document.getElementById("numberFloat").value;

  var newNumberFloat = new numberFloat(floatNumber);
  numberListFloat.push(newNumberFloat);
  document.getElementById("float__number").innerHTML = showKq2();
  document.getElementById("btnFloat").style.display = "block";
}

function showKq2() {
  var kq = "";
  numberListFloat.forEach((element) => {
    kq += element.numberFloat + " ";
  });
  return kq;
}

function checkNumberListFloat(){
  var number;
  var count = 0;
  for (var i = 0; i < numberListFloat.length; i++) {
    number = Math.ceil(numberListFloat[i].numberFloat);
    if (numberListFloat[i].numberFloat === 0) {
      continue;
    } else if (number - numberListFloat[i].numberFloat === 0){
      count++;
    }
  }
  document.getElementById("checkNumberFloat").style.display = "block";
  document.getElementById("check__numberFloat").innerHTML = count+" số";
}

// BÀI 10 SO SÁNH SÔ DƯƠNG SỐ ÂM
function count2Number() {
  var count1 = 0;
  var count2 = 0;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i].number > 0) {
      count1++;
    } else if (numberList[i].number < 0) {
      count2++;
    }
  }
  if (count1 > count2) {
    document.getElementById("count2Number").style.display = "block";
    document.getElementById("count2__number").innerHTML = "Số dương nhiều hơn";
  } else if (count1 < count2) {
    document.getElementById("count2Number").style.display = "block";
    document.getElementById("count2__number").innerHTML = "Số âm nhiều hơn";
  } else {
    document.getElementById("count2Number").style.display = "block";
    document.getElementById("count2__number").innerHTML = "Cả 2 số bằng nhau";
  }
}



