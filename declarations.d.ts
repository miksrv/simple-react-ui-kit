import '@testing-library/jest-dom'

declare module '*.module.sass' {
    const classes: { [key: string]: string }
    export default classes
}
