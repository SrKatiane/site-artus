# Inventário de Conteúdo Textual - Artus Engenharia

Este documento compila todo o conteúdo textual do site da Artus Engenharia, organizado por páginas e seções, para facilitar a revisão e averiguação detalhada.

---

## 1. Elementos Globais (Presentes em todas as páginas)

### 1.1. Cabeçalho (Header)
*Local: `src/components/Header.jsx`*

*   **Logo (Alt Text):** "Artus Engenharia"
*   **Menu de Navegação:**
    *   Início
    *   Serviços
    *   Sobre
    *   Portfólio
*   **Botão de Chamada para Ação (CTA):** "Fale conosco"

### 1.2. Rodapé (Footer)
*Local: `src/components/Footer.jsx`*

*   **Logo (Alt Text):** "Artus Engenharia"
*   **Descrição da Marca:** "Excelência em engenharia e soluções industriais. Comprometidos com a qualidade, segurança e inovação em cada projeto."
*   **Coluna "Navegação":**
    *   Início
    *   Serviços
    *   Sobre Nós
    *   Portfólio
    *   Contato
*   **Coluna "Contato":**
    *   E-mail: contato@artusengenharia.com
    *   Telefone: (00) 0000-0000
    *   Endereço: R. dos Búzios, 200 - Calhau, São Luís - MA, 65071-070, Brasil
*   **Direitos Autorais:** "© [Ano Atual] Artus Engenharia. Todos os direitos reservados."

---

## 2. Página Inicial (Home)
*Local: `src/pages/Home.jsx`*

### 2.1. Seção Hero
*Local: `src/components/Hero.jsx`*

*   **Título Principal:** "Engenharia que entrega operação, segurança e resultado."
*   **Descrição:** "Projetos elétricos, automação, subestações e infraestrutura industrial executados com responsabilidade técnica e foco total na sua produtividade."
*   **Botão 1:** "Fale com um especialista"
*   **Botão 2:** "Conheça nossas soluções"

### 2.2. Parceiros (Logos)
*Local: `src/components/Partners.jsx`*

*   **Título:** "Empresas que confiam na Artus Engenharia"

### 2.3. Seção de Serviços (Resumo)
*Local: `src/components/Services.jsx`*

*   **Tag da Seção:** "Nossos Serviços"
*   **Título da Seção:** "Nossas soluções em engenharia industrial"
*   **Subtítulo:** "Soluções integradas em elétrica, automação, subestações, infraestrutura industrial e tecnologia, do projeto à entrega final."
*   **Cards de Serviços:**
    1.  **Engenharia & Gestão de Projetos:** "Planejamento técnico e operacional de projetos industriais, com gestão de prazos, custos, recursos e responsabilidade técnica em todas as etapas."
    2.  **Mecânica, Caldeiraria e Linhas de Processo:** "Montagem de tubulações, caldeiraria pesada e leve, soldagem especializada e linhas de processo para indústrias de alta exigência técnica."
    3.  **Infraestrutura & Fabricação Industrial:** "Fabricação e montagem de estruturas metálicas e inox, infraestrutura seca industrial, suportes técnicos e instalação de equipamentos."
    4.  **Elétrica, Instrumentação & Subestações:** "Projetos e execução de sistemas elétricos de alta, média e baixa tensão, subestações, SPDA, instrumentação e comissionamento elétrico."
    5.  **TI, Redes & Monitoramento:** "Implantação de redes industriais e corporativas, fibra óptica, monitoramento, integração de dados e suporte técnico especializado."
    6.  **Plataform As A Service (TCN-PaaS):** "Automação industrial por assinatura: hardware, software, manutenção e suporte em mensalidade fixa, sem altos investimentos iniciais."
*   **Link dos Cards:** "Saiba mais"

### 2.4. Seção Sobre (Resumo)
*Local: `src/components/About.jsx`*

