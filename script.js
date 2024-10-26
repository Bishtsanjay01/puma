const text=document.querySelector('#text')
const barIcon = document.querySelector('.left-bar li:first-child');
const header=document.querySelector('.header')
const leftBar=document.querySelector('.left-bar')


const message=['FREE RETURNS AND FREE EXCHANGE.',
    'EXTRA 5% DISCOUNT AND FREE SHIPPING ON ALL ONLINE PAYMENTS.',
    `SOLVE YOUR QUERIES FASTER THAN EVER! SEND US A 'HI' ON WHATSAPP AT 6364929121CLICK HERE PUMA.com Search My account`

];

let index=0;

const timer=setInterval(()=>{
    
  text.innerText=message[index]
  index++;
  if(index>=message.length){
    index=0;
  }
},3000)

// Stop the interval after 15 seconds
setTimeout(() => {
    clearInterval(timer);
  }, 15000); 


  barIcon.addEventListener('click',()=>{
    leftBar.classList.add('show') ;
      
   console.log('hello');

  })