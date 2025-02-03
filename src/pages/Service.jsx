const Service = () => {
  return (
    <div>
      <header className='services-header'>
        <h1>My Services</h1>
        <p>
          Helping you bring your ideas to life with modern, responsive web
          development.
        </p>
      </header>

      <section className='services-list'>
        <div className='service-card'>
          <h2>Web Development</h2>
          <p>
            I specialize in building high-quality websites that are both
            functional and visually appealing. I use modern front-end
            technologies such as HTML, CSS, JavaScript, and React to create
            responsive and user-friendly websites.
          </p>
        </div>

        <div className='service-card'>
          <h2>UI/UX Design</h2>
          <p>
            A great user interface and experience are key to user satisfaction.
            I work on creating clean and intuitive UI/UX designs that not only
            look great but also provide seamless navigation and functionality.
          </p>
        </div>

        <div className='service-card'>
          <h2>Responsive Design</h2>
          <p>
            Your website will look great on all devices. I ensure that your
            website is fully responsive, optimized for mobile, tablet, and
            desktop, so it reaches users across different screen sizes.
          </p>
        </div>

        <div className='service-card'>
          <h2>Web App Development</h2>
          <p>
            I can help you build robust web applications using JavaScript
            frameworks like React. Whether you need a small project or a complex
            web app, I am here to make your ideas come to life.
          </p>
        </div>
      </section>

      <section className='contact'>
        <h2>Ready to Start?</h2>
        <p>
          If you ready to turn your ideas into a stunning website or web app,
          let’s talk!
        </p>
        <a href='mailto:your.email@example.com' className='contact-link'>
          Contact Me
        </a>
      </section>
    </div>
  );
};

export default Service;
