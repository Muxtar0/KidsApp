import React from 'react'
import { ReactComponent as HomeIcon } from '../svg/home.svg'
import { ReactComponent as UserIcon } from '../svg/user.svg'
import { ReactComponent as ThumbsUpIcon } from '../svg/thumbs-up.svg'
function Nav() {
  return (
    <nav>
        <button className="navBTN ">
            <HomeIcon width="25px" />
        </button>
        <button className="navBTN active">
            <UserIcon width="25px" />
        </button>
        <button className="navBTN">
            <ThumbsUpIcon width="25px" />
        </button>
    </nav>
  )
}

export default Nav