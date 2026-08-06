let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        let btnValue = e.target.innerHTML;

        if(btnValue == '='){
            try{
                let exp = string.replace(/\^/g, '**');
                let result = eval(exp);
                input.value = string + "=" + result;
                string = result.toString();
            } catch{
                input.value = "Error";
                string = "";
            }
        }
        else if(btnValue == 'AC'){
            string = "";
            input.value = string;
        }
        else if(btnValue == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(btnValue == '%'){
            if(/[\+\-\*\/]$/.test(string)) return;
            string = string + "/100";
            input.value = string;
        }
        else if(btnValue == 'x²'){ 
            try{
                string = eval(string + "**2").toString();
                input.value = string;
            } catch{ input.value = "Error"; string = ""; }
        }
        else if(btnValue == 'x³'){ 
            try{
                string = eval(string + "**3").toString();
                input.value = string;
            } catch{ input.value = "Error"; string = ""; }
        }
        else if(btnValue == '√'){ 
            try{
                string = Math.sqrt(eval(string)).toString();
                input.value = string;
            } catch{ input.value = "Error"; string = ""; }
        }
        else{
            if(input.value.includes('=')){
                string = "";
                input.value = "";
            }

            if(btnValue == '.'){
                let parts = string.split(/[\+\-\*\/]/);
                let lastNumber = parts[parts.length - 1];
                if(lastNumber.includes('.')) return;
            }

            string += btnValue;
            input.value = string;
        }
    })
})