function popUIButton() {
  for (var i = 1; i <= 5; i++) {
    document
      .getElementById("button" + i)
      .addEventListener("click", function () {
        alert(`지금 누른 버튼은 ${i}번째 입니다!`);
      });
  }
}

popUIButton();
