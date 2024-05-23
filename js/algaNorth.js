var AlgaNorth = function(opts){

    const that = this;
    const intro_texts = opts.intro_texts;
    const backgrounds = opts.background_images; // Array of background image URLs
    const intro_div = document.getElementById('intro');

    let textIndex = 0;
    this.toggleIntroText = () => {
        console.log('wzp')
        intro_div.querySelector('p').innerHTML = intro_texts[textIndex];
        textIndex = (textIndex + 1) % intro_texts.length;
    }

    let imgIndex = 0;
    this.toggleIntroBackgroundImage = () => {
        intro_div.style.backgroundImage = `url(${backgrounds[imgIndex]})`;
        imgIndex = (imgIndex + 1) % backgrounds.length;
    }

    // public
    this.changeBackgroundAndInfo = () => {
        that.toggleIntroBackgroundImage();
        that.toggleIntroText();
    }

    this.run = () => {
        that.changeBackgroundAndInfo();
        setInterval(that.changeBackgroundAndInfo, 5000);
    }
}

