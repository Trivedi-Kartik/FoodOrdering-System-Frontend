import React from 'react'
import classes from "./newslatter.module.css"
import newsletterIllustration from "../../assets/get-newsletter-updates.svg"
import {AiOutlineSend} from "react-icons/ai"
const NewSletter = () => {
  return (
    <section id='contacts' className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Get our latest offers</h4>
        <h2 className={classes.title}>Newsletter</h2>
        <div className={classes.inputContainer}>
          <input type="text" placeholder='Enter email ....'/>
          <AiOutlineSend className={classes.sendIcon}/>
        </div>
        <img src={newsletterIllustration} className={classes.illustration} alt=""/>
      </div>
    </section>
  )
}

export default NewSletter