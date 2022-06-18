import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';

function ExpenseItem(props) {


    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} amount={props.amount} title={props.title}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
