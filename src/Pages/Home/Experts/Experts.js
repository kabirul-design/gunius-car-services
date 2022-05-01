import React from 'react';
import experts1 from '../../../images/experts/expert-1.jpg';
import experts2 from '../../../images/experts/expert-2.jpg';
import experts3 from '../../../images/experts/expert-3.jpg';
import experts4 from '../../../images/experts/expert-4.jpg';
import experts5 from '../../../images/experts/expert-5.jpg';
import experts6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    {id: 1, name:'Will Smith', img: experts1},
    {id: 2, name:'Randon Powel', img: experts2},
    {id: 3, name:'Shall Tom', img: experts3},
    {id: 4, name:'Will Sampow', img: experts4},
    {id: 5, name:'Powel Siling', img: experts5},
    {id: 6, name:'Henry Havana', img: experts6},
];


const Experts = () => {
    return (
        <div>
            <h2 className='text-primary text-center my-3 bold'>Our Experts</h2>
            <div className='container'>
                <div className="row">
                    {
                        experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                        ></Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;