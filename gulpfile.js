'use strict'
const _ = require('lodash')
const path = require('path')
const gulp = require('gulp')
const gutil = require('gulp-util')

const GitRevisionPlugin = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()

// const Tasks = require('gulp-frontend-tools')
const Tasks = require('/home/apkawa/source/gulp-frontend-tools@2')

var ENV = 'development' //production
if (gutil.env.production) {
  ENV = 'production'
}

function toJSON (obj) {
  return _.fromPairs(obj, (v, k) => [k, JSON.stringify(v)])
}

const API = (gutil.env.api_endpoint || 'https://u24.services') + /api/

const config = {
  project: {
    static_root: '/',
    app_root: path.resolve(__dirname, 'example/app'),
    dist_root: path.resolve(__dirname, 'example/dist'),
    context: {
      'STATIC_ROOT': '"{{ _.static_root }}"',
      'IOS': '"{{ envs.ios|d("") }}"',
      'ANDROID': '"{{ envs.android|d("") }}"',
    },
  },
  browserSync: {
    proxy: {
      '/api/': API,
    },
  },
  webpack: {
    hot: false,
    providePlugin: {
      _: 'lodash',
      $: 'jquery',
    },
    defines: {
      'ENVS': toJSON({
        SERVER: false,
        'API_ENDPOINT': '{{ envs.api_endpoint|d("") }}',
        'PROJECT_NAME': '{{ envs.project|d("desktop") }}',
        'VERSION': gitRevisionPlugin.version(),
        'COMMITHASH': gitRevisionPlugin.commithash(),
        'IOS': '{{ envs.ios|d("") }}',
        'ANDROID': '{{ envs.android|d("") }}',
      }),
      'process.env.NODE_ENV': JSON.stringify(ENV),
    },
    config: {
      resolve: {
        alias: {
          'u24-calculator': path.resolve(__dirname, 'lib/'),
          // 'react-xdsoft-datetimepicker': '/home/apkawa/source/react-xdsoft-datetimepicker'
        },
      },
    },
  },
}

Tasks(gulp, config)
  .task('example', (gulp, config) => {
    gulp.task('example', () => {
      console.log(config.webpack.config.module.rules)
    })
  })
  .run()
