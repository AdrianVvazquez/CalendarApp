import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { CalendarEvent, CalendarModal, Navbar } from '../';
import { localizer, getMessagesES } from '../../helpers';

const events = [{
  title: 'Cumpleaños Anita',
  notes: 'Comprar pastel',
  start: new Date(),
  end: addHours(new Date(), 2), // +2 horas
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Adrian'
  }
}]

export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log({event, start, end, isSelected})
    
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }
    return {style}
  }

  const onDoubleClick = (e) => {
    console.log({ doubleClick: e })
    
  }

  const onSelect = (e) => {
    console.log({ click: e })

  }
  const onViewChange = (e) => {
    localStorage.setItem('lastView', e);
    setLastView(e);
  }

  return (
    <>
      <Navbar />
        
      <Calendar
        culture='es'
        localizer={localizer}
        messages={ getMessagesES() }
        events={events}
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChange }
      />

      <CalendarModal />
    </>
  )
}
