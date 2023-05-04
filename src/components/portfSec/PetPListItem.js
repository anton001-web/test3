import React from 'react'

export const PetPListItem = ({item}) => {
    return (
        <div className="prtf-sec__petP-list__item">
            <img
                src={item.img}
                alt="project overall image"
                className='prtf-sec__petP-list__item-img'
            />
            <a
                href={item.link}
                target='_blank'
                className='prtf-sec__petP-list__link'
            >
                {item.title}
            </a>
        </div>
    )
}