import React, { Component } from 'react';
import './admindashboard.css';
class AdminDashboard extends Component {
  state = {
    employees: [
      {
        name: 'John Doe',
        shifts: [
          { time: '8am-12pm', date: "Mon" },
          { time: '12pm-4pm', date: "Tue" },
          { time: '4pm-8pm', date: "Wed" },
          { time: '4pm-8pm', date: "Thu" },
          { time: '4pm-8pm', date: "Fri" },
        ],
      },
      {
        name: 'Jane Doe',
        shifts: [
          { time: '8am-12pm', date: "Mon" },
          { time: '12pm-4pm', date: "Tue" },
          { time: '4pm-8pm', date: "Wed" },
          { time: '4pm-8pm', date: "Thu" },
          { time: '4pm-8pm', date: "Fri" },
        ],
      },
      {
        name: 'Joseph Doe',
        shifts: [
          { time: '8am-12pm', date: "Mon" },
          { time: '12pm-4pm', date: "Tue" },
          { time: '4pm-8pm', date: "Wed" },
          { time: '4pm-8pm', date: "Thu" },
          { time: '4pm-8pm', date: "Fri" },
        ],
      },
    ],
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
    currentDate: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentDate: new Date(),
    });
  }

  render() {
    const { days, currentDate } = this.state;

    const columns = [
      <div key="employee-name" className="border-r px-4 py-2 first-column bg-slate-400">
        Employee Name
      </div>,
      ...days.map((day) => {
        const date = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - currentDate.getDay() + days.indexOf(day)
        );
        return (
          <div key={day} className="border-l border-r px-4 py-2 bg-slate-400  days-columns">
            {day} {date.getDate()}
          </div>
        );
      }),
    ];

    
  
    return (
      <div className="container mx-auto">
        <nav className="bg-gray-800 px-4 py-2">
          <ul className="flex">
            <li className="mr-6">
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Admin
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 mr-4">
                
              </a>
            </li>
            <li className="mr-8">
              <a href="#" className="text-white hover:text-gray-300">
              Logout
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex">
          {columns}
        </div>
        <div class="grid grid-cols-8 gap-1 mt-1.5">
          {this.state.employees.map((employee, index) => (
            <React.Fragment key={index}>
              <div className={`bg-slate-400 column-01 h-20 rounded border-b-4 border-indigo-500 stacked-fractions `}><p className='employee-name'>{employee.name}</p></div>
              {this.state.days.map((day, index) => {
                const shift = employee.shifts.find((s) => s.date === day);
                return (
                  <div
                    key={index}
                    className={`bg-violet-300 column-02 rounded stacked-fractions `}
                  >
                    <p className='shift-time'>
                    {shift ? shift.time : ""}
                    </p>
                    
                  </div>
                );
              })}
            </React.Fragment>
          ))}
      </div>
        <div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
