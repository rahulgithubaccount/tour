import React from 'react'

function ImageFilterModal(props) {

    let modaltStyle = {
        backgroundColor:"rgba(0,0,0,0.8)",
         display:"block"
     }
    return (
        <div>
            
         
        <div className="modal  show fade" style={modaltStyle} >
<div className="modal-dialog" style={{with:"100%"}}>
<div className="modal-content">
<div className="modal-header">
    <h5 className="modal-title"></h5>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.hide}></button>
  </div>
  <div className="modal-body " >
    <img className='image-fluid' src={props.img} alt="modalimage" width="480px" height="300px" />
  </div>
 
</div>
</div>
</div>
    </div>
    )
}

export default ImageFilterModal
