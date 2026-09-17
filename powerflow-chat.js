/* No simular un chatbot: sólo se muestra el widget conversacional real de n8n.
   La URL del webhook se configura en la integración de index.html. */
(function(){'use strict';
function init(){
  var root=document.getElementById('n8n-chat');
  if(!root)return;
  document.querySelectorAll('.powerflow-chat-launcher,.powerflow-chat-panel').forEach(function(node){node.remove();});
  var old=root.querySelector('.powerflow-chat-launcher,.powerflow-chat-panel');
  if(old)old.remove();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
