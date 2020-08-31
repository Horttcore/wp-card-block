import icons from './icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const {
    MediaPlaceholder,
    MediaUpload,
    BlockControls,
    RichText,
    URLInput
} = wp.editor;
const { IconButton, Toolbar, TextControl } = wp.components;

/**
 * Register Block
 */
registerBlockType('horttcore/card', {
    title: __('Card', 'wp-card-block'),
    icon: {
        src: icons.icon,
    },
    category: 'common',
    keywords: [__('Card', 'wp-card-block')],
    attributes,
    edit,
    save
});
