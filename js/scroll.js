const AnimItems = document.querySelectorAll('._anim-class');

if (AnimItems.length > 0) {
    window.addEventListener('scroll', AnimFunction);
    function AnimFunction() {
        for (let index = 0; index < AnimItems.length; index++) {

            const AnimItem = AnimItems[index];

            const AnimItemHeight = AnimItem.offsetHeight;

            const ElemntToShowOffset = offSet(AnimItem).top;

            const AnimNumber = 3;

            let ItemPoint = window.innerHeight - AnimItemHeight / AnimNumber;
            if (AnimItemHeight > window.innerHeight) {
                let ItemPoint = window.innerHeight - window.innerHeight / AnimItem;
            }
            if ((pageYOffset > ElemntToShowOffset - ItemPoint) && pageXOffset < (ElemntToShowOffset + AnimItemHeight)) {
                AnimItem.classList.add('_active');
            } else {
                AnimItem.classList.remove('_active');

            }
        }
    }
    function offSet(el) {
        const rect = el.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop }
    }
}