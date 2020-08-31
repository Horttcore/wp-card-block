const { __ } = wp.i18n;

const {
    Component,
    Fragment,
} = wp.element;

const {
    __experimentalLinkControl,
    BlockControls,
    MediaReplaceFlow,
} = wp.blockEditor;

const {
    Button,
    Toolbar,
    Popover,
} = wp.components;

export default class Controls extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            isLinkControlOpen: false,
        }
    }

    render() {
        const {
            attributes: {
                imageSrc,
                imageId,
                url,
                opensInNewTab,
            },
            onSelectImage,
            onRemoveImage,
            setAttributes
        } = this.props;

        const LinkControl = __experimentalLinkControl;
        const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];
        const ALLOWED_MIME_TYPES = 'image/*,video/*';

        return (
            <BlockControls>
                <Fragment>
                    {imageId && 
                        <Fragment>
                            <MediaReplaceFlow
                                name={ __('Replace image') }
                                mediaId={ imageId }
                                mediaURL={ imageSrc }
                                allowedTypes={ ALLOWED_MEDIA_TYPES }
                                accept={ ALLOWED_MIME_TYPES }
                                onSelect={ onSelectImage }
                            />
                            <Toolbar>
                                <Button
                                    onClick={onRemoveImage}
                                >
                                    { __('Remove image') }
                                </Button>
                            </Toolbar>
                        </Fragment>
                    }
                    <Toolbar>
                        <Button
                            onClick={ () => this.setState( {isLinkControlOpen: true} ) }
                        >
                            { __('Link') }
                        </Button>
                        {this.state.isLinkControlOpen &&
                            <Popover
                                position="bottom center"
                                onClose={ () => this.setState( {isLinkControlOpen: false} ) }
                            >
                                <LinkControl
                                    forceIsEditingLink={true}
                                    value={ { url, opensInNewTab, title: url } }
                                    onChange={ (link) => setAttributes({
                                        url: link.url,
                                        opensInNewTab: link.opensInNewTab,
                                    }) }
                                />
                            </Popover>
                        }
                    </Toolbar>
                </Fragment>
            </BlockControls>
        );
    }
}

