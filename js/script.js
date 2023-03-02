function acao(){
    let modal = document.querySelector('.modal')
    let main = document.querySelector('main')

    modal.style.display = 'flex'
    main.style.filter = 'blur(0.25rem)';
}


function fechar(){
    let modal = document.querySelector('.modal')
    let main = document.querySelector('main')

    modal.style.display = 'none'
    main.style.filter = 'blur(0)';
}