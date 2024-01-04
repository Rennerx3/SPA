const Contact = () => {
    return ( 
        <div id="contact" className="divForm">
            <h3>CONTACT US</h3>
            <form>
                <input type="text" placeholder="Name..."/>
                <input type="text" placeholder="Surname..."/>
                <input type="email" placeholder="Email..."/>
                <textarea rows="10" placeholder="Message..."></textarea>
                <button type="submit">SEND</button>
            </form>
            <div className="pelota"></div>
        </div>
     );
}
 
export default Contact;