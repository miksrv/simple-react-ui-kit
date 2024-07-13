'use client'

import React from 'react'
import dynamic from 'next/dynamic'

import styles from './styles.module.sass'

import { IMarkdownEditor } from '@uiw/react-markdown-editor'

const MarkdownEditor = dynamic(() => import('@uiw/react-markdown-editor'), {
    ssr: false
})

interface ContentEditorProps extends IMarkdownEditor {}

const ContentEditor: React.FC<ContentEditorProps> = (props) => (
    <div className={styles.contentEditor}>
        <MarkdownEditor
            {...props}
            toolbars={['bold', 'italic', 'header', 'strike', 'underline', 'quote', 'link', 'image']}
            value={props.value || ''}
            previewWidth={'100%'}
            enableScroll={true}
        />
    </div>
)

export default ContentEditor
