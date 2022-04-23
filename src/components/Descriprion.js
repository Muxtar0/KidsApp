import React from 'react'
import ProfileIMG from '../img/Profile.png'
import { ReactComponent as SendIcon } from '../svg/send.svg'
function Descriprion() {
  return (
    <div className="descriptionDIV">
        <div className="profileShareBTN">
            <div className="profileDIV">
                <div className="profileImageDiv">
                    <img src={ProfileIMG} />
                </div>
            </div>
            <div className="shareBtnDIV">
                <button className="shareBTN">
                    <SendIcon width="16px" />
                </button>
            </div>
        </div>
        <div className="videoDescriptionDIV">
            <p>Aciklama Kismi</p>
        </div>
    </div>
  )
}

export default Descriprion