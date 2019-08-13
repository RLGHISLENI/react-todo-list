# react-todo-list
Aplicação React simples utilizando Redux para controle de estado

# Pré-requisitos (Ambiente React-Native):
	Node, Python2, JDK e SDK do Android (npm/yarn)

1) Instale o Chocolatey (Gerenciador de pacotes do windows):
	https://chocolatey.org/
    Depois de instado (execute o prompt como administrador):        
		* Se já tiver o NodeJs e Java instalado, DESINSTALAR
		cinst --force -y nodejs-lts
        cinst --force -y python2 jdk8
		cinst --force -y install yarn

2) Instale/configure SDK Android:
	Download sdk puro:
    	https://developer.android.com/studio/#downloads
        Baixe o opção windows na seção (Command line tools only)
        Salve na pasta C:\Android\Sdk
        Painel de Controle do Windows
	    	Abra “Sistema e Segurança” -> “Configurações avançadas do sistema”
        	Selecione “Variáveis de ambiente”
            Clique no botão “Nova variável de ambiente”, 
            Indique o nome da variável como ANDROID_HOME
            Adicione o caminho utilizado acima (Ex: C:\Android\Sdk).
            Clique na variável PATH e então em "Editar".
	            Add novos caminhos no fim da lista:
    	            %ANDROID_HOME%\platform-tools
                    %ANDROID_HOME%\tools
                Abra o prompt de comando e execute:
                    C:\Android\Sdk\tools\bin\sdkmanager  "platform-tools" "platforms;android-27" "build-tools;27.0.3"
                    Aceite os termos

3) CLI do Native via NPM:
	npm install -g react-native-cli (Baixar CLI)
    react-native -h (Só pra ver se instalou)

4) Verificar celular na usb
	adb devices

5) Criar projeto e rodar:
	npx create-react-app my-app
	cd my-app
	npm start (ou yarn start)