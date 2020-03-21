window.onload = function() {
    let clouds = document.querySelectorAll('.oblako_1');
    console.log(clouds);
    let text = Array('За всю историю древних видов на Земле существовало больше, чем обитает сейчас.', 
                    'Одними из самых древних животных являются медузы. За 600 миллионов лет они практически не изменились.',
                    'Синие киты самые крупные вымершие животные.',
                    'Один из подвидов зебр, квагга, вымер недавно.',
                    'В Ирландии ещё около 8 тысяч лет назад обитали гигантские олени. Ширина их рогов могла превышать 3,5 метров.',
                    'В 2006 году из-за загрязнения речных вод вымерли китайские речные дельфины.',
                    'Согласно статистике, около 99,9% всех видов, когда-либо существовавших на земле, вымерло.',
                    'Самой крупной вымершей акулой являлся мегалодон, в длину более 30 метров.',
                    'Раньше существовали огромные, 2,5-метровые многоножки.',
                    'Древних обезьян на Земле было около 6000 видов, но сохранились лишь 160 из них.',
                    'Гигантопитеки были самыми крупными из вымерших приматов их рост достигал более 4 метров.',
                    'К числу вымерших животных относятся и креветки аномалокарисы, с длиной тела более 2 м!',
                    'Крупнейшая вымершая змея была титанобоа. Длина ее тела составляла 15 м, при весе в тонну.',
                    'Самыми крупными вымершими птицами были аргентависы в Южной Америке.');

    
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
        newAnimal.src = 'pictures/' +fileName + '.png';
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

    let gr_an = document.querySelectorAll('.groundAnimals');
    let sharpen = Array();
    function formAnimation(fileName) {
        sharpen = [
            {backgroundImage: 'url(pictures/'+fileName+'_5.png)'},
            {backgroundImage: 'url(pictures/'+fileName+'_4.png)'},
            {backgroundImage: 'url(pictures/'+fileName+'_3.png)'},
            {backgroundImage: 'url(pictures/'+fileName+'_2.png)'},
            {backgroundImage: 'url(pictures/'+fileName+'_1.png)'},

        ];
    }

    for (let index = 0; index < gr_an.length; index++) {
        gr_an[index].addEventListener('click', function(){
            console.log(this.getAttribute('nameAn'));

            formAnimation(this.getAttribute('nameAn'));
            this.animate(sharpen, {
                duration: 2300,
                fill: 'forwards'
            });

        });
    }

    document.querySelector('h1').addEventListener('click', function(){
        console.log('ddd');
        document.querySelector('.o_header_left').style.left = '-70vh';
        document.querySelector('.o_header_right').style.right = '-70vh';
    });
    
}