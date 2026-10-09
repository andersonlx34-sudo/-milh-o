/* =====================================
   O MILHÃO DA MANUTENÇÃO
   JAVASCRIPT - FUNCIONAMENTO DO JOGO
===================================== */

/* ==========================================
   BANCO DE PERGUNTAS ALEATÓRIAS
========================================== */

function criarPergunta(nivel, texto, alternativas, correta) {
    return { nivel, texto, alternativas, correta };
}

const questionBank = [
    // ===== FÁCEIS =====
    criarPergunta(1, "Qual componente executa instruções e processa dados?", ["CPU", "Mouse", "Monitor", "Gabinete"], 0),
    criarPergunta(1, "Qual componente mantém dados temporários enquanto o PC está ligado?", ["SSD", "RAM", "Fonte", "Cooler"], 1),
    criarPergunta(1, "Qual componente armazena arquivos permanentemente?", ["RAM", "CPU", "SSD", "Dissipador"], 2),
    criarPergunta(1, "Qual componente fornece energia aos componentes do computador?", ["Fonte", "Memória RAM", "Mouse", "Cooler"], 0),
    criarPergunta(1, "Qual componente é usado para exibir imagens?", ["Teclado", "Monitor", "Fonte", "SSD"], 1),
    criarPergunta(1, "Para que serve um cooler?", ["Armazenar arquivos", "Resfriar componentes", "Conectar à internet", "Processar textos"], 1),
    criarPergunta(1, "Qual componente conecta os principais componentes do computador?", ["Placa-mãe", "Mouse", "Caixa de som", "Monitor"], 0),
    criarPergunta(1, "Qual dispositivo é usado principalmente para digitar?", ["Mouse", "Webcam", "Teclado", "Microfone"], 2),
    criarPergunta(1, "Qual destes é um sistema operacional?", ["HTML", "Windows", "HDMI", "USB"], 1),
    criarPergunta(1, "Qual destes dispositivos é usado para apontar e clicar?", ["Mouse", "Fonte", "Processador", "Memória RAM"], 0),
    criarPergunta(1, "Qual componente é conhecido como GPU?", ["Placa de vídeo", "Fonte", "SSD", "Placa de rede"], 0),
    criarPergunta(1, "O que significa a sigla SSD?", ["Solid State Drive", "System Software Device", "Secure Storage Disk", "Standard System Drive"], 0),
    criarPergunta(1, "Qual é a função principal de um antivírus?", ["Aumentar a RAM", "Detectar e ajudar a remover ameaças", "Resfriar o PC", "Melhorar o monitor"], 1),
    criarPergunta(1, "Qual cabo é comumente utilizado para conectar um monitor?", ["HDMI", "RJ11", "SATA de dados", "Cabo de áudio apenas"], 0),
    criarPergunta(1, "Qual unidade normalmente representa a capacidade de armazenamento?", ["GB", "Hz apenas", "Volt", "Watt"], 0),
    criarPergunta(1, "Qual componente costuma ser instalado em slots de memória da placa-mãe?", ["RAM", "Fonte", "Monitor", "Teclado"], 0),
    criarPergunta(1, "O que significa a sigla USB?", ["Universal Serial Bus", "Unified System Board", "User Storage Backup", "Universal Software Boot"], 0),
    criarPergunta(1, "Qual dispositivo permite conectar um computador a uma rede sem fio?", ["Adaptador Wi-Fi", "Cooler", "Pasta térmica", "Dissipador"], 0),
    criarPergunta(1, "Qual programa é usado para navegar em páginas da internet?", ["Navegador", "BIOS", "Driver de áudio", "Calculadora de hardware"], 0),
    criarPergunta(1, "Qual destes é um exemplo de periférico?", ["Teclado", "Processador", "Chipset", "Soquete da CPU"], 0),
    criarPergunta(1, "Qual é a finalidade de um gabinete?", ["Abrigar e proteger componentes", "Armazenar sites", "Criar senhas", "Substituir o sistema operacional"], 0),
    criarPergunta(1, "O que é um arquivo PDF?", ["Um formato de documento", "Um tipo de processador", "Uma memória física", "Um cabo de rede"], 0),
    criarPergunta(1, "Qual dispositivo pode imprimir documentos?", ["Impressora", "Roteador", "Placa-mãe", "Cooler"], 0),
    criarPergunta(1, "Qual componente pode fornecer conexão Ethernet ao PC?", ["Placa de rede", "Pasta térmica", "Dissipador", "Bateria do mouse"], 0),
    criarPergunta(1, "O que é hardware?", ["Parte física do computador", "Conjunto de programas", "Uma página da internet", "Uma senha"], 0),
    criarPergunta(1, "O que é software?", ["Programas e sistemas", "Somente cabos", "Peças metálicas", "Apenas memória RAM"], 0),
    criarPergunta(1, "Qual ferramenta é usada normalmente para apertar parafusos de um gabinete?", ["Chave de fenda ou Phillips", "Pincel de pintura molhada", "Régua", "Fone de ouvido"], 0),
    criarPergunta(1, "Qual componente ajuda a dissipar o calor da CPU?", ["Dissipador", "SSD", "Teclado", "Placa de som"], 0),
    criarPergunta(1, "Qual é uma prática básica antes de fazer manutenção interna no PC?", ["Desligar e desconectar da energia", "Molhar os componentes", "Retirar peças com o PC ligado", "Bloquear as ventoinhas"], 0),
    criarPergunta(1, "Qual destes é um navegador de internet?", ["Firefox", "BIOS", "UEFI", "DDR4"], 0),

    // ===== INTERMEDIÁRIAS =====
    criarPergunta(2, "Um PC liga, mas não apresenta vídeo. Qual verificação inicial é útil?", ["Conferir monitor, cabo e entrada de vídeo", "Formatar sempre o SSD", "Trocar o teclado", "Apagar os documentos"], 0),
    criarPergunta(2, "Para que serve a pasta térmica?", ["Melhorar a transferência de calor", "Aumentar o armazenamento", "Limpar arquivos", "Conectar o Wi-Fi"], 0),
    criarPergunta(2, "O que pode causar lentidão quando muitos programas estão abertos?", ["Pouca memória disponível", "Monitor grande", "Mouse sem fio", "Papel de parede escuro"], 0),
    criarPergunta(2, "O que é um driver?", ["Software que permite ao sistema comunicar-se com um dispositivo", "Uma peça de refrigeração", "Um tipo de cabo HDMI", "Uma memória de armazenamento"], 0),
    criarPergunta(2, "Qual é a principal função da BIOS/UEFI durante a inicialização?", ["Inicializar e verificar o hardware e iniciar o processo de boot", "Editar fotos", "Criar documentos", "Aumentar fisicamente a RAM"], 0),
    criarPergunta(2, "Qual interface é comum em SSDs de 2,5 polegadas?", ["SATA", "VGA", "PS/2", "RCA"], 0),
    criarPergunta(2, "O que significa DHCP em uma rede?", ["Protocolo que atribui configurações IP automaticamente", "Sistema de refrigeração", "Formato de imagem", "Tipo de memória"], 0),
    criarPergunta(2, "Qual serviço traduz nomes de domínio em endereços IP?", ["DNS", "HDMI", "USB", "POST"], 0),
    criarPergunta(2, "Qual comando do Windows mostra configurações de IP no terminal?", ["ipconfig", "dir /format", "paint", "taskcolor"], 0),
    criarPergunta(2, "Qual comando é comumente usado para testar a conectividade com outro dispositivo?", ["ping", "mkdir", "rename", "cls"], 0),
    criarPergunta(2, "O que é phishing?", ["Tentativa de enganar alguém para obter dados ou acesso", "Limpeza de poeira", "Atualização legítima de driver", "Tipo de memória"], 0),
    criarPergunta(2, "O que fazer antes de uma manutenção que pode afetar arquivos importantes?", ["Verificar se existe backup atualizado", "Apagar todos os backups", "Desativar todas as proteções", "Formatar sem autorização"], 0),
    criarPergunta(2, "Qual é uma causa possível de superaquecimento do computador?", ["Ventilação obstruída por poeira", "Mousepad grande", "Nome de usuário longo", "Muitas pastas vazias"], 0),
    criarPergunta(2, "Qual tipo de memória perde os dados ao desligar o computador?", ["RAM", "SSD", "HD", "Memória flash de um pendrive"], 0),
    criarPergunta(2, "Qual conector de alimentação é normalmente usado por muitas placas de vídeo?", ["PCIe de alimentação", "RJ45", "VGA analógico", "P2 de áudio"], 0),
    criarPergunta(2, "O que é dual-channel em memória RAM?", ["Uso de dois canais de memória compatíveis para aumentar a largura de banda", "Duas fontes ligadas em série", "Duas placas de vídeo obrigatórias", "Dois sistemas operacionais no mesmo arquivo"], 0),
    criarPergunta(2, "Qual ferramenta do Windows pode ajudar a identificar programas que iniciam com o sistema?", ["Gerenciador de Tarefas", "Bloco de Notas", "Paint", "Calculadora"], 0),
    criarPergunta(2, "Qual é a função do roteador doméstico?", ["Encaminhar tráfego entre redes e compartilhar conexão", "Resfriar o processador", "Armazenar permanentemente todos os arquivos do PC", "Substituir a memória RAM"], 0),
    criarPergunta(2, "Qual cabo de rede é comumente terminado com conector RJ45?", ["Ethernet de par trançado", "HDMI", "SATA", "DisplayPort"], 0),
    criarPergunta(2, "O que é um endereço IP?", ["Identificador lógico usado em uma rede", "Número de série da RAM", "Modelo do monitor", "Nome de um antivírus"], 0),
    criarPergunta(2, "O que pode indicar um HD com ruídos incomuns e erros de leitura?", ["Possível falha física; faça backup e diagnóstico", "Que o monitor está desatualizado", "Que a placa de som está rápida", "Que o PC precisa de mais papel"], 0),
    criarPergunta(2, "Para que serve o Gerenciador de Dispositivos?", ["Visualizar e administrar dispositivos e drivers", "Editar vídeos", "Criar uma rede social", "Medir a temperatura ambiente"], 0),
    criarPergunta(2, "Qual é uma finalidade das atualizações de segurança?", ["Corrigir vulnerabilidades conhecidas", "Aumentar o tamanho físico do SSD", "Trocar o gabinete", "Desativar permanentemente o firewall"], 0),
    criarPergunta(2, "O que significa POST no processo de inicialização?", ["Autoteste de inicialização do hardware", "Protocolo de correio eletrônico", "Formato de armazenamento", "Programa de desenho"], 0),
    criarPergunta(2, "Qual recurso pode proteger uma conta mesmo que a senha seja descoberta?", ["Autenticação multifator", "Senha compartilhada", "Desativar atualizações", "Usar a mesma senha em todos os sites"], 0),
    criarPergunta(2, "Qual sistema de arquivos é comumente usado em instalações modernas do Windows?", ["NTFS", "HTML", "PNG", "MP3"], 0),
    criarPergunta(2, "O que fazer se um computador estiver muito lento e houver suspeita de malware?", ["Executar verificações com ferramentas de segurança confiáveis", "Instalar qualquer programa desconhecido", "Desativar o antivírus", "Compartilhar todas as senhas"], 0),
    criarPergunta(2, "O que significa a sigla LAN?", ["Local Area Network", "Large Application Number", "Long Access Node", "Local Audio Name"], 0),
    criarPergunta(2, "Qual é uma função de um switch de rede?", ["Encaminhar quadros entre dispositivos de uma rede local", "Converter calor em energia", "Armazenar arquivos como um SSD", "Substituir o processador"], 0),
    criarPergunta(2, "Por que é importante usar uma pulseira antiestática corretamente durante certos reparos?", ["Reduzir o risco de descarga eletrostática nos componentes", "Aumentar a velocidade do processador", "Evitar atualizações", "Melhorar a conexão Wi-Fi"], 0),
    criarPergunta(2, "Qual é a função de um nobreak?", ["Fornecer energia temporária e ajudar a proteger contra interrupções", "Aumentar a capacidade da RAM", "Substituir a placa-mãe", "Eliminar todos os vírus"], 0),
    criarPergunta(2, "O que é uma máquina virtual?", ["Ambiente computacional simulado por software", "Um tipo de teclado", "Um cabo de alimentação", "Uma ventoinha"], 0),
    criarPergunta(2, "Qual é o principal papel de um firewall?", ["Filtrar tráfego de rede conforme regras de segurança", "Resfriar a GPU", "Desfragmentar a RAM", "Aumentar a resolução do monitor"], 0),
    criarPergunta(2, "O que significa fazer backup?", ["Criar uma cópia de segurança dos dados", "Apagar o sistema operacional", "Aumentar a voltagem da fonte", "Desligar o monitor"], 0),
    criarPergunta(2, "Qual é uma possível causa de reinicializações inesperadas?", ["Superaquecimento, alimentação instável ou falha de hardware", "Muitos ícones na área de trabalho", "Papel de parede animado sempre", "Nome curto do computador"], 0),

    // ===== AVANÇADAS =====
    criarPergunta(3, "Qual é a diferença principal entre GPT e MBR?", ["São esquemas de particionamento de disco com capacidades e características diferentes", "São tipos de cooler", "São linguagens de programação", "São protocolos de áudio"], 0),
    criarPergunta(3, "Qual modo de inicialização é associado normalmente a sistemas modernos com GPT?", ["UEFI", "VGA", "RJ45", "IDE de áudio"], 0),
    criarPergunta(3, "O que pode acontecer se a frequência e os timings da RAM forem incompatíveis com a configuração do sistema?", ["Instabilidade ou falha na inicialização", "Aumento garantido de armazenamento", "Melhora automática da internet", "Impressão mais rápida"], 0),
    criarPergunta(3, "O que é thermal throttling?", ["Redução automática de desempenho para controlar a temperatura", "Aumento permanente da capacidade do SSD", "Protocolo de rede", "Processo de backup"], 0),
    criarPergunta(3, "O que indica um LED de diagnóstico VGA aceso continuamente em algumas placas-mãe?", ["Possível problema na inicialização gráfica", "Problema obrigatório no teclado", "Falta de espaço no navegador", "Falha do DNS"], 0),
    criarPergunta(3, "O que é RAID 1?", ["Espelhamento de dados em unidades para redundância", "Distribuição de dados sem redundância obrigatória", "Um padrão de vídeo", "Uma memória cache da CPU"], 0),
    criarPergunta(3, "Qual é o objetivo principal do RAID 0?", ["Distribuir dados entre unidades para desempenho, sem redundância", "Espelhar dados para tolerância a falhas", "Criptografar automaticamente a rede", "Reparar setores fisicamente danificados"], 0),
    criarPergunta(3, "O que é latência de memória?", ["Atraso entre uma solicitação e a entrega dos dados", "Capacidade total do SSD", "Velocidade do ventilador", "Quantidade de portas USB"], 0),
    criarPergunta(3, "Qual barramento é usado por muitos SSDs NVMe modernos?", ["PCI Express", "VGA", "PS/2", "Áudio analógico"], 0),
    criarPergunta(3, "Qual é a função do SMART em unidades de armazenamento compatíveis?", ["Monitorar indicadores relacionados à condição e possíveis falhas da unidade", "Aumentar fisicamente a capacidade do disco", "Atualizar a BIOS automaticamente em todos os PCs", "Criar endereços IP"], 0),
    criarPergunta(3, "Qual comando Linux mostra interfaces e endereços de rede em muitos sistemas atuais?", ["ip addr", "paint", "format c:", "notepad"], 0),
    criarPergunta(3, "Qual comando Linux lista processos em execução de forma interativa em muitos sistemas?", ["top", "mkdir", "touch", "pwd"], 0),
    criarPergunta(3, "Qual é a função do protocolo ARP em uma rede IPv4 local?", ["Associar endereços IPv4 a endereços MAC na rede local", "Traduzir nomes de domínio na internet", "Criptografar arquivos", "Atribuir nomes de usuário"], 0),
    criarPergunta(3, "Qual protocolo costuma usar a porta TCP 443 para conexões web seguras?", ["HTTPS", "FTP sem TLS", "Telnet", "DHCP"], 0),
    criarPergunta(3, "Qual protocolo é comumente utilizado para transferir arquivos de forma segura por SSH?", ["SFTP", "HTTP sem TLS", "ARP", "ICMP"], 0),
    criarPergunta(3, "Qual é a finalidade de uma máscara de sub-rede?", ["Indicar a divisão entre a parte de rede e a parte de host do endereço IP", "Definir a temperatura da CPU", "Medir a capacidade do SSD", "Determinar a resolução do monitor"], 0),
    criarPergunta(3, "O que é uma VLAN?", ["Segmentação lógica de uma rede local", "Um tipo de memória RAM", "Um sistema de arquivos", "Uma conexão de vídeo"], 0),
    criarPergunta(3, "O que significa PoE em equipamentos de rede compatíveis?", ["Power over Ethernet", "Processor over Engine", "Port of Encryption", "Protocol of Email"], 0),
    criarPergunta(3, "Qual é uma boa primeira etapa para diagnosticar perda intermitente de rede?", ["Verificar conexões, sinal, endereço IP e registros do equipamento", "Formatar todos os computadores imediatamente", "Trocar todas as peças sem testes", "Desativar a segurança da rede"], 0),
    criarPergunta(3, "O que é uma vulnerabilidade de software?", ["Fraqueza que pode ser explorada para comprometer um sistema", "Uma função de backup", "Um tipo de cabo", "Uma configuração de brilho"], 0),
    criarPergunta(3, "Qual é uma finalidade do princípio do menor privilégio?", ["Conceder apenas as permissões necessárias para cada função", "Dar acesso administrativo a todos", "Compartilhar senhas", "Desativar registros de auditoria"], 0),
    criarPergunta(3, "O que é criptografia de dados em repouso?", ["Proteção criptográfica de dados armazenados", "Aumento da velocidade do cooler", "Limpeza de poeira", "Atribuição de endereço IP"], 0),
    criarPergunta(3, "Por que atualizar o firmware de um equipamento exige cuidado?", ["Uma atualização incorreta ou interrompida pode inutilizar o equipamento", "Toda atualização apaga obrigatoriamente os arquivos pessoais", "Firmware só funciona em impressoras", "Atualizações nunca alteram segurança"], 0),
    criarPergunta(3, "O que pode indicar um capacitor estufado em uma placa eletrônica?", ["Possível dano que requer avaliação técnica e substituição adequada", "Aumento garantido da capacidade da RAM", "Atualização de software concluída", "Melhora da conectividade Wi-Fi"], 0),
    criarPergunta(3, "Qual método ajuda a isolar a causa de uma falha de hardware?", ["Testar componentes e conexões de forma sistemática e controlada", "Trocar várias peças ao mesmo tempo sem registrar resultados", "Ignorar os sintomas", "Instalar aplicativos aleatórios"], 0),
    criarPergunta(3, "Qual ferramenta do Windows pode verificar e reparar arquivos protegidos do sistema?", ["sfc /scannow", "ipconfig /flushram", "paint /repair", "dir /bios"], 0),
    criarPergunta(3, "Para que serve o comando DISM /Online /Cleanup-Image /RestoreHealth no Windows?", ["Verificar e reparar a imagem de componentes do Windows", "Testar a velocidade do Wi-Fi", "Limpar fisicamente o cooler", "Aumentar a memória instalada"], 0),
    criarPergunta(3, "Qual é a função do protocolo ICMP, usado pelo comando ping?", ["Enviar mensagens de controle e diagnóstico de rede", "Transferir arquivos de vídeo", "Gerenciar a memória RAM", "Criptografar automaticamente o SSD"], 0),
    criarPergunta(3, "Qual é a finalidade de um servidor DHCP reservado para um dispositivo?", ["Atribuir normalmente o mesmo endereço IP a esse dispositivo com base em sua identificação", "Aumentar a velocidade física da placa de rede", "Substituir o roteador", "Criar cópias de arquivos"], 0),
    criarPergunta(3, "Por que a potência nominal da fonte deve ser compatível com o sistema?", ["Para fornecer energia adequada dentro das especificações do equipamento", "Para definir a resolução do monitor", "Para aumentar a velocidade do SSD diretamente", "Para substituir a memória RAM"], 0),
    criarPergunta(3, "Qual é a função do TPM em computadores compatíveis?", ["Disponibilizar recursos de segurança baseados em hardware", "Resfriar a placa de vídeo", "Aumentar a quantidade de portas SATA", "Gerar conexão Ethernet"], 0),
    criarPergunta(3, "O que é Secure Boot?", ["Recurso UEFI que ajuda a verificar componentes confiáveis do processo de inicialização", "Um tipo de armazenamento", "Uma ferramenta para limpar ventoinhas", "Um protocolo de transferência de arquivos"], 0),
    criarPergunta(3, "O que fazer antes de alterar configurações avançadas da BIOS/UEFI?", ["Registrar a configuração atual e entender os efeitos da mudança", "Alterar todas as opções ao acaso", "Desativar toda proteção sem necessidade", "Remover a CPU com o computador ligado"], 0),
    criarPergunta(3, "Qual é uma diferença entre TCP e UDP?", ["TCP oferece entrega confiável e ordenada; UDP tem menos mecanismos de controle", "UDP sempre garante entrega e ordem", "TCP só funciona em redes sem fio", "São conectores físicos iguais"], 0)
];

