import React from 'react';
import { Link } from '@reach/router';
const Header = () => {
	return (
		<header className="nav-hide" id="header">
			<nav className="container">
				<div className="row mm-wrapper justify-content-between align-items-center">
					<figure className="contenedor-logo col-auto">
						<Link className="brand-menu" to="/">
							<img src="/static/img/logo.png" alt="Logo Mirco Martin" />
						</Link>
						<span className="btn-menu" id="btn-menu">
							<i className="icono icon-menu" aria-hidden="true" />
						</span>
					</figure>
					<ul className="menu col-12 col-md-9" id="enlaces">
						<li>
							<Link to="/">Inicio</Link>
						</li>
						<li>
							<Link to="/sobremi">Sobre mi</Link>
						</li>
						<li>
							<Link to="/servicios">Servicios</Link>
						</li>
						<li>
							<Link to="/portafolio">Portafolio</Link>
						</li>
						<li>
							<Link to="/contacto">Contacto</Link>
						</li>
					</ul>
					<section className="col-auto redes-sociales d-none d-lg-block">
						<a
							className="instagram"
							href="https://www.instagram.com/layback.ar"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="icon-instagram" />
						</a>
						<a
							className="facebook"
							href="https://www.facebook.com/mircocmartin"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="icon-facebook" />
						</a>
						<a
							className="linkedin"
							href="https://www.linkedin.com/in/mirco-martin-a3b70670"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="icon-linkedin-squared" />
						</a>
					</section>
				</div>
			</nav>
		</header>
	);
};

export default Header;
