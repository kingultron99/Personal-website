module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('assets')
  return {
    passthroughFileCopy: true
  }
}
