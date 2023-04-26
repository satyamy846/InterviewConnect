import React  from 'react'

export default function webdevelopment({ handleValueSelect }) {
  const handleClick = (value) => {
    handleValueSelect(value);
  };
  return (
    <div id='webDpage'>
      <div className="topicCont">
        <div className="topicName" onClick={() => handleClick("HTML")}>HTML</div>
        <div className="topicName" onClick={() => handleClick("CSS")}>CSS</div>
        <div className="topicName" onClick={() => handleClick("Javascript")}>Javascritp</div>
        <div className="topicName">Reactjs</div>
        <div className="topicName">Vuejs</div>
        <div className="topicName">Nodejs</div>
        <div className="topicName">expressjs</div>
        <div className="topicName">MongoDB</div>
        <div className="topicName">SQL</div>
        <div className="topicName">Java</div>
        <div className="topicName">Php</div>
        <div className="topicName">Python</div>
        <div className="topicName">C/C++</div>
        <div className="topicName">Testing</div>
        <div className="topicName">Git</div>
      </div>
    </div>
  )
}
