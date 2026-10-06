const header=document.querySelector('.site-header');
const glow=document.querySelector('.cursor-light');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.getElementById('year').textContent=new Date().getFullYear();
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>24),{passive:true});
addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}},{passive:true});
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
if(!reduced){document.querySelectorAll('.case-visual').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1200px) rotateX(${-y*1.4}deg) rotateY(${x*1.4}deg) translateY(-4px)`});card.addEventListener('pointerleave',()=>card.style.transform='')})}
