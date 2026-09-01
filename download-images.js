
const fs = require('fs');
const https = require('https');
const images = [
  { name: 'hundred-islands.jpg', url: 'https://images.unsplash.com/photo-1518182170546-076616fd432b?q=80&w=1000&auto=format&fit=crop' },
  { name: 'bolinao-lighthouse.jpg', url: 'https://images.unsplash.com/photo-1559403816-b84fbbf65bf0?q=80&w=1000&auto=format&fit=crop' },
  { name: 'balungao-hot-spring.jpg', url: 'https://images.unsplash.com/photo-1544158431-7e8c0e66eb12?q=80&w=1000&auto=format&fit=crop' },
  { name: 'manaoag-church.jpg', url: 'https://images.unsplash.com/photo-1548625361-ec8f381c8c83?q=80&w=1000&auto=format&fit=crop' },
  { name: 'patar-beach.jpg', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop' },
  { name: 'st-james-church.jpg', url: 'https://images.unsplash.com/photo-1520696773373-c1f0163351ec?q=80&w=1000&auto=format&fit=crop' },
  { name: 'hero.jpg', url: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2000&auto=format&fit=crop' },
  { name: 'about-hero.jpg', url: 'https://images.unsplash.com/photo-1551046467-347bb832da2b?q=80&w=2000&auto=format&fit=crop' },
  { name: 'culture.jpg', url: 'https://images.unsplash.com/photo-1583344600122-eb163ffc323f?q=80&w=1000&auto=format&fit=crop' }
];

images.forEach(img => {
  const file = fs.createWriteStream('./public/images/' + img.name);
  https.get(img.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded ' + img.name);
    });
  });
});

