exports.linkResolver = (doc) => (doc.uid === 'home' ? '/' : `/${doc.uid}`)
