import { substring } from "stringz";

const MIN_EMOJI_SIZE = 50;
const MAX_EMOJI_SIZE = 126;

let timerId;

export const allEmojis = [
  substring("😃", 0, 1),
  substring("😄️", 0, 1),
  substring("😊", 0, 1),
  substring("😂", 0, 1),
  substring("😝", 0, 1),
  substring("😋", 0, 1),
  substring("😜", 0, 1),
  substring("🤗", 0, 1),
  substring("🤣", 0, 1),
  substring("😍", 0, 1),
  substring("😘", 0, 1)
];
const EMOJI_COUNT = allEmojis.length;

export function stopAnimation() {
  clearInterval(timerId);
}

export function startAnimation() {
  const objects = [];
  for (var i = 0; i < EMOJI_COUNT; i++) {
    const obj = {
      x: getRandom(0, window.innerWidth),
      y: getRandom(0, window.innerHeight),
      dirX: getDirection(),
      dirY: getDirection(),
      size: getRandom(50, 126)
    };
    let sizeNew = obj.size;
    if (getDirection()) {
      sizeNew += getNewSize();
      obj.grow = true;
    } else {
      sizeNew -= getNewSize();
      obj.grow = false;
    }
    obj.sizeNew = sizeNew;
    objects.push(obj);
  }

  timerId = setInterval(() => {
    for (var i = 0; i < EMOJI_COUNT; i++) {
      var elem = document.getElementById("animate-" + i);
      let obj = objects[i];

      // At the bottom
      if (obj.y === window.innerHeight - 50 && obj.dirY === 1) {
        obj.dirY *= -1;
        obj.dirX *= getDirection();
      }

      // At the top
      if (obj.y <= -100 && obj.dirY === -1) {
        obj.dirY *= -1;
        obj.dirX *= getDirection();
      }

      // left border
      if (obj.x === 0 && obj.dirX === -1) {
        obj.dirY *= getDirection();
        obj.dirX *= -1;
      }

      // right border
      if (obj.x === window.innerWidth && obj.dirX === 1) {
        obj.dirY *= getDirection();
        obj.dirX *= -1;
      }

      obj.x = obj.x + 1 * obj.dirX;
      obj.y = obj.y + 1 * obj.dirY;

      elem.style.top = obj.y + "px";
      elem.style.left = obj.x + "px";

      if (obj.grow) {
        if (obj.size === MAX_EMOJI_SIZE) {
          obj.sizeNew = getNewSize();
          obj.grow = false;
          obj.size -= 1;
        } else {
          obj.size += 1;
        }
      } else {
        if (obj.size === MIN_EMOJI_SIZE) {
          obj.grow = true;
          obj.sizeNew = getNewSize();
          obj.size += 1;
        } else {
          obj.size -= 1;
        }
      }

      elem.style["font-size"] = obj.size + "px";
    }
  }, 15);
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function getDirection() {
  return getRandom(0, 1) ? 1 : -1;
}

function getNewSize() {
  return getRandom(MIN_EMOJI_SIZE, MAX_EMOJI_SIZE);
}
