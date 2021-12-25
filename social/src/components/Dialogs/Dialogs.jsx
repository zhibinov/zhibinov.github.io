import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={classes.dialog}>
        <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes['message']}>{props.message}</div>
}

const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Паша' },
        { id: 2, name: 'Катя' },
        { id: 3, name: 'Эльдор' },
        { id: 4, name: 'Алёна' },
        { id: 5, name: 'Ганана' },
        { id: 6, name: 'Коржик' },
    ]
    let messagesData = [
        { id: 1, message: 'Привет!' },
        { id: 2, message: 'Как дела?' },
        { id: 3, message: 'Что делаешь?' },
        { id: 4, message: 'Займи денег' },
        { id: 5, message: 'Ты ганана!' },
        { id: 6, message: 'Нет! Ты ганана!' },
    ]

    return (
        <div className={classes['dialogs']}>
            <div className={classes['dialogs-items']}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={classes['dialogs-messages']}>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id} />
                <Message message={messagesData[2].message} id={messagesData[2].id} />
                <Message message={messagesData[3].message} id={messagesData[3].id} />
                <Message message={messagesData[4].message} id={messagesData[4].id} />
                <Message message={messagesData[5].message} id={messagesData[5].id} />
            </div>
        </div>
    )
};

export default Dialogs;