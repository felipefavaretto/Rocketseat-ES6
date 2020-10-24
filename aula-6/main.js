const usuario ={
    nome:'diego',
    idade: 23,
    endereço:{
        cidade: 'rio do sul',
        estado:'sc',
    },
};

const{ nome, idade, endereço} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);