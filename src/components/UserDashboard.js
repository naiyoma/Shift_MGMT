import React from 'react';
import moment from 'moment'
import './calendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './weather-icons/css/weather-icons.css';


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


    <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-3 bg-violet-300 profile-div">
            01</div>
          <div class="col-span-2 bg-pink-200 column-1">
          <div class="w-2/3 bg-blue-200 column-left">
            1
          </div>
          <div class="w-1/3 bg-indigo-500 column-right">
            2
          </div>
        </div>
      <div class="row-span-2 col-span-2">
      <div class="column-left  section-1">
        <section className="calendar">
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
        <button class="bg-transparent hover:bg-purple-500 text-purple-500 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded rounded shadow">
          Add Event
        </button>
        <button class="bg-transparent hover:bg-purple-500 text-purple-500 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded rounded shadow">
          Swap Shifts
        </button>
      </div>
      </div>
      <div class="column-right section-2">
      <table class="table-auto w-5/6 h-5/6">
    <thead>
      <tr class="bg-purple-500 text-white">
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



