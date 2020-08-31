const { __ } = wp.i18n;
const { Component } = wp.element;

export default class Save extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const {
            className,
            attributes: {
                imageSrc,
                imageAlt,
                imageId,
                headline,
                body,
                buttonText,
                url
            }
        } = this.props;

        const classes = 'card ' + className;

        return (
            <section className={classes}>
                {imageId &&
                    <figure className="card__image">
                        <img src={imageSrc} alt={imageAlt} />
                    </figure>
                }
                <header className="card__header">
                    <h1 className="card__title">{headline}</h1>
                </header>
                <div className="card__body">{body}</div>
                { buttonText &&
                    <footer className="card__footer">
                        <a class="card__button" href={url}>
                            {buttonText}
                        </a>
                    </footer>
                }
            </section>
        );
    }
}