/* Sorteia elementos sem repetir */
function sortearItens(lista, quantidade) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia.slice(0, quantidade);
}

/* Embaralha as alternativas */
function prepararPergunta(pergunta) {
    const alternativas = pergunta.alternativas.map((texto, indice) => ({
        texto,
        correta: indice === pergunta.correta
    }));

    const embaralhadas = sortearItens(alternativas, alternativas.length);

    return {
        nivel: pergunta.nivel,
        texto: pergunta.texto,
        options: embaralhadas.map(item => item.texto),
        correct: embaralhadas.findIndex(item => item.correta)
    };
}

/* 3 fáceis + 4 intermediárias + 3 avançadas */
function sortearPerguntasDaPartida() {
    const faceis = questionBank.filter(p => p.nivel === 1);
    const intermediarias = questionBank.filter(p => p.nivel === 2);
    const avancadas = questionBank.filter(p => p.nivel === 3);

    if (faceis.length < 3 || intermediarias.length < 4 || avancadas.length < 3) {
        throw new Error("O banco precisa ter pelo menos 3 perguntas fáceis, 4 intermediárias e 3 avançadas.");
    }

    return [
        ...sortearItens(faceis, 3),
        ...sortearItens(intermediarias, 4),
        ...sortearItens(avancadas, 3)
    ].map(prepararPergunta);
}

