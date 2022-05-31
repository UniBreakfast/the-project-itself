const getObj = require('./get-obj.js');
const projectIndex = {}

module.exports = projectIndex;

Object.assign(projectIndex, getObj('./index.js', {
  path: './index.js',
  fileName: 'index.js',
  exports: {},
  exportsTo: [],
  requires: {
    main: require('./main.js'),
    projectIndex: require('./project-index.js'),
  },
  requiresFrom: [
    getObj('./main.js', {
      path: './main.js',
      fileName: 'main.js',
      exports: {
        main: require('./main.js'),
      },
      exportsTo: [
        getObj('./index.js'),
      ],
      requires: {
        stayRunning: require('./stay-running.js'),
        getRootItemsList: require('./get-root-items-list.js'),
        listTopLevelFunctionsInAFile: require('./list-top-level-funcs-in-file.js'),
      },
      requiresFrom: [
        getObj('./stay-running.js', {
          path: './stay-running.js',
          fileName: 'stay-running.js',
          exports: {
            stayRunning: require('./stay-running.js'),
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
            getRootItemsList: require('./get-root-items-list.js'),
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
            listTopLevelFunctionsInAFile: require('./list-top-level-funcs-in-file.js'),
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
    getObj('./project-index.js', {
      path: './project-index.js',
      fileName: 'project-index.js',
      exports: {
        projectIndex: require('./project-index.js'),
      },
      exportsTo: [
        getObj('./index.js'),
      ],
      requires: {
        getObj: require('./get-obj.js'),
      },
      requiresFrom: [
        getObj('./get-obj.js', {
          path: './get-obj.js',
          fileName: 'get-obj.js',
          exports: {
            getObj: require('./get-obj.js'),
          },
          exportsTo: [
            getObj('./project-index.js'),
          ],
          requires: {
            merge: require('./merge.js'),
          },
          requiresFrom: [
            getObj('./merge.js', {
              path: './merge.js',
              fileName: 'merge.js',
              exports: {
                merge: require('./merge.js'),
              },
              exportsTo: [
                getObj('./get-obj.js'),
              ],
              requires: {
                makeMerge: require('./make-merge.js'),
              },
              requiresFrom: [
                getObj('./make-merge.js', {
                  path: './make-merge.js',
                  fileName: 'make-merge.js',
                  exports: {
                    makeMerge: require('./make-merge.js'),
                  },
                  exportsTo: [
                    getObj('./merge.js'),
                  ],
                  requires: {},
                  requiresFrom: [],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
}));
