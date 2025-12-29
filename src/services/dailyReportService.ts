/**
 * Serviço para salvar registros diários de atendimento no Google Sheets
 */

import * as XLSX from 'xlsx';

export interface DailyReport {
  data: string; // Data do registro
  colaboradora: string; // Nome da colaboradora
  numAtendimentos: string; // Faixa de atendimentos
  todosClientesRespondidos: boolean;
  clientesPendentes: string; // Motivo se houver
  ocorrencias: {
    clienteIrritado: boolean;
    cobrancaIndevida: boolean;
    questionamentoFinanceiro: boolean;
    contestacaoRegras: boolean;
    escaladoGestao: boolean;
    nenhumaCritica: boolean;
  };
  suporteGestao: boolean;
  suporteColegas: boolean;
  motivoSuporte: string;
  autoavaliacao: string; // Excelente, Bom, Regular, Precisa melhorar
  compromissosAmanha: string;
  declaracao: boolean;
}

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

export async function saveDailyReport(report: DailyReport): Promise<boolean> {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.trim() === '') {
    console.warn('Google Script URL não configurada. Dados não serão salvos.');
    // Em modo de demonstração, salvar no localStorage
    saveToLocalStorage(report);
    return true;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tipo: 'registro_diario',
          ...report,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      
      // Também salvar no localStorage como backup
      saveToLocalStorage(report);
      
      return true;
    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        console.warn('Timeout ao salvar no Google Sheets. Dados salvos localmente.');
        saveToLocalStorage(report);
        return true;
      }
      
      console.error('Erro na requisição ao Google Sheets:', fetchError);
      saveToLocalStorage(report);
      return true; // Retorna true mesmo com erro, pois salvou localmente
    }
  } catch (error) {
    console.error('Erro ao salvar registro diário:', error);
    saveToLocalStorage(report);
    return true;
  }
}

