import React from 'react';

import WrapperBlue from '../Components/WrapperBlue';

//Aos Bblioteca JS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacto = () => {
	//Inicializo
	AOS.init();

	return (
		<>
			<WrapperBlue titulo="Contacto" />

			<main className="secciones">
				<section className="container contacto">
					<div
						className="row align-items-center justify-content-between"
						data-aos="fade-up"
					>
						<div className="col-12 col-md-6 order-1 order-md-0">
							<form>
								<div className="form-group d-flex justify-content-between">
									<input
										className="nombre-email"
										type="text"
										placeholder="Nombre"
									/>
									<input
										className="nombre-email"
										type="email"
										placeholder="Email"
									/>
								</div>
								<div className="form-group">
									<input
										className="asunto"
										type="text"
										placeholder="Asunto"
									/>
								</div>
								<div className="form-group">
									<textarea type="text" placeholder="Mensaje..." />
								</div>
								<div className="form-group">
									<button type="submit" className="leer-mas">
										Enviar
									</button>
								</div>
							</form>
						</div>
						<div className="col-12 col-md-5 mb-4 mb-md-0 order-0 order-lg-1 body-contacto">
							<h4 className="titulos-index">
								No dudes en enviarme tu consulta!
							</h4>
							<p>
								Envíame tus requisitos para un sitio web, investigaremos
								sus especificaciones y competidores, crearemos un
								prototipo del sitio web de forma gratuita y le enviaremos
								un resultado.
							</p>
							<section className="redes-general d-flex justify-content-center justify-content-md-start">
								<a
									className="instagram"
									href="https://www.instagram.com/engels_prado/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-instagram" />
								</a>
								<a
									className="facebook"
									href="https://www.facebook.com/EngelsLoveEngels/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-facebook" />
								</a>
								<a
									className="linkedin"
									href="https://www.linkedin.com/in/engels-prado-397096168/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-linkedin-squared" />
								</a>
							</section>
						</div>
					</div>
					<div className="row mt-5" data-aos="fade-up">
						<div className="col-12">
							<iframe
                class="map"
                title="Mapa Ubicacion"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26783.87649454841!2d-60.64013315000001!3d-32.951417000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1dc9b6d36f%3A0x97b9e9584d94d851!2sMonumento%20Hist%C3%B3rico%20Nacional%20a%20la%20Bandera!5e0!3m2!1ses!2sar!4v1593563745303!5m2!1ses!2sar"
							></iframe>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Contacto;
