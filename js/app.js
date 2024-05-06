const tabsContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')  //foto
const tabsWrapper = document.querySelector('.tabheader__items')

const hideTabContent = () => {
    tabsContent.forEach((item) => {
            
            item.style.display = 'none'
    })
    tabs.forEach((item) => { 
               item.classList.remove('tabheader__item_active')
    })
}
hideTabContent()

const showTabContent = (i = 0) => {
   tabsContent[i].style.display = 'block'
   
   tabs[i].classList.add('tabheader__item_active')
   
} 
   
let i = 0
showTabContent(i)
setInterval(() => { 
    hideTabContent()
   showTabContent(i)
 i++
 if(i >= tabs.length) i = 0;
}, 2000)

tabsWrapper.addEventListener('click', (e) => {
    const target = e.target
    if(target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) => {
            if(target === item){
                hideTabContent()
                showTabContent(i)
            }
                })
    }
        }) 
        
    // function makeTimer(){
    //     clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    //     timer = setInterval = () => {
    //       i++;
    //       showTabContent(i);
          
    //     },5000}
    
       
    
    
    
    //slider
    const modal = document.querySelector('.modal')
    const modalOpenBtn = document.querySelector('.btn_white')
     const modalCloseBtn = document.querySelector('.modal__close')
        const handleOpenModal = () => {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.classList.add('overflow')
        }
                     
    const handleCloseModal = (event) => {
        modal.classList.remove('show')
        modal.classList.add('hide')
        document.body.classList.remove('overflow')
       }

       modal.addEventListener('click', function(event){
        if(!event.target.closest('.modal__content')){
            handleCloseModal(event.target.closest('.modal')) 
        }})
    
    modalOpenBtn.addEventListener('click', handleOpenModal)
    modalCloseBtn.addEventListener('click', handleCloseModal)
    
            const modalImg = document.querySelector('.modalImg')
                 
        const handleOpenModalImg = () => {
            modalImg.classList.add('show')
            modalImg.classList.remove('hide')
            document.body.classList.add('overflow')
            }
                               
        const handleCloseModalImg = (event) => {
            modalImg.classList.remove('show')
            modalImg.classList.add('hide')
            document.body.classList.remove('overflow')
             }
             modalImg.addEventListener('click', function(event){
                if(!event.target.closest('.modalImg_content')){
                    handleCloseModalImg(event.target.closest('.modalImg')) 
                }
             })
            // window.onclick = (event) => {
            // if (event.target === modalImg){
            //     modalImg.classList.remove('show')
            //     document.body.classList.remove('overflow')
            // }} 
