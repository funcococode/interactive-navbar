const navItem = document.querySelectorAll('.navItem');
const lis = document.querySelectorAll('li');
const imgs = document.querySelectorAll('.navItemImg');
const ps = document.querySelectorAll('.navItemDesc');

navItem.forEach((item,i) => {
    item.addEventListener('mouseover', ()=>{
        imgs[i].classList.add('vis')
        ps[i].classList.add('vis')
        lis[i].classList.add('vis');
    })
    item.addEventListener('mouseleave', ()=>{
        imgs[i].classList.remove('vis');
        lis[i].classList.remove('vis');

        ps[i].classList.remove('vis');

        lis[i].style.left = 'initial';
        lis[i].style.top = 'initial';
    })
    item.addEventListener('mousemove', (e)=>{
        lis[i].style.left = -e.clientX * 0.05 + 'px';
        lis[i].style.top = -e.clientY * 0.05 + 'px';

        imgs[i].style.left = - (e.clientX/2) * 0.2 + 'px';
        imgs[i].style.top = - (e.clientY/2) * 0.5 + 'px';
        
        ps[i].style.left = -(e.clientX * 2) * -0.4+ 'px';
        ps[i].style.top = (e.clientY/10) * 0.2 + 'px';
    })
})