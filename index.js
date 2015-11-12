/* global hexo */

'use strict';

var assign = require('object-assign');

hexo.config.blog_generator = assign({
  path: 'blog',
  per_page: typeof hexo.config.per_page === 'undefined' ? 10 : hexo.config.per_page,
  order_by: '-date'
}, hexo.config.blog_generator);

hexo.extend.generator.register('blog', require('./lib/generator'));