function saveToLocalStorage(report: DailyReport) {
  try {
    const reports = JSON.parse(localStorage.getItem('dailyReports') || '[]');
    reports.push({
      ...report,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('dailyReports', JSON.stringify(reports));
  } catch (error) {
    console.error('Erro ao salvar no localStorage:', error);
  }
}

export function getDailyReports(): any[] {
  try {
    const reports = JSON.parse(localStorage.getItem('dailyReports') || '[]');
    
    // Se não houver registros, inicializar com dados mockados
    if (reports.length === 0) {
      const mockReports = generateMockReports();
      localStorage.setItem('dailyReports', JSON.stringify(mockReports));
      return mockReports;
    }
    
    return reports;
  } catch (error) {
    console.error('Erro ao ler do localStorage:', error);
    return [];
  }
}

function generateMockReports(): any[] {
  const colaboradoras = ['Ariane', 'Amanda', 'Tayná', 'Thauana', 'Marcella', 'Erika', 'Michelle'];
  const numAtendimentosOptions = ['Até 10', '11 a 20', '21 a 30', 'Acima de 30'];
  const autoavaliacaoOptions = ['Excelente', 'Bom', 'Regular', 'Precisa melhorar'];
  
  const mockReports: any[] = [];
  const hoje = new Date();
  
  // Gerar registros para os últimos 15 dias
  for (let i = 0; i < 15; i++) {
    const data = new Date(hoje);
    data.setDate(data.getDate() - i);
    
    // Cada dia, algumas colaboradoras fazem registro
    const numColaboradoras = Math.floor(Math.random() * 4) + 2; // 2 a 5 colaboradoras por dia
    const colaboradorasDoDia = colaboradoras
      .sort(() => Math.random() - 0.5)
      .slice(0, numColaboradoras);
    
    colaboradorasDoDia.forEach((colaboradora) => {
      const temPendentes = Math.random() > 0.6;
      const temOcorrencias = Math.random() > 0.7;
      const precisaSuporte = Math.random() > 0.8;
      
      const ocorrencias = {
        clienteIrritado: temOcorrencias && Math.random() > 0.5,
        cobrancaIndevida: temOcorrencias && Math.random() > 0.5,
        questionamentoFinanceiro: temOcorrencias && Math.random() > 0.5,
        contestacaoRegras: temOcorrencias && Math.random() > 0.5,
        escaladoGestao: temOcorrencias && Math.random() > 0.5,
        nenhumaCritica: !temOcorrencias,
      };
      
      mockReports.push({
        id: `mock-${Date.now()}-${Math.random()}`,
        data: data.toLocaleDateString('pt-BR'),
        timestamp: data.toISOString(),
        colaboradora,
        numAtendimentos: numAtendimentosOptions[Math.floor(Math.random() * numAtendimentosOptions.length)],
        todosClientesRespondidos: !temPendentes,
        clientesPendentes: temPendentes ? 'Cliente aguardando retorno sobre documentação' : '',
        ocorrencias,
        suporteGestao: precisaSuporte && Math.random() > 0.5,
        suporteColegas: precisaSuporte && Math.random() > 0.5,
        motivoSuporte: precisaSuporte ? 'Dúvida sobre processo específico' : '',
        autoavaliacao: autoavaliacaoOptions[Math.floor(Math.random() * autoavaliacaoOptions.length)],
        compromissosAmanha: Math.random() > 0.5 ? 'Retornar ligação do cliente X e enviar documentos pendentes' : '',
        declaracao: true,
      });
    });
  }
  
  return mockReports.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

export function exportToExcel(reports: any[]): void {
  try {
    // Converter dados para array de objetos
    const data = reports.map((report) => {
      const ocorrencias = report.ocorrencias || {};
      return {
        'Data': report.data || '',
        'Colaboradora': report.colaboradora || '',
        'Nº Atendimentos': report.numAtendimentos || '',
        'Todos Clientes Respondidos': report.todosClientesRespondidos ? 'Sim' : 'Não',
        'Clientes Pendentes': report.clientesPendentes || '',
        'Cliente Irritado': ocorrencias.clienteIrritado ? 'Sim' : 'Não',
        'Cobrança Indevida': ocorrencias.cobrancaIndevida ? 'Sim' : 'Não',
        'Questionamento Financeiro': ocorrencias.questionamentoFinanceiro ? 'Sim' : 'Não',
        'Contestação Regras': ocorrencias.contestacaoRegras ? 'Sim' : 'Não',
        'Escalado Gestão': ocorrencias.escaladoGestao ? 'Sim' : 'Não',
        'Nenhuma Crítica': ocorrencias.nenhumaCritica ? 'Sim' : 'Não',
        'Suporte Gestão': report.suporteGestao ? 'Sim' : 'Não',
        'Suporte Colegas': report.suporteColegas ? 'Sim' : 'Não',
        'Motivo Suporte': report.motivoSuporte || '',
        'Autoavaliação': report.autoavaliacao || '',
        'Compromissos Amanhã': report.compromissosAmanha || '',
        'Data/Hora Registro': report.timestamp ? new Date(report.timestamp).toLocaleString('pt-BR') : '',
      };
    });
    
    // Criar workbook e worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    
    // Ajustar largura das colunas
    const columnWidths = [
      { wch: 12 }, // Data
      { wch: 15 }, // Colaboradora
      { wch: 18 }, // Nº Atendimentos
      { wch: 25 }, // Todos Clientes Respondidos
      { wch: 30 }, // Clientes Pendentes
      { wch: 15 }, // Cliente Irritado
      { wch: 18 }, // Cobrança Indevida
      { wch: 25 }, // Questionamento Financeiro
      { wch: 20 }, // Contestação Regras
      { wch: 15 }, // Escalado Gestão
      { wch: 15 }, // Nenhuma Crítica
      { wch: 15 }, // Suporte Gestão
      { wch: 15 }, // Suporte Colegas
      { wch: 30 }, // Motivo Suporte
      { wch: 15 }, // Autoavaliação
      { wch: 40 }, // Compromissos Amanhã
      { wch: 20 }, // Data/Hora Registro
    ];
    
    worksheet['!cols'] = columnWidths;
    
    // Criar workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Registros de Atendimento');
    
    // Gerar arquivo XLSX
    const fileName = `registros_atendimento_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  } catch (error) {
    console.error('Erro ao exportar para Excel:', error);
    alert('Erro ao exportar o arquivo. Tente novamente.');
  }
}

