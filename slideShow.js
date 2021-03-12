var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slideTotal = 9;
  if (n > slideTotal) {slideIndex = 1}    
  if (n < 1) {slideIndex = slideTotal}

  var captions = ['암행어사 출두요', '망사옷 입은 이몽룡, number1 보아 비켜!', '이과장', '몽튜어디스', '몽새로이', '두둥!', '아기상어', '야 놔봐!!', '뭐 한복입은거 첨보냐'];
  document.getElementById("image").src='./mrCloset/c'+slideIndex + ".png";

  document.getElementById("numbertext").innerHTML = '[' + slideIndex + '/' + slideTotal + ']';
  document.getElementById("caption").innerText = captions[slideIndex-1];
}