*   **Tag da Seção:** "Sobre a Artus"
*   **Título da Seção:** "Quem é a Artus Engenharia"
*   **Texto Descritivo:** "A Artus é uma empresa especializada na gestão de projetos de engenharia e soluções integradas, com atuação sólida no setor industrial e foco em eficiência operacional, segurança e excelência técnica. Desenvolvemos e executamos projetos elétricos, automação, subestações e infraestrutura industrial, sempre com responsabilidade e compromisso com o funcionamento real da operação."
*   **Frase de Destaque:** "Não entregamos apenas projetos. Entregamos sistemas prontos para operar com segurança, desempenho e confiabilidade."
*   **Diferenciais:**
    1.  **Engenharia com responsabilidade profissional:** "Acompanhamento especializado em todas as etapas, com emissão de laudos e total aderência às normas."
    2.  **Do projeto à operação:** "Gestão completa de ponta a ponta, eliminando falhas e custos ocultos da obra à operação."
    3.  **Segurança como valor inegociável:** "Segurança rigorosa com treinamentos, processos específicos e fiscalização constante em campo."
    4.  **Experiência industrial comprovada:** "Expertise em ambientes industriais complexos com entregas ágeis e alta precisão técnica."
*   **Botão:** "Saiba mais sobre a Artus"

### 2.5. Seção Portfólio (Resumo)
*Local: `src/components/Portfolio.jsx`*

*   **Tag da Seção:** "CASES DE SUCESSO"
*   **Título da Seção:** "Projetos que comprovam nossa excelência."
*   **Cards de Projetos:**
    1.  "Comissionamento Industrial" (Categoria: Automação)
    2.  "Montagem de Infraestrutura Seca para Cabos" (Categoria: Infraestrutura)
    3.  "Rede Estruturada e Backbone de Fibra Óptica" (Categoria: TI & Redes)
    4.  "Inspeção e Medição" (Categoria: Elétrica)
*   **Link:** "Ver portfólio completo"

### 2.6. Seção de Contato (Formulário e Info)
*Local: `src/components/Contact.jsx`*

*   **Título da Seção:** "Solicite um orçamento ou visita técnica."
*   **Subtítulo:** "Estamos prontos para atender as demandas da sua indústria com agilidade e corpo técnico especializado."
*   **Informações de Contato:**
    *   **Telefone:** "(00) 0000-0000"
    *   **E-mail:** "contato@artusengenharia.com.br"
    *   **Escritório:** "R. dos Búzios, 200 - Calhau, São Luís - MA, 65071-070, Brasil"
*   **Campos do Formulário:**
    *   Label: "Nome Completo" (Placeholder: "Ex: João da Silva")
    *   Label: "E-mail Corporativo" (Placeholder: "Ex: joao@empresa.com.br")
    *   Label: "WhatsApp / Telefone" (Placeholder: "(11) 99999-9999")
    *   Label: "Assunto" (Opções: "Selecione um assunto", "Orçamento de Projeto", "Manutenção Preventiva", "Automação Industrial", "Outros Assuntos")
    *   Label: "Mensagem" (Placeholder: "Descreva brevemente sua necessidade...")
*   **Botão de Envio:** "Enviar Solicitação"

---

## 3. Página Sobre Nós
*Local: `src/pages/AboutPage.jsx`*

### 3.1. Hero da Página Sobre
*   **Link de Voltar:** "Voltar para Home"
*   **Título:** "Engenharia que sustenta operações industriais"
*   **Descrição:** "Conheça nossa forma de atuar, nossos valores e o compromisso técnico que aplicamos em cada projeto."

### 3.2. Seção Quem Somos
*   **Tag:** "Quem Somos"
*   **Parágrafo 1:** "A Artus é uma empresa de engenharia e soluções integradas, com atuação sólida no mercado industrial e forte presença em projetos de alta complexidade técnica. Atuamos nas áreas de elétrica, automação industrial, subestações, infraestrutura industrial e tecnologia, entregando soluções completas, do projeto à operação."
*   **Parágrafo 2:** "Nosso trabalho é orientado por eficiência operacional, segurança e responsabilidade técnica. Cada solução é pensada para funcionar no mundo real, respeitando normas, prazos, orçamento e, principalmente, a continuidade da operação do cliente."
*   **Citação (Quote):** "Não acreditamos em soluções genéricas. Acreditamos em engenharia aplicada, bem planejada e bem executada."

