const allKeys = [...document.getElementsByClassName('key')];
const yoBody = document.querySelector('body');
let currentKey = '';

const addJiggle = () => {
    const keyCount = allKeys.length;
    let tobeJiggled = Math.floor(Math.random() * keyCount);
    currentKey = allKeys[tobeJiggled];
    currentKey.classList.add('jiggle');
    yoBody.addEventListener('keyup', checkKeyPressed, false);
};

const checkKeyPressed = (e) => {
    let typedKey = e.key.toLowerCase();
    let currKey = currentKey.dataset.key.toLowerCase();
    console.log(typedKey, currKey);
    if (typedKey == currKey){
        removeJiggle();
    } else {
        console.log('WRONG');
    }
}

const removeJiggle = () => {
    allKeys.forEach((key, index) => {
        if (key.classList.contains('jiggle')){
            key.classList.remove('jiggle');
        }
    });
    addJiggle();
}

addJiggle();