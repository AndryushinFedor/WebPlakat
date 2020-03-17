window.onload = function() {
    let clouds = document.querySelectorAll('.oblako_1');
    console.log(clouds);

    
    for (let index = 0; index < clouds.length; index++) {
        let w = Math.round(document.body.offsetWidth / 3 + Math.random()*200);
        
        clouds[index].style.width = w +'px';
        let x = Math.abs(Math.round(Math.random()* document.body.offsetWidth) - w);
        clouds[index].style.marginLeft = x + 'px'; 
        let y = Math.round(Math.random()* 50);
        clouds[index].style.marginTop = y + 'px';
        clouds[index].setAttribute('ocupated', 'false');
        


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
        let newAnimal = document.createElement('img');
        newAnimal.src = '/pictures/' +fileName + '.png';
        newAnimal.classList.add('animal');
        newAnimal.classList.add('an_'+ fileName);
        console.log(newAnimal.src);
        newAnimal.addEventListener('click', function(){
            this.style.opacity = 0;
            this.parentElement.setAttribute('ocupated', 'false');
        });
        return newAnimal;

    }
    
    
}