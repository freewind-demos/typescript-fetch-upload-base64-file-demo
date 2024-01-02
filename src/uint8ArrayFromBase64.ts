export function uint8ArrayFromBase64(base64Str: string): Uint8Array {
    const binStr = window.atob(base64Str);
    const bytes = new Uint8Array(binStr.length);
    for (let i = 0; i < binStr.length; i++) {
        bytes[i] = binStr.charCodeAt(i);
    }
    return bytes;
}
