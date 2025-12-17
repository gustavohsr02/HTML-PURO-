/*USAMOS A TAG VAR, PARA DECLARAR UMA VARIÁVEL, NO CASO RADIO*/
var radio = document.querySelector('.manual-btn')
/*VARIÁVEL CONT, PARA CONTROLAR QUAL IMAGEM DO RADIO ESTÁ ATIVA*/
var cont = 1
/*BUSCA O ELEMENTO HTML COM O ID RADIO1/ CHECKED FAZ COM QUE A PRIMEIRA IMG DO SLIDER APAREÇA AO CARREGAR A PÁGINA*/
document.getElementById('radio1').checked = true
/*FUNÇÃO QUE CHAMA A PRÓXIMA IMG DO SLIDER A CADA 5 SEGUNDOS*/
setInterval(() => {
    proximaImg()
}, 5000)
/*ESSA FUNÇÃO É RESPONSÁVEL POR TROCAR A IMG DO SLIDER*/
function proximaImg() {
    cont++
/*VERIFICA SE O CONTADOR PASSOU DE 4 IMG, CASO PASSE ELE VOLTARÁ PARA A IMG 1 E FICARÁ EM LOOP INFINITO*/
    if(cont > 4){
        cont = 1 
    }
/*MARCA AUTOMATICAMENTE O RADIO CORRESPONDENTE AO CONTADOR*/
    document.getElementById('radio'+cont).checked = true
}