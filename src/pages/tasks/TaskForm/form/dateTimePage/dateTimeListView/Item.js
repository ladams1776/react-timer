import React from 'react';
import PropTypes from "prop-types";
import styles from './DateTimeListView.module.css';

const Item = ({ id, time, date, onClick }) => <div
    className={styles.content}
    key={id}
    onClick={onClick}
    data-testid="DateTimeItem">

    <input type="hidden" value={id} name="id" />
    <div className={styles.date}>Date: {date}</div>
    <div className={styles.time}>Minutes: {time}</div>
</div>

Item.propTypes = {
    id: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    onClick: PropTypes.func
}

export default Item;