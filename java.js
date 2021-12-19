'use strict'

function func() {

function burgermenu() {
    const menu = document.querySelector('.menu')
    const wrapper = document.querySelector('.wrapper')
    const burger = document.querySelector('.burger')
    const strip = document.querySelector('.strip')
    const html = document.documentElement
    const body = document.body

            burger.addEventListener('click', () => {
              try {
                html.classList.toggle('active')
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
            let width = slide.offsetWidth;
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
}

func()

