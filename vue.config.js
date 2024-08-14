
  module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/saltrain/'  // GitHub Pages에 배포할 때 서브 경로 설정
      : '/' ,
      outputDir: 'dist' 
}