### 3.3. Nossa Atuação
*   **Título:** "Nossa atuação no setor industrial"
*   **Descrição:** "A Artus atua como parceira técnica de indústrias e empresas de infraestrutura que exigem alto nível de confiabilidade, segurança e desempenho operacional."
*   **Lista de Atuação:**
    *   "Expansão de processos produtivos"
    *   "Modernização e adequação de sistemas existentes"
    *   "Implantação de novas plantas e linhas industriais"
    *   "Integração de sistemas elétricos, automação e tecnologia"
    *   "Projetos críticos, paradas técnicas e operações especiais"
*   **Nota Final:** "Nossa atuação vai além da execução. Participamos do planejamento, da tomada de decisão técnica e da entrega final pronta para operação."

### 3.4. Nossa Forma de Trabalhar (Metodologia)
*   **Título:** "Nossa forma de trabalhar"
*   **Descrição:** "Cada projeto da Artus segue uma metodologia clara, técnica e orientada a resultado."
*   **Passos da Metodologia:**
    1.  **Diagnóstico técnico detalhado:** "Entendimento profundo da operação, riscos, necessidades e objetivos do cliente."
    2.  **Planejamento e engenharia:** "Definição de soluções técnicas seguras, eficientes e viáveis, com foco em desempenho e custo-benefício."
    3.  **Execução com controle e segurança:** "Execução em campo com equipe qualificada, processos bem definidos e foco absoluto em segurança."
    4.  **Comissionamento e entrega:** "Testes, medições, validações técnicas e entrega do sistema pronto para operar."
    5.  **Suporte e acompanhamento:** "Acompanhamento pós-entrega, ajustes técnicos e suporte conforme a necessidade da operação."

### 3.5. Diferenciais Completos
*   **Título:** "Diferenciais da Artus"
*   **Itens:**
    1.  **Engenharia com responsabilidade técnica:** "Assumimos a responsabilidade técnica real pelos serviços executados, com emissão de laudos e conformidade normativa."
    2.  **Atuação do projeto à operação:** "Entregamos soluções completas. Nosso compromisso é com o funcionamento do sistema em operação."
    3.  **Segurança como valor inegociável:** "A segurança das pessoas e das operações é prioridade absoluta em todas as nossas atividades."
    4.  **Experiência em ambientes complexos:** "Atuamos em setores que exigem alto nível técnico, precisão e confiabilidade sob medida."

### 3.6. Nosso Time
*   **Título:** "Nosso Time"
*   **Texto:** "Contamos com uma equipe técnica de alta performance, formada por profissionais qualificados e preparados para atuar em ambientes industriais de alta exigência. Nosso time é treinado continuamente, seguindo padrões técnicos, normas de segurança e boas práticas de engenharia. Valorizamos a vida, o conhecimento e a responsabilidade individual e coletiva em cada projeto."

### 3.7. Segurança em Primeiro Lugar
*   **Tag:** "SEGURANÇA & CONFIANÇA"
*   **Título:** "Segurança em primeiro lugar"
*   **Texto:** "Na Artus, segurança não é discurso institucional — é prática diária. O Arturito, nosso mascote, representa a força e o cuidado em cada detalhe."
*   **Protocolos:**
    *   "EPIs de alta performance em todas as operações."
    *   "Treinamento contínuo e conformidade normativa."
    *   "Planejamento rigoroso para mitigação de riscos."

