import React from 'react'

import styles from './styles.module.sass'

import { concatClassNames as cn } from '@/tools'

export type BreadcrumbLink = {
    link: string
    text: string
}

export interface BreadcrumbsProps {
    homePageTitle?: string
    currentPage?: string
    className?: string
    links?: BreadcrumbLink[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ homePageTitle, links, className, currentPage }) => (
    <ul
        aria-label={'breadcrumb'}
        className={cn(className, styles.breadcrumbs)}
    >
        {!!homePageTitle?.length && (
            <li>
                <a
                    color={'inherit'}
                    href={'/'}
                    title={homePageTitle}
                >
                    {homePageTitle}
                </a>
            </li>
        )}
        {!!links?.length &&
            links.map(({ link, text }) => (
                <li key={link}>
                    <a
                        href={link}
                        color={'inherit'}
                        title={text}
                    >
                        {text}
                    </a>
                </li>
            ))}
        {currentPage && <li>{currentPage}</li>}
    </ul>
)

export default Breadcrumbs
