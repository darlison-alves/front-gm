import React from 'react';

export function Loading() {
    return (
        <>
            <i className="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"> </i>
            <span className="sr-only">CARREGANDO...</span>
        </>
    )
}