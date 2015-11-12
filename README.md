# hexo-generator-blog

[![Build Status](https://travis-ci.org/jpuncle/hexo-generator-blog.svg?branch=master)](https://travis-ci.org/jpuncle/hexo-generator-blog)  [![NPM version](https://badge.fury.io/js/hexo-generator-blog.svg)](http://badge.fury.io/js/hexo-generator-blog) [![Coverage Status](https://img.shields.io/coveralls/jpuncle/hexo-generator-blog.svg)](https://coveralls.io/r/jpuncle/hexo-generator-blog?branch=master)

Blog generator for [Hexo], it's like `hexo-generator-index`, however with custom path support.

## Installation

``` bash
$ npm install hexo-generator-blog --save
```

## Options

``` yaml
blog_generator:
  path: blog
  per_page: 10
  order_by: -date
```

- **path**: Blog path. (Default: blog)
- **per_page**: Posts displayed per page. (0 = disable pagination)
- **order_by**: Posts order. (Order by date descending by default)

## License

MIT

[Hexo]: http://hexo.io/
