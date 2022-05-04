//undefined é um tipo que não existe
//null é um tipo inválido
//null, undefined, 0, false, '', "" é tudo convertido pra falso no JS --> coerção dinâmica
//identidade restrita === não sofre coerção dinâmica, verifica tipagem além de valor
//subrotina: função sem return --> igual o void
//função com return: varios usos -> liberdade de uso
//função anonima: sem nome
//expressao de função: função atribuida a uma variavel
//this referencia elementos do mesmo escopo
//this: variável interna que aponta para atributos e metodos dentro de um objeto ou classe
//this dentro de função também é objeto global


function escreve(nome, sobrenome){
    const a = sobrenome;
    if(a === null){
        console.log("sobrenome nulo");
    }else{
        console.log(`${nome} ${sobrenome}`);
    }
}


// escreve('bia', undefined);


function soma(a, b){
    return Number(a) + Number(b);
}

//expressao de função
const exibe = function(x){
    return "exibibindo" + x;
};


//onde o JS está sendo executado? qual é o contexto? --> browser. this depende do contexto
//no browser o this é a window
//versao estrita do JS, this não será window

function whoIsThis(){
    console.log(this === window);
}
function whoIsThisStrict(){
    "use strict";            //usar JS mais polido
    console.log("strict");
    console.log(this === window);
}

function exibeArrow(){
    this.a = 50;
}

// const novoObjeto = new exibeArrow();
// console.log(novoObjeto.a);

const Pessoa = {
    velocidade: 0,
    nome: "Beatriz",
    andar: function(){
        console.log("velocidade atual", this.velocidade);
    },
    exibeNome: function(){
        this.andar();
        console.log(`Nome: ${nome} velocidade: ${velocidade}`);
    },
};

const aluno = {
    nome: 'bia',
    matricula: 123,
    executar: function (){
        return this;
    }
}

// console.log(aluno.executar());

// let empresa = this;
// console.log(empresa);
// document.write("<h2>Escrevendo no body</h2>");

//arrow function: mais curta, mais simples, não tem contexto próprio;
const novaFuncao = (a, b) => {
    console.log("calling arrow function");
    console.log(`${a} - ${b}`);
}

novaFuncao(1, 2);

//quando tem 1 só parametro nao precisa de parenteses, e quando um só comando, não precisa de chaves
//arrow function
const funcao3 = a => console.log("oi");

//na arrow function, this não existe
//vantagem da arrow function: uma coisa simples, não precisa usar o this em nenhum contexto

//spread operator '...' : ele passa varios parametros como se fosse um só, retornando uma lista
const carros = (melhor, segundo, ...restantes) =>{
    console.log(restantes);
}
carros('onix', 'uno', 'kwid', 'sandero', 'kicks', 'Spin');


//destructuring assignment: atribuição por desestruturação