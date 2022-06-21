import { FaHome, FaUserFriends, FaUserAlt, FaWindowClose } from 'react-icons/fa'

const Nav = ( {onLogout} ) => {
    return (
        <li onClick={onLogout} className='textLink'>
            <div className="textMenu">
                <div className='titleMenu'>
                    <FaWindowClose/>
                    <span>Sair</span>
                </div>
            </div>
        </li>
    )
}

export default Nav;