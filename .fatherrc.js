
const options = {
  entry: 'src/index',
  doc: {
    title: 'biuUI',
    themeConfig: { mode: 'light' },
    base: '/biuUI'
  },
  extractCSS:true, // 是否提取css 为单独文件
  lessInBabelMode: true,
  runtimeHelpers: true,
  esm: 'babel', 
  cjs: 'babel',
  autoprefixer: {
      browsers: ['ie>9', 'Safari >= 6'],
  }
}


export default options;