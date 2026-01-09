window.addEventListener('DOMContentLoaded',function(){
 window.addEventListener("pywebviewready",function(){
  document.querySelector(`[type="file"]`).addEventListener("change",mainFile)
  function dih(dih){
   return new Promise(resolve=>setTimeout(resolve,dih))
  }
  function mainFile(dih){
    dihfile=dih.target.files[0]
    if(dihfile){
      const dihinspector=new FileReader
      dihinspector.onload=function(dihdih){
      mainmedia.src=dihdih.target.result
      mainmedia.load()
    }
      dihinspector.readAsDataURL(dihfile)
    }
  }
  async function notification(t,d,dr){
    alert('y')
    let a=document.createElement('notification')
    let b=document.createElement('p')
    b.innerHTML=t
    let c=document.createElement('p')
    c.innerHTML=d
    a.appendChild(b)
    a.appendChild(c)
    document.body.appendChild(a)
    dih(dr*1000)
    a.remove()
  }  
  notification('hi','dih hurt',500)
  let mainmedia=document.querySelector('[tromoSM="mainmedia"]')
  let $$io$$1=6
  const player1=document.querySelector('play')
  player1.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z" fill="#ffffffff"/></svg>`
   let mute$$i=1
   let beauty$$info=0

  window.addEventListener('keydown',function(dih){
    if(dih.code=="Space"){
    document.querySelector('play').click()
    }
    else if(dih.key=="Enter"){
      document.querySelector("restore").click()
    }
    else if(dih.key=="Escape"){
      $$io$$1=6
        mainmedia.pause()
        player1.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z" fill="#ffffffff"/></svg>`
        document.querySelector("minimize").click()
    }
    else if(dih.key=="m"){
      if(mute$$i==1){
        mainmedia.setAttribute('muted','')
        mute$$i=2
        alert('muted')
      }
      else{
        mute$$i=1
        alert('r')
        mainmedia.removeAttribute('muted')
      }
    }
    else if(dih.key=="b"){
      if(beauty$$info==0){
      mainmedia.style.filter=`brightness(1.1) contrast(1.1) saturate(0.8)`
      beauty$$info=1
      alert('yo')
      }
      else{
      beauty$$info=0
      alert('nah')
      mainmedia.style.filter=`brightness(1) contrast(1) saturate(1)`
      }
    }
    else if(dih.key=="up"){
      this.alert('sybau')
    }

})
  player1.addEventListener('click',function(){
  if($$io$$1==6){
        mainmedia.play()
        player1.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z" fill="#ffffffff"/></svg>`
        $$io$$1=7
        console.log('playing')
  }
  else{
        mainmedia.pause()
        $$io$$1=6
        player1.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z" fill="#ffffffff"/></svg>`
        console.log('paused')
  }
   slid=document.querySelector('progresstypeshit')
   filled=document.querySelector('filled')
   mainmedia.ontimeupdate=function(){
    const skinnypete=(mainmedia.currentTime/mainmedia.duration)*100
    filled.style.width=`${skinnypete}%`
   }

   slid.addEventListener('click',function(dih){
    const dihs=this.getBoundingClientRect()
    const clickPosition=dih.pageX-dihs.left
    const t=this.offsetWidth 
    const p=clickPosition/t
    mainmedia.currentTime=mainmedia.duration*p
   })    
  })
  document.querySelector("minimize").addEventListener("click",function(){
    window.pywebview.api.min({})
   })
   document.querySelector("close").addEventListener("click",function(){
    window.pywebview.api.close({})
   })
   n=0 
   document.querySelector("restore").addEventListener("click",function(){
   if(n==0){
     window.pywebview.api.max({})
     n=67
    }
   else{
    window.pywebview.api.res({})
    n=0
      }
    })
    

    document.querySelectorAll(`[grass=grass]`).forEach(yo=>{
    yo.addEventListener('mouseenter',function(){
      document.querySelector(`controls`).style.animation='open-controls 0.3s'
      document.querySelector(`title-bar`).style.animation='open-title 0.3s'
      document.querySelector(`controls`).style.display='flex'
      document.querySelector(`title-bar`).style.display='flex'
    })
    yo.addEventListener('mouseleave',async function(){

      document.querySelector(`controls`).style.display='none'
      document.querySelector(`title-bar`).style.display='none'
    })
    })
   document.querySelectorAll(`controls`).forEach(yo=>{
    yo.addEventListener('mouseenter',function(){
      document.querySelector(`controls`).style.animation='open-controls 0.3s'
      document.querySelector(`title-bar`).style.animation='open-title 0.3s'
      document.querySelector(`controls`).style.display='flex'
      document.querySelector(`title-bar`).style.display='flex'
    })
    })
   document.querySelectorAll(`title-bar`).forEach(yo=>{
    yo.addEventListener('mouseenter',function(){
      document.querySelector(`controls`).style.animation='open-controls 0.3s'
      document.querySelector(`title-bar`).style.animation='open-title 0.3s'
      document.querySelector(`controls`).style.display='flex'
      document.querySelector(`title-bar`).style.display='flex'
    })
    })
   document.querySelector(`flex-height`).addEventListener('click',async function(){
      document.querySelector(`controls`).style.display='none'
      document.querySelector(`title-bar`).style.display='none'
   })

 })
})
