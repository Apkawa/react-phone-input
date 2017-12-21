'use strict'
const _ = require('lodash')
const path = require('path')
const gulp = require('gulp')
const gutil = require('gulp-util')

const Tasks = require('gulp-frontend-tools')
// const Tasks = require('/home/apkawa/source/gulp-frontend-tools@2')

var ENV = 'development' //production
if (gutil.env.production) {
  ENV = 'production'
}

function toJSON (obj) {
  return _.fromPairs(obj, (v, k) => [k, JSON.stringify(v)])
}


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
  webpack: {
    hot: false,
    defines: {
      'ENVS': toJSON({
        SERVER: false,
        'PROJECT_NAME': '{{ envs.project|d("desktop") }}',
        'IOS': '{{ envs.ios|d("") }}',
        'ANDROID': '{{ envs.android|d("") }}',
      }),
      'process.env.NODE_ENV': JSON.stringify(ENV),
    },
    config: {
      resolve: {
        alias: {
          '@apkawa/react-phone-input$': path.resolve(__dirname, 'lib'),
          '@apkawa/react-phone-input': path.resolve(__dirname) + '/',
        },
      },
    },
  },
}

Tasks(gulp, config)
  .run()

