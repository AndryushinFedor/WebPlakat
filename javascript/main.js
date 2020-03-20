window.onload = function() {
    let clouds = document.querySelectorAll('.oblako_1');
    console.log(clouds);
    let text = Array('За всю известную нам историю древних видов на Земле существовало на порядки больше, чем обитает сейчас.', 
                    'Одними из самых древних животных являются медузы. Они появились около 600 миллионов лет назад, и с тех пор практически не изменились.',
                    'Синие киты крупнее большинства вымерших животных, когда-либо населявших нашу планету.',
                    'Один из подвидов зебр, квагга, вымер недавно, так же, как птица дронт и сумчатый волк.',
                    'В Ирландии ещё около 8 тысяч лет назад обитали гигантские олени. Ширина их рогов могла превышать 3,5 метров.',
                    'В 2006 году из-за загрязнения речных вод вымерли последние байцзи, китайские речные дельфины.',
                    'Согласно статистике, около 99,9% всех видов, когда-либо существовавших на земле, вымерло.',
                    'Самой крупной вымершей акулой являлся мегалодон. В длину эти рыбы достигали 30 метров, что сравнимо с высотой 10-этажного здания.',
                    'Археологам удалось обнаружить останки вымершей артроплевры – хищной 2,5-метровой многоножки.',
                    'Древних обезьян на Земле было около 6000 видов, но до наших дней сохранились лишь 160 из них.',
                    'Гигантопитеки были самыми крупными из вымерших приматов. Эти древние обезьяны весили около полутонны, а их рост достигал 4 метров.',
                    'К числу вымерших животных относятся и креветки аномалокарисы, длина тела которых достигала 2 м!',
                    'Любопытно, что крупнейшей вымершей змеей была титанобоа. Длина ее тела составляла 15 м, при весе в тонну.');

    
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
    
    
}