import React from 'react';
import '../../scss/components/_modal.css'
import classNames from 'classnames'

export const Modal = ({active, children}) => {

    return (
        <div className={classNames('modal', {
            'active': active
        })}>
            <div className={'modal_content'}>
                {children}

            </div>
        </div>
    );
};

