import React from 'react'
import { Modal, Form, Input, Button } from 'antd'

type cFormTypes = {
    visible?: boolean
    title?: string | undefined
    onOK?: (e: React.MouseEvent<HTMLElement>) => void
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void
    bodyStyle?: React.CSSProperties
    cancelText?: React.ReactNode
    closable?: boolean | undefined
    closeIcon?: React.ReactNode
    confirmLoading?: boolean | undefined
    footer?: React.ReactNode
    mask?: boolean
    maskClosable?: boolean
    maskStyle?: React.CSSProperties
    width?: string | number
    style?: React.CSSProperties
    formItemLayoutWithOutLable?: object
    onFinish?: (values: any) => void
    layout?: 'horizontal' | 'vertical' | 'inline'
    bttype?: "default"| "primary" | "ghost" | "dashed" | "link" | "text"
    inttype?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
}

const CFrom: React.FC<cFormTypes> = ({
    visible,
    title,
    onOK,
    onCancel,
    bodyStyle,
    cancelText,
    closable,
    closeIcon,
    confirmLoading,
    footer,
    mask,
    maskClosable,
    maskStyle,
    width,
    style,
    formItemLayoutWithOutLable,
    onFinish,
    layout,
    bttype,
    inttype
}) => {
    return (
        <React.Fragment>
            <Modal
                visible={visible}
                title={title}
                onOk={onOK}
                onCancel={onCancel}
                bodyStyle={bodyStyle}
                cancelText={cancelText}
                closable={closable}
                closeIcon={closeIcon}
                confirmLoading={confirmLoading}
                footer={footer}
                mask={mask}
                maskClosable={maskClosable}
                maskStyle={maskStyle}
                width={width}
                style={style}
                >

                <Form style={{marginTop: 20}} name='modal_form_item' layout={layout} {...formItemLayoutWithOutLable} onFinish={onFinish}>
                    <Input type={inttype} />
                    <Button type={bttype}></Button>
                </Form>
            </Modal>
        </React.Fragment>
    )
}

export default CFrom
