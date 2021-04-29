import styles from './style.module.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const activeStyle = {
        filter: 'brightness(0.9)'
    }
    return (
        <nav>
           <ul className={styles.navLinks}>
               <li> 
                    <NavLink
                        to='/'
                        end
                        className={styles.links}
                        activeStyle={activeStyle}
                    >
                        Produtos
                    </NavLink>
               </li>
               <li> 
                    <NavLink
                        to='/contato'
                        end
                        className={styles.links}
                        activeStyle={activeStyle}
                    >
                        Contato
                    </NavLink>
               </li>
           </ul>
        </nav>
    )
}