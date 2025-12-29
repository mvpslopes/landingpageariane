# Guia de Deploy na Hostinger

Este guia explica como fazer o deploy do site React/Vite na Hostinger.

## 📋 Pré-requisitos

1. Conta na Hostinger com acesso ao painel de controle (hPanel)
2. Acesso FTP ou File Manager no hPanel
3. Node.js instalado localmente (para fazer o build)

## 🚀 Passo a Passo

### 1. Fazer o Build de Produção

No terminal, na pasta do projeto, execute:

```bash
npm run build
```

Isso criará uma pasta `dist` com todos os arquivos otimizados para produção.

### 2. Configurar Variáveis de Ambiente

**IMPORTANTE:** Você precisa configurar a variável de ambiente `VITE_GOOGLE_SCRIPT_URL` na Hostinger.

#### Opção A: Usando arquivo .env (Recomendado)

1. Crie um arquivo `.env` na raiz do projeto com:
```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_SCRIPT_ID/exec
```

2. Refaça o build:
```bash
npm run build
```

#### Opção B: Configurar no servidor (Alternativa)

Se a Hostinger permitir variáveis de ambiente no hPanel, configure lá. Caso contrário, você precisará editar o código diretamente (não recomendado).

### 3. Acessar o File Manager ou FTP

#### Via File Manager (hPanel):
1. Acesse o hPanel da Hostinger
2. Vá em **File Manager**
3. Navegue até a pasta `public_html` (ou a pasta do seu domínio)

#### Via FTP:
1. Use um cliente FTP (FileZilla, WinSCP, etc.)
2. Conecte usando as credenciais FTP fornecidas pela Hostinger
3. Navegue até `public_html`

### 4. Fazer Upload dos Arquivos

**IMPORTANTE:** Antes de fazer upload, **faça backup** dos arquivos existentes (se houver).

1. **Limpe a pasta `public_html`** (ou a pasta do seu domínio), exceto:
   - Arquivos de configuração importantes
   - `.htaccess` existente (se houver, faça backup primeiro)

2. **Faça upload de TODOS os arquivos da pasta `dist`** para `public_html`:
   - Todos os arquivos `.js`
   - Todos os arquivos `.css`
   - A pasta `assets/` completa
   - O arquivo `index.html`
   - Todas as imagens e recursos estáticos

3. **Faça upload do arquivo `.htaccess`** (este arquivo está na raiz do projeto)

### 5. Verificar Estrutura de Pastas

Após o upload, a estrutura deve ficar assim:

```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [outros arquivos]
├── clientes/ (se houver imagens de clientes)
└── [outras pastas de imagens]
```

### 6. Configurar Permissões

No File Manager da Hostinger:
1. Selecione todos os arquivos e pastas
2. Clique em **Permissions** (Permissões)
3. Configure:
   - Arquivos: `644`
   - Pastas: `755`

### 7. Testar o Site

1. Acesse seu domínio no navegador
2. Verifique se o site carrega corretamente
3. Teste todas as funcionalidades:
   - Navegação entre seções
   - Formulário de diagnóstico
   - Envio de dados para Google Sheets
   - Botão do WhatsApp

## 🔧 Configurações Adicionais

### Configurar Domínio Personalizado

Se ainda não configurou:
1. No hPanel, vá em **Domains**
2. Adicione ou configure seu domínio
3. Aponte para a pasta `public_html`

### SSL/HTTPS

A Hostinger geralmente fornece SSL gratuito:
1. No hPanel, vá em **SSL**
2. Ative o certificado SSL para seu domínio
3. Force HTTPS (geralmente já vem ativado)

### Configurar Variáveis de Ambiente (Alternativa)

Se a Hostinger não suportar variáveis de ambiente diretamente:

1. Edite o arquivo `src/services/googleSheets.ts` localmente
2. Substitua a linha:
   ```typescript
   const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';
   ```
   Por:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/SEU_SCRIPT_ID/exec';
   ```
3. Refaça o build e faça upload novamente

⚠️ **Nota:** Esta não é a melhor prática, mas funciona se não houver outra opção.

## 🐛 Solução de Problemas

### Site não carrega / Erro 404

- Verifique se o arquivo `.htaccess` está na pasta `public_html`
- Verifique se o `index.html` está na raiz de `public_html`
- Verifique as permissões dos arquivos (644 para arquivos, 755 para pastas)

### Imagens não aparecem

- Verifique se todas as pastas de imagens foram enviadas
- Verifique os caminhos das imagens no código
- Limpe o cache do navegador (Ctrl+F5)

### Erro ao salvar no Google Sheets

- Verifique se a variável `VITE_GOOGLE_SCRIPT_URL` está configurada corretamente
- Verifique se o Google Apps Script está publicado como Web App
- Abra o console do navegador (F12) e verifique se há erros

### CSS não está aplicando

- Limpe o cache do navegador
- Verifique se os arquivos CSS foram enviados na pasta `assets/`
- Verifique se o caminho no `index.html` está correto

## 📝 Checklist Final

- [ ] Build de produção criado (`npm run build`)
- [ ] Variável de ambiente configurada
- [ ] Arquivos da pasta `dist` enviados para `public_html`
- [ ] Arquivo `.htaccess` enviado
- [ ] Permissões configuradas (644/755)
- [ ] Site acessível via domínio
- [ ] SSL/HTTPS ativado
- [ ] Todas as funcionalidades testadas
- [ ] Formulário de diagnóstico funcionando
- [ ] Integração com Google Sheets funcionando

## 🔄 Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código local
2. Execute `npm run build` novamente
3. Faça upload dos novos arquivos da pasta `dist` para `public_html`
4. Substitua os arquivos antigos pelos novos
5. Limpe o cache do navegador e teste

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs de erro no console do navegador (F12)
2. Verifique os logs do servidor no hPanel
3. Entre em contato com o suporte da Hostinger se necessário

---

**Última atualização:** Dezembro 2024

