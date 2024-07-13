'use client'

import React from 'react'

import styles from './styles.module.sass'

import { concatClassNames as cn } from '@/functions/helpers'

interface RatingColoredProps {
    className?: string
    value?: number
    children?: React.ReactNode
}

const RatingColored: React.FC<RatingColoredProps> = ({ className, value, children }) =>
    value ? (
        <div
            className={cn(className, styles.ratingColored)}
            style={{ backgroundColor: getColorByValue(value) }}
        >
            {children}
        </div>
    ) : (
        <></>
    )

const interpolateColor = (value: number, startColor: string, endColor: string): string => {
    const rgb = (color: any) => color.match(/\w\w/g).map((x: string) => parseInt(x, 16))

    const [startR, startG, startB] = rgb(startColor)
    const [endR, endG, endB] = rgb(endColor)

    const r = Math.round(startR + (endR - startR) * value)
    const g = Math.round(startG + (endG - startG) * value)
    const b = Math.round(startB + (endB - startB) * value)

    return `rgb(${r}, ${g}, ${b})`
}

const getColorByValue = (value: number): string => {
    if (value <= 2) {
        return interpolateColor(value - 1, '#e64646', '#ea5d2e')
    }
    if (value <= 3) {
        return interpolateColor(value - 2, '#ea5d2e', '#eaae2e')
    }
    if (value <= 4) {
        return interpolateColor(value - 3, '#eaae2e', '#9ec528')
    }

    return interpolateColor(value - 4, '#9ec528', '#4bb34b')
}

export default RatingColored