### 3.8. Missão, Visão e Valores
*   **Missão:** "Promover a satisfação do cliente por meio de soluções técnicas eficientes, redução de custos e otimização de processos, agregando valor real ao negócio."
*   **Visão:** "Ser referência em engenharia industrial pela excelência técnica, inovação, confiabilidade e relacionamento duradouro com clientes e parceiros."
*   **Valores:**
    *   Integridade e responsabilidade
    *   Compromisso com a segurança e a vida
    *   Qualidade técnica e inovação
    *   Ética e transparência
    *   Responsabilidade social e ambiental

### 3.9. CTA Final
*   **Título:** "Vamos conversar sobre o seu projeto?"
*   **Descrição:** "Se sua empresa precisa de uma parceira técnica para projetos industriais, fale com a Artus Engenharia. Estamos prontos para entender seu cenário e entregar soluções que funcionam."
*   **Botão:** "Falar com um especialista"

---

## 4. Páginas de Detalhes de Serviços
*Local: `src/data/servicesData.js` e `src/pages/ServicePage.jsx`*

### 4.1. Engenharia e Gestão de Projetos Industriais
*   **Título:** "Engenharia e Gestão de Projetos Industriais"
*   **Subtítulo:** "Planejamento, controle e execução com responsabilidade técnica do início ao fim."
*   **Descrição:**
    *   "A Artus atua na gestão técnica e operacional de projetos industriais, garantindo controle rigoroso de prazos, custos, recursos e qualidade — desde o planejamento até a entrega final."
    *   "Assumimos a responsabilidade técnica e coordenamos todas as etapas, incluindo fornecimento de mão de obra, equipamentos e materiais, com foco total no funcionamento real da operação."
*   **O que fazemos:**
    *   Planejamento técnico e operacional
    *   Gestão de prazos, custos e recursos
    *   Coordenação multidisciplinar de equipes
    *   Responsabilidade técnica e emissão de relatórios
    *   Fornecimento de equipamentos e materiais
    *   Elaboração, comissionamento e execução de projetos de automação e sistemas elétricos
    *   Fornecimento de mão de obra temporária e contínua (terceirização)
    *   Montagem de painéis elétricos e de comando
*   **Proposta de Valor:**
    *   Redução de riscos e retrabalho
    *   Maior previsibilidade de custos e prazos
    *   Integração eficiente entre disciplinas
    *   Entregas mais seguras e organizadas
*   **Botão CTA:** "Conversar sobre gestão de projetos"

### 4.2. Mecânica, Caldeiraria e Linhas de Processo
*   **Título:** "Mecânica, Caldeiraria e Linhas de Processo"
*   **Subtítulo:** "Soluções robustas para montagem industrial, tubulações e processos produtivos."
*   **Descrição:**
    *   "A Artus executa serviços especializados em mecânica industrial, caldeiraria e montagem de linhas de processo, atendendo indústrias que exigem precisão técnica, durabilidade e conformidade com normas rigorosas."
    *   "Atuamos em cervejarias, indústrias de água mineral, mineração, portos e demais operações industriais de alta complexidade."
*   **O que fazemos:**
    *   Montagem de tubulações industriais
    *   Caldeiraria pesada e leve
    *   Soldagem especializada em aço inox OD e aço carbono (TIG, MIG, Eletrodo)
    *   Linhas de processo para cervejarias
    *   Linhas de envase de água mineral
    *   Instalação de instrumentos e medidores de vazão
*   **Proposta de Valor:**
    *   Tubulações e estruturas duráveis e seguras
    *   Conformidade técnica com processos produtivos específicos
    *   Redução de paradas e manutenções corretivas
    *   Maior eficiência e confiabilidade das linhas de processo
*   **Botão CTA:** "Falar sobre caldeiraria e linhas de processo"

### 4.3. Infraestrutura e Fabricação Industrial
*   **Título:** "Infraestrutura e Fabricação Industrial"
*   **Subtítulo:** "Soluções sob medida para ambientes industriais de alta exigência."
*   **Descrição:**
    *   "A Artus oferece soluções completas em fabricação, montagem e manutenção de estruturas industriais, atendendo operações que exigem robustez, precisão técnica e durabilidade."
    *   "Atuamos desde a fabricação de estruturas metálicas e inox até a montagem de infraestrutura seca para sistemas elétricos, redes e automação."
