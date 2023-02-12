let id;
let btn = document.querySelector('button');
btn.addEventListener('click', myMove)

function myMove() {
  let elem = document.getElementById("animatedThing");
  let pos = 0; //starting position
  let swt = 0; //starting swt
  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
    swt = 0;
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + "px";

    if (pos == 350 && swt == 0) {
      clearInterval(id);
      id = setInterval(downLeft, 10);
    }
  }

  function downLeft() {
    swt = 1;
    pos--;
    elem.style.left = pos + "px";

    if (pos == 0 && swt == 1) {
      clearInterval(id);
      id = setInterval(downRight, 10);
    }
  }

  function downRight() {
    pos++;
    elem.style.left = pos + "px";

    if (pos == 350 && swt == 1) {
      clearInterval(id);
      id = setInterval(reverse, 10);
    }
  }

  function reverse() {
    swt = 0;
    pos--;
    elem.style.top = pos + "px";
    elem.style.left = pos + "px";

    if (pos == 0 && swt == 0) {
      clearInterval(id);
      id = setInterval(horiz, 10);
    }
  }

  function horiz() {
    swt = 2;
    pos++;
    elem.style.left = pos + "px";

    if (pos == 350 && swt == 2) {
      clearInterval(id);
      id = setInterval(reverseHoriz, 10);
    }
  }

  function reverseHoriz() {
    pos--;
    elem.style.left = pos + "px";

    if (pos == 0 && swt == 2) {
      clearInterval(id);
      id = setInterval(frame, 10);
    }
  }
}

myMove();
