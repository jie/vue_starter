

function getBrowserLocale() {
    var jsSrc = (navigator.language || navigator.browserLanguage).toLowerCase();
    if (jsSrc.indexOf('zh') != -1) {
        return "zh"
    }
    else if (jsSrc.indexOf('jp') != -1 || jsSrc.indexOf('jap') != -1) {
        return "jp"
    }
    else if (jsSrc.indexOf('en') != -1) {
        return "en"
    }
    else {
        return "zh"
    }
}


function getSysLocale() {
    var locale = localStorage.getItem("locale")
    if(!locale) {
        locale = getBrowserLocale()
        localStorage.setItem('locale', locale)
    }
    return locale
}


export {
    getBrowserLocale,
    getSysLocale
}