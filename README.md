# Personal Fight Assistant - Dual Timer Neon

Um assistente de tempo profissional desenvolvido especificamente para **Professores de Personal Fight**. O foco deste projeto é permitir que o treinador gerencie o tempo total da aula simultaneamente à execução de rounds técnicos ou funcionais, tudo em uma única tela.

## 🥊 O Problema que Resolve
No Personal Fight, o treinador muitas vezes perde a noção do tempo total da aula enquanto foca na intensidade dos rounds. Este cronômetro duplo elimina a necessidade de alternar entre aplicativos ou usar dois relógios físicos.

## 🚀 Estrutura do Timer

### 1. Cronômetro de Aula (Superior - Vermelho)
- **Objetivo**: Marcar o tempo total da sessão de treino ou grandes blocos (ex: 15 min de aquecimento).
- **Flexibilidade**: Permite configurar rounds se o professor desejar dividir a aula em partes (ex: Parte Técnica, Sparring, Alongamento).

### 2. Cronômetro de Rounds (Inferior - Azul)
- **Objetivo**: Gestão de rounds de combate, sequências técnicas ou circuitos funcionais.
- **Configuração**: Controle preciso de tempo de esforço (Work) e recuperação (Rest).

## ✨ Funcionalidades Principais

- **Operação Independente**: Inicie, pause ou resete o tempo de aula sem interferir nos rounds de luta.
- **Feedback Visual de Alta Visibilidade**: Interface "Neon Dark" com anéis de progresso circulares, ideal para visualização rápida à distância durante a manopla.
- **Gongo Digital**: Som de gongo realista gerado via código (Web Audio API), garantindo que o tempo de descanso e início de round sejam respeitados.
- **Modo Descanso Dinâmico**: A interface muda para cores neutras/brancas durante o descanso para evitar confusão visual.

## 📖 Como Utilizar

1. **Preparar a Aula**: No timer superior, configure o tempo total da aula (ex: 1 round de 60 minutos).
2. **Preparar o Treino**: No timer inferior, configure os rounds específicos (ex: 10 rounds de 3 min por 1 min de descanso).
3. **Durante a Aula**:
   - Dê o play no timer de Aula assim que o aluno chegar.
   - Controle o ritmo do treino no timer de Rounds.

## 🛠️ Tecnologias

- **Vanilla JS & Tailwind CSS**: Para máxima velocidade e zero dependência de internet após o carregamento inicial.
- **SVG Progress**: Indicadores visuais precisos.
- **Web Audio API**: Som sintetizado de baixa latência.

---

*Otimizado para tablets e celulares em suporte de parede.*

**Desenvolvido para treinadores que buscam profissionalismo e controle total da aula.**
