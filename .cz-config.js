module.exports = {
  types: [
    {
      value: 'wip',
      name: 'WIP:      Work in progress'
    },
    {
      value: 'feat',
      name: 'feat:     A new feature'
    },
    {
      value: 'fix',
      name: 'fix:      A bug fix'
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'docs',
      name: 'docs:     Documentation only changes'
    },
    {
      value: 'test',
      name: 'test:     Add missing tests or correcting existing tests'
    },
    {
      value: 'chore',
      name:
        "chore:    Changes that don't modify src or test files. Such as updating build tasks, package manager"
    },
    {
      value: 'style',
      name:
        'style:    Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: 'revert',
      name: 'revert:   Revert to a commit'
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance'
    }
  ],

  scopes: [
    'BaseButton',
    'Button',
    'CollapseTransition',
    'ConfigProvider',
    'CSSTransition',
    'icon',
    'locale',
    'Popconfirm',
    'Popover',
    'Popper',
    'Portal',
    'Ripple',
    'Row',
    'style',
    'Tooltip',
    'Transition',
    'TransitionGroup',
  ],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']
}