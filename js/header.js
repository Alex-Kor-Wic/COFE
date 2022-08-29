const HeaderHumbBtn = document.querySelector('#hamb');
const PopupHeader = document.querySelector('.popup');
const HeaderNavBarMenu = document.querySelector('#nav-bar-menu');
const HeaderNavBarIcons = document.querySelector('#nav-bar-icons');

HeaderNavBarMenu.cloneNode(true);
HeaderNavBarIcons.cloneNode(true);

const CloneMenu = HeaderHumbBtn.addEventListener('click', ShowWindow);

function ShowWindow(e){
    e.preventDefault();
    PopupHeader.classList.toggle('open');
    RenderPopup();
    RenderIcons();
}

function RenderPopup(){
    PopupHeader.append(HeaderNavBarMenu);
}
function RenderIcons(){
    HeaderNavBarIcons.style['display'] = 'block';
    PopupHeader.append(HeaderNavBarIcons);
}