let questions = [];

/* =====================================
   VALORES DOS PRÊMIOS
===================================== */
const prizes = [1000, 5000, 10000, 30000, 50000, 100000, 200000, 300000, 500000, 1000000];

/* =====================================
   VARIÁVEIS DO JOGO
===================================== */
let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let helpsAvailable = { bios: true, forum: true, senior: true };
let answerLocked = false;
let gameEnded = true;
let questionTimeout = null;

function $(id) {
    return document.getElementById(id);
}

function formatMoney(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0
    });
}

/* =====================================
   NAVEGAÇÃO ENTRE AS TELAS
===================================== */
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    const screen = $(screenId);
    if (screen) screen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showRules() {
    showScreen("screen-rules");
}

function backToMenu() {
    gameEnded = true;
    if (questionTimeout !== null) {
        clearTimeout(questionTimeout);
        questionTimeout = null;
    }
    if (window.bootstrap && $("helpModal")) {
        bootstrap.Modal.getInstance($("helpModal"))?.hide();
    }
    showScreen("screen-start");
}

function startGame() {
    if (questionTimeout !== null) {
        clearTimeout(questionTimeout);
        questionTimeout = null;
    }

    try {
        questions = sortearPerguntasDaPartida();
    } catch (error) {
        console.error(error);
        alert("Não foi possível sortear as perguntas. Confira o banco de questões.");
        return;
    }

    currentQuestionIndex = 0;
    selectedOptionIndex = null;
    helpsAvailable = { bios: true, forum: true, senior: true };
    answerLocked = false;
    gameEnded = false;

    ["bios", "forum", "senior"].forEach(help => {
        const button = $("help-" + help);
        if (button) {
            button.disabled = false;
            const counter = button.querySelector(".help-count");
            if (counter) counter.textContent = "1x";
        }
    });

    showScreen("screen-game");
    loadQuestion();
}

