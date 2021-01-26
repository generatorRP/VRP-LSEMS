const canvas = document.querySelector('.canvas');
const image = document.querySelector('.canvas-image');
const input = document.querySelector('.inputForm');
const ctx = canvas.getContext('2d');
// console.log(input);

onload = () => {
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  ctx.drawImage(image, 0, 0);
  ctx.font = '52px BTBrikRegular';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  // Draw cached Text
  ctx.shadowOffsetY = 5;
  ctx.shadowColor = 'rgba(0,0,0,0.8)';
  // Text starts centered at 1190
  ctx.fillText(input.value.toUpperCase().trim(), 1190, 140);
};

input.addEventListener('keyup', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = 'rgba(0,0,0,0.8)';
  ctx.drawImage(image, 0, 0);
  ctx.shadowOffsetY = 5;
  ctx.shadowColor = 'rgba(0,0,0,0.8)';
  // Text starts centered at 1190
  ctx.fillText(e.target.value.toUpperCase().trim(), 1190, 140);
});
