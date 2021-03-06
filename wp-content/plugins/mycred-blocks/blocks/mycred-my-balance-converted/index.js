(function (wp) {
    var registerBlockType = wp.blocks.registerBlockType;
    var InspectorControls = wp.editor.InspectorControls;
    var el = wp.element.createElement;
    var TextControl = wp.components.TextControl;
    var SelectControl = wp.components.SelectControl;
    var __ = wp.i18n.__;
    registerBlockType('mycred-blocks/mycred-my-balance-converted', {
        title: __('My Balance Converted', 'mycred-gutenberg'),
        category: 'mycred',
        attributes: {
            ctype: {
                type: 'string',
                default: 'mycred_default'
            },
            rate: {
                type: 'number',
                default: 1
            },
            prefix: {
                type: 'string',
                default: ''
            },
            suffix: {
                type: 'string',
                default: ''
            }
        },
        edit: function (props) {
            var ctype = props.attributes.ctype;
            var rate = props.attributes.rate;
            var prefix = props.attributes.prefix;
            var suffix = props.attributes.suffix;

            var options = [];
            function setCType(value) {
                props.setAttributes({ctype: value});
            }
            function setRate(value) {
                props.setAttributes({rate: value});
            }
            function setPrefix(value) {
                props.setAttributes({prefix: value});
            }

            function setSuffix(value) {
                props.setAttributes({suffix: value});
            }

            Object.keys(mycred_types).forEach(function (key) {
                options.push({
                    label: mycred_types[key],
                    value: key
                });
            });

            return el('div', {}, [
                el('p', {}, __('My Balance Converted Shortcode', 'mycred-gutenberg')
                        ),
                el(InspectorControls, null,
                        el(SelectControl, {
                            label: __('Point Type', 'mycred-gutenberg'),
                            help: __('The point type you want to show a Conversion for.', 'mycred-gutenberg'),
                            value: ctype,
                            onChange: setCType,
                            options
                        }),
                        el(TextControl, {
                            label: __('Conversion Rate', 'mycred-gutenberg'),
                            help: __('', 'mycred-gutenberg'),
                            value: rate,
                            onChange: setRate
                        }),
                        el(TextControl, {
                            label: __('Prefix', 'mycred-gutenberg'),
                            help: __('', 'mycred-gutenberg'),
                            value: prefix,
                            onChange: setPrefix
                        }),
                        el(TextControl, {
                            label: __('Suffix', 'mycred-gutenberg'),
                            help: __('', 'mycred-gutenberg'),
                            value: suffix,
                            onChange: setSuffix
                        })
                        )
            ]);
        },
        save: function (props) {
            return null;
        }
    });
})(window.wp);