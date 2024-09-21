function Var() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

Var();

function Let() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

Let();

function Const() {
  for (let i = 1; i < 6; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

Const();
