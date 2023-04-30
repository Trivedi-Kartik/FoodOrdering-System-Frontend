import React from 'react'
import classes from "./food.module.css"
import {foodTypes} from "../../data/data";
import {Link} from 'react-router-dom';
const Food = () => {
  return (
    <section className={classes.container}>
        <div className={classes.wrapper}>
          <h4 className={classes.subtitle}>What we offer</h4>
          <div className={classes.foods}>
            {foodTypes.map((foodType) => (
              <Link to={`/foods/${foodType.name}`} key={foodType.id} className={classes.food}>
                <h4>{foodType.name}</h4>
                <div className={classes.imgContainer}>
                  <img src={foodType.img}/>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Food