import React from 'react';

function Modal(props){
    let modaltStyle = {
       backgroundColor:"rgba(0,0,0,0.8)",
        display:"block"
    }

    return (
        <div>
            
         
            <div className="modal  show fade" style={modaltStyle} >
  <div className="modal-dialog" style={{with:"100%"}}>
    <div className="modal-content">
    <div class="modal-header">
     
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.hide}></button>
      </div>
      <div className="modal-body " >
        <img className='image-fluid' src={props.img} alt="modalimage" width="483px" />
      </div>
    
    </div>
  </div>
</div>
        </div>
    )
}

export default Modal
