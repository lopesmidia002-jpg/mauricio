export interface LimitItem {
  id: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface TermItem {
  num: number;
  title: string;
  text: string;
}

export const ASSISTANT_LIMITS: LimitItem[] = [
  {
    id: "determinismo",
    title: "1. Modelos de linguagem não são determinísticos",
    description: "O comportamento pode variar entre plataformas, versões e planos, e o resultado depende da qualidade das informações fornecidas.",
    highlight: "Se a IA pular uma etapa ou aceitar uma afirmação sem base, peça que ela retorne à etapa anterior e aplique o Teste de Rastreabilidade."
  },
  {
    id: "operacao",
    title: "2. Não transforma uma operação fraca em marca forte",
    description: "Quando a falha está no negócio, produto ou serviço, a comunicação não resolve sozinha.",
    highlight: "Pode ser necessário aprimorar produto, processo ou experiência antes de transformar a comunicação."
  },
  {
    id: "regulamentacao",
    title: "3. Profissões Regulamentadas",
    description: "Para áreas como Saúde, Direito, Psicologia, Engenharia e Contabilidade, o rigor ético é mandatório.",
    highlight: "Verifique sempre as normas específicas dos conselhos de classe antes de publicar pautas, promessas ou conteúdos sugeridos."
  },
  {
    id: "privacidade",
    title: "4. Privacidade e Segurança de Dados",
    description: "Proteja as informações estratégicas e proprietárias do seu negócio e de terceiros.",
    highlight: "Não inclua dados pessoais de clientes ou informações confidenciais sem avaliar previamente a política de privacidade da plataforma de IA utilizada."
  }
];

export const TERMS_OF_USE: TermItem[] = [
  {
    num: 1,
    title: "Titularidade",
    text: "A2M AI SigniTelling™, de Maurício Nunes Sarmento, © 2026. Todos os direitos reservados, exceto os expressamente concedidos nestes termos."
  },
  {
    num: 2,
    title: "O que você pode fazer",
    text: "Usar gratuitamente; copiar o prompt para uso próprio em uma conversa com a IA de sua escolha; aplicar o método ao seu próprio negócio, marca ou projeto; guardar e utilizar os resultados gerados."
  },
  {
    num: 3,
    title: "O que você NÃO pode fazer",
    text: "Vender, alugar ou sublicenciar o prompt; incluí-lo em produto, curso, mentoria ou serviço pago como entregável ou ferramenta; publicá-lo ou hospedá-lo em lojas, marketplaces ou plataformas de terceiros, como GPTs públicos, bots, agentes, aplicativos ou automações oferecidos a outras pessoas; redistribuir cópias, integrais ou parciais, fora do site oficial; modificar e redistribuir versões derivadas; remover créditos, marca ou avisos; usar o texto para treinar ou ajustar modelos de IA; sugerir vínculo, parceria ou endosso do autor."
  },
  {
    num: 4,
    title: "Atribuição Obrigatória",
    text: "Ao citar ou referenciar a metodologia, utilize obrigatoriamente: \"A2M AI SigniTelling™, de Maurício Nunes Sarmento\"."
  },
  {
    num: 5,
    title: "Proteção de Marca",
    text: "O nome A2M SigniTelling™ e o respectivo método não são licenciados para uso como marca comercial de terceiros."
  },
  {
    num: 6,
    title: "Isenção de Garantia",
    text: "O prompt é oferecido no estado em que se encontra. O resultado depende do modelo de IA utilizado e das informações fornecidas, não substituindo consultoria, pesquisa de mercado ou orientação jurídica. O autor não se responsabiliza por decisões tomadas com base nele."
  },
  {
    num: 7,
    title: "Dados e Sigilo",
    text: "Não inclua dados pessoais de clientes ou informações confidenciais sem avaliar a política de privacidade da plataforma de IA utilizada."
  },
  {
    num: 8,
    title: "Versões e Alterações",
    text: "A versão vigente está permanentemente publicada neste site oficial. O autor reserva-se o direito de alterar estes termos para versões futuras."
  },
  {
    num: 9,
    title: "Legislação e Foro",
    text: "Aplicam-se integralmente as leis da República Federativa do Brasil, com eleição expressa do Foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias."
  },
  {
    num: 10,
    title: "Outros Usos e Licença Comercial",
    text: "Para licença comercial, integrações institucionais ou uso em plataformas corporativas, escreva para mauricio.sarmento@espm.br."
  }
];

