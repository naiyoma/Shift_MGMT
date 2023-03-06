import React from 'react';
import moment from 'moment';
import './calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './weather-icons/css/weather-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


export default class MyCalendar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      month: moment(),
      selected: moment().startOf('day')
    };
    
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }
  
  previous() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.subtract(1, 'month'),
    });
  }

  next() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.add(1,'month'),
    });
  }
  
  select(day) {
    this.setState({
      selected: day.date,
      month: day.date.clone(),
    });
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const {
      selected,
      month,
    } = this.state;

    while (!done) {
      weeks.push(
        <Week key={date} 
          date={date.clone()} 
          month={month} 
          select={(day)=>this.select(day)} 
          selected={selected} />
      );

      date.add(1, "w");
      
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  renderMonthLabel() {
    const {
      month,
    } = this.state;

    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }
  render() {
    return (
    <div class="grid grid-rows-3 grid-flow-col gap-1">
          <div class="row-span-3  profile-div w-72 border-r-4">
          <div class="c rounded-b h-24 round-image cover-image-up">
          <div class="flex flex-col items-center justify-between w-36 rounded-sm profile-image ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLivrKVFYBG5-dEeF_xB25T5BSDG6W-ooA9w&usqp=CAU" alt="User Image" class=" h-32 rounded-full object-cover user-image"></img>
            </div>
          </div>
          <div class="divide-y border-current user-profile-details ...">
          <div class="text-center mt-4 h-7">
          <FontAwesomeIcon icon={faUser} class="inline-block user-icon" />
            <h3 class="text-lg font-medium inline-block ">Username: Mona lisa</h3>
          </div>
          <div class="text-center mt-4 h-12">
          <FontAwesomeIcon icon={faBuilding} class="inline-block ml-2 dep-icon" />
            <h3 class="text-lg font-medium inline-block mt-3.5">Department: Sales</h3>
          </div>
          <div class="text-center mt-4 h-12">
          <FontAwesomeIcon icon={faBriefcase} class="inline-block ml-2 position-icon" />
            <h3 class="text-lg font-medium inline-block mt-3.5 ">Location: Kenya</h3>
          </div>
          <div class="text-center mt-4 h-12">
          <FontAwesomeIcon icon={faEnvelope} class="inline-block ml-2 user-icon" />
            <h3 class="text-lg font-medium inline-block mt-3.5">Phone:0702781830</h3>
          </div>
          <div class="text-center mt-4 h-12">
          <FontAwesomeIcon icon={faCog} class="inline-block ml-2 user-icon" />
            <h3 class="text-lg font-medium inline-block mt-3.5">Settings: Mona lisa</h3>
          </div>
          <div class="text-center mt-4 h-12">
          <FontAwesomeIcon icon={faSignOutAlt} class="inline-block ml-2 user-icon" />
            <h3 class="text-lg font-medium inline-block mt-3.5">Log out: Mona lisa</h3>
          </div>
          <div class="text-center mt-4 h-12 button-edit">
            <div class="button-prifile">
              <button class="text-white rounded-full bg-fuchsia-900 w-28 h-9">Edit Profile</button>
            </div>
          </div>
          </div>
          </div>
          <div class="col-span-2  column-1">
            <div class="flex flex-col md:flex-row h-5/6  border inner-container">
              <div class=" w-full relative overflow-x-auto ">
              <table class="border-collapse border  w-full h-full  content-table relative overflow-x-auto shadow-md sm:rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                      <th scope="col" class="p-4">
                        <div class="flex items-center">
                          <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Shift Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Time 
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Sliver
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fuchsia-900 dark:text-fuchsia-900 hover:underline">Edit</a>
                </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label for="checkbox-table-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fuchsia-900 dark:text-fuchsia-900 hover:underline">Edit</a>
                </td>
            </tr>
                    </tbody>
                  </table>
              </div>
              <div class="details-2 ">
              <div class=" border  hours">
                <p class="font-sans text-2xl subpixel-antialiased font-bold text-center mt-3.5">Total</p>
                <p class="font-sans text-2xl subpixel-antialiased font-bold text-center">Hours</p>
                <p class="font-sans text-2xl subpixel-antialiased italic text-center mt-6">8</p>
              </div>
              <div class="shifts">
                <p class="font-sans text-2xl subpixel-antialiased font-bold text-center mt-3.5">Total</p>
                <p class="font-sans text-2xl subpixel-antialiased font-bold text-center ">Shifts</p>
                <p class="font-sans text-2xl subpixel-antialiased italic text-center mt-6">9</p>
              </div>
              </div>
            </div>
          </div>
    

      <div class="row-span-2 col-span-2">
      <div class="column-left  section-1">
        <section className="calendar bg-fuchsia-900">
            <header className="header">
              <div className="month-display row">
                  {this.renderMonthLabel()}
                <i className="arrow fa fa-angle-left" onClick={this.previous}/>
              
                <i className="arrow fa fa-angle-right" onClick={this.next}/>
              </div>
              <DayNames />
            </header>
            {this.renderWeeks()}
      </section>
      <div class="button-container">
        <button class="bg-transparent hover:bg-fuchsia-900 text-fuchsia-900 font-semibold hover:text-white py-2 px-4 border border-fuchsia-900 hover:border-transparent rounded rounded shadow">
          Add Event
        </button>
        <button class="bg-transparent hover:bg-fuchsia-900 text-fuchsia-900 font-semibold hover:text-white py-2 px-4 border border-fuchsia-900 hover:border-transparent rounded rounded shadow">
          Swap Shifts
        </button>
      </div>
      </div>
      <div class="column-right section-2">
      <table class="table-auto w-5/6 h-5/6">
    <thead>
      <tr class="bg-fuchsia-900 text-white">
        <th class="px-4 py-2">Shifts</th>
        <th class="px-4 py-2">Shift Allowance</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-gray-100">
        <td class="border px-4 py-2"><i className="wi wi-night-alt-cloudy-windy"></i>Night Shift</td>
        <td class="border px-4 py-2">$ 2000</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border px-4 py-2"><i className="wi wi-stars"></i>Evening Shift</td>
        <td class="border px-4 py-2">$ 1000</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border px-4 py-2"><i className="wi wi-day-sunny"></i>Afternoon Shift</td>
        <td class="border px-4 py-2">$ 3000</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border px-4 py-2"><i className="wi wi-day-haze"></i>Morning Shift</td>
        <td class="border px-4 py-2">$ 40000</td>
      </tr>
    </tbody>
  </table>
      </div>
      </div>
    </div>
      );
  }
}




class DayNames extends React.Component {
    render() {
        return (
          <div className="row day-names">
            <span className="day">S</span>
            <span className="day">M</span>
            <span className="day">T</span>
            <span className="day">W</span>
            <span className="day">T</span>
            <span className="day">F</span>
            <span className="day">S</span>
          </div>
        );
    }
}

class Week extends React.Component {
  render() {
    let days = [];
    let {
      date,
    } = this.props;
    
    const {
      month,
      selected,
      select,
    } = this.props;

    for (var i = 0; i < 7; i++) {
      let day = {
          name: date.format("dd").substring(0, 1),
          number: date.date(),
          isCurrentMonth: date.month() === month.month(),
          isToday: date.isSame(new Date(), "day"),
          date: date
      };
      days.push(
        <Day day={day}
          selected={selected}
          select={select}/>
      );

      date = date.clone();
      date.add(1, "day");
    }

    return (
      <div className="row week" key={days[0]}>
        {days}
      </div>
    );
  }

}

class Day extends React.Component {
  render() {
    const {
      day,
      day: {
        date,
        isCurrentMonth,
        isToday,
        number
      },
      select,
      selected
    } = this.props;

    return (
      <span 
        key={date.toString()} 
        className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")} 
        onClick={()=>select(day)}>{number}</span>
    );
  }
}



