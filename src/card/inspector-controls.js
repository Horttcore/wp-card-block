const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
    URLInput
} = wp.blockEditor;

const {
    PanelBody
} = wp.components;

export default class Controls extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const {
            attributes: {
                buttonLink
            },
            setAttributes
        } = this.props;

        return (
            <InspectorControls>
               
            </InspectorControls>
        )
    }
}

