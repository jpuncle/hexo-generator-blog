'use strict';

var pagination = require('hexo-pagination');

module.exports = function(locals) {
  var config = this.config;
  var posts = locals.posts.sort(config.blog_generator.order_by);
  var paginationDir = config.pagination_dir || 'page';

  return pagination(config.blog_generator.path, posts, {
    perPage: config.blog_generator.per_page,
    layout: ['blog', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
};
