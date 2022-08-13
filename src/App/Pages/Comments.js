import React from 'react'
import { FaStar, FaStarHalfAlt, FaUserCircle } from 'react-icons/fa'
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs'
import './Styles/Comments.css'

const commentData = [
    {   id:1, 
        user:" Geldimyrat", 
        description: "Dükanyňyzdaky harytlar örän amatly bahadan hem gözlemesi tapmak kyn tehnikalary bu ýerden tapdym işleriňizde üstünlik Sumbar camputers!",
        rating: 4
    },
    {   id:2, 
        user:" Тима", 
        description: "Отличный магазин всё приходит во время, всё упаковано хорошо ничего не повреждено, рекомендую отличный магазин чтобы собрать реально мощный игровой ПК.",
        rating: 4
    },
    {   id:3, 
        user:" Azamat ", 
        description: "Dükanyňyzdaky harytlar örän amatly bahadan hem gözlemesi tapmak kyn tehnikalary bu ýerden tapdym işleriňizde üstünlik Sumbar camputers!",
        rating: 5
    },
    {   id:4, 
        user:"Аян", 
        description: "Хороший магазn",
        rating: 4
    },
    {   id:5, 
        user:"Oraz", 
        description: "Здравствуйте, спасибо вам большое. 👍👍👍👍",
        rating: 5
    },
    {   id:6, 
        user:"Александра", 
        description: "Очень хороший магазин,товары отличные,доставили в тот же день. + 5 баллов вам.",
        rating: 5
    },
    {   id:7, 
        user:"Ahmet", 
        description: "Хороший магазn",
        rating: 4
    },
    {   id:8, 
        user:"Игорь", 
        description: "Здравствуйте, спасибо вам большое. 👍👍👍👍",
        rating: 5
    },
    {   id:9, 
        user:"Gurbanmuhammet  ", 
        description: "Очень хороший магазин,товары отличные,доставили в тот же день. + 5 баллов вам.",
        rating: 5
    },
    {   id:10, 
        user:"Шадыян", 
        description: "nice",
        rating: 5
    }
]


const Comments = () => {
  return (
    <div className='comment-cont'>
        <h1 className='commentHeader'>Teswirler</h1>
        <div className='comment'>
            <div className='comment-row'>
                <div className='mid-rate'>
                    <h1>4.9</h1>
                    <div className='stars'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStarHalfAlt /></span>
                    </div>
                </div> 
                <div className='mid-rate'>
                    <button>
                        Baha Berin
                    </button>
                </div>
            </div>
            
            <div>
            {commentData.map((comment, index) => (
                <div key={index} className="comment-item">
                    <div className='rate-stars'>
                        <div className='stars'>
                            {comment.rating > 4 
                                ? 
                                (<span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <h3>Excellent</h3></span>)
                                : (<span><FaStar /><FaStar /><FaStar /><FaStar /> <h3>Good</h3></span>)
                            }
                        </div>
                        <div className='likes'>
                            <span>
                                <BsFillHandThumbsUpFill />{' '}10
                            </span>
                            <span>
                                <BsFillHandThumbsDownFill />{' '}2
                            </span>
                        </div>
                    </div>
                    <div className='comment-user'>
                       <div className='user-name'><span><FaUserCircle /></span><h4>{comment.user}</h4></div>
                        <p className='comment-desc'>{comment.description}</p>
                    </div>
                    
                </div>
            ))}
            </div> 
            
        </div>
    
    </div>
  )
}

export default Comments