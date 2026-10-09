/* =====================================
   O MILHÃO DA MANUTENÇÃO
   JAVASCRIPT - VERSÃO COMPLETA
   (com explicações + nome do jogador + ajudas claras)
===================================== */


/* ==========================================
   BANCO DE PERGUNTAS (com explicação)
========================================== */

function criarPergunta(nivel, texto, alternativas, correta, explicacao) {
    return { nivel, texto, alternativas, correta, explicacao };
}

const questionBank = [
    // ===== FÁCEIS =====
    criarPergunta(1, "Qual componente executa instruções e processa dados?", ["CPU", "Mouse", "Monitor", "Gabinete"], 0,
        "A CPU (Unidade Central de Processamento) é o cérebro do computador. Ela processa todas as instruções e dados."),
    
    criarPergunta(1, "Qual componente mantém dados temporários enquanto o PC está ligado?", ["SSD", "RAM", "Fonte", "Cooler"], 1,
        "A RAM é uma memória volátil. Ela guarda temporariamente o que está sendo usado e perde tudo ao desligar o PC."),
    
    criarPergunta(1, "Qual componente armazena arquivos permanentemente?", ["RAM", "CPU", "SSD", "Dissipador"], 2,
        "O SSD (ou HD) guarda os arquivos de forma permanente, mesmo com o computador desligado."),
    
    criarPergunta(1, "Qual componente fornece energia aos componentes do computador?", ["Fonte", "Memória RAM", "Mouse", "Cooler"], 0,
        "A fonte de alimentação converte a energia da tomada e distribui a voltagem correta para todos os componentes."),
    
    criarPergunta(1, "Qual componente é usado para exibir imagens?", ["Teclado", "Monitor", "Fonte", "SSD"], 1,
        "O monitor é o dispositivo de saída responsável por mostrar as imagens e textos na tela."),
    
    criarPergunta(1, "Para que serve um cooler?", ["Armazenar arquivos", "Resfriar componentes", "Conectar à internet", "Processar textos"], 1,
        "O cooler (ventoinha) serve para resfriar os componentes e evitar o superaquecimento."),
    
    criarPergunta(1, "Qual componente conecta os principais componentes do computador?", ["Placa-mãe", "Mouse", "Caixa de som", "Monitor"], 0,
        "A placa-mãe é a base onde todos os outros componentes se conectam e se comunicam."),
    
    criarPergunta(1, "Qual dispositivo é usado principalmente para digitar?", ["Mouse", "Webcam", "Teclado", "Microfone"], 2,
        "O teclado é o periférico de entrada usado para digitar textos e comandos."),
    
    criarPergunta(1, "Qual destes é um sistema operacional?", ["HTML", "Windows", "HDMI", "USB"], 1,
        "Windows é um sistema operacional. HTML é linguagem de marcação, HDMI e USB são conexões."),
    
    criarPergunta(1, "Qual destes dispositivos é usado para apontar e clicar?", ["Mouse", "Fonte", "Processador", "Memória RAM"], 0,
        "O mouse é o periférico de entrada usado para apontar, clicar e navegar na tela."),
    
    criarPergunta(1, "Qual componente é conhecido como GPU?", ["Placa de vídeo", "Fonte", "SSD", "Placa de rede"], 0,
        "GPU significa Unidade de Processamento Gráfico, que é a placa de vídeo."),
    
    criarPergunta(1, "O que significa a sigla SSD?", ["Solid State Drive", "System Software Device", "Secure Storage Disk", "Standard System Drive"], 0,
        "SSD significa Solid State Drive (Unidade de Estado Sólido), um tipo de armazenamento rápido sem partes móveis."),
    
    criarPergunta(1, "Qual é a função principal de um antivírus?", ["Aumentar a RAM", "Detectar e ajudar a remover ameaças", "Resfriar o PC", "Melhorar o monitor"], 1,
        "O antivírus detecta, bloqueia e remove vírus, malwares e outras ameaças de segurança."),
    
    criarPergunta(1, "Qual cabo é comumente utilizado para conectar um monitor?", ["HDMI", "RJ11", "SATA de dados", "Cabo de áudio apenas"], 0,
        "O HDMI é o cabo mais usado atualmente para transmitir vídeo e áudio do PC para o monitor."),
    
    criarPergunta(1, "Qual unidade normalmente representa a capacidade de armazenamento?", ["GB", "Hz apenas", "Volt", "Watt"], 0,
        "GB (Gigabyte) e TB (Terabyte) são as unidades usadas para medir capacidade de armazenamento."),
    
    criarPergunta(1, "Qual componente costuma ser instalado em slots de memória da placa-mãe?", ["RAM", "Fonte", "Monitor", "Teclado"], 0,
        "Os pentes de memória RAM são instalados nos slots específicos da placa-mãe."),
    
    criarPergunta(1, "O que significa a sigla USB?", ["Universal Serial Bus", "Unified System Board", "User Storage Backup", "Universal Software Boot"], 0,
        "USB significa Universal Serial Bus, o padrão mais comum de conexão de periféricos."),
    
    criarPergunta(1, "Qual dispositivo permite conectar um computador a uma rede sem fio?", ["Adaptador Wi-Fi", "Cooler", "Pasta térmica", "Dissipador"], 0,
        "O adaptador Wi-Fi (placa ou dongle) permite a conexão sem fio à rede."),
    
    criarPergunta(1, "Qual programa é usado para navegar em páginas da internet?", ["Navegador", "BIOS", "Driver de áudio", "Calculadora de hardware"], 0,
        "Navegadores como Chrome, Firefox e Edge são os programas usados para acessar a internet."),
    
    criarPergunta(1, "Qual destes é um exemplo de periférico?", ["Teclado", "Processador", "Chipset", "Soquete da CPU"], 0,
        "Periféricos são dispositivos externos ou de entrada/saída, como teclado, mouse e monitor."),
    
    criarPergunta(1, "Qual é a finalidade de um gabinete?", ["Abrigar e proteger componentes", "Armazenar sites", "Criar senhas", "Substituir o sistema operacional"], 0,
        "O gabinete protege e organiza todos os componentes internos do computador."),
    
    criarPergunta(1, "O que é um arquivo PDF?", ["Um formato de documento", "Um tipo de processador", "Uma memória física", "Um cabo de rede"], 0,
        "PDF é um formato de arquivo criado para documentos que mantém a formatação original."),
    
    criarPergunta(1, "Qual dispositivo pode imprimir documentos?", ["Impressora", "Roteador", "Placa-mãe", "Cooler"], 0,
        "A impressora é o periférico de saída responsável por imprimir documentos e imagens."),
    
    criarPergunta(1, "Qual componente pode fornecer conexão Ethernet ao PC?", ["Placa de rede", "Pasta térmica", "Dissipador", "Bateria do mouse"], 0,
        "A placa de rede (integrada ou avulsa) permite a conexão por cabo Ethernet."),
    
    criarPergunta(1, "O que é hardware?", ["Parte física do computador", "Conjunto de programas", "Uma página da internet", "Uma senha"], 0,
        "Hardware é toda a parte física do computador: placas, memórias, cabos, etc."),
    
    criarPergunta(1, "O que é software?", ["Programas e sistemas", "Somente cabos", "Peças metálicas", "Apenas memória RAM"], 0,
        "Software são os programas, sistemas operacionais e aplicativos que rodam no hardware."),
    
    criarPergunta(1, "Qual ferramenta é usada normalmente para apertar parafusos de um gabinete?", ["Chave de fenda ou Phillips", "Pincel de pintura molhada", "Régua", "Fone de ouvido"], 0,
        "Chave de fenda ou Phillips é a ferramenta básica para montar e desmontar gabinetes."),
    
    criarPergunta(1, "Qual componente ajuda a dissipar o calor da CPU?", ["Dissipador", "SSD", "Teclado", "Placa de som"], 0,
        "O dissipador (com ou sem cooler) retira o calor da CPU e ajuda a mantê-la em temperatura segura."),
    
    criarPergunta(1, "Qual é uma prática básica antes de fazer manutenção interna no PC?", ["Desligar e desconectar da energia", "Molhar os componentes", "Retirar peças com o PC ligado", "Bloquear as ventoinhas"], 0,
        "Sempre desligue e desconecte o PC da tomada antes de abrir o gabinete por segurança."),
    
    criarPergunta(1, "Qual destes é um navegador de internet?", ["Firefox", "BIOS", "UEFI", "DDR4"], 0,
        "Firefox é um navegador. BIOS/UEFI são firmwares e DDR4 é tipo de memória."),

    // ===== INTERMEDIÁRIAS =====
    criarPergunta(2, "Um PC liga, mas não apresenta vídeo. Qual verificação inicial é útil?", ["Conferir monitor, cabo e entrada de vídeo", "Formatar sempre o SSD", "Trocar o teclado", "Apagar os documentos"], 0,
        "O primeiro passo é checar o básico: cabo, monitor ligado e entrada de vídeo correta."),
    
    criarPergunta(2, "Para que serve a pasta térmica?", ["Melhorar a transferência de calor", "Aumentar o armazenamento", "Limpar arquivos", "Conectar o Wi-Fi"], 0,
        "A pasta térmica preenche microespaços entre a CPU e o dissipador, melhorando a transferência de calor."),
    
    criarPergunta(2, "O que pode causar lentidão quando muitos programas estão abertos?", ["Pouca memória disponível", "Monitor grande", "Mouse sem fio", "Papel de parede escuro"], 0,
        "Quando a RAM fica cheia, o sistema usa o disco (muito mais lento), causando lentidão."),
    
    criarPergunta(2, "O que é um driver?", ["Software que permite ao sistema comunicar-se com um dispositivo", "Uma peça de refrigeração", "Um tipo de cabo HDMI", "Uma memória de armazenamento"], 0,
        "Driver é o software que faz a ponte entre o sistema operacional e o hardware."),
    
    criarPergunta(2, "Qual é a principal função da BIOS/UEFI durante a inicialização?", ["Inicializar e verificar o hardware e iniciar o processo de boot", "Editar fotos", "Criar documentos", "Aumentar fisicamente a RAM"], 0,
        "A BIOS/UEFI testa o hardware (POST) e inicia o carregamento do sistema operacional."),
    
    criarPergunta(2, "Qual interface é comum em SSDs de 2,5 polegadas?", ["SATA", "VGA", "PS/2", "RCA"], 0,
        "SSDs de 2,5\" geralmente usam conexão SATA, a mesma dos HDs tradicionais."),
    
    criarPergunta(2, "O que significa DHCP em uma rede?", ["Protocolo que atribui configurações IP automaticamente", "Sistema de refrigeração", "Formato de imagem", "Tipo de memória"], 0,
        "DHCP distribui automaticamente endereços IP e outras configurações de rede para os dispositivos."),
    
    criarPergunta(2, "Qual serviço traduz nomes de domínio em endereços IP?", ["DNS", "HDMI", "USB", "POST"], 0,
        "O DNS (Domain Name System) converte nomes como google.com em endereços IP."),
    
    criarPergunta(2, "Qual comando do Windows mostra configurações de IP no terminal?", ["ipconfig", "dir /format", "paint", "taskcolor"], 0,
        "O comando ipconfig mostra o endereço IP, máscara, gateway e outras informações de rede."),
    
    criarPergunta(2, "Qual comando é comumente usado para testar a conectividade com outro dispositivo?", ["ping", "mkdir", "rename", "cls"], 0,
        "O comando ping envia pacotes e mede se há resposta, testando a conectividade."),
    
    criarPergunta(2, "O que é phishing?", ["Tentativa de enganar alguém para obter dados ou acesso", "Limpeza de poeira", "Atualização legítima de driver", "Tipo de memória"], 0,
        "Phishing é um golpe que tenta enganar a pessoa para roubar senhas, dados bancários etc."),
    
    criarPergunta(2, "O que fazer antes de uma manutenção que pode afetar arquivos importantes?", ["Verificar se existe backup atualizado", "Apagar todos os backups", "Desativar todas as proteções", "Formatar sem autorização"], 0,
        "Sempre tenha um backup atualizado antes de qualquer procedimento que possa apagar dados."),
    
    criarPergunta(2, "Qual é uma causa possível de superaquecimento do computador?", ["Ventilação obstruída por poeira", "Mousepad grande", "Nome de usuário longo", "Muitas pastas vazias"], 0,
        "Poeira acumulada bloqueia a passagem de ar e faz a temperatura subir bastante."),
    
    criarPergunta(2, "Qual tipo de memória perde os dados ao desligar o computador?", ["RAM", "SSD", "HD", "Memória flash de um pendrive"], 0,
        "A RAM é volátil: perde todo o conteúdo assim que a energia é cortada."),
    
    criarPergunta(2, "Qual conector de alimentação é normalmente usado por muitas placas de vídeo?", ["PCIe de alimentação", "RJ45", "VGA analógico", "P2 de áudio"], 0,
        "Placas de vídeo dedicadas usam conectores PCIe de 6 ou 8 pinos para alimentação extra."),
    
    criarPergunta(2, "O que é dual-channel em memória RAM?", ["Uso de dois canais de memória compatíveis para aumentar a largura de banda", "Duas fontes ligadas em série", "Duas placas de vídeo obrigatórias", "Dois sistemas operacionais no mesmo arquivo"], 0,
        "Dual-channel usa dois pentes iguais em canais diferentes para dobrar a largura de banda da memória."),
    
    criarPergunta(2, "Qual ferramenta do Windows pode ajudar a identificar programas que iniciam com o sistema?", ["Gerenciador de Tarefas", "Bloco de Notas", "Paint", "Calculadora"], 0,
        "No Gerenciador de Tarefas (aba Inicializar) você vê e desativa programas que sobem com o Windows."),
    
    criarPergunta(2, "Qual é a função do roteador doméstico?", ["Encaminhar tráfego entre redes e compartilhar conexão", "Resfriar o processador", "Armazenar permanentemente todos os arquivos do PC", "Substituir a memória RAM"], 0,
        "O roteador conecta sua rede local à internet e distribui o sinal para os dispositivos."),
    
    criarPergunta(2, "Qual cabo de rede é comumente terminado com conector RJ45?", ["Ethernet de par trançado", "HDMI", "SATA", "DisplayPort"], 0,
        "Cabos de rede Ethernet usam conectores RJ45 nas pontas."),
    
    criarPergunta(2, "O que é um endereço IP?", ["Identificador lógico usado em uma rede", "Número de série da RAM", "Modelo do monitor", "Nome de um antivírus"], 0,
        "O endereço IP identifica de forma lógica um dispositivo dentro de uma rede."),
    
    criarPergunta(2, "O que pode indicar um HD com ruídos incomuns e erros de leitura?", ["Possível falha física; faça backup e diagnóstico", "Que o monitor está desatualizado", "Que a placa de som está rápida", "Que o PC precisa de mais papel"], 0,
        "Ruídos estranhos e erros de leitura costumam indicar que o HD está falhando. Faça backup imediatamente."),
    
    criarPergunta(2, "Para que serve o Gerenciador de Dispositivos?", ["Visualizar e administrar dispositivos e drivers", "Editar vídeos", "Criar uma rede social", "Medir a temperatura ambiente"], 0,
        "No Gerenciador de Dispositivos você vê todos os hardwares e pode atualizar ou corrigir drivers."),
    
    criarPergunta(2, "Qual é uma finalidade das atualizações de segurança?", ["Corrigir vulnerabilidades conhecidas", "Aumentar o tamanho físico do SSD", "Trocar o gabinete", "Desativar permanentemente o firewall"], 0,
        "Atualizações de segurança corrigem falhas que poderiam ser exploradas por atacantes."),
    
    criarPergunta(2, "O que significa POST no processo de inicialização?", ["Autoteste de inicialização do hardware", "Protocolo de correio eletrônico", "Formato de armazenamento", "Programa de desenho"], 0,
        "POST (Power-On Self-Test) é o teste automático que a BIOS/UEFI faz nos componentes ao ligar."),
    
    criarPergunta(2, "Qual recurso pode proteger uma conta mesmo que a senha seja descoberta?", ["Autenticação multifator", "Senha compartilhada", "Desativar atualizações", "Usar a mesma senha em todos os sites"], 0,
        "A autenticação multifator (MFA) pede um segundo fator (SMS, app etc.), dificultando o acesso indevido."),
    
    criarPergunta(2, "Qual sistema de arquivos é comumente usado em instalações modernas do Windows?", ["NTFS", "HTML", "PNG", "MP3"], 0,
        "O NTFS é o sistema de arquivos padrão das instalações modernas do Windows."),
    
    criarPergunta(2, "O que fazer se um computador estiver muito lento e houver suspeita de malware?", ["Executar verificações com ferramentas de segurança confiáveis", "Instalar qualquer programa desconhecido", "Desativar o antivírus", "Compartilhar todas as senhas"], 0,
        "Use ferramentas confiáveis de antivírus e antimalware para escanear e remover ameaças."),
    
    criarPergunta(2, "O que significa a sigla LAN?", ["Local Area Network", "Large Application Number", "Long Access Node", "Local Audio Name"], 0,
        "LAN significa Local Area Network (Rede de Área Local), a rede da sua casa ou empresa."),
    
    criarPergunta(2, "Qual é uma função de um switch de rede?", ["Encaminhar quadros entre dispositivos de uma rede local", "Converter calor em energia", "Armazenar arquivos como um SSD", "Substituir o processador"], 0,
        "O switch conecta vários dispositivos na mesma rede local e encaminha os dados corretamente."),
    
    criarPergunta(2, "Por que é importante usar uma pulseira antiestática corretamente durante certos reparos?", ["Reduzir o risco de descarga eletrostática nos componentes", "Aumentar a velocidade do processador", "Evitar atualizações", "Melhorar a conexão Wi-Fi"], 0,
        "A descarga eletrostática pode queimar componentes sensíveis. A pulseira equaliza o potencial elétrico."),
    
    criarPergunta(2, "Qual é a função de um nobreak?", ["Fornecer energia temporária e ajudar a proteger contra interrupções", "Aumentar a capacidade da RAM", "Substituir a placa-mãe", "Eliminar todos os vírus"], 0,
        "O nobreak (UPS) mantém o PC ligado por alguns minutos durante quedas de energia e protege contra surtos."),
    
    criarPergunta(2, "O que é uma máquina virtual?", ["Ambiente computacional simulado por software", "Um tipo de teclado", "Um cabo de alimentação", "Uma ventoinha"], 0,
        "Uma máquina virtual é um computador virtual criado por software dentro de outro computador."),
    
    criarPergunta(2, "Qual é o principal papel de um firewall?", ["Filtrar tráfego de rede conforme regras de segurança", "Resfriar a GPU", "Desfragmentar a RAM", "Aumentar a resolução do monitor"], 0,
        "O firewall analisa o tráfego de rede e bloqueia ou permite conexões conforme regras de segurança."),
    
    criarPergunta(2, "O que significa fazer backup?", ["Criar uma cópia de segurança dos dados", "Apagar o sistema operacional", "Aumentar a voltagem da fonte", "Desligar o monitor"], 0,
        "Backup é a cópia de segurança dos seus arquivos importantes para recuperar em caso de problema."),
    
    criarPergunta(2, "Qual é uma possível causa de reinicializações inesperadas?", ["Superaquecimento, alimentação instável ou falha de hardware", "Muitos ícones na área de trabalho", "Papel de parede animado sempre", "Nome curto do computador"], 0,
        "Reinicializações sozinhas costumam ser causadas por calor excessivo, fonte fraca ou peça com defeito."),

    // ===== AVANÇADAS =====
    criarPergunta(3, "Qual é a diferença principal entre GPT e MBR?", ["São esquemas de particionamento de disco com capacidades e características diferentes", "São tipos de cooler", "São linguagens de programação", "São protocolos de áudio"], 0,
        "MBR é o esquema antigo (limite de 2 TB). GPT é o moderno, suporta discos maiores e mais partições."),
    
    criarPergunta(3, "Qual modo de inicialização é associado normalmente a sistemas modernos com GPT?", ["UEFI", "VGA", "RJ45", "IDE de áudio"], 0,
        "Discos com GPT normalmente usam o modo de inicialização UEFI (mais moderno que o Legacy/BIOS)."),
    
    criarPergunta(3, "O que pode acontecer se a frequência e os timings da RAM forem incompatíveis com a configuração do sistema?", ["Instabilidade ou falha na inicialização", "Aumento garantido de armazenamento", "Melhora automática da internet", "Impressão mais rápida"], 0,
        "Configurações de memória incompatíveis geram tela azul, travamentos ou o PC nem liga."),
    
    criarPergunta(3, "O que é thermal throttling?", ["Redução automática de desempenho para controlar a temperatura", "Aumento permanente da capacidade do SSD", "Protocolo de rede", "Processo de backup"], 0,
        "Quando a temperatura sobe demais, o processador reduz a velocidade sozinho para não queimar (throttling)."),
    
    criarPergunta(3, "O que indica um LED de diagnóstico VGA aceso continuamente em algumas placas-mãe?", ["Possível problema na inicialização gráfica", "Problema obrigatório no teclado", "Falta de espaço no navegador", "Falha do DNS"], 0,
        "LEDs de diagnóstico acesos indicam em qual etapa o boot parou. VGA aceso aponta problema de vídeo."),
    
    criarPergunta(3, "O que é RAID 1?", ["Espelhamento de dados em unidades para redundância", "Distribuição de dados sem redundância obrigatória", "Um padrão de vídeo", "Uma memória cache da CPU"], 0,
        "No RAID 1 os dados são espelhados em dois discos. Se um falhar, o outro continua funcionando."),
    
    criarPergunta(3, "Qual é o objetivo principal do RAID 0?", ["Distribuir dados entre unidades para desempenho, sem redundância", "Espelhar dados para tolerância a falhas", "Criptografar automaticamente a rede", "Reparar setores fisicamente danificados"], 0,
        "RAID 0 divide os dados entre os discos para ganhar velocidade, mas não tem proteção contra falha."),
    
    criarPergunta(3, "O que é latência de memória?", ["Atraso entre uma solicitação e a entrega dos dados", "Capacidade total do SSD", "Velocidade do ventilador", "Quantidade de portas USB"], 0,
        "Latência é o tempo que a memória demora para responder a um pedido do processador."),
    
    criarPergunta(3, "Qual barramento é usado por muitos SSDs NVMe modernos?", ["PCI Express", "VGA", "PS/2", "Áudio analógico"], 0,
        "SSDs NVMe usam o barramento PCI Express (PCIe), muito mais rápido que SATA."),
    
    criarPergunta(3, "Qual é a função do SMART em unidades de armazenamento compatíveis?", ["Monitorar indicadores relacionados à condição e possíveis falhas da unidade", "Aumentar fisicamente a capacidade do disco", "Atualizar a BIOS automaticamente em todos os PCs", "Criar endereços IP"], 0,
        "O SMART monitora a saúde do HD/SSD e avisa quando detecta sinais de possível falha."),
    
    criarPergunta(3, "Qual comando Linux mostra interfaces e endereços de rede em muitos sistemas atuais?", ["ip addr", "paint", "format c:", "notepad"], 0,
        "O comando ip addr (ou ip a) mostra as interfaces de rede e seus endereços IP no Linux."),
    
    criarPergunta(3, "Qual comando Linux lista processos em execução de forma interativa em muitos sistemas?", ["top", "mkdir", "touch", "pwd"], 0,
        "O comando top mostra em tempo real os processos que estão consumindo CPU e memória."),
    
    criarPergunta(3, "Qual é a função do protocolo ARP em uma rede IPv4 local?", ["Associar endereços IPv4 a endereços MAC na rede local", "Traduzir nomes de domínio na internet", "Criptografar arquivos", "Atribuir nomes de usuário"], 0,
        "O ARP descobre o endereço MAC (físico) correspondente a um endereço IP na rede local."),
    
    criarPergunta(3, "Qual protocolo costuma usar a porta TCP 443 para conexões web seguras?", ["HTTPS", "FTP sem TLS", "Telnet", "DHCP"], 0,
        "HTTPS (HTTP seguro) usa a porta 443 e criptografa a comunicação entre o navegador e o site."),
    
    criarPergunta(3, "Qual protocolo é comumente utilizado para transferir arquivos de forma segura por SSH?", ["SFTP", "HTTP sem TLS", "ARP", "ICMP"], 0,
        "SFTP (SSH File Transfer Protocol) transfere arquivos de forma criptografada usando SSH."),
    
    criarPergunta(3, "Qual é a finalidade de uma máscara de sub-rede?", ["Indicar a divisão entre a parte de rede e a parte de host do endereço IP", "Definir a temperatura da CPU", "Medir a capacidade do SSD", "Determinar a resolução do monitor"], 0,
        "A máscara de sub-rede define quantos bits do IP pertencem à rede e quantos pertencem ao dispositivo."),
    
    criarPergunta(3, "O que é uma VLAN?", ["Segmentação lógica de uma rede local", "Um tipo de memória RAM", "Um sistema de arquivos", "Uma conexão de vídeo"], 0,
        "VLAN cria redes virtuais separadas dentro do mesmo switch físico, melhorando organização e segurança."),
    
    criarPergunta(3, "O que significa PoE em equipamentos de rede compatíveis?", ["Power over Ethernet", "Processor over Engine", "Port of Encryption", "Protocol of Email"], 0,
        "PoE (Power over Ethernet) permite alimentar dispositivos (câmeras, APs) pelo próprio cabo de rede."),
    
    criarPergunta(3, "Qual é uma boa primeira etapa para diagnosticar perda intermitente de rede?", ["Verificar conexões, sinal, endereço IP e registros do equipamento", "Formatar todos os computadores imediatamente", "Trocar todas as peças sem testes", "Desativar a segurança da rede"], 0,
        "Sempre comece pelo básico: cabos, sinal Wi-Fi, IP correto e logs do roteador/equipamento."),
    
    criarPergunta(3, "O que é uma vulnerabilidade de software?", ["Fraqueza que pode ser explorada para comprometer um sistema", "Uma função de backup", "Um tipo de cabo", "Uma configuração de brilho"], 0,
        "Vulnerabilidade é uma falha no software que um atacante pode usar para invadir ou danificar o sistema."),
    
    criarPergunta(3, "Qual é uma finalidade do princípio do menor privilégio?", ["Conceder apenas as permissões necessárias para cada função", "Dar acesso administrativo a todos", "Compartilhar senhas", "Desativar registros de auditoria"], 0,
        "Cada usuário ou sistema deve ter somente as permissões mínimas necessárias para realizar seu trabalho."),
    
    criarPergunta(3, "O que é criptografia de dados em repouso?", ["Proteção criptográfica de dados armazenados", "Aumento da velocidade do cooler", "Limpeza de poeira", "Atribuição de endereço IP"], 0,
        "Criptografia em repouso protege os dados enquanto eles estão gravados no disco ou no armazenamento."),
    
    criarPergunta(3, "Por que atualizar o firmware de um equipamento exige cuidado?", ["Uma atualização incorreta ou interrompida pode inutilizar o equipamento", "Toda atualização apaga obrigatoriamente os arquivos pessoais", "Firmware só funciona em impressoras", "Atualizações nunca alteram segurança"], 0,
        "Se a atualização de firmware falhar ou for interrompida, o equipamento pode ficar inutilizável (brick)."),
    
    criarPergunta(3, "O que pode indicar um capacitor estufado em uma placa eletrônica?", ["Possível dano que requer avaliação técnica e substituição adequada", "Aumento garantido da capacidade da RAM", "Atualização de software concluída", "Melhora da conectividade Wi-Fi"], 0,
        "Capacitor estufado ou vazando é sinal de defeito. A placa precisa de reparo ou substituição."),
    
    criarPergunta(3, "Qual método ajuda a isolar a causa de uma falha de hardware?", ["Testar componentes e conexões de forma sistemática e controlada", "Trocar várias peças ao mesmo tempo sem registrar resultados", "Ignorar os sintomas", "Instalar aplicativos aleatórios"], 0,
        "O método correto é testar uma coisa de cada vez, anotando os resultados, para achar a causa real."),
    
    criarPergunta(3, "Qual ferramenta do Windows pode verificar e reparar arquivos protegidos do sistema?", ["sfc /scannow", "ipconfig /flushram", "paint /repair", "dir /bios"], 0,
        "O comando sfc /scannow verifica e repara arquivos do sistema Windows que estejam corrompidos."),
    
    criarPergunta(3, "Para que serve o comando DISM /Online /Cleanup-Image /RestoreHealth no Windows?", ["Verificar e reparar a imagem de componentes do Windows", "Testar a velocidade do Wi-Fi", "Limpar fisicamente o cooler", "Aumentar a memória instalada"], 0,
        "O DISM repara a imagem do Windows. É usado quando o SFC sozinho não consegue corrigir tudo."),
    
    criarPergunta(3, "Qual é a função do protocolo ICMP, usado pelo comando ping?", ["Enviar mensagens de controle e diagnóstico de rede", "Transferir arquivos de vídeo", "Gerenciar a memória RAM", "Criptografar automaticamente o SSD"], 0,
        "O ICMP é usado para diagnóstico de rede (ping, traceroute). Ele não transporta dados de usuário."),
    
    criarPergunta(3, "Qual é a finalidade de um servidor DHCP reservado para um dispositivo?", ["Atribuir normalmente o mesmo endereço IP a esse dispositivo com base em sua identificação", "Aumentar a velocidade física da placa de rede", "Substituir o roteador", "Criar cópias de arquivos"], 0,
        "Reserva DHCP faz o dispositivo sempre receber o mesmo IP, baseado no endereço MAC dele."),
    
    criarPergunta(3, "Por que a potência nominal da fonte deve ser compatível com o sistema?", ["Para fornecer energia adequada dentro das especificações do equipamento", "Para definir a resolução do monitor", "Para aumentar a velocidade do SSD diretamente", "Para substituir a memória RAM"], 0,
        "Uma fonte fraca ou de má qualidade pode causar desligamentos, reinícios e até danificar componentes."),
    
    criarPergunta(3, "Qual é a função do TPM em computadores compatíveis?", ["Disponibilizar recursos de segurança baseados em hardware", "Resfriar a placa de vídeo", "Aumentar a quantidade de portas SATA", "Gerar conexão Ethernet"], 0,
        "O TPM (Trusted Platform Module) é um chip de segurança que guarda chaves e ajuda em recursos como BitLocker."),
    
    criarPergunta(3, "O que é Secure Boot?", ["Recurso UEFI que ajuda a verificar componentes confiáveis do processo de inicialização", "Um tipo de armazenamento", "Uma ferramenta para limpar ventoinhas", "Um protocolo de transferência de arquivos"], 0,
        "O Secure Boot só permite a inicialização de softwares e drivers assinados digitalmente, aumentando a segurança."),
    
    criarPergunta(3, "O que fazer antes de alterar configurações avançadas da BIOS/UEFI?", ["Registrar a configuração atual e entender os efeitos da mudança", "Alterar todas as opções ao acaso", "Desativar toda proteção sem necessidade", "Remover a CPU com o computador ligado"], 0,
        "Anote as configurações atuais ou tire foto antes de mudar qualquer coisa na BIOS/UEFI."),
    
    criarPergunta(3, "Qual é uma diferença entre TCP e UDP?", ["TCP oferece entrega confiável e ordenada; UDP tem menos mecanismos de controle", "UDP sempre garante entrega e ordem", "TCP só funciona em redes sem fio", "São conectores físicos iguais"], 0,
        "TCP garante que os dados cheguem na ordem e sem perdas. UDP é mais rápido, mas não garante entrega.")
];


