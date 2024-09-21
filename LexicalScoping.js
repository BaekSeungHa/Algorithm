var name = "bangul"; // 전역 변수 name

function cat() {
  var name = "cheese"; // 지역 변수 cheese
  return function () {
    console.log(name);
  };
}

function meow() {
  // 선언 시 가장 가까운 상위 스코프의 변수를 참조
  console.log(`${name}: meow`);
}

cat(); // bangul: meow
meow(); // bangul: meow
