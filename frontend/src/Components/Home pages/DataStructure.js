import React from 'react'

export default function DataStructure({ handleValueSelect }) {
  const handleClick = (value) => {
    handleValueSelect(value);
  };
  return (
    <div id='datastructure'>
    <div className="topicCont">
    <div className="topicName" onClick={() => handleClick("Searching")}>searching</div>
    <div className="topicName" onClick={() => handleClick("sorting")}>sorting</div>
    <div className="topicName" onClick={() => handleClick("Algorithm")}>Algorithm</div>
    <div className="topicName">Array</div>
    <div className="topicName">Linkedlist</div>
    <div className="topicName">Stack</div>
    <div className="topicName">Queue</div>
    <div className="topicName">Heap</div>
    <div className="topicName">Hashing</div>
    <div className="topicName">Tree</div>
    <div className="topicName">Graph</div>
  </div>
</div>
  )
}
