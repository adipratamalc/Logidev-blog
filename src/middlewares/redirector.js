module.exports = (config, {strapi}) => {
    return async (ctx, next) => {
      if (ctx.path === '/') {
        ctx.redirect(strapi.config.get('server.admin.url', '/admin/'));
        return
      }
      if (ctx.path === '/admin/auth/register' || ctx.path === '/admin/auth/register/') {
        const urlParams = new URLSearchParams(ctx.request.url);   
        const registrationToken = urlParams.get(ctx.path+'?registrationToken')
        if (registrationToken === null || registrationToken === '') {
           ctx.redirect(strapi.config.get('server.admin.url', '/admin/auth/login/'));
           return
        }

      }

      await next()
    };
  };