import React, {useEffect,useState} from 'react'
import './App.css';
import Clock from './components/Clock';

function App() {
  const [timerDays ,setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = ()=>{
    const countDownDate = new Date("July 21,2023").getTime();

    interval = setInterval(()=>{
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutes = Math.floor((distance % (60 * 60 * 1000))/ (60 * 1000));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
    // stop the timer
    if(distance < 0){
      clearInterval(interval.current);
    }else{
      // update the timer
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
  });
  };
  useEffect(()=>{
    startTimer();
  })
  return (
    <div className="App">
      <Clock 
      timerDays = {timerDays}
      timerHours = {timerHours}
      timerMinutes = {timerMinutes}
      timerSeconds = {timerSeconds}
      />
    </div>
  );
}

export default App;
