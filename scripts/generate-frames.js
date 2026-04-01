const fs = require('fs');
const path = require('path');

const FRAMES_DIR = path.join(__dirname, '..', 'public', 'frames');
const COFFEE_DIR = path.join(__dirname, '..', 'public', 'coffee');

// Ensure directories exist
if (!fs.existsSync(FRAMES_DIR)) {
  fs.mkdirSync(FRAMES_DIR, { recursive: true });
}
if (!fs.existsSync(COFFEE_DIR)) {
  fs.mkdirSync(COFFEE_DIR, { recursive: true });
}

console.log('Generating dummy files (just empty files so Next.js doesnt throw 404s immediately)...');

// Generate 120 dummy frames
for (let i = 0; i < 120; i++) {
  const framePath = path.join(FRAMES_DIR, `frame_${i}.webp`);
  if (!fs.existsSync(framePath)) {
    // Write a tiny invalid image or just an empty file.
    // For local dev, image objects might fail to load it, but we handled onError in the code.
    fs.writeFileSync(framePath, '');
  }
}

// Generate dummy coffee images
const coffeeImages = ['cappuccino.jpg', 'latte.jpg', 'mocha.jpg', 'cup-centered.png', 'splash-banner.jpg', 'bean.png'];
coffeeImages.forEach(img => {
  const imgPath = path.join(COFFEE_DIR, img);
  if (!fs.existsSync(imgPath)) {
    fs.writeFileSync(imgPath, '');
  }
});

console.log('Dummy files generated. Note: these are empty files. In browsers, image fallbacks via onError will be displayed.');