function loadQuestion() {
    if (questionTimeout !== null) {
        clearTimeout(questionTimeout);
        questionTimeout = null;
    }
    if (gameEnded) return;

    selectedOptionIndex = null;
    answerLocked = false;

    const question = questions[currentQuestionIndex];
    const previousPrize = currentQuestionIndex > 0 ? prizes[currentQuestionIndex - 1] : 0;

    $("current-q").textContent = currentQuestionIndex + 1;
    $("current-prize").textContent = formatMoney(previousPrize);
    $("question-level").textContent =
        "NÍVEL " + question.nivel + " · " +
        ["", "Básico", "Intermediário", "Avançado"][question.nivel];
    $("question-text").textContent = question.texto;
    $("stop-val").textContent = formatMoney(previousPrize / 2);
    $("prize-progress-fill").style.width = (currentQuestionIndex / questions.length * 100) + "%";
    $("answer-feedback").textContent = "";
    $("btn-confirm").disabled = true;

    if (currentQuestionIndex < 3) {
        $("byte-message").textContent = "Começo de missão! Leia com calma e escolha sua resposta.";
        $("player-status").textContent = "Aprendiz Tech";
    } else if (currentQuestionIndex < 7) {
        $("byte-message").textContent = "Pense como um técnico de verdade, meu parceiro!";
        $("player-status").textContent = "Técnico em evolução";
    } else {
        $("byte-message").textContent = "Tá chegando no topo! Concentração total!";
        $("player-status").textContent = "Especialista Tech";
    }

    for (let i = 0; i < 4; i++) {
        const button = $("opt-" + i);
        button.textContent = question.options[i];
        button.dataset.letter = String.fromCharCode(65 + i);
        button.className = "option-btn";
        button.disabled = false;
    }
}

