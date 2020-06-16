import { QRCodeSegment as _QRCodeSegment, QRCodeToDataURLOptions } from 'qrcode';
import Vue, { ComponentOptions } from 'vue';
export declare const LEVELS: readonly ["low", "medium", "quartile", "high", "L", "M", "Q", "H"];
export declare const MASK_PATTERNS: readonly [0, 1, 2, 3, 4, 5, 6, 7];
export declare type MaskPattern = typeof MASK_PATTERNS[number];
export declare const MODES: readonly ["alphanumeric", "numeric", "kanji", "byte"];
export declare type QRCodeMode = _QRCodeSegment['mode'];
export interface QRCodeSegment {
    data: string;
    mode?: QRCodeMode | null;
}
export declare type QRCodeValue = string | QRCodeSegment[];
export declare const TYPES: readonly ["image/png", "image/jpeg", "image/webp"];
export declare type QRCodeProps = Omit<QRCodeToDataURLOptions, 'renderOptions'> & {
    quality?: number;
    value: QRCodeValue;
};
declare const _default: ComponentOptions<Vue, import("vue/types/options").DefaultData<Vue>, import("vue/types/options").DefaultMethods<Vue>, import("vue/types/options").DefaultComputed, import("vue/types/options").PropsDefinition<Record<string, any>>, Record<string, any>>;
export default _default;
//# sourceMappingURL=index.d.ts.map