import {
  UserPlus,
  Baby,
  ClipboardList,
  FileText,
  Stethoscope,
  Scan,
  Trophy,
  Monitor,
  Building2,
  RefreshCw
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: UserPlus,
      title: 'Cadastros de novos associados',
    },
    {
      icon: Baby,
      title: 'Comunicados de prenhezes, embriões e nascimentos dentro do prazo estipulado pelas associações, evitando multas',
    },
    {
      icon: ClipboardList,
      title: 'Controle de plantel da gestação ao nascimento até o registro definitivo',
    },
    {
      icon: FileText,
      title: 'Contratos e controle de compra, venda e condomínios de animais',
    },
    {
      icon: Stethoscope,
      title: 'Abertura de serviços para o técnico e acompanhamento da visita',
    },
    {
      icon: Scan,
      title: 'Leitor de chip para conferência e identificação dos animais',
    },
    {
      icon: Trophy,
      title: 'Inscrições em copas e exposições',
    },
    {
      icon: Monitor,
      title: 'Sistema completo de gestão de plantel (Smart Criador)',
    },
    {
      icon: Building2,
      title: 'Toda demanda junto às associações das raças',
    },
    {
      icon: RefreshCw,
      title: 'Transferências de propriedade de animais',
    },
  ];

  return (
    <section
      id="servicos"
      className="py-24 bg-gradient-to-b from-brand-off-white via-white to-brand-off-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-beige/40 text-xs md:text-sm uppercase tracking-[0.2em] text-brand-dark-brown/70 mb-4">
            Serviços exclusivos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-brown mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-brand-olive to-transparent mx-auto mb-4" />
          <p className="text-brand-dark-brown/70 text-base md:text-lg leading-relaxed">
            Cuidado completo com as demandas do criador, do registro ao acompanhamento diário
            do plantel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-beige/40 via-white to-brand-off-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-brand-beige/60 shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-brown to-brand-olive rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-brand-brown/20">
                  <service.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <p className="text-brand-dark-brown leading-relaxed text-sm md:text-base">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