/* =====================================
   FUNÇÕES DE SORTEIO
===================================== */

function sortearItens(lista, quantidade) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia.slice(0, quantidade);
}

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
        correct: embaralhadas.findIndex(item => item.correta),
        explicacao: pergunta.explicacao
    };
}

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


/* =====================================
   VALORES DOS PRÊMIOS
===================================== */

const prizes = [1000, 5000, 10000, 30000, 50000, 100000, 200000, 300000, 500000, 1000000];


/* =====================================
   VARIÁVEIS DO JOGO
===================================== */

let questions = [];
let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let helpsAvailable = { bios: true, forum: true, senior: true };
let answerLocked = false;
let gameEnded = true;
let questionTimeout = null;
let playerName = "";


/* =====================================
   UTILITÁRIOS
===================================== */

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
   NAVEGAÇÃO ENTRE TELAS
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


/* =====================================
   INICIAR O JOGO
===================================== */


function startGame() {
    const nameInput = $("player-name-input");
    playerName = nameInput ? nameInput.value.trim() : "";

    if (!playerName) {
        alert("Digite seu nome para começar a missão!");
        if (nameInput) nameInput.focus();
        return;
    }

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

    // Atualiza botões de ajuda
    ["bios", "forum", "senior"].forEach(help => {
        const button = $("help-" + help);
        if (button) {
            button.disabled = false;
            const counter = button.querySelector(".help-count");
            if (counter) counter.textContent = "1x";
        }
    });

    // Mostra o nome do jogador
    if ($("player-name-display")) {
        $("player-name-display").textContent = "Jogador: " + playerName;
    }

    showScreen("screen-game");
    loadQuestion();
}


