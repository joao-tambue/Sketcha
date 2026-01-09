# Canvas — Editor de Desenho Simples

Uma aplicação web leve para desenhar em um canvas usando ferramentas básicas (lápis, borracha, texto). Projetada como um pequeno editor de desenho baseado em JavaScript para aprendizado e integração em projetos front-end.

**Principais características**
- Desenho com `pencil` (pressão do mouse/arrasto)
- Borracha (`eraser`) para remover traços
- Inserção de texto (`text`) diretamente sobre o canvas
- Arquitetura modular em `src/` com separação de `core`, `tools` e `ui`

**Quando usar este projeto**
- Prototipagem rápida de ferramentas de desenho em aplicações web
- Base para implementar anotações, whiteboards colaborativos ou editores gráficos simples
- Exemplo didático para aprender manipulação de `canvas` e organização de ferramentas

## Estrutura do repositório

- `index.html` — entrada da aplicação (UI mínima).
- `index.js` — bootstrap / inicialização no root.
- `style.css` — estilos básicos.
- `src/` — código-fonte principal:
  - `core/` — `canvas.js`, `renderer.js`, `state.js` (lógica do canvas e renderização)
  - `tools/` — implementações de ferramentas (`pencil.tool.js`, `eraser.tool.js`, `text.tool.js`)
  - `ui/` — componentes de interface (por exemplo, `toolbar.js`)
  - `utils/` — utilitários (por exemplo, `mouse.js`)

## Como começar

Pré-requisitos:
- Navegador moderno com suporte a HTML5 Canvas.
- (Opcional) Node.js para rodar um servidor local durante desenvolvimento.

Passos rápidos:

1. Clone o repositório:

```bash
git clone https://github.com/joao-tambue/Sketcha.git
```

2. Abrir localmente (duas opções):

- Abrir `index.html` diretamente no navegador (suficiente para testes locais simples).
- Rodar um servidor estático (recomendado para evitar limitações de CORS e comportamento de módulos):

```bash

# usando http-server (npm)
npx http-server . -p 8000
```

Em seguida, acesse `http://localhost:8000` e interaja com a interface.

## Uso básico

- Selecione uma ferramenta na barra de ferramentas (lápis, borracha, texto).
- Clique e arraste para desenhar com o `pencil`.
- Clique para inserir texto com a ferramenta `text`.

Dica de desenvolvimento: abra as ferramentas em `src/tools/` e o core em `src/core/` para compreender o fluxo de eventos e renderização.

## Desenvolvimento e contribuição

Contribuições são bem-vindas. Para contribuir:

1. Abra uma issue descrevendo a proposta ou bug.
2. Crie um branch com `feature/<nome>` ou `fix/<descrição>`.
3. Faça um pull request com uma descrição clara das mudanças.

Para regras e padrão de contribuição, veja `docs/CONTRIBUTING.md` se existir, ou adicione um arquivo `CONTRIBUTING.md` com suas diretrizes.

## Onde obter ajuda

- Abra uma issue no repositório para bugs e solicitações de recursos.
- Para perguntas rápidas, adicione um comentário na issue ou PR relacionado.

## Licença

Ver o arquivo `LICENSE` na raiz do repositório para detalhes da licença.

---

Se quiser, posso também:
- Adicionar badges (build, versão, licença).
- Criar um `CONTRIBUTING.md` mínimo e um exemplo de `issue` template.
