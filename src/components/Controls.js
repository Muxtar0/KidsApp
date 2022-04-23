import React from 'react'
import { ReactComponent as BellIcon } from '../svg/bell.svg'
import { ReactComponent as PlayIcon } from '../svg/Play.svg'
import { ReactComponent as VolumeIcon } from '../svg/volume.svg'
function Controls() {
  return (
    <div className="controlsDIV">
        <button className="BellBTN">
            <BellIcon width="16px" />
        </button>
        <button className="PlayBTN">
            <PlayIcon width="12px" />
        </button>
        <button className="VolumeBTN">
            <VolumeIcon width="16px" />
        </button>
    </div>
  )
}

export default Controls