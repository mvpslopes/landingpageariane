import { ArrowRight, BadgeCheck } from 'lucide-react';
import logo from '../../logo-ariane-wide.png';
import heroPhoto from '../../foto-ariane-fundo.JPG';
import grupoRacaLogo from '../../gruporaca.png';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlanning = () => {
    document.getElementById('planejamento')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExecution = () => {
    document.getElementById('execucao')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToClients = () => {
    document.getElementById('clientes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-off-white to-brand-beige overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-16 left-16 w-72 h-72 bg-brand-brown rounded-[40px] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-olive rounded-full blur-3xl" />
      </div>

      {/* Header flutuante */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full px-4 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between rounded-full bg-white/75 backdrop-blur-md border border-white/70 shadow-sm px-4 md:px-6 py-2">
          <div className="flex items-center gap-3 logo-shimmer">
            <img
              src={logo}
              alt="Logo Ariane Andrade Assessoria"
              className="h-7 md:h-9 object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-brand-dark-brown/80">
            <button
              type="button"
              onClick={scrollToAbout}
              className="hover:text-brand-brown transition-colors"
            >
              Sobre
            </button>
            <button
              type="button"
              onClick={scrollToServices}
              className="hover:text-brand-brown transition-colors"
            >
              Serviços
            </button>
            <button
              type="button"
              onClick={scrollToPlanning}
              className="hover:text-brand-brown transition-colors"
            >
              Planejamento
            </button>
            <button
              type="button"
              onClick={scrollToExecution}
              className="hover:text-brand-brown transition-colors"
            >
              Execução
            </button>
            <button
              type="button"
              onClick={scrollToClients}
              className="hover:text-brand-brown transition-colors"
            >
              Clientes
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="px-4 py-2 rounded-full bg-brand-brown text-white text-xs font-semibold hover:bg-brand-olive transition-colors shadow-sm"
            >
              Contato
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Coluna esquerda – texto */}
          <div className="max-w-xl space-y-7 pt-10 md:pt-12">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-beige/60 text-xs md:text-sm uppercase tracking-[0.25em] text-brand-dark-brown/80">
                Assessoria ao Criador
              </span>
              <h1 className="font-display text-4xl md:text-[2.9rem] lg:text-[3.4rem] font-bold text-brand-brown leading-tight">
                Organização e excelência para o seu criatório
              </h1>
            </div>

            <p className="text-base md:text-[1.05rem] text-brand-dark-brown/80 leading-relaxed max-w-[34rem]">
              Oferecemos aos criadores um atendimento de qualidade, personalizado de acordo com as demandas de cada
              cliente. Garantimos tranquilidade, organização e cumprimento de prazos junto às associações.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group px-9 py-4 bg-brand-olive text-white rounded-full font-semibold text-lg hover:bg-brand-brown transition-all duration-300 flex items-center gap-2 shadow-[0_16px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.3)] transform hover:-translate-y-1"
              >
                Fale Conosco
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToServices}
                className="px-8 py-4 bg-transparent border border-brand-brown/40 text-brand-brown/90 rounded-full font-medium text-lg hover:bg-brand-brown hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1"
              >
                Conheça Nossos Serviços
              </button>
            </div>
          </div>

          {/* Coluna direita – card com foto da Ariane */}
          <div className="relative mt-6 lg:mt-0">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-off-white rounded-3xl -z-10" />
            <div className="absolute -bottom-8 -left-6 w-32 h-32 bg-brand-beige/70 rounded-full blur-xl -z-10" />

            <div className="relative rounded-[32px] bg-white/85 backdrop-blur-md border border-brand-beige/70 shadow-[0_18px_50px_rgba(0,0,0,0.16)] overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="relative h-72 md:h-80 lg:h-96">
                  <img
                    src={heroPhoto}
                    alt="Ariane Andrade em atendimento"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-6 py-4 border-t border-brand-beige/70 flex items-center justify-between gap-3">
                  <div>
                    <p className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.22em] text-brand-dark-brown/60 mb-1">
                      <BadgeCheck className="w-3 h-3 md:w-4 md:h-4 text-brand-brown" />
                      Escritório responsável
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-brand-brown">
                      Gestão de cadastros, contratos e leilões do Grupo Raça
                    </p>
                  </div>
                  <img
                    src={grupoRacaLogo}
                    alt="Logo Grupo Raça"
                    className="h-9 md:h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
