import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 
// ── Custom Cursor ────────────────────────────────────────────────────
const dot  = document.createElement('div');
const ring = document.createElement('div');
dot.id  = 'custom-cursor';
ring.id = 'custom-cursor-ring';
document.body.appendChild(dot);
document.body.appendChild(ring);

let ringX = 0, ringY = 0;
let dotX  = 0, dotY  = 0;

document.addEventListener('mousemove', (e) => {
  dotX = e.clientX;
  dotY = e.clientY;
  dot.style.left = dotX + 'px';
  dot.style.top  = dotY + 'px';
});

// Smooth ring follow
const animateRing = () => {
  ringX += (dotX - ringX) * 0.12;
  ringY += (dotY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
};
animateRing();

// Hover effect on interactive elements
document.addEventListener('mouseover', (e) => {
  if (e.target.matches('a, button, [data-hover]')) {
    ring.classList.add('hovered');
    dot.style.opacity = '0.5';
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.matches('a, button, [data-hover]')) {
    ring.classList.remove('hovered');
    dot.style.opacity = '1';
  }
});
// ────────────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
    <App />
      </BrowserRouter>
  </StrictMode>,
)
