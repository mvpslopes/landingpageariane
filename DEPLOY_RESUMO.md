# 🚀 Resumo Rápido - Deploy na Hostinger

## ✅ Build Pronto!

O build de produção já foi criado na pasta `dist/`. 

## 📦 Arquivos para Upload

Faça upload de **TODOS** os arquivos da pasta `dist/` para a pasta `public_html` na Hostinger:

```
dist/
├── index.html          ← Upload para public_html/
├── assets/             ← Upload completa para public_html/assets/
├── clientes/           ← Upload completa para public_html/clientes/
└── .htaccess           ← Upload para public_html/ (já criado na raiz do projeto)
```

## ⚙️ Configuração Importante

### Variável de Ambiente

**ANTES de fazer o build**, você precisa configurar a URL do Google Apps Script:

1. Crie um arquivo `.env` na raiz do projeto:
```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_SCRIPT_ID/exec
```

2. Refaça o build:
```bash
npm run build
```

3. Faça upload novamente dos arquivos da pasta `dist/`

### Alternativa (se não conseguir usar .env)

Se a Hostinger não permitir variáveis de ambiente, edite diretamente o código:

1. Edite `src/services/googleSheets.ts`
2. Substitua a linha 48 por:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/SEU_SCRIPT_ID/exec';
   ```
3. Refaça o build e faça upload

## 📋 Checklist Rápido

- [ ] Configurar `.env` com `VITE_GOOGLE_SCRIPT_URL`
- [ ] Executar `npm run build`
- [ ] Fazer upload de TODOS os arquivos de `dist/` para `public_html/`
- [ ] Fazer upload do `.htaccess` para `public_html/`
- [ ] Configurar permissões (644 para arquivos, 755 para pastas)
- [ ] Testar o site no navegador
- [ ] Testar o formulário de diagnóstico
- [ ] Verificar se os dados estão sendo salvos no Google Sheets

## 📖 Documentação Completa

Para instruções detalhadas, consulte: `HOSTINGER_DEPLOY.md`

---

**Dica:** Sempre faça backup antes de fazer upload!

