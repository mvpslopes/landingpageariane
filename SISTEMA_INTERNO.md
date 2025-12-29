# 📝 Sistema Interno - Registro Diário de Atendimento

## 🎯 Visão Geral

Sistema interno desenvolvido para registro diário de atendimento ao cliente pelas colaboradoras. O sistema permite que cada colaboradora preencha um formulário completo ao final do expediente, registrando informações sobre atendimentos, ocorrências, suporte necessário e autoavaliação.

## 👥 Usuários do Sistema

O sistema possui 7 usuários pré-configurados para demonstração:

| Nome | Email | Senha |
|------|-------|-------|
| Ariane | ariane@assessoria.com | ariane123 |
| Amanda | amanda@assessoria.com | amanda123 |
| Tayná | tayna@assessoria.com | tayna123 |
| Thauana | thauana@assessoria.com | thauana123 |
| Marcella | marcella@assessoria.com | marcella123 |
| Erika | erika@assessoria.com | erika123 |
| Michelle | michelle@assessoria.com | michelle123 |

## 🚀 Como Acessar

1. Acesse: `https://seudominio.com/sistema/login`
2. Faça login com seu email e senha
3. Você será redirecionado para o Dashboard

## 📋 Funcionalidades

### 1. Dashboard
- Visualização de estatísticas pessoais
- Histórico de registros
- Status do registro do dia
- Botão para criar novo registro

### 2. Formulário de Registro Diário

O formulário inclui todas as seções solicitadas:

#### 🔹 Identificação
- Data (preenchida automaticamente)
- Nome da colaboradora (preenchido automaticamente)

#### 🔹 Registro do Dia
- Número de atendimentos realizados (Até 10, 11 a 20, 21 a 30, Acima de 30)

#### 🔹 Retornos e Prazos
- Checkbox: Todos os clientes receberam resposta hoje
- Campo de texto para motivo (se houver pendências)

#### 🔹 Situações de Atenção
- Cliente irritado
- Cobrança indevida
- Questionamento financeiro
- Contestação de regras / contrato
- Situação escalada para a gestão
- Nenhuma situação crítica hoje

#### 🔹 Suporte da Gestão ou de Colegas
- Foi necessário acionar a gestão? (Sim/Não)
- Foi necessário acionar algum colega? (Sim/Não)
- Campo de texto para motivo (se sim)

#### 🔹 Autoavaliação do Atendimento
- Excelente
- Bom
- Regular
- Precisa melhorar

#### 🔹 Compromissos para o Dia Seguinte
- Campo de texto para pendências ou retornos agendados

#### 🔹 Declaração
- Checkbox obrigatório confirmando que seguiu o Manual de Boas Práticas

## 💾 Armazenamento de Dados

### Modo de Demonstração
- Os dados são salvos no **localStorage** do navegador
- Cada colaboradora vê apenas seus próprios registros
- Os dados persistem mesmo após fechar o navegador

### Modo de Produção
- Os dados podem ser salvos no **Google Sheets** (configurável)
- Basta configurar a variável de ambiente `VITE_GOOGLE_SCRIPT_URL`
- Veja `GOOGLE_APPS_SCRIPT.md` para instruções de configuração

## 🔒 Segurança

- Sistema de autenticação com login/senha
- Rotas protegidas (requerem autenticação)
- Sessão mantida no localStorage
- Logout disponível no header do dashboard

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- Desktop
- Tablet
- Mobile

## 🎨 Design

- Interface moderna e profissional
- Cores da marca (bege, marrom, verde-oliva)
- Animações suaves
- Feedback visual claro

## 🔄 Fluxo de Uso

1. **Login**: Acesse `/sistema/login` e faça login
2. **Dashboard**: Visualize estatísticas e histórico
3. **Novo Registro**: Clique em "Novo Registro Diário"
4. **Preencher**: Preencha todos os campos obrigatórios
5. **Salvar**: Clique em "Salvar Registro"
6. **Confirmação**: Veja a mensagem de sucesso
7. **Retorno**: Volta automaticamente ao dashboard

## ⚙️ Configuração Técnica

### Estrutura de Arquivos

```
src/
├── contexts/
│   └── AuthContext.tsx          # Contexto de autenticação
├── pages/
│   ├── Login.tsx                 # Página de login
│   ├── Dashboard.tsx             # Dashboard principal
│   ├── DailyReportForm.tsx       # Formulário de registro
│   └── LandingPage.tsx           # Site público
├── components/
│   └── ProtectedRoute.tsx       # Componente de proteção de rotas
├── services/
│   └── dailyReportService.ts     # Serviço de salvamento
└── AppRouter.tsx                 # Configuração de rotas
```

### Rotas

- `/` - Site público (landing page)
- `/sistema/login` - Página de login
- `/sistema/dashboard` - Dashboard (protegido)
- `/sistema/registro` - Formulário de registro (protegido)

## 🐛 Solução de Problemas

### Não consigo fazer login
- Verifique se está usando o email e senha corretos
- Os emails são case-insensitive
- As senhas são case-sensitive

### Meus registros não aparecem
- Verifique se está logada com a conta correta
- Os registros são filtrados por nome da colaboradora
- Limpe o cache do navegador se necessário

### Erro ao salvar registro
- Verifique se preencheu todos os campos obrigatórios
- Verifique a conexão com a internet
- Os dados são salvos localmente mesmo se houver erro na API

## 📝 Notas Importantes

- ⚠️ **Em produção**, as senhas devem ser criptografadas (hash)
- ⚠️ **Em produção**, implemente autenticação mais robusta (JWT, OAuth, etc.)
- ⚠️ **Em produção**, considere usar um banco de dados real
- ✅ O sistema atual é funcional para **demonstração e apresentação**
- ✅ Todos os dados são salvos localmente como backup

## 🚀 Próximos Passos (Opcional)

Para produção, considere implementar:
- [ ] Criptografia de senhas
- [ ] Autenticação com JWT
- [ ] Banco de dados (PostgreSQL, MySQL, etc.)
- [ ] Painel administrativo para gestão
- [ ] Relatórios e gráficos
- [ ] Exportação de dados (PDF, Excel)
- [ ] Notificações por email
- [ ] Backup automático

---

**Desenvolvido para:** Ariane Andrade Inteligência Agropecuária LTDA  
**Data:** Dezembro 2024

