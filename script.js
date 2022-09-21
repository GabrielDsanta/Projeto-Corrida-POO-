


let choice = true
let ListaDeCarros = []

class Carro{
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    Distancia(distancia){
        let Resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return Resultado
    }
}

class Corrida{
    NomeCorrida
    TipoCorrida
    DistanciaCorrida
    VencedorCorrida

    VerificarVencedor(){
        let MenorTempo = ListaDeCarros[0].Distancia(this.DistanciaCorrida)
        let vencedor
        
        ListaDeCarros.forEach((carro) => {
            let tempo = carro.Distancia(this.DistanciaCorrida)
            if(tempo < MenorTempo){
                MenorTempo = tempo
                vencedor = carro.Nome
            }
        })
        this.VencedorCorrida = vencedor
    }

    ExibirVencedor(){
        alert(this.VencedorCorrida)
    }
}

while(choice){
    choice = prompt("1 /// Cadastrar Carro /// 2 Cadastrar corrida")
    switch(choice){

        case "1":
        InfoCarros()
        break;

        case "2":
        InfoCorrida()
        break;

        default:
        alert("Opção inválida")
        break;
    }
}

function InfoCarros(){
    let NewCar = new Carro()

    NewCar.Nome = prompt("Qual o nome do carro ?")
    NewCar.Potencia = prompt("Qual a potencia do carro ?")
    NewCar.VelocidadeMaxima = Number(prompt("Qual a velocidade máxima do carro ?"))
    NewCar.Aceleracao = Number(prompt("Qual a aceleração do carro ?"))

    ListaDeCarros.push(NewCar)

    choice = prompt("Deseja continuar ?")
    if(choice == "Não"){
        choice = false
    }
}

function InfoCorrida(){
    let NewCorrida = new Corrida()

    NewCorrida.NomeCorrida = prompt("Qual o nome da corrida ?")
    NewCorrida.TipoCorrida = prompt("Qual o tipo de corrida ?")
    NewCorrida.DistanciaCorrida = Number(prompt("Qual a distancia da corrida ?"))

    NewCorrida.VerificarVencedor()
    NewCorrida.VencedorCorrida = NewCorrida.ExibirVencedor()

    choice = prompt("Deseja continuar ?")
    if(choice == "Não"){
        choice = false
    }

}