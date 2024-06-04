   
        function ligar(){
            let luz = window.document.getElementById('luz')
            
            luz.style.filter = "opacity(0.3) drop-shadow(0 7px 50px #ffff)"
            
        }

        function desligar(){
            let luz = window.document.getElementById('luz')
            luz.style.filter = "opacity(0)"
        }
