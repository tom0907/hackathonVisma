import React from "react"
import Nav from './nav';





function event() {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
      <div>
          <Nav />
          <p class="eventp">Názov príspevku</p> 
            <div>
          <p class="tagEvent">NEW EVENT</p>
          <p class="Eventdate">{date}.{month<10?`${month}`:`${month}`}.{year}</p>
          </div>
          <img 
      src="https://scontent.fksc1-1.fna.fbcdn.net/v/t39.30808-6/277573001_498004165074070_228942305260116699_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=RXHkAO_YtgAAX-sOxhr&_nc_ht=scontent.fksc1-1.fna&oh=00_AT-S61Ji0ERqLDBEUwpvgEHoDsoRs54nAdnPKYT0b3j8BA&oe=626A0D47"
      alt="new"
      className='imgEvent'/> 
      <img 
      src="https://scontent.fksc1-1.fna.fbcdn.net/v/t39.30808-6/278087696_505449504329536_5060924229721684936_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=piTy-rIEkrIAX-XLbYF&_nc_ht=scontent.fksc1-1.fna&oh=00_AT_Cn5TS4IziA7at9XEbyv52hd9WnKy-65NiIQRJE0aNTA&oe=626A2F8C"
      alt="new"
      className='imgEvent'
      /> 
      <p class="eventText">Since my childhood I have been influenced by sci-fi novels related to the future of humanity, robots and AI such as Isaac Asimov’s Foundation series and Robot Series and various movies including the Bicentennial Man starring Robin Williams. I was always fascinated by the possibility to create machines that would take away those hard and boring jobs that none of us wants to do anyway (including ones such as cleaning and laundering ). I simply wanted for all people to enjoy life, have fun, pursue their dreams and let the robots do the work. Such a naïve kid, wasn’t I?</p>
      </div>
  )
}

export default event;