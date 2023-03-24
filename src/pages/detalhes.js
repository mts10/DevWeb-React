import { useParams } from "react-router-dom";


const filmes = [{
    "nome": "Vingadores",
    "foto": "vingadores.png",
    "duracao": "2H30",
    "ano": 2012,
    "genero": "Ação/Nerd",
    "descricao": "O filme conta a história da equipe de super heróis idealizada e reunida por Nick Fury, agente da S.H.I.E. LD. O time, formado por Homem de Ferro, Capitão América, Thor, Gavião Arqueiro, Hulk e Viúva Negra, é formada com o objetivo de deter os planos de Loki, vilão da narrativa e irmão de Thor.",
    "nota": 5
  },
  {
    "nome": "Vingadores 2",
    "foto": "Vingadores2",
    "duracao": "2H17",
    "ano": 2015,
    "genero": "Ação/Nerd",
    "descricao": "Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron. Com o destino da Terra em jogo, Capitão América, Homem de Ferro, Thor, Hulk, Viúva Negra e Gavião Arqueiro terão que se unir para mais uma vez salvar a raça humana da extinção.",
    "nota": 4.8
  },
  {
    "nome": "Vingadores 3",
    "duracao": "2H30",
    "ano": 2015,
    "genero": "Ação/Nerd",
    "descricao": "Homem de Ferro, Capitão América, Thor, Hulk e os Vingadores se unem para combater o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a humanidade.",
    "nota": 5
  }
]

export default function Detalhes(){
    const {filme} = useParams()

    return (
        <div>
            <p>{filme}</p>
            {(() =>{
                if (filme == 'Vingadores') {
                    return(
                        <div class="card px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                            <p><b>Filme: </b>{filmes[0].nome}</p>
                            <p><b>Ano: </b>{filmes[0].ano}</p>
                            <p><b>Duração: </b> {filmes[0].duracao}</p>
                            <p><b>Descrição: </b>{filmes[0].descricao}</p>
                            <p><b>Genero: </b>{filmes[0].genero}</p>
                            <p><b>Nota: </b> {filmes[0].nota}</p>
                            <a
                            href={`https://www.youtube.com/watch?v=KeNEGtsCWEk`}
                            >
                            <div className="btn btn-primary">
                            Trailer
                            </div>
                            </a>
                        </div>
                    )
                }
                else if (filme == 'Vingadores 2') {
                    return(
                        <div class="card px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                            <p><b>Filme: </b>{filmes[1].nome}</p>
                            <p><b>Ano: </b>{filmes[1].ano}</p>
                            <p><b>Duração: </b> {filmes[1].duracao}</p>
                            <p><b>Descrição: </b>{filmes[1].descricao}</p>
                            <p><b>Genero: </b>{filmes[1].genero}</p>
                            <p><b>Nota: </b> {filmes[1].nota}</p>
                            <a
                             href={`https://www.youtube.com/watch?v=lGO6FcnZ0ek`}
                            >
                            <div className="btn btn-primary">
                            Trailer
                            </div>
                            </a>
                        </div>
                    )
                }
                else {
                    return(
                    <div class="card px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <p><b>Filme: </b>{filmes[2].nome}</p>
                        <p><b>Ano: </b>{filmes[2].ano}</p>
                        <p><b>Duração: </b> {filmes[2].duracao}</p>
                        <p><b>Descrição: </b>{filmes[2].descricao}</p>
                        <p><b>Genero: </b>{filmes[2].genero}</p>
                        <p><b>Nota: </b> {filmes[2].nota}</p>
                        <a
                        href={`https://www.youtube.com/watch?v=DPOw2hfgCHI` }
                        >
                        <div className="btn btn-primary">
                        Trailer
                        </div>
                        </a>
                    </div>
                    )
                }
            })()}
        </div>
    )
}