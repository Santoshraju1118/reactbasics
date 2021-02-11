import { Typography } from '@material-ui/core'
import React from 'react'
import './Content.css';
import ReusableCard from './ReusableCard';

function Content() {
    const cardContent = [
        {
            id: 1,
            title: "Breakfast",
            desc: "Start your day with exclusive breakfast options",
            imageUrl:"https://img1.mashed.com/img/gallery/delicious-breakfast-foods-you-need-to-try-before-you-die/intro-1584646886.jpg",
        },
        {
            id: 2,
            title: "Lunch",
            desc: "Start your day with exclusive lunch options",
            imageUrl:"https://static.toiimg.com/thumb/msid-66476758,width-800,height-600,resizemode-75,imgsize-1640939,pt-32,y_pad-40/66476758.jpg",
        },
        {
            id: 3,
            title: "Snacks",
            desc: "Start your day with exclusive dinner options",
            imageUrl:"https://i.ndtvimg.com/i/2017-09/food-snacks-620x350_620x350_71505726688.jpg",
        },
        {
            id: 4,
            title: "Dinner",
            desc: "Start your day with exclusive options",
            imageUrl:"https://media3.s-nbcnews.com/i/newscms/2019_05/2736521/190131-stock-taco-bar-food-ew-1220p_bc7c9fc25ecd393bfa3d7d35f216edfc.jpg",
        },
        {
            id: 5,
            title: "Drinks",
            desc: "Start your day with exclusive drinks options",
            imageUrl:"https://www.thegreenhousepub.co.uk/content/dam/pcdg/common/offers/drinks/pcp-ln19-drinksmenu-cocktails-img.jpg.asset/1599476824611.jpg",
        },
        {
            id: 6,
            title: "Nightlife",
            desc: "Start your day with exclusive party options",
            imageUrl:"https://belgradeatnight.com/wp-content/uploads/2018/04/Belgrade-nightlife-tips-for-how-to-survive.jpg",
        },
    ]
    return (
        <div>
            <div className="content">
                <div className="content__header">
                    <Typography variant="h4">Quick Searches</Typography>
                    <Typography variant="body1" color="textSecondary" gutterBottom >Discover restaurants by type of meal</Typography>
                </div>
            </div>
            <div style={{alignItems: "center"}}> 
                <div className="content__cards" >
                    {cardContent.map(content => {
                    return <ReusableCard key={content.id} title={content.title} desc={content.desc} imageUrl={content.imageUrl} />
                    })}
                </div>
            </div>
        </div>


    )
}

export default Content
