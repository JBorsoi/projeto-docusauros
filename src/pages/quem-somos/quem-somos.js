import React from 'react';
import Layout from '@theme/Layout';
//import './quem-somos.css'; ---A página inicial fica "quebra se eu importar o css por algum motivo"

export default function MyReactPage() {
    return (
        <Layout>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "20px",
                    padding: "2rem"
                }}
            >
                <h1>Quem Somos</h1>
                <div className="container">
                    <div className="row">
                        <div className="person">
                            <img src="/img/Caio.png" alt="Nome da Pessoa 1" />
                            <h3>Caio Seyiti Sumizawa de Almeida</h3>
                            <p>Estudante de Ciência da Computação</p>
                            <a href="https://github.com/CaioSumizawa1">GitHub</a>
                        </div>

                        <div className="person">
                            <img src="/img/Joao.png" alt="Nome da Pessoa 2" />
                            <h3>João Pedro Camargo Borsoi</h3>
                            <p>Estudante de Engenharia de Software</p>
                            <a href="https://github.com/JBorsoi">GitHub</a>
                        </div>

                        <div className="person">
                            <img src="/img/Pedro.png" alt="Nome da Pessoa 3" />
                            <h3>Pedro Felipe Vaitkevicius Ferreira</h3>
                            <p>Estudante de engenharia de Software</p>
                            <a href="https://github.com/Mylittlepony99">GitHub</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="person">
                            <img src="/img/Renata.png" alt="Nome da Pessoa 4" />
                            <h3>Renata Porto Gransoti</h3>
                            <p>Estudante de Ciência da Computação</p>
                            <a href="https://github.com/RenataPortoGransoti">GitHub</a>
                        </div>

                        <div className="person">
                            <img src="/img/Luiz.png" alt="Nome da Pessoa 5" />
                            <h3>Luiz Felipe Gonsalves Silva</h3>
                            <p>Estudante de Ciência da Computação</p>
                            <a href="https://github.com/LFSilva02">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
