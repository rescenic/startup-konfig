export const konfigLintYamlTemplate = `name: konfig-lint-openapi-spec
on: # rebuild any PRs and main branch changes
  pull_request:
  push:
    branches:
      - {{ productionBranch }}
jobs:
  konfig-lint-openapi-spec: # make sure spec passes konfig lint
    runs-on: ubuntu-latest
    env:
      CLI_VERSION: 0.0.111
    steps:
      - uses: actions/checkout@v3
      - name: Cache node_modules
        id: cache-npm
        uses: actions/cache@v3
        with:
          # npm cache files are stored in "~/.npm" on Linux/macOS
          path: ~/.npm
          key: $\\{{ runner.os }}-build-$\\{{ env.CLI_VERSION }}
      - name: Install Konfig CLI
        run: npm install -g konfig-cli@$CLI_VERSION
      - name: Initialize Linting Rules
        run: konfig init -s
      - name: Lint OpenAPI Spec
        run: konfig lint {{ relativePathToSpec }}
`
