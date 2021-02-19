const canvas = document.querySelector('.canvas');
const image = document.querySelector('.canvas-image');
const ctx = canvas.getContext('2d');
const inputs = document.querySelector('.inputs');
const ranks = document.querySelector('.ranks');

//images preloaded
let images = {};
let rank = null;
ranks.addEventListener('click', (e) => {
  if (e.target.tagName === 'INPUT') {
    // Setting class, image
    Array.from(ranks.children).forEach((each) =>
      each.classList.remove('btn-active')
    );
    e.target.classList.add('btn-active');
    rank = e.target;
    render();
  }
});

const render = () => {
  // Reset
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.shadowOffsetY = 0;
  // Draw Image
  ctx.drawImage(image, 0, 0);
  if (rank !== null) {
    let logo = new Image();
    logo.src = images[rank.name].src;
    ctx.drawImage(logo, 465, 105);
  }
  // Set text properties
  ctx.shadowOffsetY = 5;
  ctx.shadowOffsetx = 4;
  ctx.shadowColor = 'rgb(0,0,0)';
  ctx.shadowBlur = 4;

  ctx.font = '60px Source Sans Pro';
  ctx.fillText(inputs.fullname.value.toUpperCase().trim(), 700, 130);
  ctx.font = '46px Source Sans Pro';
  ctx.fillText(inputs.badge.value.toUpperCase().trim(), 700, 190);
  ctx.shadowOffsetY = 3;
  ctx.shadowOffsetx = 3;
  ctx.shadowBlur = 1;
  ctx.font = '34px Source Sans Pro';
  ctx.fontWeight = 'bold';
  ctx.fillText(inputs.line1.value.toUpperCase().trim(), 700, 260);
  ctx.fillText(inputs.line2.value.toUpperCase().trim(), 700, 310);
};
inputs.fullname.addEventListener('keyup', () => {
  render();
});
inputs.badge.addEventListener('keyup', () => {
  render();
});
inputs.line1.addEventListener('keyup', () => {
  render();
});
inputs.line2.addEventListener('keyup', () => {
  render();
});

onload = () => {
  inputs.reset();
  loadImages(sources);

  // Set canvas properties
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  ctx.drawImage(image, 0, 0);
  ctx.textAlign = 'left';
  ctx.fillStyle = 'white';
};

const loadImages = (sources) => {
  for (var img in sources) {
    images[img] = new Image();
    images[img].src = sources[img];
  }
};

const sources = {
  chief: './images/chief.png',
  assistantChief: './images/assistant-chief.png',
  deputyChief: './images/deputy-chief.png',
  captain: './images/captain.png',
  lieutenant: './images/lieutenant.png',
  supervisingParamedic: './images/supervising-paramedic.png',
  paramedic: './images/paramedic.png',
  seniorEmt: './images/senior-emt.png',
  emt: './images/emt.png',
};
