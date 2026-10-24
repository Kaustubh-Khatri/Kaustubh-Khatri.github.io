(function(){
  var c=window.SITE||{}, root=document.documentElement;
  try{var t=localStorage.getItem("theme");if(t)root.dataset.theme=t}catch(e){}
  document.getElementById("theme").addEventListener("click",function(){
    var dark=root.dataset.theme==="dark"||(!root.dataset.theme&&matchMedia("(prefers-color-scheme:dark)").matches);
    root.dataset.theme=dark?"light":"dark";
    try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}
  });
  function show(sel,href){document.querySelectorAll(sel).forEach(function(el){if(href){el.hidden=false;el.href=href}})}
  show("[data-resume]",c.resumeUrl);show("[data-linkedin]",c.linkedin);
  show("[data-booking]",c.bookingUrl);show("[data-form]",c.formUrl);
  if(c.email){
    var tpl={
      paper:["Paper review request","Hi Kaustubh,\n\nI'd like to invite you to review a paper.\n\nTitle:\nVenue / type (journal, conference, preprint):\nTopic area:\nReview deadline:\nLink or abstract:\nAny conflicts of interest to disclose:\n\nThanks,\n"],
      startup:["Startup evaluation request","Hi Kaustubh,\n\nI'd like your technical perspective on a startup.\n\nCompany / product:\nStage and what it does:\nTechnical area (architecture, reliability, scale, AI/ML):\nDeck or demo link:\nWhat feedback you're looking for:\nTimeline:\n\nThanks,\n"]
    };
    document.querySelectorAll("[data-mail]").forEach(function(el){
      var k=el.dataset.mail,s,b;
      if(tpl[k]){s=tpl[k][0];b=tpl[k][1]}else{s="Hello";b=""}
      el.href="mailto:"+c.email+"?subject="+encodeURIComponent(s)+"&body="+encodeURIComponent(b);
      el.hidden=false;
    });
    document.querySelectorAll("[data-email-text]").forEach(function(el){el.textContent=c.email;el.hidden=false});
    var cp=document.getElementById("copy");cp.hidden=false;
    cp.addEventListener("click",function(){navigator.clipboard.writeText(c.email).then(function(){cp.textContent="Copied"})});
  }
})();
