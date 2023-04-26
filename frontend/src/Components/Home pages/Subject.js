import React from 'react'

export default function Subject({ handleValueSelect }) {
  const handleClick = (value) => {
    handleValueSelect(value);
  };
  return (
    <div id='subject'>
        <div className="topicCont">
        <div className="topicName" onClick={() => handleClick("OS")}>Operating System</div>
        <div className="topicName" onClick={() => handleClick("CN")}>Computer Network</div>
        <div className="topicName">Oops</div>
        <div className="topicName">Database</div>
        <div className="topicName">Software Engineering</div>
        {/* <div className="topicName">Nodejs</div>
        <div className="topicName">expressjs</div>
        <div className="topicName">MongoDB</div>
        <div className="topicName">SQL</div>
        <div className="topicName">Git</div> */}
      </div>
    </div>
  )
}