/* =====================================
   SELECIONAR ALTERNATIVA
===================================== */
function selectOption(index) {
    if (gameEnded || answerLocked) return;
    const button = $("opt-" + index);
    if (!button || button.disabled) return;

    selectedOptionIndex = index;

    for (let i = 0; i < 4; i++) {
        $("opt-" + i).classList.toggle("selected", i === index);
    }

    $("btn-confirm").disabled = false;
    $("answer-feedback").textContent = "Alternativa selecionada. Confirme quando estiver pronto.";
}

/* =====================================
   CONFIRMAR RESPOSTA
===================================== */
function confirmAnswer() {
    if (gameEnded || answerLocked || selectedOptionIndex === null) return;

    answerLocked = true;
    const question = questions[currentQuestionIndex];
    const selected = selectedOptionIndex;

    $("btn-confirm").disabled = true;
    for (let i = 0; i < 4; i++) {
        $("opt-" + i).disabled = true;
    }

    if (selected === question.correct) {
        $("opt-" + selected).classList.remove("selected");
        $("opt-" + selected).classList.add("correct");
        $("answer-feedback").textContent = "✓ Resposta correta! Boa, meu parceiro! Preparando o próximo nível...";
        $("byte-message").textContent = "Acertou em cheio! O universo tech tá contigo!";
        $("prize-progress-fill").style.width = ((currentQuestionIndex + 1) / questions.length * 100) + "%";

        questionTimeout = setTimeout(() => {
            questionTimeout = null;
            if (gameEnded) return;

            if (currentQuestionIndex === questions.length - 1) {
                endGame(true, prizes[prizes.length - 1]);
            } else {
                currentQuestionIndex++;
                loadQuestion();
            }
        }, 1100);
    } else {
        $("opt-" + selected).classList.remove("selected");
        $("opt-" + selected).classList.add("wrong");
        $("opt-" + question.correct).classList.add("correct");
        $("answer-feedback").textContent =
            "✕ Não foi dessa vez! Resposta correta: " +
            String.fromCharCode(65 + question.correct) + ") " +
            question.options[question.correct] + ".";
        $("byte-message").textContent = "Faz parte, técnico! Cada erro também ensina.";

        questionTimeout = setTimeout(() => {
            questionTimeout = null;
            if (gameEnded) return;

            const consolation = currentQuestionIndex < 2
                ? 0
                : prizes[currentQuestionIndex - 2] / 2;

            endGame(false, consolation);
        }, 1700);
    }
}

