'use client'

import React, { useState } from 'react'

import styles from './styles.module.sass'

import { concatClassNames as cn } from '@/functions/helpers'
import Icon from '@/ui/icon'

interface RatingProps {
    value?: number
    voted?: boolean
    disabled?: boolean
    onChange?: (rating: number) => void
}

const Rating: React.FC<RatingProps> = ({ value, voted, disabled, onChange }) => {
    const [hoverRating, setHoverRating] = useState<number>()

    const showFullStar = (rating: number) =>
        (!hoverRating && value && value >= (rating || 0)) || (hoverRating && hoverRating >= rating)

    return (
        <ul className={styles.rating}>
            {[1, 2, 3, 4, 5].map((rating) => (
                <li
                    key={`ratingItem${rating}`}
                    className={cn(
                        hoverRating && hoverRating >= rating ? styles.hovered : undefined,
                        voted && styles.voted,
                        hoverRating === rating ? styles.current : undefined
                    )}
                    onMouseEnter={() => {
                        setHoverRating(rating)
                    }}
                    onMouseLeave={() => {
                        setHoverRating(undefined)
                    }}
                >
                    <label>
                        {showFullStar(rating) ? <Icon name={'FilledStar'} /> : <Icon name={'Star'} />}
                        <input
                            type={'radio'}
                            value={rating}
                            onChange={() => {
                                !disabled ? onChange?.(rating) : undefined
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    !disabled ? onChange?.(rating) : undefined
                                }
                            }}
                        />
                    </label>
                </li>
            ))}
        </ul>
    )
}

export default Rating
