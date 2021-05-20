// Carne - 450gr por pessoa + de 6 horas - 650gr
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refrigerante - 1000ml por pessoa + de 6 horas - 1500ml

// Crianças valem por metade - 0.5

let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


    let homens = Number(inputHomens.value);
    let mulheres = Number(inputMulheres.value);
    let criancas = Number(inputCriancas.value);
    let duracao = Number(inputDuracao.value);

    let qtdTotalCarne = carnePP(duracao) * (mulheres + homens) + (carnePP(duracao) / 2 * criancas);
    let qtdTotallinguica = linguicaPP(duracao) * (mulheres + homens) + (linguicaPP(duracao) / 2 * criancas);
    let qtdTotalPao = paoPP(duracao) * (mulheres + homens) + (paoPP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * (mulheres + homens);
    let qtdTotalBebidas = bebidasPP(duracao) * (mulheres + homens) + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${(qtdTotalCarne / 1000).toFixed(1)} Kg de Carne </p>`
    resultado.innerHTML += `<p>${(qtdTotallinguica / 1000).toFixed(1)} Kg de Linguiça</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalPao / 10)} Pães de alho</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafa de Bebidas</p>`



function carnePP(duracao) {

    if (duracao == '3') {
        return 450;
    } else if (duracao == '4') {
        return 550;
    } else if (duracao == '5') {
        return 650;
    }

}


function linguicaPP(duracao) {

    if (duracao == '3') {
        return 200;
    } else if (duracao == '4') {
        return 300;
    } else if (duracao == '5') {
        return 400;
    }

}

function paoPP(duracao) {

    if (duracao == '3') {
        return 5;
    } else if (duracao == '4') {
        return 10;
    } else if (duracao == '5') {
        return 15;
    }

}


function cervejaPP(duracao) {

    if (duracao == '3') {
        return 1500;
    } else if (duracao == '4') {
        return 1800;
    } else if (duracao == '5') {
        return 2500;
    }

}


function bebidasPP(duracao) {

    if (duracao == '3') {
        return 500;
    } else if (duracao == '4') {
        return 800;
    } else if (duracao == '5') {
        return 1000;
    }

}
