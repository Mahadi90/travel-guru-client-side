import React from 'react';


const DetailsCard = ({singleDetails}) => {

    const { title, description, price, rating, id, img} = singleDetails;
    return (
        <div className='d-flex align-items-center bg-success rounded text-white mb-3'>
            <img className='img-fluid rounded' style={{width: '220', height: '180px'}} src={img} alt="" />
            <div className='p-2'>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className='d-flex justify-content-between'>
                    <p>Ratings: {rating}</p>
                    <p className='text-danger bg-white p-2 rounded'>${price}/night</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;