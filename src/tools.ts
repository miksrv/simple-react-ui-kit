export const concatClassNames = (...args: Array<string | boolean | null | undefined>): string =>
    args.filter((item) => !!item).join(' ')

export const encodeQueryData = (data: any): string => {
    if (typeof data === 'undefined' || !data) {
        return ''
    }

    const ret = []

    for (const d in data) {
        if (d && data[d]) {
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]))
        }
    }

    return ret.length ? '?' + ret.join('&') : ''
}

export const truncateText = (text?: string, maxLength: number = 300) => {
    if (!text || text.length <= maxLength) {
        return text
    }

    const lastSpaceIndex = text.lastIndexOf(' ', maxLength)

    if (lastSpaceIndex === -1) {
        return text.slice(0, maxLength)
    }

    return text.slice(0, lastSpaceIndex)
}
