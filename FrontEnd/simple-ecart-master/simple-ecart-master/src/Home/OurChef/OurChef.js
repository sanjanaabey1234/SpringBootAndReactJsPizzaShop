import React from 'react'
import './OurChef.css'

const OurChef = () => {
  return (
    <div>
        <div className='chef-img'>
            <div className='container'>
                <div className='chef-content'>
                    <h1 className='heading-primary'>
                        our <span>chef</span>
                    </h1>

                    <p className='text-white'>
                    Award winning meals, delivered by an amazing team
                    </p>
                </div>
            </div>
        </div>

        {/* chef info  */}

        <div className='container'>
            <div className='grid-container py-md'>
                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Marcus <span>Cole</span>
                    </h3>

                    <h4>grill chef</h4>

                    <p>Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>

                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Lisa <span>Cole</span>
                    </h3>

                    <h4>executive chef</h4>

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>



                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Lara <span>Langford</span>
                    </h3>

                    <h4>CHEF DE CUISINE</h4>

                    <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris.</p>
                </div>



                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Alex <span>Deer</span>
                    </h3>

                    <h4>sous chef</h4>

                    <p>Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui.</p>
                </div>
            </div>




        </div>
    </div>
  )
}

export default OurChef