/* =====================================
   PARAR O JOGO
===================================== */
function stopGame() {
    if (gameEnded || answerLocked) return;
    const guaranteedPrize = currentQuestionIndex === 0
        ? 0
        : prizes[currentQuestionIndex - 1] / 2;
    endGame(false, guaranteedPrize, true);
}

/* =====================================
   FINALIZAR O JOGO
===================================== */
function endGame(victory, amount, stopped = false) {
    if (questionTimeout !== null) {
        clearTimeout(questionTimeout);
        questionTimeout = null;
    }

    gameEnded = true;
    answerLocked = true;
    showScreen("screen-end");

    if (victory) {
        $("prize-progress-fill").style.width = "100%";
        $("end-title").textContent = "Mestre Tech!";
        $("end-message").textContent = "Você acertou as dez perguntas e conquistou o grande prêmio!";
        $("end-questions").textContent = "10/10";
    } else if (stopped) {
        $("end-title").textContent = "Retirada estratégica!";
        $("end-message").textContent = "Você decidiu parar e garantir parte do prêmio acumulado. Boa estratégia!";
        $("end-questions").textContent = currentQuestionIndex + "/10";
    } else {
        $("end-title").textContent = "Fim de missão!";
        $("end-message").textContent = "Uma resposta errada encerrou a missão. Use o que aprendeu e tente novamente!";
        $("end-questions").textContent = (currentQuestionIndex + 1) + "/10";
    }

    $("end-prize").textContent = formatMoney(amount);
}

