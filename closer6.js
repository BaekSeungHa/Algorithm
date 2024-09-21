function count() {
  for (var i = 0; i < 10; i++) {
    (function (j) {
      console.log(j);
    })(i);
  }
}

count();
