import React from 'react'


export default function Alert(props) {
  return (
    <div>
        <div className="alert alert-primary alert-dismissible fade show1" role="alert">
  <strong>done</strong> : {props.mode} mode is enable
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}


