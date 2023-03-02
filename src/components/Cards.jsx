import React from 'react'
import {Card} from '../components'
import './cards.css'
import img1 from '../assets/img-9.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'
import img5 from '../assets/img-8.jpg'


function Cards() {
  return (
    <div className='trvl__cards'>
        <h1>Check out these EPIC Destination!</h1>
        <div className="trvl__cards-container">
            <div className="trvl__cards-container_group1">

                <Card
                    src= {img1}
                    text = 'Explore the hidden waterfall deep inside the Amazon Jungle'
                    path = '/about'
                    label = 'Adventure'
                />
                <Card
                    src= {img2}
                    text='Travel through the Islands of Bali in a Private Cruise'
                    path = '/services'
                    label = 'Luxury'
                />
                

            </div>

            <div className="trvl__cards-container_group2">

                <Card
                    src= {img3}
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    path = '/services'
                    label = 'Mystery'
                />
                <Card 
                    src= {img4}
                    text='Experience Football on Top of the Himilayan Mountains'
                    path = '/services'
                    label = 'Adventure'
                />
                <Card 
                    src= {img5}
                    text='Ride through the Sahara Desert on a guided camel tour'
                    path = '/signup'
                    label = 'Adrenaline'
                />
                
            </div>
            
        </div>
    </div>
  )
}

export default Cards
