import React from "react";

export default function Sobre() {
        return (
            <div class="card px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">            
            <p>Olá usuário!</p>
            <h2>Que bom te ver por aqui!!</h2>
            <p>Este site é um serviço gratuito de streaming aonde voce pode ter acesso aos mais variados filmes
                de forma rápida, simples e fácil.
            </p>
            <p>Clique no botão abaixo e veja os filmes disponíveis:</p>
            <a
                  href={`/error`}
                >
                  <div className="btn btn-primary">
                    Filmes
                  </div>
                </a>

        </div>
        
    )
}