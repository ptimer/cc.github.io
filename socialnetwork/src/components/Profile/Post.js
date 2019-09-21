import React from 'react';

/* css */

import classes from '../css/Profile.module.css';

/* css */

function Post(props) {
  return (
      	<div className={classes.post}>
      		<div>
      			<img src={props.img} alt=""/>
      		</div>
			<div>
				<h2>{props.title}</h2>
				<p>
					{props.text}
				</p>
			</div>
			
      	</div>
  );
}

export default Post;