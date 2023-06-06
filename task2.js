const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
let image = new Image();
image.src = './car.jpg';
image.onload = function () {
  ctx.drawImage(image, 0, 0);
  ctx.font = '30px Arial';
  ctx.fillStyle = 'black';
  ctx.shadowColor = 'black';
  ctx.shadowBlur = 5;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.fillText('HELLO BMW', 70, 270);
};
