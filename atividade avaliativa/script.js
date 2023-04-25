function retornarValores(conteudo){
    if (!("erro" in conteudo)){
        document.getElementById('endereco').value=(conteudo.logradouro)
        document.getElementById('complemento').value=(conteudo.complemento)
        document.getElementById('bairro').value=(conteudo.bairro)
        document.getElementById('cidade').value=(conteudo.localidade)
    }else{
        alert("CEP não encontrado")
    }
}
function buscaCEP(valor){
    var cep = valor.replace(/\D/g, '')
    if(cep != ""){
        var validarCEP = /^[0-9]{8}$/
        if(validarCEP.test(cep)){
            document.getElementById('endereco').value = ". . ."
            document.getElementById('complemento').value = ". . ."
            document.getElementById('bairro').value = ". . ."
            document.getElementById('cidade').value = ". . ."
            var script = document.createElement('script') 
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornarValores`
            document.body.appendChild(script)      
        }else{
            alert("Formato inválido")
        }

    }
}
