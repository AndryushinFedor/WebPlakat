window.onload = function() {
    let clouds = document.querySelectorAll('.oblako_1');
    console.log(clouds);
    let text = Array('Научившись уважать животных, ты научишься уважать и людей.', 
                    'Действия людей погубили их.',
                    'У животных есть душа.',
                    'Почти память вымерших Спаси вымирающих');

    
    for (let index = 0; index < clouds.length; index++) {
        let w = Math.round(document.body.offsetWidth / 4 + Math.random()*300);
        console.log(document.body.offsetWidth);
        if (document.body.offsetWidth <= 1280) {
            let w = Math.round(document.body.offsetWidth / 6 + Math.random()*200);
            console.log('1280');
        }
        
        
        clouds[index].style.width = w +'px';
        let x = Math.abs(Math.round(Math.random()* document.body.offsetWidth) - w);
        clouds[index].style.marginLeft = x + 'px'; 
        let y = Math.round(Math.random()* 50);
        clouds[index].style.marginTop = y + 'px';
        clouds[index].setAttribute('ocupated', 'false');
        clouds[index].style.animationDuration = Math.round(Math.random() * 20 + 3) +'s';
        clouds[index].style.color='red';
        


        clouds[index].addEventListener('click', function(){
            if (clouds[index].getAttribute('ocupated')=='false') {
                let fileName = Math.round(Math.random()*12 + 1);
                this.appendChild(new Animal(fileName));
                let   an = this.lastChild;
                let leftA = (w - parseInt(window.getComputedStyle(an).width))/2;
                an.style.left= leftA;
                console.log(leftA);
                an.style.opacity = 1;
                clouds[index].setAttribute('ocupated', 'true');
            }
        });
        
    }

    function Animal(fileName) {

        function kill(elem, t, callback) {
            let steps = 80;
            let timer_kill = setInterval(function(){
                elem.style.transform = 'rotate(180deg)';
                elem.style.top = parseInt(window.getComputedStyle(elem).top) +10 +'px';
                console.log(elem.style.top);
                steps--;
                if (steps == 0) {
                    clearInterval(timer_kill);
                    callback.call(elem);
                }
            }, t);
            
        }

        let newAnimal = document.createElement('img');
        newAnimal.src = '/pictures/' +fileName + '.png';
        newAnimal.classList.add('animal');
        newAnimal.classList.add('an_'+ fileName);
        console.log(newAnimal.src);
        newAnimal.addEventListener('click', function(){
            this.parentElement.querySelector('.text').innerText = text[fileName];
            this.parentElement.setAttribute('ocupated', 'false');
            kill(this, 20, function() {
                this.parentElement.removeChild(this);
            });
        });
        return newAnimal;

    }
    
    
}