
// Parallax effect header

const header = document.getElementById('header')
header.addEventListener('mousemove', parallax)

function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100

        layer.style.transform = `translateX(${x}px) translateY(${y}px) `

    })
}

// Parallax scroll effect about me

let text = document.getElementById('text-about')


window.addEventListener('scroll', function(){
    var value = window.scrollY;

    text.style.left = value/40 + '%'
})

// Parallax scroll effect skills

let skill = document.getElementById('text-skill')


window.addEventListener('scroll', function(){
    var value = window.scrollY;

    skill.style.left = value/60 + '%'
})





// Project page side

// let cards = document.querySelectorAll('.cards')

// window.addEventListener('scroll', function(){

//     cards.forEach((cub)=>{
//     const speed = cub.getAttribute('data-speed')
//     var value = window.scrollY;

//     cub.style.bottom = value/speed + '%'
//     })
    
// })
