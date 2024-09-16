let button = document.querySelector('.submit');
        let result = document.querySelector('.result');
        let input = document.querySelector('#user-inp');
        let reset = document.querySelector('#reset');
        let container = document.querySelector('.container');
        
        let number = Math.floor(Math.random() * 100);
        
        let body = document.body;
        let colors = [
            "linear-gradient(to right, #FF9EAA, #FFD0D0)",  
            "linear-gradient(to right, #3AA6B9, #F9F9E0)"   
        ];
        
        console.log(number);
        let currentColor = 0;
        
        function changeBackground() {
            container.style.background = colors[currentColor];
            container.style.transition = "background 0.5s ease"; 
            currentColor = (currentColor + 1) % colors.length;
        }
        input.focus();

        function clk() {
            if (input.value == '') {
                result.innerHTML = "Please Enter a number \u{1F612}";
                } else

                
                 if (input.value == number) {
                result.innerHTML = "Congratulations  You won \u{1F60E}";
                setInterval(changeBackground, 100);
                container.style.boxShadow = "10px 10px 50px";
                container.style.border = "1px solid black";
                result.style.transform = "scale(1.3)";
                result.style.transition = "transform 1s ease-in-out"; 
            } 
            
            else if (input.value > number) {
                result.innerHTML = "Enter lower number";
                input.value = null;
            } else if (input.value < number) {
                result.innerHTML = "Enter higher number";
                input.value = null;
            }
        }

        reset.addEventListener('click', function () {
            location.reload();
        });

        button.addEventListener('click', clk);
        input.addEventListener('keydown',()=>
        {
            if(event.key == "Enter")
            {
                clk();
            }
        });