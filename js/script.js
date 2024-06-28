/*const frutElement=['pera', 'maça', 'goiaba']

console.log(frutElement.indexOf("maça"))
console.log(frutElement.lastIndexOf("pera"))*/

/*  let teste = {
    nome: "lucas",
    idade: 18,
    cor:"negao"
};

let upa = ['ola','opa'];

for(let i = 0; i < upa.length;i++){
    console.log(upa[i])

}

const ve = Object.values(teste)

console.log(ve) */

/* const testeSlice = ["a", "b", "c", "d"];

const subArray = testeSlice.slice(2,3+1)

console.log(subArray)
 */
//forREach
/* 
const nums =[1,2,3,4,5];

nums.forEach((numero) => {
console.log(`esse numero e ${numero}`);
});

const posts = [
{   title:"primeiro post", 
    category:"php"
},
{   title:"primeiro post", 
    category:"java"
},
{   title:"primeiro post", 
    category:"angular"
}
];

posts.forEach(post =>{
console.log(post.category)
}); */

/* let testes = {
    nome: "lucas",
    idade: 18,
    cor:"negao"
};

testes.forEach((teste)=>{
    console.log(teste)

}) */

/* const teste = "opa @\n ";
console.log(teste.length)

console.log(teste.trim().length) */

/* const somaInfinita = (...args) =>{
    let total = 0;

    for(let i = 0; i < args.length; i++){
        total += args[i];
    }

    return total;
}


console.log(somaInfinita(1,2,3));

console.log(somaInfinita(23,45,6,7,8,9,10,10)) */
/* const testes = (...args)=>{
    total =0;
    for (num of args) {
       total += num;
    }
    return total;
}
console.log(testes(1,2,3)); */
/* const animal = {
nome:"gato",
idade:function(){
    console.log(112)
}
}
animal.idade()
console.log(animal.idade) */



/*function EscrevaMeuNome(nome){
    console.log('meu nome e:'+ nome);
} 
EscrevaMeuNome('lucas');
 
EscrevaMeuNome('theo');

function Verificalidade(idade){
    if(idade >= 18){
        console.log('voce e de maior');
    }else{
        console.log('voce e de menor');
    }
}

Verificalidade(200);
function CalcularPreco(precoEtiqueta, formaDePagamento){
    let val;
    if(formaDePagamento === 1){
        console.log("aqui 1: "+precoEtiqueta - (precoEtiqueta * 0.1));
        val = precoEtiqueta - (precoEtiqueta * 0.1);
    }else if(formaDePagamento === 2){
        console.log("aqui 2 " + precoEtiqueta - (precoEtiqueta * 0.15));
        val = precoEtiqueta - (precoEtiqueta * 0.15);
    }else if(formaDePagamento == 3){
        console.log(precoEtiqueta)
    }else{
        console.log(precoEtiqueta + (precoEtiqueta * 0.1));
         val = precoEtiqueta + (precoEtiqueta * 0.1);
    }
    
}

CalcularPreco(100,4);

class pessoa {
    nome;
    idade;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }


    descrever(){
    console.log(`nome: ${this.nome} e minha idade ${this.idade}`);
    }
}

const lucas = {
    nome:"lucas",
    idade:22,

    descrever: function(){
        console.log(`nome: ${this.nome} e minha idade ${this.idade}`);
    }
};

 const lucas = new pessoa("theo",21);
 

 console.log(lucas)


 class Carro{
        marca;
        cor;
        gastoMedio;
        kilometragem;

        constructor(gastoMedio,kilometragem){
            this.gastoMedio = gastoMedio;
            this.kilometragem = kilometragem;
        }
        
        

        GastoDeViagem(distancia,precoCombustivel){
            return distancia * this.gastoMedio * precoCombustivel;
        }


    }


    const mob = new Carro(1,12)
    const resp = mob.GastoDeViagem(20,5.20)
    console.log(mob)
    console.log(resp


class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    CalImc(){
        const imc = this.peso / (this.altura * this.altura);
        if(imc >= 18.1 && imc <= 24.9 ){
            console.log("normal");
        }else if(imc >= 25 && imc <= 29.9){
            console.log("sobrepeso");
        }else if(imc >= 30 && imc <= 34.9){
            console.log("obsidade");
        }
        
        return imc;
    }

}


const jose = new Pessoa('lucas',68,1.48);
const resp = jose.CalImc().toFixed(2);
console.log(resp);

const notas =[1,2,3,7,8,9]
let soma = 0
for(let i = 0; i < notas.length;i++){
    const nota  = notas[i]
    soma = soma+ nota
}

console.log(soma)*/


//for(let i = 0; i < 11; i++){
    
//}
    
/*let tabuada = (numero) =>{
    let result = 0;
    for(let i = 0; i < 11; i++){
     console.log("o numero e:", i , numero * i)
    }
}
tabuada(2)

const vetor = [1,2,3,4,5,6,7,8,9,10,11,34];
    
for(let i = 0; i < vetor.length;i++ ){
       let numero = vetor[i];
       if(numero % 2 ===0){
        console.log(numero)
       }
}*/