*   **O que fazemos:**
    *   Fabricação e montagem de estruturas metálicas e aço inox
    *   Montagem de infraestrutura seca industrial para sistemas elétricos, rede e automação
    *   Suportes, bases e reforços técnicos
    *   Adequações e revitalizações industriais
    *   Instalação de equipamentos industriais
*   **Proposta de Valor:**
    *   Estruturas duráveis e seguras
    *   Adequação às necessidades do processo produtivo
    *   Redução de manutenções corretivas
    *   Maior eficiência operacional
*   **Botão CTA:** "Falar sobre infraestrutura industrial"

### 4.4. Elétrica, Instrumentação e Subestações
*   **Título:** "Elétrica, Instrumentação e Subestações"
*   **Subtítulo:** "Soluções seguras e confiáveis para sistemas elétricos industriais de qualquer tensão."
*   **Descrição:**
    *   "A Artus Engenharia projeta e executa sistemas elétricos industriais em alta, média e baixa tensão, além de serviços especializados em instrumentação, subestações e proteção elétrica."
    *   "Todos os serviços são executados com responsabilidade técnica e emissão de laudos e relatórios, garantindo continuidade operacional, segurança e conformidade com as normas técnicas vigentes."
*   **O que fazemos:**
    *   Projeto e execução de SPDA
    *   Instalações elétricas em baixa e média tensão (aéreas, subterrâneas e embutidas)
    *   Linhas de transmissão e distribuição elétrica
    *   Lançamento e interligação de cabos
    *   Iluminação industrial
    *   Manutenção eletromecânica de sistemas de bombeamento
    *   Ensaios, comissionamento e testes elétricos especializados
    *   Elaboração de projetos e montagem de painéis elétricos
    *   Manutenção preventiva e corretiva em subestações
    *   Análises termográficas e inspeção de equipamentos (transformadores, disjuntores, relés, TC, TP, bancos de capacitores)
*   **Proposta de Valor:**
    *   Continuidade do fornecimento de energia
    *   Redução de falhas e paradas não programadas
    *   Maior segurança para pessoas e equipamentos
    *   Conformidade com normas técnicas e regulamentações
*   **Botão CTA:** "Falar com um especialista em elétrica industrial"

### 4.5. TI, Redes e Monitoramento Industrial
*   **Título:** "TI, Redes e Monitoramento Industrial"
*   **Subtítulo:** "Tecnologia integrada para suportar e otimizar operações industriais."
*   **Descrição:**
    *   "A Artus implanta e mantém infraestrutura tecnológica integrada, garantindo conectividade, monitoramento e suporte às operações industriais e corporativas."
    *   "Fornecemos mão de obra, materiais e equipamentos, assumindo toda a cadeia de entrega da solução."
*   **O que fazemos:**
    *   Implantação de redes industriais e corporativas
    *   Instalação e lançamento de fibra óptica
    *   Monitoramento e integração de processos
    *   Integração de dados e suporte técnico especializado
    *   Implantação e manutenção de infraestrutura tecnológica (hardware e software)
    *   Otimização de processos e fluxos por meio da tecnologia
    *   Soluções para aumento de produtividade e eficiência operacional
    *   Fornecimento de mão de obra, materiais e equipamentos
*   **Proposta de Valor:**
    *   Conectividade estável e segura
    *   Suporte à automação e ao monitoramento
    *   Redução de falhas de comunicação
    *   Base tecnológica para crescimento da operação
*   **Botão CTA:** "Solicitar solução em TI industrial"

