const whiteKeys = [...document.getElementsByClassName('white-keys')];
const blackKeys = [...document.getElementsByClassName('black-keys')];
const theKeys = [...whiteKeys, ...blackKeys];


    const playKeys = theKeys.forEach((item, index) => {
        let currKey = index + 1;
        let sound = new Audio(`audio/key-${currKey}.mp3`);
        item.addEventListener('click', () => {
            sound.play();
        });
    });
