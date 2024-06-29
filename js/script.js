const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
        panel.addEventListener('mouseover',()=>{
        removeClass();
        panel.classList.toggle('active')
    })
})

function removeClass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}