/* =====================================
   ATUALIZAR CONTADOR DE AJUDAS
===================================== */
function consumeHelp(name) {
    helpsAvailable[name] = false;
    const button = $("help-" + name);
    if (button) {
        button.disabled = true;
        const counter = button.querySelector(".help-count");
        if (counter) counter.textContent = "Usada";
    }
}

/* =====================================
   AJUDA 1: RESET DA BIOS (elimina 2 erradas)
===================================== */
function useBios() {
    if (!helpsAvailable.bios || answerLocked || gameEnded) return;

    consumeHelp("bios");
    const correct = questions[currentQuestionIndex].correct;
    const wrongOptions = [0, 1, 2, 3].filter(index => index !== correct);
    wrongOptions.sort(() => Math.random() - 0.5);
    const toRemove = wrongOptions.slice(0, 2);

    toRemove.forEach(index => {
        const button = $("opt-" + index);
        button.disabled = true;
        button.classList.add("eliminated");
        if (selectedOptionIndex === index) {
            button.classList.remove("selected");
            selectedOptionIndex = null;
        }
    });

    $("btn-confirm").disabled = selectedOptionIndex === null;
    $("answer-feedback").textContent = "⌘ Reset da BIOS ativado! Duas alternativas incorretas foram eliminadas.";
}

