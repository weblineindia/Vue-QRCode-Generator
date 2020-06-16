import { __assign, __rest } from "tslib";
import QRCode from 'qrcode';
export var LEVELS = [
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
export var MASK_PATTERNS = [0, 1, 2, 3, 4, 5, 6, 7];
export var MODES = ['alphanumeric', 'numeric', 'kanji', 'byte'];
export var TYPES = ['image/png', 'image/jpeg', 'image/webp'];
var MAX_QR_VERSION = 40;
export default {
    props: {
        version: {
            type: Number,
            validator: function (version) {
                return version === parseInt(String(version), 10) &&
                    version >= 1 &&
                    version <= MAX_QR_VERSION;
            },
        },
        errorCorrectionLevel: {
            type: String,
            validator: function (level) { return LEVELS.includes(level); },
        },
        maskPattern: {
            type: Number,
            validator: function (maskPattern) {
                return MASK_PATTERNS.includes(maskPattern);
            },
        },
        toSJISFunc: Function,
        margin: Number,
        scale: Number,
        width: Number,
        color: {
            type: Object,
            validator: function (color) {
                return ['dark', 'light'].every(function (c) {
                    return ['string', 'undefined'].includes(typeof color[c]);
                });
            },
        },
        type: {
            type: String,
            validator: function (type) { return TYPES.includes(type); },
        },
        quality: {
            type: Number,
            validator: function (quality) {
                return quality === parseFloat(String(quality)) && quality >= 0 && quality <= 1;
            },
        },
        value: {
            type: [String, Array],
            required: true,
            validator: function (value) {
                if (typeof value === 'string') {
                    return true;
                }
                return value.every(function (_a) {
                    var data = _a.data, mode = _a.mode;
                    return typeof data === 'string' && (mode == null || MODES.includes(mode));
                });
            },
        },
    },
    data: function () {
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
        toDataURL: function () {
            var _this = this;
            var _a = this.$props, quality = _a.quality, props = __rest(_a, ["quality"]);
            return QRCode.toDataURL(this.value, Object.assign(props, quality == null || {
                renderOptions: {
                    quality: quality,
                },
            })).then(function (dataUrl) { return (_this.dataUrl = dataUrl); });
        },
    },
    render: function () {
        return this.$createElement('img', {
            domProps: __assign(__assign({}, this.$attrs), { src: this.dataUrl }),
        });
    },
};
//# sourceMappingURL=index.js.map