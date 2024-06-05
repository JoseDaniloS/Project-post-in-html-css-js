   
        function ligar(){
            let luz = window.document.getElementById('luz')
            
            luz.style.filter = "opacity(0.1) drop-shadow(0 7px 10px #ffff)"
            
        }

        function desligar(){
            let luz = window.document.getElementById('luz')
            luz.style.filter = "opacity(0)"
        }
