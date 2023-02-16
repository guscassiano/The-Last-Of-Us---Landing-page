document.addEventListener('DOMContentLoaded', function(){
    const episodes = document.querySelectorAll('[data-episodes]')

    for(let i=0; i < episodes.length; i++) {
        episodes[i].addEventListener('click', OpenOrCloseEpisode)
    }
})


function OpenOrCloseEpisode(element) {
    const classe = 'episodes__links__item--is-open'
    const fatherElement = element.target.parentNode
    console.log(fatherElement)
    fatherElement.classList.toggle(classe)
}

$(document).ready(function(){
    $('#tel').mask('(00) 00000-0000')
})