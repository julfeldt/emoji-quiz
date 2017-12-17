const audioCount = document.getElementsByTagName("audio").length;

const sound = {
  playNope() {
    document.getElementById(`audio-${this.getRandom(1, audioCount)}`).play();
  },
  getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

export default sound;
