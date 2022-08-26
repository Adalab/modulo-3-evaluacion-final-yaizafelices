import '../styles/Header.scss';
import logoHeader from '../images/header-hp.png';

const Header = () => {

    return (
        <header className='header'>
            <img className='header__image' src={logoHeader} alt="Título Harry Potter" title='Título Harry Potter'></img>
        </header>
    );

}
export default Header;