import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import {
  Container,
  Header,
  Open,
  Column,
  Atendimentos,
  CardAtendimentos,
  Publicacoes,
  Sobre,
  Contato,
  CardCompania,
  Footer,
} from './styled';

import Logo from '../../assets/logo-respira-fisio.svg';
import Scroll from '../../assets/scroll.svg';
import Ilustracao_1 from '../../assets/ilustracao_1.svg';
import Ilustracao_2 from '../../assets/ilustracao_2.svg';
// import hi from '../../assets/hi.svg';

import FisioterapiaRespiratoria from '../../assets/fisioterapia-respiratória-pos-covid-19.jpg';
import FisioterapiaOrtopedica from '../../assets/fisioterapia-ortopedica.jpg';
import Hidroterapia from '../../assets/hidroterapia.jpg';
import Pilates from '../../assets/pilates.jpg';
import CovidCuidadosComFisioterapeutaAjudamNaRecuperacaoPulmonar from '../../assets/Covid- cuidados com fisioterapeuta ajudam na recuperação pulmonar.jpg';
import AumentaAProcuraPorTratamentosParaSequelasDeixadasPelaCovid19 from '../../assets/Aumenta a procura por tratamentos para sequelas deixadas pela Covid-19.jpg';

import Logo1 from '../../assets/logo1.png';
import Logo2 from '../../assets/logo2.png';

