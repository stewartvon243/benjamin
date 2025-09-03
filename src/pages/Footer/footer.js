import './footer.scss'
import PngIcon from '../../components/PngIcon';
import { useState } from 'react';

function Footer() {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Here you can implement your email sending logic
            // For now, we'll just simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
            
            alert('Message sent successfully! I\'ll get back to you soon.');
            setContactForm({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <footer>
            <div className="social">
                <div className="social-title"><h2>Connect With Me</h2></div>
            </div>
            
            <div className="contact-section">
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>Ready to bring your vision to life? I'm here to help you build something amazing.</p>
                        
                        <div className="social-links">
                            <div className="social-item">
                                <div className="social-icon"><PngIcon src={require('../../assets/images/telegram.png')} alt="Telegram" className="icon" /></div>
                                <div className="social-details">
                                    <h4>Telegram</h4>
                                    <a href="https://t.me/benjamin97511" target="_blank" rel="noopener noreferrer">
                                        @benjamin97511
                                    </a>
                                </div>
                            </div>
                            
                            <div className="social-item">
                                <div className="social-icon"><PngIcon src={require('../../assets/images/discord.png')} alt="Discord" className="icon" /></div>
                                <div className="social-details">
                                    <h4>Discord</h4>
                                        @benjaminlee97511
                                </div>
                            </div>

                            <div className="social-item">
                                <div className="social-icon"><PngIcon src={require('../../assets/images/github.png')} alt="Github" className="icon" /></div>
                                <div className="social-details">
                                    <h4>Telegram</h4>
                                    <a href="https://github.com/smartcoindev389" target="_blank" rel="noopener noreferrer">
                                        @smartcoindev389
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form onSubmit={handleContactSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={contactForm.name}
                                    onChange={handleContactChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={contactForm.email}
                                    onChange={handleContactChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={contactForm.subject}
                                    onChange={handleContactChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={contactForm.message}
                                    onChange={handleContactChange}
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="footer">
                <p>Built from scratch with <span>💚Benjamin💚</span> &copy; Copyright 2024, All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer