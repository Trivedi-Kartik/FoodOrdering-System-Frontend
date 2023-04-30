import React from 'react'
import classes from "./hero.module.css"
import {AiOutlineArrowDown} from "react-icons/ai"
import manEating from "../../assets/man-having-his-meal.svg"
const Hero = () => {
  return (
    <section id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title} >Do you crave delicious food</h2>
          <p className={classes.fisrtMsg}>But going out to take <span>food costs time ....</span></p>
          <p className={classes.secondMsg}>
            Why not order <span>pizza</span> or somthin <br/> <span>delicious</span> 
            form our restaurant
          </p>
          <p className={classes.desc}>
            Our restaurant always puts the client above.
            They are our single most important thing for our business.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Order now!</button>
            <button className={classes.buttonSee}><a href="#foods">See what's available <AiOutlineArrowDown/> </a></button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEating} alt="" className={classes.manEatingImg}/>
        </div>
      </div>  
    </section>  
  )
}

export default Hero