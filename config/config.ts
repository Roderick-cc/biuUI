export default {
  description: 'shide',
  logo:
    'https://lh3.googleusercontent.com/ogw/ADGmqu9HgOib0lK73owhYMqooUWV2t7BLDAe1XmrnT7y=s32-c-mo',
  locales: [['zh-CN', '中文']],
  mode: 'site',
  title: 'biuUi-title',
  themeConfig: {
    hd: {
      // 禁用高清方案
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] }
      ]
    }
  }
};
