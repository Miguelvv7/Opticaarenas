// ── Mobile menu ──
(function(){
  const btn=document.getElementById('mob-toggle'),
        menu=document.getElementById('mob-menu'),
        icon=document.getElementById('mob-icon');
  if(!btn)return;
  btn.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    icon.textContent=open?'close':'menu';
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
  });
  document.addEventListener('click',e=>{
    if(!btn.contains(e.target)&&!menu.contains(e.target)){
      menu.classList.remove('open');
      icon.textContent='menu';
      btn.setAttribute('aria-expanded','false');
      btn.setAttribute('aria-label','Abrir menú');
    }
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&menu.classList.contains('open')){
      menu.classList.remove('open');
      icon.textContent='menu';
      btn.setAttribute('aria-expanded','false');
      btn.setAttribute('aria-label','Abrir menú');
      btn.focus();
    }
  });
})();

// ── Nav shadow on scroll ──
window.addEventListener('scroll',()=>{
  const h=document.getElementById('site-header');
  if(h) h.classList.toggle('shadow-nav',scrollY>10);
},{ passive:true });

// ── Scroll reveal ──
(function(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target);}});
  },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.sr,.sr-l,.sr-r,.sr-s').forEach(el=>obs.observe(el));
})();

// ── Back to top ──
(function(){
  const b=document.getElementById('btt');
  if(!b)return;
  b.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  window.addEventListener('scroll',()=>{
    b.style.opacity=scrollY>400?'1':'0';
    b.style.pointerEvents=scrollY>400?'auto':'none';
  },{passive:true});
})();

// ── Toast helper ──
function showToast(msg,dur=3000){
  const t=document.getElementById('toast');
  if(!t)return;
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),dur);
}

// ── Live open/closed status (hero pill on index.html) ──
(function(){
  const el=document.getElementById('hero-status');
  if(!el)return;
  const now=new Date();
  const day=now.getDay();
  const h=now.getHours()*100+now.getMinutes();
  const isOpen=day>=1&&day<=5&&((h>=1000&&h<=1330)||(h>=1700&&h<=2030));
  if(isOpen){
    el.innerHTML='<span class="open-pill open"><span class="status-dot green"></span>Abierto ahora</span>';
  } else {
    const opens=day>=1&&day<=5?(h<1000?'a las 10:00':h<=1330?'a las 17:00':day<5?'mañana a las 10:00':'el lunes a las 10:00'):'el lunes a las 10:00';
    el.innerHTML=`<span class="open-pill closed"><span class="status-dot red"></span>Cerrado · Abre ${opens}</span>`;
  }
})();

// ── Live open/closed badge (ubicacion.html) ──
(function(){
  const badge=document.getElementById('open-badge');
  if(!badge)return;
  const now=new Date();
  const day=now.getDay();
  const h=now.getHours()*100+now.getMinutes();
  const open=day>=1&&day<=5&&((h>=1000&&h<=1330)||(h>=1700&&h<=2030));
  badge.classList.remove('hidden');
  badge.innerHTML=open
    ?'<span class="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full"><span class="w-2 h-2 rounded-full bg-green-500 inline-block"></span>Abierto ahora</span>'
    :'<span class="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1.5 rounded-full"><span class="w-2 h-2 rounded-full bg-red-400 inline-block"></span>Cerrado ahora</span>';
})();

// ── FAQ accordion ──
(function(){
  document.querySelectorAll('.faq-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const expanded=btn.getAttribute('aria-expanded')==='true';
      document.querySelectorAll('.faq-btn').forEach(b=>{
        b.setAttribute('aria-expanded','false');
        const body=document.getElementById(b.getAttribute('aria-controls'));
        if(body)body.classList.remove('open');
      });
      if(!expanded){
        btn.setAttribute('aria-expanded','true');
        const body=document.getElementById(btn.getAttribute('aria-controls'));
        if(body)body.classList.add('open');
      }
    });
  });
})();

// ── Animated counters ──
function animCount(el){
  const target=parseFloat(el.dataset.target);
  const decimals=el.dataset.decimals?parseInt(el.dataset.decimals):0;
  const dur=1400,step=16;
  let cur=0;
  const inc=target/(dur/step);
  const id=setInterval(()=>{
    cur=Math.min(cur+inc,target);
    const display=decimals>0
      ? cur.toFixed(decimals).replace('.',',')
      : Math.floor(cur).toString();
    el.textContent=display+(el.dataset.suffix||'');
    if(cur>=target)clearInterval(id);
  },step);
}
(function(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){animCount(e.target);obs.unobserve(e.target);}});
  },{threshold:.5});
  document.querySelectorAll('[data-target]').forEach(el=>obs.observe(el));
})();

// ── Cookie banner (RGPD) ──
(function(){
  try{
    if(!document.cookie.includes('oa_cookies=1')){
      const b=document.getElementById('cookie-banner');
      if(b){b.classList.remove('hidden');}
    }
    const btn=document.getElementById('cookie-accept');
    if(btn){btn.addEventListener('click',function(){
      document.cookie='oa_cookies=1; max-age=15552000; path=/; SameSite=Lax';
      const b=document.getElementById('cookie-banner');
      if(b){b.classList.add('hidden');}
    });}
  }catch(e){}
})();
