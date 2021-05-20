import React, { useState, useEffect } from 'react';

import { Container, Header, Presentation, Parceiros, Atendimentos, Publicacoes, Sobre, Contato } from './styled';

import Logo from '../../assets/logo-respira-fisio.svg';
import Banner from '../../assets/banner.svg';
import Email from '../../assets/email.svg';
import Whatsapp from '../../assets/whatsapp.svg';

import LogoEquilibruim from '../../assets/logo-equilibrium.svg';
import LogoCompanhiaForma from '../../assets/logo-companhia-forma.svg';

import FisioterapiaRespiratoriaPosCovid19 from '../../assets/Fisioterapia Respiratória Pós Covid 19.jpg';
import FisioterapiaOrtopedica from '../../assets/Fisioterapia Ortopédica.jpg';
import Hidroterapia from '../../assets/Hidroterapia.jpg';
import Pilates from '../../assets/Pilates.jpg';
import CuidadosComFisioterapeuta from '../../assets/Cuidados com fisioterapeuta.jpg';
import ProcuraPorTratamentos from '../../assets/ProcuraPorTratamentos.jpg';

const Repository: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <>
      <Header scroll={scrollTop > 0}>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="Logo Respira Físio" />
          </div>
          <ul>
            <li>
              <a href="#atendimento">ATENDIMENTOS</a>
            </li>
            <li>
              <a href="#publicacoes">PUBLICAÇÕES</a>
            </li>
            <li>
              <a href="#sobre">SOBRE NÓS</a>
            </li>
            <li>
              <a href="#contato">CONTATO</a>
            </li>
          </ul>
        </div>
      </Header>
      <Container>
        <Presentation>
          <div className="container">
            <div className="text">
              <h1>Fisioterapia Pós Covid 19</h1>
              <p>Reabilitação e saúde</p>
              <a href="#contato">Entre em contato</a>
            </div>
            <div>
              <img src={Banner} alt="" />
            </div>
          </div>
        </Presentation>
      </Container>
      <Parceiros>
        <div className="container">
          <img src={LogoEquilibruim} alt=""/>
          <img src={LogoCompanhiaForma} alt=""/>
        </div>
      </Parceiros>
      <Atendimentos id="atendimento">
        <div className="container">
          <h2>Nossos Atendimentos</h2>
          <div className="box-itens">
            <div className="item">
              <img src={FisioterapiaRespiratoriaPosCovid19} alt=""/>
              <div className="conteudo">
                <h3>Fisioterapia Respiratória Pós Covid 19</h3>
                <p>Através da fisioterapia é possível a recuperação da capacidade pulmonar perdida após a infecção por Covid 19.  O tratamento consiste na realização de exercícios respiratórios e de cinesioterapia acompanhados pela fisioterapeuta responsável.</p>
              </div>
            </div>
            <div className="item">
              <img src={FisioterapiaOrtopedica} alt=""/>
              <div className="conteudo">
                <h3>Fisioterapia Ortopédica</h3>
                <p>Trata-se de um recurso terapêutico utilizado no tratamento de doenças musculoesqueléticas, como por exemplo: Hérnia de disco, osteoartrose, escoliose e etc. Utilizando técnicas de fisioterapia podemos reduzir dores, evitar cirurgia, corrigir deformidades entre outros.</p>
              </div>
            </div>
            <div className="item">
              <img src={Hidroterapia} alt=""/>
              <div className="conteudo">
                <h3>Hidroterapia</h3>
                <p>É uma atividade terapêutica que consiste na realização de exercícios dentro de uma piscina aquecida acompanhada pela fisioterapeuta. Utilizada no tratamento das diversas afecções como: Artrite, artrose ou reumatismo; Problemas ortopédicos, como fraturas ou hérnias discais; Lesões musculares; Dores articulares; Patologias neurológicas entre outras.</p>
              </div>
            </div>
            <div className="item">
              <img src={Pilates} alt=""/>
              <div className="conteudo">
                <h3>Pilates</h3>
                <p>É considerado uma atividade física que trabalha o controle dos músculos do corpo, fortalecendo a musculatura, melhorando seu tônus, consciência e flexibilidade corporal. Consequentemente resultando assim na redução de dores associadas a distúrbios musculoesqueléticos.</p>
              </div>
            </div>
          </div>
        </div>
      </Atendimentos>
      <Publicacoes id="publicacoes">
        <div className="container">
          <h2>Nossas Publicações</h2>
          <div className="box-itens">
            <div className="item">
              <a href="https://tribunadejundiai.com.br/saude/coronavirus/covid-cuidados-com-fisioterapeuta-ajudam-na-recuperacao-pulmonar/" target="_blank" rel="noreferrer">
                <img src={CuidadosComFisioterapeuta} alt=""/>
                <p>Covid: cuidados com fisioterapeuta ajudam na recuperação pulmonar</p>
              </a>
            </div>
            <div className="item">
              <a href="https://globoplay.globo.com/v/9272531/" target="_blank" rel="noreferrer">
                <img src={ProcuraPorTratamentos} alt=""/>
                <p>Aumenta a procura por tratamentos para sequelas deixadas pela Covid-19</p>
              </a>
            </div>
          </div>
        </div>
      </Publicacoes>
      <Sobre id="sobre">
        <div className="container">
          <h2>Sobre nós</h2>
          <p>Cristiane Cruz é fisioterapeuta intensivista formada há 5 anos pelo Unianchieta, Pós-Graduada em Terapia Intensiva e Mestre em Ciências da saúde.</p>
          <p>Realiza atendimentos em parceria com a Clínica Vivaz e Academia Companhia Forma, para mais informações entre em contato.</p>
        </div>
      </Sobre>
      <Contato id="contato">
        <div className="container">
          <h2>Contato</h2>
          <div className="box-itens">
            <div className="item">
              <h3>Equilibrium</h3>
              <p>- Fisioterapia respiratória</p>
              <p>- Fisioterapia ortopédica</p>
              <h4>Local de atendimento</h4>
              <a href="https://goo.gl/maps/uZY198WGZrz24NDP8" target="_blank" rel="noreferrer">R. Barão de Teffé, 1000 - Aglomeração Urbana de Jundiaí, Jundiaí - SP, 13208-761</a>
            </div>
            <div className="item">
              <h3>Companhia forma</h3>
              <p>- Hidroterapia</p>
              <p>- Pilates</p>
              <h4>Local de atendimento</h4>
              <a href="https://goo.gl/maps/bdCRzGemdiYKDXU47" target="_blank" rel="noreferrer">Rua Sebastião Rocha, 171 - Jardim Ermida II, Jundiaí - SP, 13212-208</a>
            </div>
          </div>
          <div className="box-itens-redes">
            <div className="item">
              <img src={Email} alt=""/>
              <a href="mailto:cristiane.cruz@respirafisio.com.br" target="_blank" rel="noreferrer">cristiane.cruz@respirafisio.com.br</a>
            </div>
            <div className="item">
              <img src={Whatsapp} alt=""/>
              <a href="https://api.whatsapp.com/send?phone=5511940265132&text=Ol%C3%A1%20Dra%20Cristiane.%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o!" target="_blank" rel="noreferrer">(11) 9 4026-5132</a>
            </div>
          </div>
        </div>
      </Contato>
    </>
  );
};

export default Repository;
