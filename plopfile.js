module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
      {
        type: 'list',
        name: 'dir',
        message: 'which dir?',
        choices: [
          { name: 'atoms', value: 'atoms' },
          { name: 'molecules', value: 'molecules' },
          { name: 'organisms', value: 'organisms' },
          { name: 'templates', value: 'templates' },
          { name: 'pages', value: 'pages' },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{dir}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{dir}}/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'templates/Component.module.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{dir}}/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{dir}}/{{pascalCase name}}/{{pascalCase name}}PropTypes.ts',
        templateFile: 'templates/ComponentPropTypes.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{dir}}/index.ts',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/components/{{dir}}/index.ts',
        separator: '',
        template: `export { default as {{pascalCase name}} } from './{{pascalCase name}}';\n`,
        unique: true,
      },
    ],
  });
};
