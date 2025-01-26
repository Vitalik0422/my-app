import React from 'react'
type Props = {
    status: number | undefined
}

export default function SnackBar({status}:Readonly<Props>) {
    let title = ''
    switch (status) {
        case 201:
            title = 'Success'
            break
        case 400:
            title = 'Error'
            break
        default:
            title = 'Unknown status'
            break;
    }

    return (
        <div className={`snackBarContainer ${title}`}>
            <p>{title}</p>
        </div>
    )
}
