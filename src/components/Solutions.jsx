import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMaximize, faChartSimple,faShieldHalved } from '@fortawesome/free-solid-svg-icons'

const Solutions = () => {
    return ( 
        <div className="mainS">
            <div>
                <i className="arrow">→</i>
                <h3>SOLUTIONS</h3>
                <h4>LOOK ALL OUR SOLUTIONS AND CONTRACT A SERVICE SO EASY</h4>
            </div>
            <section className="card-main">
                <article className="card">
                    <div className='card-title'>
                        <FontAwesomeIcon className='font' icon={faWindowMaximize} />
                        <h2>Web Develop</h2>
                    </div>
                    <div className="card-text">
                        <p>We offer a lot of services</p>
                        <p>We offer a lot of services</p>
                        <p>We offer a lot of services</p>
                        <p>We offer a lot of services</p>
                    </div>
                </article>
                <article className="card">
                    <div className='card-title'>
                        <FontAwesomeIcon className='font' icon={faChartSimple} />
                        <h2>Data Analytics</h2>
                    </div>
                    <div className="card-text">
                        <p>We offer a lot of services</p>
                        <p>We offer a lot of services</p>
                        <p>We offer a lot of services</p>
                        <p>We offer a lot of services</p>
                    </div>
                </article>
                <article className="card">
                    <div className='card-title'>
                        <FontAwesomeIcon className='font' icon={faShieldHalved} />
                        <h2>Ciber Security</h2>
                    </div>
                    <div className="card-text">
                        <p>We offer a lot of services</p>
                        <p>We offer a lot of services</p>
                        <p>We offer a lot of services</p>
                        <p>We offer a lot of services</p>
                    </div>
                </article> 
            </section>
        </div>
     );
}
 
export default Solutions;