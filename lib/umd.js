(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('qrcode')) :
    typeof define === 'function' && define.amd ? define(['exports', 'qrcode'], factory) :
    (global = global || self, factory(global.VueQrcode = {}, global.QRCode));
}(this, (function (exports, QRCode) { 'use strict';

    QRCode = QRCode && QRCode.hasOwnProperty('default') ? QRCode['default'] : QRCode;

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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

    var LEVELS = [
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
    var MASK_PATTERNS = [0, 1, 2, 3, 4, 5, 6, 7];
    var MODES = ['alphanumeric', 'numeric', 'kanji', 'byte'];
    var TYPES = ['image/png', 'image/jpeg', 'image/webp'];
    var MAX_QR_VERSION = 40;
    var index = {
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

    exports.LEVELS = LEVELS;
    exports.MASK_PATTERNS = MASK_PATTERNS;
    exports.MODES = MODES;
    exports.TYPES = TYPES;
    exports.default = index;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
