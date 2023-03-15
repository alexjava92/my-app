import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"




const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} />
    );    

    let messageElements =  props.messages.map(m =>
        <Message name={m.message}/>
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                

            </div>
            <div className={s.messages}>
                {messageElements}
                
            </div>
            <div className={s.textarea}>
                <textarea>тут должен быть текст</textarea>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs;