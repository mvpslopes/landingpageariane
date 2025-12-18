import { MapPin, Phone, Mail, Globe, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-brand-dark-brown text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-brand-beige flex-shrink-0" />
              <h3 className="font-display text-xl font-semibold text-brand-beige">Endereço</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Rua Campo Grande, nº 1014, SL 223<br />
              Passeio Empresarial<br />
              Campo Grande, Rio de Janeiro | RJ<br />
              CEP 23.080-000
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-brand-beige flex-shrink-0" />
              <h3 className="font-display text-xl font-semibold text-brand-beige">Telefones</h3>
            </div>
            <div className="space-y-2">
              <p className="text-white/80">
                <span className="text-brand-beige font-medium">Escritório:</span><br />
                (21) 3328-9772
              </p>
              <p className="text-white/80">
                <span className="text-brand-beige font-medium">Ariane Andrade:</span><br />
                (21) 98197-2847
              </p>
              <p className="text-white/80">
                <span className="text-brand-beige font-medium">Atendimento Geral:</span><br />
                (21) 99929-3866
              </p>
              <p className="text-white/80">
                <span className="text-brand-beige font-medium">Assessoria ao Criador:</span><br />
                (31) 99079-0604
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-brand-beige flex-shrink-0" />
              <h3 className="font-display text-xl font-semibold text-brand-beige">E-mail</h3>
            </div>
            <a
              href="mailto:contato@arianeandradeassessoria.com.br"
              className="text-white/80 hover:text-brand-beige transition-colors break-words"
            >
              contato@arianeandradeassessoria.com.br
            </a>

            <div className="flex items-center gap-3 mb-4 mt-8">
              <Globe className="w-6 h-6 text-brand-beige flex-shrink-0" />
              <h3 className="font-display text-xl font-semibold text-brand-beige">Site</h3>
            </div>
            <a
              href="http://www.arianeandradeassessoria.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-brand-beige transition-colors"
            >
              www.arianeandradeassessoria.com.br
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex items-start gap-3 mb-6">
            <Building2 className="w-6 h-6 text-brand-beige flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-semibold text-brand-beige mb-2">Razão Social</h3>
              <p className="text-white/80">
                ARIANE ANDRADE INTELIGÊNCIA AGROPECUÁRIA LTDA<br />
                CNPJ: 43.507.435/0001-30
              </p>
            </div>
          </div>

          <div className="text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Ariane Andrade Assessoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
