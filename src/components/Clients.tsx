import { Users } from 'lucide-react';

export default function Clients() {
  const clients = [
    'Haras Coroado',
  ];

  return (
    <section id="clientes" className="py-24 bg-gradient-to-b from-brand-off-white via-white to-brand-off-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-14 h-14 bg-brand-brown rounded-full flex items-center justify-center shadow-md shadow-brand-brown/30">
              <Users className="w-7 h-7 text-brand-off-white" strokeWidth={1.5} />
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-brown mb-3">
            Alguns Clientes
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-brand-olive to-transparent mx-auto mb-8" />
          <p className="text-brand-dark-brown/70 text-base md:text-lg mb-10">
            Parcerias que reforçam a confiança no nosso trabalho e na seriedade da assessoria.
          </p>

          <div className="grid gap-6 max-w-md mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-beige/50 via-white to-brand-off-white opacity-60" />
                <div className="relative rounded-2xl px-8 py-6 shadow-md border border-brand-brown/10 bg-white/90 backdrop-blur-sm">
                  <p className="font-display text-2xl md:text-3xl font-semibold text-brand-brown">
                    {client}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
