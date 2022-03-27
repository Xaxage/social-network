import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Xaxage"},
        {id: 2, name: "Nigger"},
        {id: 3, name: "Cunt"}];

    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "Mother"},
        {id: 3, message: "Fucker"}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>


            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>

        </div>
    )
}

export default Dialogs;

