import BlockControls from './block-controls';
import InspectorControls from './inspector-controls';

const { __ } = wp.i18n;

const {
    Component,
    Fragment,
} = wp.element;

const {
    PlainText,
    RichText,
    MediaPlaceholder,
} = wp.blockEditor;

export default class Edit extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const {
            attributes: {
                headline,
                imageSrc,
                imageId,
                imageAlt,
                body,
                buttonText,
                url,
            },
            className,
            setAttributes,
            isSelected,
        } = this.props;

        const onSelectImage = img => {
            if (!img || !img.url) {
                setAttributes({ imageSrc: null, imageId: null, imageAlt: null });
                return;
            }
            setAttributes({ imageSrc: img.url, imageId: img.id, imageAlt: img.alt });
        };

        const onRemoveImage = () => {
            setAttributes({ imageSrc: null, imageId: null, imageAlt: null });
        };

        const classes = 'card ' + className;

        return (
            <Fragment>
                <BlockControls 
                    {...this.props}
                    onSelectImage={onSelectImage}
                    onRemoveImage={onRemoveImage}
                />
                <InspectorControls 
                    {...this.props}
                    onSelectImage={onSelectImage}
                    onRemoveImage={onRemoveImage}
                />
                <section className={classes}>
                    <figure className="card__image">
                        {!imageId && isSelected &&
                            <MediaPlaceholder
                                icon="format-image"
                                labels={{
                                    title: __('Image', 'wp-card-block'),
                                    headline: __('Image', 'wp-card-block')
                                }}
                                accept="image/*"
                                onSelect={onSelectImage}
                            />
                        }
                        { imageId && 
                            <img src={imageSrc} alt={imageAlt} />
                        }
                    </figure>
                    <header className="card__header">
                        <h1 className="card__title">
                            <RichText
                                value={headline}
                                placeholder={__(
                                    'Lorem ipsum…',
                                    'wp-card-block'
                                )}
                                keepPlaceholderOnFocus
                                onChange={headline =>
                                    setAttributes({ headline })
                                }
                            />
                        </h1>
                    </header>
                    
                    {body || isSelected && 
                        <div className="card__body">
                            <RichText
                                tagName="div"
                                value={body}
                                multiline="p"
                                placeholder={__(
                                    '…dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                                    'wp-card-block'
                                )}
                                keepPlaceholderOnFocus
                                onChange={body => setAttributes({ body })}
                            />
                        </div>
                    }

                    {(isSelected || buttonText) &&
                        <footer className="card__footer">
                            <PlainText
                                tagName="span"
                                className="card__button"
                                label={__('Button Text', 'wp-card-block')}
                                value={buttonText}
                                placeholder={__('Button Text', 'wp-card-block')}
                                keepPlaceholderOnFocus
                                onChange={buttonText =>
                                    setAttributes({ buttonText })
                                }
                            />
                        </footer>
                    }
                </section>
            </Fragment>
        );
    }
}

