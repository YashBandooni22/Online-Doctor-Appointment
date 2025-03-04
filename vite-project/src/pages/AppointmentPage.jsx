import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Appcontext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import RelatedDocterPage from '../components/RelatedDocterPage';

const AppointmentPage = () => {

  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(Appcontext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setdocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotindex, setSlotindex] = useState(0)
  const [slotsTime, setSlotsTime] = useState("")

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setdocInfo(docInfo);
  }


  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting  date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting time and date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        // Time logic based on others date
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots(prev => ([...prev, timeSlots]));
    }
  };
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId])


  useEffect(() => {
    getAvailableSlots();
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])


  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        {/* Doctor Detail */}
        <div>
          <div className='bg-primary w-full sm:max-w-72 rounded-lg'>
            <img src={docInfo.image} alt="" />
          </div>
        </div>
        {/* Doctor Info */}
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p >{docInfo.degree} - {docInfo.speciality}</p>
            <button className='px-2 py-0.5 border test-xs rounded-full'>{docInfo.experience}</button>
          </div>


          {/* Doctors About */}
          <div>
            <p className='flex itemscenter gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment Fee: <span className='text-gray-900'> {currencySymbol} {docInfo.fees}</span>
          </p>
        </div>
      </div>

      <div className='sm:ml-72 sm:pl-4 ml-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-4 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length > 0 && docSlots.map((item, index) => {
              return (
                <div key={index} onClick={() => setSlotindex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotindex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}>
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              )
            })
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots[slotindex].map((item, index) => {
              return (
                <p key={index} onClick={()=>setSlotsTime(item.time)} className={`text-sm font-light flex-shrink-0 px-3 py-2 rounded-full cursor-pointer  ${item.time === slotsTime ? 'bg-primary text-white ' : 'text-gray-400 border border-gray-300' }`}>
                  {
                    item.time.toLowerCase()
                  }
                </p>
              )
            })
          }
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book An Appointment</button>
      </div>

      <RelatedDocterPage docId = {docId} speciality = {docInfo.speciality}   />

      
    </div>

  )

}


export default AppointmentPage