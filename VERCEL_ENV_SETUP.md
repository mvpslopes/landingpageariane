# Configuração de Variáveis de Ambiente no Vercel

## Passo a Passo

### 1. Acesse o Painel do Vercel
- Vá para https://vercel.com
- Faça login na sua conta

### 2. Selecione seu Projeto
- Clique no projeto "LandingAriane2" (ou o nome do seu projeto)

### 3. Acesse as Configurações
- Clique na aba **"Settings"** (Configurações)
- No menu lateral, clique em **"Environment Variables"** (Variáveis de Ambiente)

### 4. Adicione a Variável
- Clique no botão **"Add New"** ou **"Add"**
- Preencha os campos:
  - **Name (Nome)**: `VITE_GOOGLE_SCRIPT_URL`
  - **Value (Valor)**: `https://script.google.com/macros/s/AKfycbxLLl9yUekts5C22QON7oi-VhD4w7fNVxmhVhvkm_p4xDB5HY0nkJxuYh5IGPl1TJlw7g/exec`
  - **Environments (Ambientes)**: 
    - ✅ Production (Produção)
    - ✅ Preview (Visualização)
    - ✅ Development (Desenvolvimento)
- Clique em **"Save"** (Salvar)

### 5. Faça um Novo Deploy
- Após salvar, você precisa fazer um novo deploy para que a variável seja aplicada
- Vá para a aba **"Deployments"**
- Clique nos três pontos (⋯) do último deploy
- Selecione **"Redeploy"** (Reimplantar)
- Ou faça um novo commit e push para o repositório

## Verificação

Após o deploy, você pode verificar se a variável está funcionando:
1. Acesse o site em produção
2. Faça um teste do diagnóstico
3. Verifique se os dados aparecem na planilha do Google Sheets

## Importante

⚠️ **Nunca compartilhe ou commite o arquivo `.env` no repositório Git!**
- O arquivo `.env` deve estar no `.gitignore`
- As variáveis sensíveis devem ser configuradas apenas no painel do Vercel

## Variável Configurada

```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxLLl9yUekts5C22QON7oi-VhD4w7fNVxmhVhvkm_p4xDB5HY0nkJxuYh5IGPl1TJlw7g/exec
```

