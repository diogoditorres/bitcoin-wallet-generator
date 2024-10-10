const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');

// Incluindo bip32 através de bitcoinjs-lib
const { BIP32Factory } = require('bip32');
const ecc = require('tiny-secp256k1');

// Inicializa o BIP32 usando tiny-secp256k1
const bip32 = BIP32Factory(ecc);

// Função para criar uma nova carteira de Bitcoin
async function createBitcoinWallet() {
  // Gerar uma frase mnemônica (BIP39)
  const mnemonic = bip39.generateMnemonic();
  console.log("Frase mnemônica:", mnemonic);

  // Converter a frase mnemônica em uma seed
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const root = bip32.fromSeed(seed, bitcoin.networks.bitcoin);

  // Derivar a conta (m/44'/0'/0'/0/0) no caminho BIP44
  const path = `m/44'/0'/0'/0/0`;
  const account = root.derivePath(path);
  const { address } = bitcoin.payments.p2pkh({
    pubkey: account.publicKey,
    network: bitcoin.networks.bitcoin,
  });

  console.log("Endereço da carteira:", address);
  console.log("Chave privada:", account.toWIF());
}

createBitcoinWallet();
