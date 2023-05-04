import React from 'react'
import {StarIco} from "./StarIco";

export const SkillItem = ({skItem}) => {

    const rateArr = new Array(5).fill('')

    return (
        <div className='skills-section__sk-list-item'>
            <img className='skills-section__sk-list-item__img' src={skItem.img} alt=""/>
            <span className='skills-section__sk-list-item__title'>{skItem.title}</span>
            <div className='skills-section__sk-list-item-rate-list'>
                {
                    rateArr.map((item, ind) => (
                        <StarIco id={ind+1} rateId={skItem.rate} />
                    ))
                }
            </div>
        </div>
    )
}