import { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'

import imgClinic from '../../assets/img/clinic-img.svg'
import imgFaq from '../../assets/img/faq-img.svg'
import imgShape from '../../assets/img/shape.svg'
import imgShop from '../../assets/img/shop-img.svg'
import imgStart from '../../assets/img/start-img.svg'

export function Main() {
  const [duvidaAtiva, setDuvidaAtiva] = useState(null)

  const toggleDuvida = (index) => {
    if (duvidaAtiva === index) {
      setDuvidaAtiva(null)
    } else {
      setDuvidaAtiva(index)
    }
  }

  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <section
        id="inicio"
        className="flex flex-col items-center justify-center gap-8 lg:flex-row"
      >
        <img
          src={imgStart}
          alt="img de inicio"
          className="h-auto max-w-full rounded-lg"
        />

        <div>
          <h1 className="text-center text-xl font-bold sm:text-2xl lg:text-left lg:text-3xl">
            Garanta uma vida longa e cheia de alegria para o seu melhor amigo
          </h1>
          <p className="paragrafo mt-4 text-justify text-base sm:text-lg">
            A PetLife é o seu refugio de confiança para o cuidado completo do
            sue pet. Com profissionais dedicados e serviços abrangentes,
            oferecemos uma experiência acolhedora e personalizada, garantindo o
            bem-estar, a saúde e a felicidade dos seus animais de estimação.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <a
              className="botao w-full sm:w-auto"
              href="https://wa.me/69992991613"
              target="_blank"
            >
              Marque uma consulta
            </a>
            <a className="botao-transparente w-full sm:w-auto" href="#clinica">
              Conheça nossa Clínica
            </a>
          </div>
          <img className="absolute" src={imgShape} alt="" />
        </div>
      </section>

      <section id="clinica" className="p-4 lg:p-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-center text-2xl font-bold lg:text-left lg:text-3xl">
              Cuidado Veterinário de Qualidade
            </h2>
            <p className="mt-4 text-justify text-base lg:text-lg">
              Nossa clínica veterinária é o local onde a paixão pelos animais se
              une à excelência em cuidados veterinários. Sob a liderança da Dra.
              Vivian Reid, uma profissional altamente qualificada e
              comprometida, oferecemos serviços de saúde e bem-estar para
              animais de estimação de todas as espécies. Venha conhecer nossa
              clínica e desfrute da atenção personalizada e do carinho que seu
              pet merece.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm lg:text-base">
              <li>Consultas de rotina e exames de saúde abrangentes</li>
              <li>Vacinação e imunização</li>
              <li>Cirurgias e procedimentos veterinários</li>
              <li>Tratamento e controle de doenças</li>
              <li>Odontologia veterinária</li>
              <li>Atendimento de emergência 24 horas</li>
              <li>Nutrição e aconselhamento alimentar personalizado</li>
            </ul>
          </div>

          <img
            src={imgClinic}
            alt=""
            className="mx-auto mt-4 h-auto max-w-full rounded-lg lg:mt-0"
          />
        </div>
      </section>

      <section id="farmacia" className="p-4 md:p-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Venha conferir o nosso petshop e farmácia
          </h2>
          <img
            src={imgShop}
            alt=""
            className="mx-auto mt-4 h-auto max-w-full rounded-lg"
          />
          <p className="paragrafo mt-4 text-justify text-base md:text-lg">
            Além de ser uma clínica veterinária de confiança, também contamos
            com um completo petshop e farmácia. Nosso petshop oferece uma ampla
            seleção de produtos de alta qualidade, desde alimentos balanceados e
            petiscos deliciosos até brinquedos divertidos e acessórios elegantes
            para o seu pet. Na nossa farmácia, você encontrará uma variedade de
            medicamentos, produtos de cuidados e suplementos recomendados pelos
            nossos veterinários, garantindo que o bem-estar e a saúde do seu
            amado pet estejam sempre em boas mãos. Tudo o que você precisa para
            cuidar e mimar o seu pet está aqui, no nosso petshop e farmácia, com
            a mesma dedicação e qualidade que nos tornou referência na área
            veterinária.
          </p>
        </div>
      </section>

      <section
        id="duvidas"
        className="flex flex-col items-center justify-center gap-8 p-4 md:flex-row md:p-8"
      >
        <img
          src={imgFaq}
          alt="FAQ"
          className="h-auto max-w-full rounded-lg md:w-1/3"
        />
        <div className="w-full md:w-2/3">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
            Ficou alguma dúvida?
          </h2>
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`duvida mb-4 cursor-pointer border-2 border-red-500 p-4 last:mb-0 ${duvidaAtiva === index ? 'ativa' : ''}`}
              onClick={() => toggleDuvida(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold md:text-xl">
                  {index === 0
                    ? 'Quais serviços são oferecidos pela clínica da PetLife'
                    : index === 1
                      ? 'Quais espécies de animais a clínica veterinária atende?'
                      : index === 2
                        ? 'A clínica da PetLife possui serviços de emergência'
                        : 'A clínica oferece serviços de banho e tosa?'}
                </h3>
                {duvidaAtiva === index ? (
                  <X size={24} className="text-red-500" />
                ) : (
                  <ChevronDown size={24} className="text-red-500" />
                )}
              </div>
              {duvidaAtiva === index && (
                <p className="paragrafo mt-2 text-justify">
                  {index === 0
                    ? 'A clínica da PetLife oferece uma ampla gama de serviços, incluindo consultas de rotina, vacinação, cirurgias, tratamento de doenças, cuidados odontológicos, atendimento de emergência 24 horas, programas de prevenção de pulgas, carrapatos e vermes, entre outros. Nosso objetivo é fornecer cuidados abrangentes e personalizados para garantir a saúde e o bem-estar do seu pet.'
                    : index === 1
                      ? 'A clínica veterinária da PetLife atende animais de estimação de todas as espécies, incluindo cães, gatos, pássaros, roedores e répteis. Nossos profissionais possuem conhecimento e experiência para cuidar de diferentes tipos de animais, oferecendo um atendimento especializado e dedicado a cada um deles.'
                      : index === 2
                        ? 'Sim, a clínica veterinária da PetLife oferece serviços de emergência 24 horas. Se o seu animal de estimação precisar de atendimento veterinário imediato fora do horário de expediente, nossa equipe está pronta para ajudar, fornecendo cuidados urgentes e tratamento adequado para garantir o bem-estar do seu pet.'
                        : 'Sim, a clínica veterinária da PetLife oferece serviços profissionais de banho e tosa. Nossa equipe de profissionais experientes garante que seu pet receba cuidados adequados, usando produtos de alta qualidade e técnicas seguras. O banho e tosa ajudam a manter a higiene, a saúde de pele e pelagem do seu pet, além de proporcionar uma experiência relaxante e agradável para eles.'}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
