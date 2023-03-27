import { Form } from "react-router-dom";

const plano =[{
  "nome": "Gratuito",
  "tipo": "Todos os Filmes liberados",
  "valor": "0R$"
}]



export default function Planos() {
  return (

    <div className="container text-center">
    <div className="row">
        {plano.map((plano, i) => (


            <div className="col" key={i}>
                <div>

                </div>
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">{plano.nome}</h2><br></br>

                        <h5> Valor mensal {plano.valor}</h5><br></br>

                        <h5>  {plano.tipo}</h5><br></br>

                        <a href="#"><br></br><br></br>
                            <p>Faça seu cadastro aqui para receber notificação de filmes e ficar por dentro de tudo que rola no nosso site</p>
                            <div className="btn btn-dark">
                                Cadastro  </div>
                        </a>


                    </div>
                </div>
            </div>
        ))}
    </div>
</div>


  )
}
