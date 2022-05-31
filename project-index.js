const getObj = require('./get-obj.js');
const projectIndex = {}

module.exports = projectIndex;

Object.assign(projectIndex, getObj('./index.js', {
  path: './index.js',
  fileName: 'index.js',
  exports: {},
  exportsTo: [],
  requires: {
    main: require('./main'),
  },
  requiresFrom: [
    getObj('./main.js', {
      path: './main.js',
      fileName: 'main.js',
      exports: {
        main: require('./main'),
      },
      exportsTo: [
        getObj('./index.js'),
      ],
      requires: {
        stayRunning: require('./stay-running'),
        getRootItemsList: require('./get-root-items-list'),
        listTopLevelFunctionsInAFile: require('./list-top-level-funcs-in-file'),
      },
      requiresFrom: [
        getObj('./stay-running.js', {
          path: './stay-running.js',
          fileName: 'stay-running.js',
          exports: {
            stayRunning: require('./stay-running'),
          },
          exportsTo: [
            getObj('./main.js'),
          ],
          requires: {},
          requiresFrom: [],
        }),
        getObj('./get-root-items-list.js', {
          path: './get-root-items-list.js',
          fileName: 'get-root-items-list.js',
          exports: {
            getRootItemsList: require('./get-root-items-list'),
          },
          exportsTo: [
            getObj('./main.js'),
          ],
          requires: {
            readdir: require('fs/promises').readdir,
          },
          requiresFrom: [
            getObj('fs/promises', {
              path: 'fs/promises',
              fileName: undefined,
              exports: {
                readdir: require('fs/promises').readdir,
              },
              exportsTo: [
                getObj('./get-root-items-list.js'),
              ],
              requires: {},
              requiresFrom: [],
            }),
          ],
        }),
        getObj('./list-top-level-funcs-in-file.js', {
          path: './list-top-level-funcs-in-file.js',
          fileName: 'list-top-level-funcs-in-file.js',
          exports: {
            listTopLevelFunctionsInAFile: require('./list-top-level-funcs-in-file'),
          },
          exportsTo: [
            getObj('./main.js'),
          ],
          requires: {
            readFile: require('fs/promises').readFile,
            createContext: require('vm').createContext,
            Script: require('vm').Script,
          },
          requiresFrom: [
            getObj('fs/promises', {
              path: 'fs/promises',
              fileName: undefined,
              exports: {
                readFile: require('fs/promises').readFile,
              },
              exportsTo: [
                getObj('./list-top-level-funcs-in-file.js'),
              ],
              requires: {},
              requiresFrom: [],
            }),
            getObj('vm', {
              path: 'vm',
              fileName: undefined,
              exports: {
                createContext: require('vm').createContext,
                Script: require('vm').Script,
              },
              exportsTo: [
                getObj('./list-top-level-funcs-in-file.js'),
              ],
              requires: {},
              requiresFrom: [],
            }),
          ],
        }),
      ],
    }),
  ],
}));
