// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/shide/PROJ/biuUI/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
    {
      path: '/~demos/:uuid',
      layout: false,
      wrappers: [
        require('/Users/shide/PROJ/biuUI/node_modules/@umijs/preset-dumi/lib/theme/layout')
          .default,
        require('/Users/shide/PROJ/biuUI/node_modules/dumi-theme-mobile/src/layouts/demo.tsx')
          .default
      ],
      component: props => {
        const React = require('react');
        const renderArgs = require('../../../node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs').default(
          props
        );

        switch (renderArgs.length) {
          case 1:
            // render demo directly
            return renderArgs[0];

          case 2:
            // render demo with previewer
            return React.createElement(
              require('dumi-theme-mobile/src/builtins/Previewer.tsx').default,
              renderArgs[0],
              renderArgs[1]
            );

          default:
            return `Demo ${uuid} not found :(`;
        }
      }
    },
    {
      path: '/_demos/:uuid',
      redirect: '/~demos/:uuid'
    },
    {
      __dumiRoot: true,
      layout: false,
      path: '/',
      wrappers: [
        require('/Users/shide/PROJ/biuUI/node_modules/@umijs/preset-dumi/lib/theme/layout')
          .default,
        require('/Users/shide/PROJ/biuUI/node_modules/dumi-theme-mobile/src/layouts/index.tsx')
          .default
      ],
      routes: [
        {
          path: '/components/button',
          component: require('/Users/shide/PROJ/biuUI/src/components/Button/index.md')
            .default,
          exact: true,
          meta: {
            filePath: 'src/components/Button/index.md',
            updatedTime: 1615793996000,
            componentName: 'Button',
            title: 'Button',
            slugs: [
              {
                depth: 2,
                value: 'API 文档',
                heading: 'api-文档'
              }
            ],
            nav: {
              path: '/components',
              title: 'Components'
            },
            group: {
              path: '/components/button',
              title: 'Button'
            }
          },
          title: 'Button'
        },
        {
          path: '/getting-started',
          component: require('/Users/shide/PROJ/biuUI/docs/getting-started.zh-CN.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/getting-started.zh-CN.md',
            updatedTime: 1614320907000,
            nav: {
              title: '快速上手',
              order: 1,
              path: '/getting-started'
            },
            slugs: [
              {
                depth: 1,
                value: '快速上手',
                heading: '快速上手'
              }
            ],
            title: '快速上手',
            locale: 'zh-CN'
          },
          title: '快速上手'
        },
        {
          path: '/help',
          component: require('/Users/shide/PROJ/biuUI/docs/help.zh-CN.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/help.zh-CN.md',
            updatedTime: 1615793996000,
            nav: {
              title: '帮助',
              order: 3,
              path: '/help'
            },
            slugs: [
              {
                depth: 1,
                value: '帮助',
                heading: '帮助'
              }
            ],
            title: '帮助',
            locale: 'zh-CN'
          },
          title: '帮助'
        },
        {
          path: '/',
          component: require('/Users/shide/PROJ/biuUI/docs/index.md').default,
          exact: true,
          meta: {
            filePath: 'docs/index.md',
            updatedTime: 1615260346000,
            title: 'BIU',
            order: 10,
            hero: {
              title: 'Bui',
              desc:
                '<div class="markdown"><p>📖 组件库，创造高效愉悦的工作体验</p></div>',
              actions: [
                {
                  text: '快速上手',
                  link: '/guide'
                }
              ]
            },
            features: [
              {
                icon:
                  'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
                title: '开箱即用',
                desc: '<div class="markdown"><p>Out of the box</p></div>'
              },
              {
                icon:
                  'https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png',
                title: '体积小',
                desc: '<div class="markdown"><p>Small size</p></div>'
              },
              {
                icon:
                  'https://gw.alipayobjects.com/zos/bmw-prod/b8570f4d-c1b1-45eb-a1da-abff53159967/kj9t990h_w144_h144.png',
                title: '可拓展、高可用',
                desc:
                  '<div class="markdown"><p>Expandable and highly available</p></div>'
              }
            ],
            footer:
              '<div class="markdown"><p>Open-source MIT Licensed | Copyright © 2021-present<br />Powered by shide</p></div>',
            slugs: [
              {
                depth: 2,
                value: 'Who are using',
                heading: 'who-are-using'
              },
              {
                depth: 2,
                value: 'Feedback',
                heading: 'feedback'
              }
            ]
          },
          title: 'BIU'
        },
        {
          path: '/guide/arrow-button',
          component: require('/Users/shide/PROJ/biuUI/docs/guide/ArrowButton.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/guide/ArrowButton.md',
            updatedTime: null,
            title: 'ArrowButton 不规则标签',
            slugs: [
              {
                depth: 2,
                value: 'Tag 标签',
                heading: 'tag-标签'
              },
              {
                depth: 2,
                value: 'API文档',
                heading: 'api文档'
              }
            ],
            nav: {
              path: '/guide',
              title: 'Guide'
            }
          },
          title: 'ArrowButton 不规则标签'
        },
        {
          path: '/guide/button',
          component: require('/Users/shide/PROJ/biuUI/docs/guide/Button.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/guide/Button.md',
            updatedTime: 1615798841000,
            title: 'Button 按钮',
            slugs: [
              {
                depth: 2,
                value: 'Button 按钮',
                heading: 'button-按钮'
              }
            ],
            nav: {
              path: '/guide',
              title: 'Guide'
            }
          },
          title: 'Button 按钮'
        },
        {
          path: '/guide/curtain',
          component: require('/Users/shide/PROJ/biuUI/docs/guide/Curtain.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/guide/Curtain.md',
            updatedTime: 1615798841000,
            title: 'Curtain 幕帘',
            slugs: [
              {
                depth: 2,
                value: 'Modal 模态框',
                heading: 'modal-模态框'
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api'
              }
            ],
            nav: {
              path: '/guide',
              title: 'Guide'
            }
          },
          title: 'Curtain 幕帘'
        },
        {
          path: '/guide/tag',
          component: require('/Users/shide/PROJ/biuUI/docs/guide/Tag.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/guide/Tag.md',
            updatedTime: null,
            title: 'Tag 标签',
            slugs: [
              {
                depth: 2,
                value: 'Tag 标签',
                heading: 'tag-标签'
              },
              {
                depth: 2,
                value: 'API文档',
                heading: 'api文档'
              }
            ],
            nav: {
              path: '/guide',
              title: 'Guide'
            }
          },
          title: 'Tag 标签'
        },
        {
          path: '/guide',
          component: require('/Users/shide/PROJ/biuUI/docs/guide/index.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/guide/index.md',
            updatedTime: 1615798841000,
            title: '指引',
            order: 2,
            slugs: [
              {
                depth: 1,
                value: 'title: 指南',
                heading: 'title-指南'
              }
            ],
            nav: {
              path: '/guide',
              title: 'Guide'
            }
          },
          title: '指引'
        },
        {
          path: '/components',
          meta: {},
          exact: true,
          redirect: '/components/button'
        }
      ],
      title: 'biuUi',
      component: props => props.children
    }
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes }
  });

  return routes;
}
