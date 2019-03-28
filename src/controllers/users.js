function hello (ctx) {
    let user = ctx.request.query.user
    ctx.ok({ mess:user })
  }
  
  module.exports = {
    hello
  }