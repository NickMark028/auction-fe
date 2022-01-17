import React, { ReactNode } from 'react'
import { ButtonProps } from 'react-bootstrap'

interface Props {
    onClick?: () => void;
    children?: ReactNode;
}

const DefaultButton = (props: Props) => {
    const { children, onClick } = props;

    return (
        <button type="button" className="primary-btn" onClick={onClick}>
            {children}
        </button>
    )
}

export default DefaultButton
