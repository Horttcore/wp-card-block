export default {
    imageSrc: {
        type: 'string',
    },
    imageId: {
        type: 'number'
    },
    imageAlt: {
        type: 'string',
    },
    headline: {
        type: 'string',
        source: 'text',
        selector: '.card__title'
    },
    body: {
        type: 'array',
    },
    buttonText: {
        type: 'string',
    },
    url: {
        type: 'string',
        default: '',
    },
    opensInNewTab: {
        type: 'bool',
        default: false,
    }
}