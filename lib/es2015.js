import QRCode from 'qrcode';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const LEVELS = [
    'low',
    'medium',
    'quartile',
    'high',
    'L',
    'M',
    'Q',
    'H',
];
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const MASK_PATTERNS = [0, 1, 2, 3, 4, 5, 6, 7];
const MODES = ['alphanumeric', 'numeric', 'kanji', 'byte'];
const TYPES = ['image/png', 'image/jpeg', 'image/webp'];
const MAX_QR_VERSION = 40;
var index = {
    props: {
        version: {
            type: Number,
            validator: (version) => version === parseInt(String(version), 10) &&
                version >= 1 &&
                version <= MAX_QR_VERSION,
        },
        errorCorrectionLevel: {
            type: String,
            validator: (level) => LEVELS.includes(level),
        },
        maskPattern: {
            type: Number,
            validator: (maskPattern) => MASK_PATTERNS.includes(maskPattern),
        },
        toSJISFunc: Function,
        margin: Number,
        scale: Number,
        width: Number,
        color: {
            type: Object,
            validator: (color) => ['dark', 'light'].every(c => ['string', 'undefined'].includes(typeof color[c])),
        },
        type: {
            type: String,
            validator: (type) => TYPES.includes(type),
        },
        quality: {
            type: Number,
            validator: (quality) => quality === parseFloat(String(quality)) && quality >= 0 && quality <= 1,
        },
        value: {
            type: [String, Array],
            required: true,
            validator(value) {
                if (typeof value === 'string') {
                    return true;
                }
                return value.every(({ data, mode }) => typeof data === 'string' && (mode == null || MODES.includes(mode)));
            },
        },
    },
    data() {
        return {
            dataUrl: '',
        };
    },
    watch: {
        $props: {
            deep: true,
            immediate: true,
            handler: 'toDataURL',
        },
    },
    methods: {
        toDataURL() {
            const _a = this.$props, { quality } = _a, props = __rest(_a, ["quality"]);
            return QRCode.toDataURL(this.value, Object.assign(props, quality == null || {
                renderOptions: {
                    quality,
                },
            })).then(dataUrl => (this.dataUrl = dataUrl));
        },
    },
    render() {
        return this.$createElement('img', {
            domProps: Object.assign(Object.assign({}, this.$attrs), { src: this.dataUrl }),
        });
    },
};

export default index;
export { LEVELS, MASK_PATTERNS, MODES, TYPES };
