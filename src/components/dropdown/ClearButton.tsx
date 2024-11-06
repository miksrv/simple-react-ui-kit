import React from 'react'

import Icon from '../icon'

import styles from './styles.module.sass'

interface ClearButtonProps {
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => (
    <span
        role={'button'}
        tabIndex={0}
        className={styles.clearButton}
        onClick={(e) => onClick?.(e)}
        onKeyDown={(e) => e.key === 'Enter' && onClick?.(e)}
    >
        <Icon name={'Close'} />
    </span>
)

export default ClearButton
