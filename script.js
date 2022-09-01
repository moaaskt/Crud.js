const nome = []
const curso= []
const matricula = []
const nota = []
// var nomeBusca
// var indice

function cadastrar() //cadastrar usuario
{
    
    nome.push(document.getElementById('inpNome').value)
    curso.push(document.getElementById('inpCurso').value)
    matricula.push(document.getElementById('inpMatricula').value)
    nota.push(document.getElementById('inpNota').value)

    if (document.getElementById('inpNome').value == "") {
        alert("Nome não informado");
             nome.focus();
              return;
            }

            if (document.getElementById('inpCurso').value == "") {
        alert("Curso nao informado");
        curso.focus();
              return;
            }
            if (document.getElementById('inpMatricula').value == "") {
        alert("Matricula nao informada");
        matricula.focus();
              return;
            }
            if (document.getElementById('inpNota').value == "") {
        alert("Nota nao informada");
        nota.focus();
              return;
            }
            alert('Cadastro enviado com Sucesso')
            
    document.getElementById('inpNome').value =""
    document.getElementById('inpCurso').value =""
    document.getElementById('inpMatricula').value =""
    document.getElementById('inpNota').value =""        
    document.getElementById('inpNome').focus()

            
 }

 function editar(){ //editar nome do cadastro
    nomeBusca = document.getElementById("inpNome").value
    indice = nome.indexOf(nomeBusca)

     if(indice < 0){
        alert("Digite o nome")
     }else{
         nome[indice]= document.getElementById("inpNome").value 
         alert("nome alterado com sucesso")
     }
    }
    


 function apagar(){ //apagar registro

    nomeBusca = document.getElementById('inpNome').value
    indice = nome.indexOf(nomeBusca)

    
    alert(nomeBusca + "Registro Apagado com sucesso")
    nome.splice(indice, 1)
    curso.splice(indice, 1)
    matricula.splice(indice, 1)
    nota.splice(indice, 1)
    document.getElementById('inpNome').value =""
    document.getElementById('inpCurso').value =""
    document.getElementById('inpMatricula').value =""
    document.getElementById('inpNota').value =""        
    document.getElementById('inpNome').focus()
 }


 function limpar(){ //limpar os campos de dados
     document.getElementById("inpNome").value = ""
     document.getElementById("inpCurso").value = ""
     document.getElementById("inpMatricula").value = ""
     document.getElementById("inpNota").value = ""
     document.getElementById("inpNome").focus()

 }

    function localizar(){ //localizar por nome

        
        let nomeBusca = document.getElementById('inpNome').value
        let indice = nome.indexOf(nomeBusca)
        console.log(indice)

    //  if (document.getElementById('inpNome').value==""){
    //             alert('Digite a porra do nome')
    //         }else{
    //             if(indice <0){
    //                 alert("nome errado")
    //             }else{
                  

        if(indice != -1)
        {
            document.getElementById('inpNome').value = nome[indice]
            document.getElementById('inpCurso').value = curso[indice]
            document.getElementById('inpMatricula').value = matricula[indice]
            document.getElementById('inpNota').value = nota[indice]

            
        }
           

        }

    
    function mostrarTudo(){ //mostrar cadastrados

            document.getElementById("DivRelatorio").hidden = false
            document.getElementById('DivRelatorio').innerHTML=''
            nome.length
            curso.length
            matricula.length
            nota.length
            for(i=0; i<nome.length; i++)
            {
                document.getElementById('DivRelatorio').innerHTML +="<b>Nome:</b>" + `${nome[i]}  <br>`
                document.getElementById('DivRelatorio').innerHTML +="<b>Curso:</b>" + `${curso[i]}  <br>`
                document.getElementById('DivRelatorio').innerHTML +="<b>Matricula:</b>" + `${matricula[i]}   <br>`
                document.getElementById('DivRelatorio').innerHTML +="<b>Nota:</b>" + `${nota[i]}  <br><br>`


            }
        }