/* =====================================
   CARREGAR PERGUNTA
===================================== */

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
   SELECIONAR E CONFIRMAR RESPOSTA
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
        // ===== ACERTOU =====
        $("opt-" + selected).classList.remove("selected");
        $("opt-" + selected).classList.add("correct");

        $("answer-feedback").innerHTML =
            "✓ <strong>Resposta correta!</strong><br><br>" +
            (question.explicacao || "Boa, meu parceiro!");

        $("byte-message").textContent = "Acertou em cheio! O universo tech tá contigo!";
        $("prize-progress-fill").style.width =
            ((currentQuestionIndex + 1) / questions.length * 100) + "%";

        // Tempo maior para dar tempo de ler a explicação
        questionTimeout = setTimeout(() => {
            questionTimeout = null;
            if (gameEnded) return;

            if (currentQuestionIndex === questions.length - 1) {
                endGame(true, prizes[prizes.length - 1]);
            } else {
                currentQuestionIndex++;
                loadQuestion();
            }
        }, 3200);

    } else {
        // ===== ERROU =====
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
        }, 1800);
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

    // Mostra o nome do jogador na tela final
    if ($("end-player-name")) {
        $("end-player-name").textContent = playerName;
    }

    if (victory) {
        $("prize-progress-fill").style.width = "100%";
        $("end-title").textContent = "Mestre Tech!";
        $("end-message").textContent =
            "Você acertou as dez perguntas e conquistou o grande prêmio!";
        $("end-questions").textContent = "10/10";
    } else if (stopped) {
        $("end-title").textContent = "Retirada estratégica!";
        $("end-message").textContent =
            "Você decidiu parar e garantir parte do prêmio acumulado. Boa estratégia!";
        $("end-questions").textContent = currentQuestionIndex + "/10";
    } else {
        $("end-title").textContent = "Fim de missão!";
        $("end-message").textContent =
            "Uma resposta errada encerrou a missão. Use o que aprendeu e tente novamente!";
        $("end-questions").textContent = (currentQuestionIndex + 1) + "/10";
    }

    $("end-prize").textContent = formatMoney(amount);
}


