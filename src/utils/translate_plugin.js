function translate(key, obj, locale) {
  if (locale == 'cn') {
    return obj[key] || ''
  } else {
    return obj[`${key}_${locale}`] || ''
  }
}

export default {
  install: (app, options) => {
    app.config.globalProperties.$transData = (key, obj) => {
      return translate(key, obj, options.i18n.global.locale)
    }
  }
}