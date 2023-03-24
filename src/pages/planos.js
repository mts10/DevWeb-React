import Filme from "../components/Filme";


const filmes = [{
    "nome": "Vingadores",
    "foto": "vingadores.png",
    "sinopse": "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade."
    
  },
  {
    "nome": "Vingadores 2",
    "foto": "vingadores.png",
    "sinopse": "Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron. Com o destino da Terra em jogo, Capitão América, Homem de Ferro, Thor, Hulk, Viúva Negra e Gavião Arqueiro terão que se unir para mais uma vez salvar a raça humana da extinção."
  },
  {
    "nome": "Vingadores 2",
    "foto": "vingadores.png",
    "sinopse": "Homem de Ferro, Capitão América, Thor, Hulk e os Vingadores se unem para combater o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a humanidade."
  }
]
export default function Planos(){
    return(
        <Filme/>
    )
}