/* =====================================
   MODAL DAS AJUDAS
===================================== */
function showHelpModal(title, message) {
    $("helpModalTitle").textContent = title;
    $("helpModalBody").textContent = message;

    if (window.bootstrap && $("helpModal")) {
        const modal = bootstrap.Modal.getOrCreateInstance($("helpModal"));
        modal.show();
    } else {
        alert(title + "\n\n" + message);
    }
}

/* =====================================
   AJUDA 2: FÓRUM TECH
===================================== */
function useForum() {
    if (!helpsAvailable.forum || answerLocked || gameEnded) return;

    consumeHelp("forum");

    const question = questions[currentQuestionIndex];
    const correct = question.correct;

    // 70% de chance de sugerir a resposta correta
    let suggestedAnswer;
    if (Math.random() < 0.7) {
        suggestedAnswer = correct;
    } else {
        const wrongs = [0, 1, 2, 3].filter(i => i !== correct);
        suggestedAnswer = wrongs[Math.floor(Math.random() * wrongs.length)];
    }

    showHelpModal(
        "Comunidade Fórum Tech",
        "Os especialistas sugerem a alternativa " +
        String.fromCharCode(65 + suggestedAnswer) +
        ") " + question.options[suggestedAnswer] +
        ". A sugestão é simulada e pode estar errada."
    );
}

/* =====================================
   AJUDA 3: TÉCNICO SÊNIOR (revela a correta)
===================================== */
function useSenior() {
    if (!helpsAvailable.senior || answerLocked || gameEnded) return;

    consumeHelp("senior");
    const question = questions[currentQuestionIndex];

    showHelpModal(
        "Técnico Sênior",
        "A resposta correta é " +
        String.fromCharCode(65 + question.correct) +
        ") " + question.options[question.correct] + "."
    );
}

/* =====================================
   FUNDO ANIMADO: ESTRELAS
===================================== */
(function createStarfield() {
    const canvas = $("star-canvas");
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let stars = [];

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resizeCanvas() {
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = Math.floor(width * pixelRatio);
        canvas.height = Math.floor(height * pixelRatio);

        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        const numberOfStars = Math.min(180, Math.floor(width * height / 8500));

        stars = Array.from({ length: numberOfStars }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.6 + 0.3,
            speed: Math.random() * 0.65 + 0.12,
            horizontalSpeed: (Math.random() - 0.5) * 0.25,
            opacity: Math.random() * 0.65 + 0.2,
            phase: Math.random() * Math.PI * 2
        }));
    }

    function drawStars() {
        context.clearRect(0, 0, width, height);

        stars.forEach(star => {
            if (!reducedMotion) {
                star.y += star.speed;
                star.x += star.horizontalSpeed;
                star.phase += 0.025;
            }

            if (star.y > height + 3) {
                star.y = -3;
                star.x = Math.random() * width;
            }
            if (star.x < -3) star.x = width + 3;
            if (star.x > width + 3) star.x = -3;

            const opacity = star.opacity * (0.72 + Math.sin(star.phase) * 0.28);

            context.beginPath();
            context.fillStyle = "rgba(226, 232, 255, " + opacity + ")";
            context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            context.fill();

            if (star.radius > 1.35) {
                context.strokeStyle = "rgba(103, 232, 249, 0.25)";
                context.beginPath();
                context.moveTo(star.x - 3, star.y);
                context.lineTo(star.x + 3, star.y);
                context.stroke();
            }
        });

        if (!reducedMotion) {
            requestAnimationFrame(drawStars);
        }
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawStars();
})();