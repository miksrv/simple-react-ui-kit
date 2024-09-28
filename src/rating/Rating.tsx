'use client'

import React, { useState } from 'react'

import styles from './styles.module.sass'

import Icon from '@/icon'
import { concatClassNames as cn } from '@/tools'

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
                                if (!disabled) {
                                    onChange?.(rating)
                                }
                            }}
                            onKeyDown={(e) => {
                                if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
                                    onChange?.(rating)
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
