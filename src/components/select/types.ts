import { IconTypes } from '../icon'

export type SelectOptionType<T> = {
    key: T
    value: string
    icon?: IconTypes
    image?: MediaImage
    emoji?: string
    disabled?: boolean
}
