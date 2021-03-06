/**
 * @ignore
 * @fileoverview 文件上传主题的处理
 * @author 索丘 <zengyue.yezy@alibaba-inc.com>
 **/
define('bui/uploader/theme',['bui/common'], function (require) {

  var BUI = require('bui/common');

  var themes = {};

  /**
   * 文件上传的主题设置
   * @class BUI.Uploader.Theme
   * @static
   */
  var Theme = {
    /**
     * 添加一个主题
     * @param {String} name   主题名称
     * @param {Object} 主题的配置
     */
    addTheme: function(name, config){
      themes[name] = config;
    },
    /**
     * 获取一个主题
     * @param  {String} name [description]
     * @return {BUI.Uploader.Theme} 主题的配置
     */
    getTheme: function(name){
      //不能覆盖主题设置的
      return BUI.cloneObject(themes[name]);
    }
  };

  //这个默认的主题
  Theme.addTheme('default', {
    elCls: 'defaultTheme'
  });


  //带图片预览的主题
  Theme.addTheme('imageView', {
    elCls: 'imageViewTheme',
    queue:{
      resultTpl: {
        'success': '<div class="success"><img src="{url}" /></div>'
      }
    }
  });

  return Theme;

});