### 4.6. Platform As A Service (TCN-PaaS)
*   **Título:** "Platform As A Service (TCN-PaaS)"
*   **Subtítulo:** "Automação industrial inteligente por assinatura, sem altos investimentos iniciais."
*   **Descrição:**
    *   "O TCN-PaaS é uma solução inovadora baseada no modelo Platform as a Service (PaaS), que integra hardware, software, manutenção, atualizações e suporte técnico especializado em uma mensalidade fixa."
    *   "Desenvolvida sob medida para cada operação, entrega automação inteligente, personalizável e escalável com tecnologia sempre atualizada e pronta para acompanhar o crescimento do seu negócio, sem a necessidade de grandes investimentos iniciais."
*   **O que está incluso:**
    *   Hardware e software sob medida para a operação
    *   Manutenção preventiva e corretiva incluída
    *   Atualizações tecnológicas contínuas
    *   Suporte técnico especializado
    *   Automação personalizada e escalável
    *   Monitoramento e integração de processos
*   **Proposta de Valor:**
    *   Acesso à automação sem alto investimento inicial
    *   Tecnologia sempre atualizada e funcional
    *   Previsibilidade de custos com mensalidade fixa
    *   Mais eficiência, produtividade e segurança na operação
*   **Botão CTA:** "Falar com um especialista em TCN-PaaS"

---

## 5. Página de Portfólio
*Local: `src/pages/PortfolioPage.jsx`*

### 5.1. Hero do Portfólio
*   **Link de Voltar:** "Voltar para Home"
*   **Título:** "Nosso Portfólio"
*   **Subtítulo:** "Conheça as obras de alta complexidade e projetos de engenharia industrial executados pela Artus Engenharia."

### 5.2. Lista Completa de Projetos (Base de Dados)
1.  **Comissionamento de Instrumentos de Processo** (Cliente: Cervejaria Ambev | Categoria: Automação)
2.  **Montagem de Lamelas do Reator da ETEI** (Cliente: Grupo Saga | Categoria: Mecânica)
3.  **Montagem e Instalação de Subestação de Média Tensão** (Cliente: Esfera Energia | Categoria: Elétrica)
4.  **Instalação de Painéis de Controle e Comando** (Cliente: Mayekawa | Categoria: Automação)
5.  **Manutenção Técnica em Infraestrutura Elétrica** (Cliente: San Martin | Categoria: Elétrica)
6.  **Supervisão Técnica e Controle de Qualidade Industrial** (Cliente: Salmeron | Categoria: Gestão)
7.  **Montagem de Painel de Comando e Automação Industrial** (Cliente: Cervejaria Ambev | Categoria: Automação)
8.  **Implantação de Sistema de Aeração na Lagoa da ETEI** (Cliente: Tecnale | Categoria: Mecânica)
9.  **Montagem do Sistema de Envio de Efluentes para Tratamento** (Cliente: Salmeron | Categoria: Mecânica)
10. **Soldagem Especializada de Tubulação em Aço Inox OD** (Cliente: Cervejaria Artus | Categoria: Mecânica)
11. **Teste de Estanqueidade em Tubulação de Ar e Gás GLP** (Cliente: Equinox Gold | Categoria: Mecânica)
12. **Comissionamento de Instrumentação Industrial em Campo** (Cliente: S.A. Cavalcante | Categoria: Automação)
13. **Instalação do Sistema Elétrico de Combate a Emergência** (Cliente: Grupo Saga | Categoria: Elétrica)
14. **Instalação de Medidor de Oxigênio Industrial** (Cliente: Mayekawa | Categoria: Automação)
15. **Instalação de Medidor de Nível na Lagoa de Efluentes** (Cliente: Esfera Energia | Categoria: Automação)
16. **Instalação e Calibração de Medidor de Vazão** (Cliente: Cervejaria Ambev | Categoria: Automação)
17. **Instalação e Conexão de Motores Elétricos de Alta Potência** (Cliente: Salmeron | Categoria: Elétrica)
18. **Instalação de Sistema IO-Link de Campo para Sensores** (Cliente: Cervejaria Artus | Categoria: Automação)
19. **Instalação e Validação de Instrumentos Industriais** (Cliente: Tecnale | Categoria: Automação)
20. **Operação de Içamento de Cargas de Grande Porte** (Cliente: Equinox Gold | Categoria: Infraestrutura)
21. **Conexão de Alimentação de QGBT para Painel de Comando** (Cliente: Artus Engenharia | Categoria: Elétrica)
22. **Execução de Medições Elétricas e Termografia em Campo** (Cliente: San Martin | Categoria: Elétrica)
23. **Montagem do Conjunto de Motobombas de Processo** (Cliente: Salum | Categoria: Mecânica)
24. **Montagem de Infraestrutura Seca Industrial para Cabos** (Cliente: Cervejaria Ambev | Categoria: Infraestrutura)
25. **Montagem de Linha de Distribuição de Ar Comprimido** (Cliente: Mayekawa | Categoria: Mecânica)
26. **Montagem de Tubulação e Linha de Gás GLP** (Cliente: Esfera Energia | Categoria: Mecânica)
27. **Montagem Mecânica de Centrífuga de Efluentes Industriais** (Cliente: Grupo Saga | Categoria: Mecânica)
28. **Montagem Mecânica de Bombas Hidráulicas e Motores Elétricos** (Cliente: Salmeron | Categoria: Mecânica)
29. **Montagem Mecânica Geral de Equipamentos e Acessórios** (Cliente: S.A. Cavalcante | Categoria: Mecânica)
30. **Montagem de Painel de Distribuição para Tomadas de Empilhadeiras** (Cliente: Cervejaria Ambev | Categoria: Elétrica)
31. **Montagem de Suportes de Processo para Bombas Dosadoras** (Cliente: Tecnale | Categoria: Mecânica)
32. **Soldagem de Linha de Inox para Dosador de Polímero na ETEI** (Cliente: Equinox Gold | Categoria: Mecânica)
33. **Adequação e Instalação de Sistema de Proteção contra Descargas (SPDA)** (Cliente: Salmeron | Categoria: Elétrica)

