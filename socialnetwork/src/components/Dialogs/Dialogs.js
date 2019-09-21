import React from 'react';
import {NavLink} from "react-router-dom";
/* css */

import classes from '../css/Dialogs.module.css';

/* css */

function User(props){
	return (
		<li>
      		<NavLink to={"dialogs/"+props.id}>{props.name}</NavLink>
      	</li>
	);
}

function Message(props){

	if(props.my === true)
	{
		return (
			<div className={classes.myMessage}>
				<p className={classes.messageContent}>{props.text}</p>
				<div className={classes.messageTimestampLeft}>{props.time}</div>
	      	</div>
		);
	}

	return (
		<div className={classes.yourMessage}>
			<p className={classes.messageContent}>{props.text}</p>
			<div className={classes.messageTimestampRight}>{props.time}</div>
	    </div>
	);
}


function addPost(e){
	
}

function Dialogs(props) {


  return (
      <main className={classes.main}>
      <h1></h1>
      	<div className={classes.users}>
      		<ul>
				{props.users.map((user, index) => {
				    return <User id={user.id} name={user.name} />;
				  })
				}
      		</ul>
      	</div>
      	<div className={classes.box}>
      		{props.messages.map((message, index) => {
				return <Message text={message.text} time={message.time} my={message.my} />
      		})}

	      	<textarea name="" id="" cols="30" rows="10"
			onChange={addPost}
	      	></textarea>
	      	<button>Отправить</button>
      	</div>
      </main>
  );
}

export default Dialogs;