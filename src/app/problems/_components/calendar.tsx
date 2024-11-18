"use client"

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './style/calendar.css';

const MyCalendar = () => {
    // Get today's date
    const today = new Date();
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <div className="calendar-header">
                {/* Display current month and navigation arrows */}
                <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}>{'<'}</button>
                <span className="month-name">{date.toLocaleString('default', { month: 'long' })}</span>
                <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}>{'>'}</button>
            </div>
            <Calendar
                value={date}

                showNeighboringMonth={false}
                formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'narrow' }).toUpperCase()}
                tileClassName={({ date, view }) => {
                    if (view === 'month' && date.toDateString() === today.toDateString()) {
                        return 'today-highlight';
                    }
                    return null;
                }}
            />
        </div>
    );
};

export default MyCalendar;
