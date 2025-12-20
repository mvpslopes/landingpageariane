# Configuração do Google Sheets para Salvar Diagnósticos

Este documento explica como configurar o Google Sheets para receber automaticamente os dados dos diagnósticos.

## Passo a Passo

### 1. Criar uma Planilha no Google Drive

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Na primeira linha, adicione os cabeçalhos:
   - `Data/Hora`
   - `Nome`
   - `WhatsApp`
   - `Score`
   - `Nível`
   - `Respostas`
   - `Recomendações`

### 2. Criar um Google Apps Script

1. Na planilha, vá em **Extensões** → **Apps Script**
2. Cole o código abaixo:

```javascript
function doPost(e) {
  try {
    // Substitua 'SEU_SPREADSHEET_ID' pelo ID da sua planilha
    // O ID está na URL: https://docs.google.com/spreadsheets/d/SEU_SPREADSHEET_ID/edit
    const sheet = SpreadsheetApp.openById('SEU_SPREADSHEET_ID').getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const row = [
      new Date(),
      data.nome || '',
      data.whatsapp || '',
      data.score || 0,
      data.nivel || '',
      JSON.stringify(data.respostas || {}),
      (data.recomendacoes || []).join(' | ')
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Erro: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Função de teste (opcional)
function test() {
  const testData = {
    nome: 'Teste',
    whatsapp: '5521999999999',
    score: 75,
    nivel: 'Estruturada',
    respostas: { prazos: 100, registro: 70 },
    recomendacoes: ['Recomendação 1', 'Recomendação 2']
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
```

3. **IMPORTANTE**: Substitua `'SEU_SPREADSHEET_ID'` pelo ID real da sua planilha
4. Salve o projeto (Ctrl+S ou Cmd+S)

### 3. Publicar como Web App

1. Clique em **Implantar** → **Nova implantação**
2. Clique no ícone de engrenagem ⚙️ ao lado de "Selecionar tipo" e escolha **Aplicativo da Web**
3. Configure:
   - **Descrição**: "API para receber diagnósticos"
   - **Executar como**: "Eu"
   - **Quem tem acesso**: "Qualquer pessoa" (necessário para funcionar)
4. Clique em **Implantar**
5. **Copie a URL do Web App** que será gerada (algo como: `https://script.google.com/macros/s/...`)

### 4. Configurar no Projeto

1. Crie um arquivo `.env` na raiz do projeto (se não existir)
2. Adicione a variável:

```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SUA_URL_AQUI/exec
```

3. Reinicie o servidor de desenvolvimento (`npm run dev`)

## Segurança e LGPD

### Boas Práticas Implementadas:

✅ **Consentimento Explícito**: O usuário deve aceitar o uso dos dados antes de prosseguir
✅ **Transparência**: Informamos claramente como os dados serão usados
✅ **Minimização**: Coletamos apenas os dados necessários
✅ **Armazenamento Seguro**: Dados armazenados no Google Drive (conforme políticas do Google)

### Recomendações Adicionais:

1. **Acesso à Planilha**: Configure as permissões da planilha para que apenas você tenha acesso
2. **Backup**: Faça backups regulares da planilha
3. **Política de Privacidade**: Adicione um link para sua política de privacidade completa no site
4. **Retenção de Dados**: Defina um período de retenção e exclua dados antigos periodicamente

## Testando

Após configurar, você pode testar:

1. Execute o diagnóstico no site
2. Preencha o formulário
3. Complete o diagnóstico
4. Verifique se os dados aparecem na planilha

## Solução de Problemas

### Dados não estão sendo salvos

1. Verifique se a URL do Web App está correta no `.env`
2. Verifique se o Web App está publicado e acessível publicamente
3. Abra o console do navegador (F12) para ver erros
4. Verifique os logs do Apps Script (Execuções → Ver logs)

### Erro de CORS

O código usa `mode: 'no-cors'` para evitar problemas de CORS. Se precisar de confirmação de salvamento, considere usar um proxy ou configurar CORS no Apps Script.

