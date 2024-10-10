# Bitcoin Wallet Generator
Este projeto é um gerador simples de carteiras de Bitcoin, utilizando a biblioteca bitcoinjs-lib para gerar uma frase mnemônica (BIP39), derivar as chaves privadas e públicas, e criar um endereço Bitcoin.

## Funcionalidades
- Geração de frase mnemônica (BIP39).
- Derivação da chave privada e pública (BIP32).
- Geração de um endereço Bitcoin.
- Exibição do endereço Bitcoin e da chave privada em formato WIF.

## Como Funciona
### 1. Geração da Frase Mnemônica (BIP39)
O código gera uma frase mnemônica de 12 palavras que pode ser usada para recuperar sua chave privada em caso de perda.
Exemplo de frase mnemônica gerada:
"sauce they tribe divert supreme endorse faculty life disorder believe gravity sea"

### 2. Conversão da Frase Mnemônica em Seed
A frase mnemônica é convertida em uma seed binária, que é usada para derivar as chaves.

### 3. Derivação da Chave Privada e Chave Pública (BIP32)
A seed é usada para derivar as chaves pública e privada seguindo o caminho padrão m/44'/0'/0'/0/0.

### 4. Geração do Endereço Bitcoin
A chave pública derivada é convertida em um endereço Bitcoin no formato p2pkh (Pay-to-PubKey-Hash).

### 5. Exibição das Informações
O código exibe:
- A frase mnemônica gerada.
- O endereço Bitcoin.
- A chave privada em formato WIF.

## Requisitos
- Node.js
- Bibliotecas bip39 e bitcoinjs-lib

## Instalação
1. Clone este repositório
   git clone https://github.com/diogoditorres/bitcoin-wallet-generator.git
2. Instale as dependências:
   npm install bip39 bitcoinjs-lib
3. Execute o script:
   node bitcoinWallet.js
