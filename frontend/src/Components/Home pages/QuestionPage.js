import React, { useState } from 'react'

export default function QuestionPage({ selectedValue }) {
    const questions = [
        { question: "Question 1", answer: "Answer 1" ,level:'easy'},
        { question: "Question 2", answer: "Answer 2" },
        { question: "Question 3", answer: "Answer 3" },
        { question: "Question 4", answer: "Answer 4" },
        { question: "Question 5", answer: "Answer 5" },
        { question: "Question 6", answer: "Answer 6" },
        { question: "Question 7", answer: "Answer 7" },
        { question: "Question 8", answer: "Answer 8" },
        { question: "Question 9", answer: "Answer 9" },
        { question: "Question 10", answer: "Answer 10" },
        { question: "Question 11", answer: "Answer 11" },
        { question: "Question 12", answer: "Answer 12" },
        { question: "Question 13", answer: "Answer 13" },
        { question: "Question 14", answer: "Answer 14" },
        { question: "Question 15", answer: "Answer 15" },
        { question: "Question 16", answer: "Answer 16" },
        { question: "Question 18", answer: "Answer 18" },
        { question: "Question 19", answer: "Answer 19" },
        { question: "Question 20", answer: "Answer 20" },
        { question: "Question 21", answer: "Answer 21" },
        { question: "Question 22", answer: "Answer 22" }

        // ...and so on
    ];

    const [currentPage, setCurrentPage] = useState(0);

    const handlePrevPage = () => {
        setCurrentPage(currentPage => currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage => currentPage + 1);
    };

    const getPageQuestions = () => {
        const startIndex = currentPage * 15;
        const endIndex = startIndex + 15;
        return questions.slice(startIndex, endIndex);
    };

    const pageQuestions = getPageQuestions();
    return (
        <div id='QandACont'>
            <div class="separator">
                <div class="line"></div>
                <h2>{questions.length}+ {selectedValue} Questions</h2>
                <div class="line"></div>
            </div>
            <div className='levelCont'>
                <div className='level'>Easy</div>
                <div className='level'>Medium</div>
                <div className='level'>Hard</div>
            </div>

            <div className='QuestionCont'>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {pageQuestions.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse${index}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <button
                        className="btn  pageBtn"
                        onClick={handlePrevPage}
                        disabled={currentPage === 0}
                    >
                        Previous Page
                    </button>
                    <button
                        className="btn pageBtn"
                        onClick={handleNextPage}
                        disabled={pageQuestions.length < 15}
                    >
                        Next Page
                    </button>
                </div>

            </div>

        </div>
    )
}

