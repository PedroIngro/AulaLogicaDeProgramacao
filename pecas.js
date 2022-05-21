let listaDePecas = ['Filtro de Ar', 'Motor', 'Disco de Freio']

if (listaDePecas.length < 10) 
{
    console.log('É possível cadastrar mais peças.')
}
else
{
    console.log('Capacidade insuficiente. Não é possível cadastrar.')
}

let peso = 50

if (peso < 100)
{
    console.log('A peça deve pesar, no mínimo, 100g.')
}
else
{
    console.log('A peça possui o peso adequado.')
}

let nomePeca = 'Disco de Freio'

/*
if(nomePeca.length >= 3)
{
    console.log('Nome da peça adequado para cadastro.')
}
else if (nomePeca.length == 0) 
{
    console.log('Nome da peça não pode ser vazio.')
}
else
{
    console.log('O nome deve ter, no mínimo, 3 caracteres para ser cadastrado.')
}
*/
// = atribuição de valor;
// == verificar se os valores são iguais;
// === verificar se os valores são idênticos (tem que ser do mesmo tipo)

switch (nomePeca.length) {
    case 0:
        console.log('O nome da peça não pode ser vazio.')
        break;
    case 1:
    case 2:
        console.log('O nome da peça deve ter mais de 3 caracteres.')
    default:
        console.log('O nome da peça é adequado para o cadastro.')
        break;
}