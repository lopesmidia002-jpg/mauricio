import React, { useState } from 'react';
import { 
  Bot, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  FileText, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { A2M_SYSTEM_PROMPT_STRING } from '../data/assistantJson';
import { ASSISTANT_LIMITS, TERMS_OF_USE } from '../data/termsData';

export const A2MAssistant: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [openLimitId, setOpenLimitId] = useState<string | null>(null);
  const [openTermNum, setOpenTermNum] = useState<number | null>(null);
  const [expandAllTerms, setExpandAllTerms] = useState(false);

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

  const toggleLimit = (id: string) => {
    setOpenLimitId(openLimitId === id ? null : id);
  };

  const toggleTerm = (num: number) => {
    setOpenTermNum(openTermNum === num ? null : num);
  };

  return (
    <section id="assistente" className="relative py-24 bg-brand-secondary/70 border-t border-brand-cyan/20 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-emerald-950/95 border border-emerald-400 text-white shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-emerald-300">Código JSON Copiado!</div>
            <div className="text-xs text-slate-200">Agora abra seu ChatGPT, Claude ou Gemini e cole o código.</div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Shield Badge (img06.png) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-card/90 border border-brand-cyan/40 p-2 shadow-2xl flex items-center justify-center hover:scale-105 transition-transform">
              <img
                src="/assets/img06.png"
                alt="Selo Oficial do Assistente A2M SigniTelling AI"
                className="w-full h-full object-contain filter drop-shadow"
                loading="lazy"
                width={80}
                height={80}
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-cyan/30 text-brand-cyan text-xs font-semibold">
            <Bot className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Assistente Oficial com Metodologia Registrada</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Assistente A2M AI SigniTelling™
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            O assistente está disponível para os leitores e para quem se interessa pelo método. Foi pensado para que empreendedores e profissionais liberais tenham acesso a um processo rigoroso de posicionamento, sem depender de contratar uma consultoria para dar o primeiro passo.
          </p>
        </div>

        {/* Informative Distinction Card: Livro vs Assistente */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-card/90 via-brand-navy to-brand-card/90 border border-brand-cyan/30 shadow-xl max-w-4xl mx-auto mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-amber/20 border border-brand-amber/40 flex items-center justify-center text-brand-amber shrink-0 mt-1">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-lg text-white">
                Como aproveitar o máximo da experiência
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                O que o livro oferece é o conhecimento profundo do método, seus fundamentos, sua lógica e a arquitetura que orienta cada etapa do processo.
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                <strong>Quem usa só o assistente</strong> recebe um percurso bem conduzido. <strong>Quem lê o livro</strong> entende por que ele interrompe um salto abstrato, por que exige prova e por que recomenda renunciar. <span className="text-white font-semibold">A responsabilidade de escolher o que sua marca deseja significar continua sendo sua.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-sm text-slate-300">
            Copie o código JSON (<em>JavaScript Object Notation</em>) abaixo e cole na IA que você já usa ou assina (ChatGPT, Claude, Gemini, Copilot). <span className="text-brand-cyan font-semibold">Não é preciso instalar nada.</span>
          </p>
        </div>

        {/* JSON Code Terminal */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-3xl overflow-hidden border border-brand-cyan/30 shadow-2xl shadow-cyan-950/80 bg-slate-950">
            
            {/* Terminal Top Bar */}
            <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 mr-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                <span className="text-xs font-mono text-slate-300 font-semibold">
                  assistente-a2m-signitelling.json
                </span>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                  copied 
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30' 
                    : 'bg-brand-cyan/20 hover:bg-brand-cyan text-brand-cyan hover:text-slate-950 border border-brand-cyan/40'
                }`}
                aria-label="Copiar código JSON do Assistente"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>CÓDIGO COPIADO!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPIAR CÓDIGO JSON</span>
                  </>
                )}
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 overflow-x-auto max-h-[420px] font-mono text-xs text-slate-300 leading-relaxed bg-[#020617]/95 selection:bg-brand-cyan/30">
              <pre className="text-slate-300">
                <code>
                  {A2M_SYSTEM_PROMPT_STRING}
                </code>
              </pre>
            </div>

            {/* Terminal Bottom Bar */}
            <div className="px-5 py-2.5 bg-slate-900/90 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>UTF-8 • JSON Formatted • Método A2M SigniTelling™</span>
              <button
                onClick={handleCopy}
                className="text-brand-cyan hover:text-white transition-colors underline underline-offset-2"
              >
                {copied ? 'Copiado!' : 'Clique para copiar'}
              </button>
            </div>

          </div>
        </div>

        {/* Collapsible Section 1: Limits of the Assistant */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-brand-card/60 border border-brand-cyan/25 space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-brand-amber">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  Limites do Assistente que Você Deve Conhecer
                </h3>
                <p className="text-xs text-slate-300">
                  Rigor, transparência e cuidados fundamentais antes de iniciar
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {ASSISTANT_LIMITS.map((limit) => {
                const isOpen = openLimitId === limit.id;
                return (
                  <div
                    key={limit.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-colors hover:border-brand-cyan/30"
                  >
                    <button
                      onClick={() => toggleLimit(limit.id)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-heading font-bold text-sm sm:text-base text-white">
                        {limit.title}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-brand-cyan shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 space-y-2 border-t border-slate-800/80 animate-in fade-in duration-200">
                        <p>{limit.description}</p>
                        {limit.highlight && (
                          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-brand-amber text-xs font-mono">
                            <strong>Atenção prática:</strong> {limit.highlight}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Collapsible Section 2: Terms of Use (10 Complete Items) */}
        <div id="termos" className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-brand-card/60 border border-brand-cyan/25 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    Termos de Uso do Assistente
                  </h3>
                  <p className="text-xs text-slate-300">
                    A2M AI SigniTelling™, de Maurício Nunes Sarmento, © 2026.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setExpandAllTerms(!expandAllTerms)}
                className="text-xs font-mono text-brand-cyan hover:text-white underline underline-offset-4 self-start sm:self-auto"
              >
                {expandAllTerms ? 'Recolher todos os termos' : 'Expandir todos os 10 termos'}
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              O prompt é oferecido de forma gratuita para uso pessoal e aplicação direta no próprio negócio, com atribuição obrigatória. Confira as cláusulas de licenciamento, propriedade intelectual e diretrizes:
            </p>

            <div className="space-y-3 pt-2">
              {TERMS_OF_USE.map((term) => {
                const isOpen = expandAllTerms || openTermNum === term.num;
                return (
                  <div
                    key={term.num}
                    className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-colors hover:border-brand-cyan/30"
                  >
                    <button
                      onClick={() => toggleTerm(term.num)}
                      className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-brand-navy border border-brand-cyan/30 flex items-center justify-center text-[11px] font-mono text-brand-cyan font-bold">
                          {term.num}
                        </span>
                        <span className="font-heading font-semibold text-sm sm:text-base text-white">
                          {term.title}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-brand-cyan shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-200">
                        <p>{term.text}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Official Contact for Commercial Licensing */}
            <div className="p-4 rounded-2xl bg-brand-navy/60 border border-brand-cyan/20 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4">
              <span>Para licença comercial, integrações institucionais ou uso em plataformas corporativas:</span>
              <a
                href="mailto:mauricio.sarmento@espm.br"
                className="font-mono font-bold text-brand-amber hover:text-white transition-colors inline-flex items-center gap-1.5 shrink-0"
              >
                <span>mauricio.sarmento@espm.br</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

