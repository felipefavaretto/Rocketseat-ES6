const minhaPromisse = () => new Promise((resolve, reject) =>
setTimeout(() => { resolve('ok') }, 2000);
});

async function executaPromisse(){
    const response = await minha Promise();

    console.log(reponse);
}

executaPromisse();