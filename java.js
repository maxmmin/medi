'use strict'
function mainfunction() {


    function height() {
    
        var vh = window.innerHeight*0.01
        document.documentElement.style.setProperty('--vh',vh+'px')
    
        window.addEventListener('resize',() => {
            var vh = window.innerHeight*0.01
            document.documentElement.style.setProperty('--vh',vh+'px')
        })
    }
    
     height()

function func() {



function burgermenu() {
    
    const body = document.querySelector('.body')
    const menu = document.querySelector('.menu')
    const wrapper = document.querySelector('.wrapper')
    const burger = document.querySelector('.burger')
    const strip = document.querySelector('.strip')
    
    

            burger.addEventListener('click', () => {
              try {
               
                
                body.classList.toggle('active')
                burger.classList.toggle('active')
                wrapper.classList.toggle('active')
                menu.classList.toggle('active')
                strip.classList.toggle('active') 
              }
              
              catch {
                  burgermenu()
              }
                
            
                
            
        })

        
}

burgermenu()

// slider




    function slider() {

        var slide = document.querySelector('.slide0')
        var slideline = document.querySelector('.slide-line')
        var arrowright = document.querySelector('.arrowright')
        var arrowleft = document.querySelector('.arrowleft')
        let unit = -100;
        
        console.log(slideline.offsetWidth)
        
        
        
        arrowright.addEventListener('click', () => {
           
            if (unit<=(-200)) {return}
            unit = unit - 100.1;
            console.log(unit)
            slideline.style.transform='translateX('+ unit +'%)';
            
            
        })
        
        arrowleft.addEventListener('click', () => {
            if (unit>=0) {return}
            unit = unit + 100.1;
            console.log(unit)
            slideline.style.transform='translateX('+ unit  + '%)';
        })
    }

    slider()

    
function newsmodal() {
    let newmodal = document.querySelector('.modal_news')
    let news = document.querySelector('.secondcard_news')
    let back = document.querySelector('.modal_back')
    function bacf () {
        newmodal.style.transform = 'translateY(100%)'
           
            setTimeout(()=>{
                newmodal.style.display = 'none'
                
            },250)
    }
    news.addEventListener('click',() => {
        
        var width = window.innerWidth

        if (width > 575.98) {
            return
        } 
       
        else {
            
        }
        if (event.target.classList.contains('targ1')) {
            window.addEventListener('resize',function resize() {
                var width = window.innerWidth
                
                if (width > 575.98) {
                    bacf()
                    window.removeEventListener('resize', resize)
                } 
            })
            newmodal.style.opacity = '1'
            newmodal.style.display = 'block'
            setTimeout(()=>{
                newmodal.style.transform = 'translateY(0)'
            },1)
        }
        
        back.addEventListener('click', () => {

            
            bacf()

            
        })


    })

    
}

newsmodal()

function switchcard() {
    var mass = document.querySelectorAll('.modifbl')
    var switchmenu = document.querySelector('.proposition_modal')
    var n = 0;
    var switchback = document.querySelectorAll('.switchback')
    var toparrow = document.querySelector('.modal_left-ar') 
    var bottomarrow = document.querySelector('.modal_right-ar')
    var index = undefined;
        mass.forEach(function (element,ind) {
            if (element.classList.contains('recent')) {index=ind}  
        })
    
        function exit() {
            switchmenu.style.opacity='0'
            
        setTimeout(()=>{
            switchmenu.style.display='none'
        },300)
        }
    switchback[n].addEventListener('click', exit)

    bottomarrow.addEventListener('click', () =>{

        if((index+1)==mass.length) {return}

        mass[index].classList.remove('recent')
        mass[index].classList.add('recbefore')
        
       
        index=index+1
           
         mass[index].classList.remove('recnext')
         mass[index].classList.add('recent')
         
         switchback[n].removeEventListener('click', exit)
        
         n=n+1
         switchback[n].addEventListener('click', exit)
         
    })

    toparrow.addEventListener('click', () =>{

        if (index==0) {return}
        mass[index].classList.remove('recent')
        mass[index].classList.add('recnext')
        
        index=index-1        

        mass[index].classList.remove('recbefore')
        mass[index].classList.add('recent')
        
        switchback[n].removeEventListener('click', exit)
        
         n=n-1
         switchback[n].addEventListener('click', exit)
    })
}

function switchmenu() {
    var switchmenu = document.querySelector('.proposition_modal')
    var switchbutton = document.querySelector('.propositions-modal_button')
    
   
    
   

    switchbutton.addEventListener('click', () => {
        switchmenu.style.display='flex'
        setTimeout(()=>{
            switchmenu.style.opacity='1'
        },1)

        switchcard()
       
        
    })

}

switchmenu()

}

window.onload = func()

}

mainfunction()