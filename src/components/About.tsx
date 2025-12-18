import { Award, Clock, Heart } from 'lucide-react';
import aboutPhoto from '../../foto-ariane-fundo.JPG';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção individualizada',
    },
    {
      icon: Clock,
      title: 'Cumprimento de Prazos',
      description: 'Organização e pontualidade em cada etapa',
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Qualidade e profissionalismo garantidos',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-beige rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-off-white rounded-full -z-10" />
            <img
              src={aboutPhoto}
              alt="Ariane Andrade em atendimento a criadores"
              className="w-full rounded-3xl object-cover shadow-2xl max-h-[420px]"
            />
          </div>

          <div>
            <div className="mb-10 text-left">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-brown mb-6">
                Sobre a Assessoria
              </h2>
              <p className="text-lg md:text-xl text-brand-dark-brown/80 leading-relaxed">
                Oferecemos aos criadores um atendimento de qualidade, personalizado de acordo com as demandas de cada cliente,
                garantindo organização, cumprimento de prazos e excelência em cada etapa da criação.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-brand-off-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-brand-beige"
                >
                  <div className="w-14 h-14 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <value.icon className="w-7 h-7 text-brand-off-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-brand-brown mb-2">
                    {value.title}
                  </h3>
                  <p className="text-brand-dark-brown/70 text-sm md:text-base">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
