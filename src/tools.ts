export const concatClassNames = (...args: Array<string | boolean | null | undefined>): string =>
    args.filter((item) => !!item).join(' ')
