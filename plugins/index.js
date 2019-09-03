// svgPath svg 目录
const requireIcons = (svgPath = './src') => {
  const requireAll = requireContext => requireContext.keys().map(requireContext)
  const req = require.context(svgPath, false, /\.svg$/)
  requireAll(req)
}

export default requireIcons