const Repository: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [carousel, setCarousel] = useState<any>();
  const [vh, setVH] = useState<number>(0);
  const [TypingDone, setTypingDone] = useState<boolean>(false);
  const [cardsAtendimentos, setCardsAtendimentos] = useState<any>(0);

  const handleCarouselPrev = () => {
    console.log(carousel);

    carousel.prev(500);
  };

  const handleCarouselNext = () => {
    carousel.next(500);
  };

  const handleAtendimentos = () => {
    window.scrollTo(0, vh + 1);
  };

  useEffect(() => {
    setVH(window.innerHeight);

    function onScroll() {
      const currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <>
      <Header scroll={scrollTop > vh} logo={Logo}>
        <a href="/">
          <div className="logo"></div>
        </a>
        <ul>
          <li>
            <button type="button" onClick={handleAtendimentos}>
              Atendimentos
            </button>
          </li>
          <li>
            <a href="#publicacoes">Publicações</a>
          </li>
          <li>
            <a href="#sobre">Sobre nós</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </Header>
      <Open>
        <Column color="#4881F1">
          <div className="box-text">
            <h1>
              <Typist
                cursor={{
                  show: true,
                  hideWhenDone: true,
                  hideWhenDoneDelay: 0,
                }}
              >
                Fisioterapia Pós Covid-19
              </Typist>
            </h1>
            <h3>
              <Typist
                cursor={{
                  show: true,
                  hideWhenDone: true,
                  hideWhenDoneDelay: 0,
                }}
                onTypingDone={() => setTypingDone(true)}
              >
                <Typist.Delay ms={1950} />
                Reabilitação e saúde
              </Typist>
            </h3>
            {TypingDone && (
              <a className="btn" href="#contato">
                Entre em contato
              </a>
            )}
          </div>
          <div className="scroll">
            <img src={Scroll} alt="Scroll" />
            <p>Dê um scroll e saiba mais</p>
          </div>
        </Column>
        <Column color="#FFF">
          <div className="box-img">
            <object
              data={Ilustracao_1}
              type="image/svg+xml"
              aria-label="Respira Fisio"
              className="ilustracao-1"
            ></object>
          </div>
        </Column>
      </Open>
      <Atendimentos
        scroll={scrollTop}
        vh={vh}
        lock={cardsAtendimentos.clientHeight}
        id="atendimento"
      >
        <Column color="#89EBC9" height className="box-fixed">
          <div className="box-text">
            <h2>Nossos Atendimentos</h2>
            <h3>
              Fisioterapia Respiratória Pós Covid-19 Fisioterapia Ortopédica
              Hidroterapia Pilates
            </h3>
          </div>
        </Column>
        <Column color="#FFF" className="box-itens">
          <div
            className="box-cards"
            ref={divElement => {
              setCardsAtendimentos(divElement);
            }}
          >
            <CardAtendimentos>
              <div className="box-img">
                <div className="ornamentTopRight"></div>
                <div className="ornamentBottomLeft"></div>
                <img
                  src={FisioterapiaRespiratoria}
                  alt="Fisioterapia Respiratória Pós Covid-19"
                />
              </div>
              <div className="box-text">
                <h5>Fisioterapia Respiratória Pós Covid-19</h5>
                <p>
                  Através da fisioterapia é possível a recuperação da capacidade
                  pulmonar perdida após a infecção por Covid 19. O tratamento
                  consiste na realização de exercícios respiratórios e de
                  cinesioterapia acompanhados pela fisioterapeuta responsável.
                </p>
              </div>
            </CardAtendimentos>
            <CardAtendimentos>
              <div className="box-img">
                <div className="ornamentTopRight"></div>
                <div className="ornamentBottomLeft"></div>
                <img
                  src={FisioterapiaOrtopedica}
                  alt="Fisioterapia Ortopédica"
                />
              </div>
              <div className="box-text">
                <h5>Fisioterapia Ortopédica</h5>
                <p>
                  Trata-se de um recurso terapêutico utilizado no tratamento de
                  doenças musculoesqueléticas, como por exemplo: Hérnia de
                  disco, osteoartrose, escoliose e etc. Utilizando técnicas de
                  fisioterapia podemos reduzir dores, evitar cirurgia, corrigir
                  deformidades entre outros.
                </p>
              </div>
            </CardAtendimentos>
            <CardAtendimentos>
              <div className="box-img">
                <div className="ornamentTopRight"></div>
                <div className="ornamentBottomLeft"></div>
                <img src={Hidroterapia} alt="Hidroterapia" />
              </div>
              <div className="box-text">
                <h5>Hidroterapia</h5>
                <p>
                  É uma atividade terapêutica que consiste na realização de
                  exercícios dentro de uma piscina aquecida acompanhada pela
                  fisioterapeuta. Utilizada no tratamento das diversas afecções
                  como: Artrite, artrose ou reumatismo; Problemas ortopédicos,
                  como fraturas ou hérnias discais; Lesões musculares; Dores
                  articulares; Patologias neurológicas entre outras.
                </p>
              </div>
            </CardAtendimentos>
            <CardAtendimentos>
              <div className="box-img">
                <div className="ornamentTopRight"></div>
                <div className="ornamentBottomLeft"></div>
                <img src={Pilates} alt="Pilates" />
              </div>
              <div className="box-text">
                <h5>Pilates</h5>
                <p>
                  É considerado uma atividade física que trabalha o controle dos
                  músculos do corpo, fortalecendo a musculatura, melhorando seu
                  tônus, consciência e flexibilidade corporal. Consequentemente
                  resultando assim na redução de dores associadas a distúrbios
                  musculoesqueléticos.
                </p>
              </div>
            </CardAtendimentos>
          </div>
        </Column>
      </Atendimentos>
      <Publicacoes id="publicacoes">
        <div className="box-text">
          <h2>Nossas Publicações</h2>
          <div className="btn-carousel">
            <button onClick={handleCarouselPrev} type="button" className="prev">
              <img src={Scroll} alt="Scroll" />
            </button>
            {carousel && (
              <div className="itens">
                {carousel.props.children.map((item: any, key: number) => (
                  <>
                    {key !== 0 && <div> - </div>}
                    <div aria-label={item}>{key + 1}</div>
                  </>
                ))}
              </div>
            )}
            <button onClick={handleCarouselNext} type="button" className="next">
              <img src={Scroll} alt="Scroll" />
            </button>
          </div>
        </div>
        <div className="box-carousel">
          <div className="carousel">
            <OwlCarousel
              className="owl-theme"
              items={1}
              stagePadding={200}
              ref={slider => setCarousel(slider)}
              margin={100}
            >
              <div className="item">
                <div className="card">
                  <img
                    src={
                      CovidCuidadosComFisioterapeutaAjudamNaRecuperacaoPulmonar
                    }
                    alt="Covid - cuidados com fisioterapeuta ajudam na recuperação pulmonar"
                  />
                  <div className="box-text">
                    <h5>
                      Covid: cuidados com fisioterapeuta ajudam na recuperação
                      pulmonar
                    </h5>
                    <a href=".">Saiba mais</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src={
                      AumentaAProcuraPorTratamentosParaSequelasDeixadasPelaCovid19
                    }
                    alt="Aumenta a procura
                  por tratamentos
                  para sequelas deixadas
                  pela Covid-19"
                  />
                  <div className="box-text">
                    <h5>
                      Aumenta a procura por tratamentos para sequelas deixadas
                      pela Covid-19
                    </h5>
                    <a href=".">Saiba mais</a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </Publicacoes>
      <Sobre id="sobre">
        <Column color="#FFF" reverse>
          <div className="box-img">
            <object
              data={Ilustracao_2}
              type="image/svg+xml"
              aria-label="Respira Fisio"
            ></object>
          </div>
        </Column>
        <Column color="#FFF" reverse>
          <div className="box-text">
            <h2>Sobre Nós</h2>
            <p>
              Me chamo Cristiane da Silva Cruz me graduei em Fisioterapia pela
              Unianchieta, me especializei em Fisioterapia Intensiva (UTI) pela
              Physio Cursos/SP, me tornei Mestre em Ciências da Saúde pela
              Faculdade de Medicina de Jundiaí.
            </p>
            <p>
              Possuo certificados para atendimento das seguintes técnicas:
              Bandagem elástica, ventosaterapia e liberação miofascial manual e
              instrumental. Apta a atendimento em pilates solo, bola e aparelhos
              pela VOLL pilates.
            </p>
          </div>
        </Column>
      </Sobre>
      <Contato id="contato">
        <Container>
          <h2>Contato</h2>
          <div className="box-cards-contato">
            <CardCompania>
              <div className="logo">
                <img src={Logo1} alt="" />
              </div>
              <ul className="lista">
                <li>• Hidroterapia</li>
                <li>• Pilates</li>
              </ul>
              <div className="endereco">
                <p>
                  <b>Endereço:</b>
                </p>
                <p>
                  Rua Sebastião Rocha, 171 - Jardim Ermida II, Jundiaí - SP,
                  13212-208
                </p>
              </div>
            </CardCompania>
            <CardCompania>
              <div className="logo">
                <img src={Logo2} alt="" />
              </div>
              <ul className="lista">
                <li>• Fisioterapia Respiratória</li>
                <li>• Fisioterapia Ortopédica</li>
              </ul>
              <div className="endereco">
                <p>
                  <b>Endereço:</b>
                </p>
                <p>
                  R. Barão de Teffé, 1000 - Aglomeração Urbana de Jundiaí,
                  Jundiaí - SP, 13208-761
                </p>
              </div>
            </CardCompania>
          </div>
        </Container>
      </Contato>
      <Footer>
        <Container>
          <div className="itens">
            <div className="logo">
              <img src={Logo} alt="" />
              RESPERIA FISIO
            </div>
            <div className="links">
              <div className="box-links">
                <a
                  href="mailto:cristiane.cruz@respirafisio.com.br"
                  className="email"
                >
                  cristiane.cruz@respirafisio.com.br
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511940265132&text=Ol%C3%A1%20Dra%20Cristiane.%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o!"
                  className="whatsapp"
                >
                  (11) 9 4026-5132
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Footer>
    </>
  );
};

export default Repository;
