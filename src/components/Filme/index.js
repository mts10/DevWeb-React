import "./Filme.css";

const filmes = [{
  "nome": "Vingadores",
  "foto": "vingadores.png",
},
{
  "nome": "Vingadores 2",
  "foto": "vingadores.png",
},
{
  "nome": "Vingadores 3",
  "foto": "vingadores.png",
}
]

export default function Filme() {
  return (
    <div className="container text-center">
        <div class="container">
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Filmes disponíveis</h1>
            </div>
        </div>
      <div class="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome}</h5>
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}