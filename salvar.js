function cadastrarJogador() {

    var nomeJogador = document.getElementById('nomeJogador').value;
    var numeroCamisa = document.getElementById('numeroCamisa').value;

   
    var jogador = document.createElement('jogador');
    var nomeElement = document.createElement('nome');
    nomeElement.textContent = nomeJogador;
    var numeroCamisaElement = document.createElement('numeroCamisa');
    numeroCamisaElement.textContent = numeroCamisa;

    jogador.appendChild(nomeElement);
    jogador.appendChild(numeroCamisaElement);

    
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'cadastro_jogadores.xml', false);
    xmlHttp.send();
    var xmlDoc = xmlHttp.responseXML;

   
    xmlDoc.getElementsByTagName('jogadores')[0].appendChild(jogador);
    var xmlString = new XMLSerializer().serializeToString(xmlDoc);
    var blob = new Blob([xmlString], { type: 'application/xml' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'cadastro_jogadores.xml';
    a.click();
}
