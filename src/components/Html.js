import React from 'react'

export default function Html(props) {
    // console.log(props.data.params);
    setTimeout(()=>{document.f1.submit()},3000)
    return (
        <form action={props.data.txn_url} name="f1">
            {Object.entries(props.data.params).map(([key, value]) => {
                return (<input type='hidden' name={key} value={value} />)
            })}
            <input type='hidden' name='CHECKSUMHASH' value={props.data.checksum} ></input>
        </form>
    )
}
