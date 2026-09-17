/* Muestra un acceso útil al asistente. Si n8n tiene webhook real, usa su widget; si no, ofrece contacto directo. */
(function(){'use strict';
function init(){
  var root=document.getElementById('n8n-chat');
  if(!root)return;
  var launcher=document.createElement('button');
  launcher.type='button';launcher.className='powerflow-chat-launcher';launcher.setAttribute('aria-label','Abrir asistente PowerFlow');launcher.setAttribute('aria-expanded','false');launcher.setAttribute('aria-controls','powerflow-chat-panel');
  launcher.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-3.4-.7L3 21l1.7-5A8.5 8.5 0 1 1 20 11.5Z"/><path d="M8 10h8M8 14h5"/></svg>';
  var panel=document.createElement('section');panel.id='powerflow-chat-panel';panel.className='powerflow-chat-panel';panel.hidden=true;panel.setAttribute('aria-label','Asistente PowerFlow');
  panel.innerHTML='<div class="powerflow-chat-panel-header"><span>Asistente PowerFlow</span><button type="button" aria-label="Cerrar asistente">×</button></div><div class="powerflow-chat-panel-body"><p>Buenas tardes 👋 ¿Qué proceso quieres automatizar? Podemos ayudarte a encontrar por dónde empezar.</p><a href="https://api.whatsapp.com/send?phone=34638619588&amp;text=Hola%20PowerFlow%2C%20quiero%20automatizar%20un%20proceso" target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</a><a href="#contacto">Enviar una consulta</a></div>';
  root.insertAdjacentElement('afterend',panel);root.insertAdjacentElement('afterend',launcher);
  function close(){panel.hidden=true;launcher.setAttribute('aria-expanded','false');launcher.focus();}
  launcher.addEventListener('click',function(){panel.hidden=!panel.hidden;launcher.setAttribute('aria-expanded',String(!panel.hidden));});
  panel.querySelector('button').addEventListener('click',close);
  panel.querySelector('a[href="#contacto"]').addEventListener('click',close);
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden)close();});
  /* El widget n8n sólo aparece cuando dispone de URL real. Evitar duplicar botones. */
  var attempts=0;var observer=new MutationObserver(function(){if(root.querySelector('.chat-window-toggle,[class*="chat-window-toggle"]')){launcher.hidden=true;panel.hidden=true;observer.disconnect();}});
  observer.observe(root,{childList:true,subtree:true});
  if(root.querySelector('.chat-window-toggle,[class*="chat-window-toggle"]')){launcher.hidden=true;observer.disconnect();}
  window.addEventListener('pagehide',function(){observer.disconnect();},{once:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
