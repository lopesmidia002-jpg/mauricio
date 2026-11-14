import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { A2M_SYSTEM_PROMPT_STRING } from '../data/assistantJson';

export const A2MAssistant: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(A2M_SYSTEM_PROMPT_STRING);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = A2M_SYSTEM_PROMPT_STRING;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setShowToast(true);
      setTimeout(() => setCopied(false), 3000);
      setTimeout(() => setShowToast(false), 4500);
    } catch (err) {
      console.error('Falha ao copiar prompt JSON:', err);
    }
  };

  return (
    <div id="assistente">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-gray-900 border border-gray-700 text-white shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-emerald-300">Código JSON Copiado!</div>
            <div className="text-xs text-gray-300">Cole no ChatGPT, Claude ou Gemini para iniciar.</div>
          </div>
        </div>
      )}

      {/* Part 1: Dark Banner Section (Fundo Grafite Neutro #292929 exatamente como no original do PDF) */}
      <section className="w-full py-16 sm:py-24 bg-[#292929] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
            
            {/* Left: Shield Logo (img06.png) - Sem sombra artificial */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start">
              <div className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px]">
                <img
                  src="/assets/img06.png"
                  alt="Assistente A2M SigniTelling AI"
                  className="w-full h-auto object-contain block"
                  loading="lazy"
                  width={317}
                  height={391}
                />
              </div>
            </div>

            {/* Right: Title, Text and Copy Button */}
            <div className="md:col-span-7 lg:col-span-8 space-y-5 sm:space-y-6 text-white">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                Assistente A2M AI SigniTelling™.
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-white/95 font-normal">
                O assistente está disponível para os leitores e para quem se interessa pelo método. Foi pensado para que empreendedores e profissionais liberais tenham acesso a um processo rigoroso de posicionamento, sem depender de contratar uma consultoria para dar o primeiro passo. O que o livro oferece é o conhecimento profundo do método, seus fundamentos, sua lógica e a arquitetura que orienta cada etapa do processo. Quem usa só o assistente recebe um percurso bem conduzido. Quem lê o livro entende por que ele interrompe um salto abstrato, por que exige prova e por que recomenda renunciar. A responsabilidade de escolher o que sua marca deseja significar continua sendo sua.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-white/95 font-normal">
                Copie o código JSON (JavaScript Object Notation) abaixo e cole na IA que já usa ou assina. Não é preciso instalar nada.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center px-10 sm:px-12 py-3 sm:py-3.5 rounded-full bg-[#BBC9D6] hover:bg-[#a9bac8] active:scale-[0.98] text-black font-heading font-black text-sm sm:text-base uppercase tracking-wider transition-all"
                >
                  <span className="font-black">
                    {copied ? 'CÓDIGO COPIADO!' : 'COPIAR CÓDIGO'}
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Part 2: White Background Legal & Guidelines Section (As exactly in PDF) */}
      <section id="termos" className="py-14 sm:py-20 bg-white text-gray-800 text-xs sm:text-sm leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          
          {/* Limites */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-sm sm:text-base text-gray-950">
              Limites do assistente que você deve conhecer:
            </h3>
            <p>
              Modelos de linguagem não são determinísticos. O comportamento pode variar entre plataformas, versões e planos, e o resultado depende da qualidade das informações fornecidas. Se a IA pular uma etapa ou aceitar uma afirmação sem base, peça que ela retorne à etapa anterior e aplique o Teste de Rastreabilidade.
            </p>
            <p>
              O assistente também não transforma uma operação fraca em uma marca forte. Quando a falha está no negócio, pode ser necessário mudar produto, processo ou experiência antes de mudar a comunicação.
            </p>
            <p>
              Para profissões regulamentadas, como saúde, direito, psicologia e contabilidade, verifique as normas aplicáveis antes de publicar pautas, promessas ou conteúdos sugeridos.
            </p>
            <p>
              Não inclua dados pessoais de clientes ou informações confidenciais sem avaliar a política de privacidade da plataforma de IA utilizada.
            </p>
          </div>

          {/* Uso e licença */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-sm sm:text-base text-gray-950">
              Uso e licença:
            </h3>
            <p>
              Uso gratuito, pessoal e para aplicação no próprio negócio, marca ou projeto, com atribuição. O prompt, a metodologia e a marca não podem ser revendidos, sublicenciados, redistribuídos ou incorporados a produtos, cursos, mentorias, serviços, aplicativos, agentes ou outras ofertas de terceiros sem autorização.
            </p>
            <p>
              A versão vigente e os termos atualizados devem permanecer publicados nesta página oficial.
            </p>
          </div>

          {/* Termos de uso */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-sm sm:text-base text-gray-950">
              Termos de uso do Assistente:
            </h3>
            <ol className="space-y-2 list-none">
              <li>
                <strong className="text-gray-950">1. Titular.</strong> A2M AI SigniTelling™, de Maurício Nunes Sarmento, © 2026. Todos os direitos reservados, exceto os concedidos nestes termos.
              </li>
              <li>
                <strong className="text-gray-950">2. O que você pode fazer.</strong> Usar gratuitamente; copiar o prompt para uso próprio em uma conversa com a IA de sua escolha; aplicar o método ao seu próprio negócio, marca ou projeto; guardar e utilizar os resultados gerados.
              </li>
              <li>
                <strong className="text-gray-950">3. O que você não pode fazer.</strong> Vender, alugar ou sublicenciar o prompt; incluí-lo em produto, curso, mentoria ou serviço pago como entregável ou ferramenta; publicá-lo ou hospedá-lo em lojas, marketplaces ou plataformas de terceiros, como GPTs públicos, bots, agentes, aplicativos ou automações oferecidos a outras pessoas; redistribuir cópias, integrais ou parciais, fora do site oficial; modificar e redistribuir versões derivadas; remover créditos, marca ou avisos; usar o texto para treinar ou ajustar modelos de IA; sugerir vínculo, parceria ou endosso do autor.
              </li>
              <li>
                <strong className="text-gray-950">4. Atribuição.</strong> Ao citar, use: “A2M AI SigniTelling™, de Maurício Nunes Sarmento”.
              </li>
              <li>
                <strong className="text-gray-950">5. Marca.</strong> O nome A2M SigniTelling™ e o respectivo método não são licenciados para uso como marca de terceiros.
              </li>
              <li>
                <strong className="text-gray-950">6. Sem garantia.</strong> O prompt é oferecido no estado em que se encontra. O resultado depende do modelo de IA utilizado e das informações fornecidas, e não substitui consultoria, pesquisa de mercado ou orientação jurídica. O autor não se responsabiliza por decisões tomadas com base nele.
              </li>
              <li>
                <strong className="text-gray-950">7. Dados.</strong> Não inclua dados pessoais de clientes ou informações confidenciais sem avaliar a política de privacidade da plataforma de IA utilizada.
              </li>
              <li>
                <strong className="text-gray-950">8. Versões e alterações.</strong> A versão vigente está no site. O autor pode alterar estes termos para versões futuras.
              </li>
              <li>
                <strong className="text-gray-950">9. Lei aplicável.</strong> Lei brasileira, com foro em São Paulo.
              </li>
              <li>
                <strong className="text-gray-950">10. Outros usos.</strong> Para licença comercial ou uso em plataformas, escreva para mauricio.sarmento@espm.br.
              </li>
            </ol>
          </div>

          {/* Copyright Line (As seen in the PDF) */}
          <div className="pt-6 border-t border-gray-100 text-xs text-gray-500">
            <p>© 2026 Maurício Nunes Sarmento. Todos os direitos reservados.</p>
          </div>

        </div>
      </section>

    </div>
  );
};
