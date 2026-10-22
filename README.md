# Umemai Labs

**Ideias em movimento. Código em construção.**

Site estático da Umemai Labs, laboratório independente de tecnologia para apresentar projetos, experimentos e registros de desenvolvimento.

## O que está incluído

- Página inicial com destaques e identidade visual própria.
- Catálogo de projetos com busca e filtros funcionais.
- Página de experimentos com detalhes expansíveis.
- Logs de desenvolvimento.
- Open Code com links para os repositórios.
- Página Sobre, página 404 e logo vetorial SVG.
- Tema claro/escuro com preferência salva localmente.
- Menu mobile, foco de teclado e suporte a movimento reduzido.
- Metadados básicos de SEO, documentação e testes locais.

## Tecnologias

HTML semântico, CSS responsivo, JavaScript sem dependências e SVG. O Google Fonts é carregado externamente; fontes de sistema servem como fallback.

## Executar localmente

Abra `index.html` no navegador ou rode, na raiz do projeto:

```bash
python -m http.server 8000
```

Depois visite `http://localhost:8000`.

## Publicar no GitHub Pages

1. Faça commit dos arquivos em uma branch de desenvolvimento.
2. Rode `python tests/test_site.py` e faça a revisão manual descrita em `docs/TESTES.md`.
3. Abra um Pull Request para `main` e revise as alterações.
4. Em **Settings → Pages**, selecione a branch e a pasta de publicação corretas.
5. Confira o endereço publicado e HTTPS antes de divulgar.

O site é estático e não exige etapa de build. Os caminhos internos são relativos para facilitar a publicação em GitHub Pages.

## Editar conteúdo

- `projects.html`: projetos e filtros.
- `experiments.html`: experimentos.
- `logs.html`: registros.
- `about.html`: propósito e princípios.
- `assets/css/styles.css`: visual global.
- `assets/js/main.js`: interações.
- `assets/logo.svg`: identidade vetorial.

Os projetos e logs são conteúdo inicial demonstrativo. Atualize descrições e status para refletir apenas trabalho realmente realizado.

## Privacidade e segurança

Não coloque tokens, senhas, chaves privadas ou dados pessoais sensíveis em arquivos públicos. O site não tem contas, analytics ou formulário de contato. A preferência de tema é armazenada localmente. Se adicionar formulário, conecte um serviço confiável e informe como os dados serão tratados.

## Licença

O arquivo `LICENSE` contém um modelo MIT. Confirme que deseja aplicar essa licença e revise o detentor dos direitos antes de publicar.
