import React from 'react'
import { Calendar } from "@/components/ui/calendar"
import { DatePick } from './DatePick'


const Calenders = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return <>
        <div className='ms-80 mt-6 gap-10 flex'>
            <div className='w-96'>
                <h6>Calender</h6>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border w-96"
                />
            </div>
            <div className='w-96'>
                <h6 className='my-3'>Date Picker</h6>
                <DatePick />
            </div>
        </div>
    </>
}

export default Calenders