export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'PhalApi-iView-admin',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    // 开发配置
    dev: {
      host: 'http://api.okayapi.com/', // TODO: 接口域名，请替换成你的
      app_key: '16BD4337FB1D355902E0502AFCBFD4DF', // TODO: app_key，请替换成你的
      app_secrect: 'LKJ63BzVrhX9SPhWcjl392kFqPTdzlUVK6ixnUrCYSbwuDyfxVubA8Fc4q67arT8qTpCtY5' // TODO: app_secrect，请替换成你的
    },
    // 正式配置
    pro: {
      host: 'http://api.okayapi.com/', // TODO: 接口域名，请替换成你的
      app_key: '16BD4337FB1D355902E0502AFCBFD4DF', // TODO: app_key，请替换成你的
      app_secrect: 'LKJ63BzVrhX9SPhWcjl392kFqPTdzlUVK6ixnUrCYSbwuDyfxVubA8Fc4q67arT8qTpCtY5' // TODO: app_secrect，请替换成你的
    }
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  }
}