---

## 6. Seção de Dúvidas Frequentes (FAQ)
*Local: `src/components/FAQ.jsx` (Componente disponível)*

*   **Tag:** "Dúvidas Frequentes"
*   **Título:** "Como podemos ajudar você?"
*   **Subtítulo:** "Esclareça suas principais dúvidas sobre nossa atuação e serviços."
*   **Perguntas e Respostas:**
    1.  **Quais setores a Artus Engenharia atende?** "Atendemos diversos setores industriais, com foco em farmacêutico, alimentício, logístico, automotivo e químico, oferecendo soluções personalizadas para cada necessidade de infraestrutura e automação."
    2.  **Vocês emitem laudos técnicos e ART?** "Sim. Todos os nossos projetos e serviços são acompanhados por engenheiros responsáveis, com emissão de ART (Anotação de Responsabilidade Técnica), laudos de conformidade e relatórios técnicos detalhados."
    3.  **Como funciona o processo de orçamento?** "O processo começa com uma análise técnica das necessidades do cliente, que pode envolver uma visita técnica ao local. Baseado nisso, elaboramos uma proposta comercial e técnica detalhada com prazos e escopo definidos."
    4.  **Vocês realizam manutenção preventiva e corretiva?** "Sim, oferecemos contratos de manutenção preventiva para garantir a continuidade operacional dos seus sistemas, além de suporte para manutenções corretivas em subestações e sistemas elétricos industriais."
    5.  **A Artus atende em todo o Brasil?** "Nossa sede está localizada estrategicamente para atender grandes polos industriais, mas executamos projetos e mobilizamos equipes para atender clientes em todo o território nacional, conforme a complexidade do projeto."

---

## 7. Componente de Chamada Final (CTA Genérico)
*Local: `src/components/CTA.jsx`*

*   **Título:** "Vamos construir algo grande juntos?"
*   **Descrição:** "Conte-nos sobre o seu projeto ou necessidade técnica. Nosso time entrará em contato para propor a melhor solução."
*   **Botão:** "Fale com a Artus"