/* =====================================
   AJUDAS
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

/* Ajuda 1: Limpar Cache (elimina 2 erradas) */
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
    $("answer-feedback").textContent = "⌘ Limpar Cache ativado! Duas alternativas incorretas foram eliminadas.";
}

/* Ajuda 2: Perguntar na Comunidade */
function useForum() {
    if (!helpsAvailable.forum || answerLocked || gameEnded) return;

    consumeHelp("forum");

    const question = questions[currentQuestionIndex];
    const correct = question.correct;

    // 70% de chance de acertar a sugestão
    let suggestedAnswer;
    if (Math.random() < 0.7) {
        suggestedAnswer = correct;
    } else {
        const wrongs = [0, 1, 2, 3].filter(i => i !== correct);
        suggestedAnswer = wrongs[Math.floor(Math.random() * wrongs.length)];
    }

    showHelpModal(
        "Perguntar na Comunidade",
        "A galera da comunidade sugere a alternativa " +
        String.fromCharCode(65 + suggestedAnswer) +
        ") " + question.options[suggestedAnswer] +
        ".\n\nLembre-se: a sugestão pode estar errada!"
    );
}

/* Ajuda 3: Consultar o Expert */
function useSenior() {
    if (!helpsAvailable.senior || answerLocked || gameEnded) return;

    consumeHelp("senior");

    const question = questions[currentQuestionIndex];

    showHelpModal(
        "Consultar o Expert",
        "O Expert disse que a resposta correta é:\n\n" +
        String.fromCharCode(65 + question.correct) +
        ") " + question.options[question.correct] + "."
    );
}


/* =====================================
   FUNDO ANIMADO DE ESTRELAS
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
