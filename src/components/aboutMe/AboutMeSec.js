import React from 'react'

export const AboutMeSec = () => {
    return (
        <section className='about-me__section'>
            <div className="container">
                <div className="about-me__section-body">
                    <div className='about-me__section-info-wrap'>
                        <h1 className='about-me__section-title'>About me</h1>
                        <div className='about-me__section-text-wrap'>
                            <p className='about-me__section-text'>
                                Hello, I am Anton - React Frontend Developer from Kharkiv. <br/>
                                I am interested in web science and everything connected with it. <br/>
                            </p>
                            <p className='about-me__section-text'>
                                I am self-taught developer in web developing <br/> from 13 years old.
                            </p>
                            <p className='about-me__section-text'>
                                I am ready to deal with new wonderful people, <br/>
                                and doing new incredible web applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}