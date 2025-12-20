/**
 * Google Apps Script para receber dados do diagnóstico
 * 
 * INSTRUÇÕES:
 * 1. Substitua 'SEU_SPREADSHEET_ID' pelo ID da sua planilha
 * 2. O ID está na URL: https://docs.google.com/spreadsheets/d/SEU_SPREADSHEET_ID/edit
 * 3. Salve o projeto (Ctrl+S)
 * 4. Publique como Web App (veja instruções no GOOGLE_APPS_SCRIPT.md)
 */

function doPost(e) {
  try {
    // ID da planilha: Respostas-Diagnostico-Inicial
    const SPREADSHEET_ID = '1T_IRyH8IzvSbZSKAnECq9RCtfZrN9s3noYwn_-RVPHM';
    
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Preparar os dados para inserir na planilha
    const row = [
      new Date(),                                    // Data/Hora
      data.nome || '',                               // Nome
      data.whatsapp || '',                           // WhatsApp
      data.score || 0,                               // Score
      data.nivel || '',                              // Nível
      JSON.stringify(data.respostas || {}),         // Respostas (JSON)
      (data.recomendacoes || []).join(' | ')        // Recomendações (separadas por |)
    ];
    
    // Adicionar a linha na planilha
    sheet.appendRow(row);
    
    // Retornar sucesso
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Log do erro para debug
    Logger.log('Erro ao salvar dados: ' + error.toString());
    Logger.log('Stack trace: ' + error.stack);
    
    // Retornar erro
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Função de teste (opcional)
 * Use esta função para testar se o script está funcionando
 */
function test() {
  const testData = {
    nome: 'Teste de Integração',
    whatsapp: '5521999999999',
    score: 75,
    nivel: 'Estruturada',
    respostas: { 
      prazos: 100, 
      registro: 70, 
      gestao: 80, 
      comunicacao: 50 
    },
    recomendacoes: [
      'Recomendação de teste 1', 
      'Recomendação de teste 2'
    ]
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log('Resultado do teste:');
  Logger.log(result.getContent());
}

