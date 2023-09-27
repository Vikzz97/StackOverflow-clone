import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width='18' />
                    <p>Observability is key to the futures of <br /> software (and your Devops caeer) </p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width="18" />
                    <p>Podcast 374: How valuable isyour  screen name?</p>
                </div>
            </div>
            <h4>Features on Meta</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="pen" width='18' />
                    <p>Reviw queue workflows - final release...</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="pen" width="18" />
                    <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={blacklogo} alt="pen" width="18" />
                    <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
                </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <p>38</p>
                    <p>Why was this spam flag declined. yet <br />
                     the question marked as spam?</p>
                </div>
                <div className="right-sidebar-div-2">
                   <p>20</p>
                    <p>What is the best course ofaction when <br />
                    a user has high enough rep to..</p>
                </div>
                <div className="right-sidebar-div-2">
                    <p>14</p>
                    <p>Is alink to the "How to ask" help page a
                    useful comment?</p>
                </div>
            </div>

        </div>
    )
}

export default Widget
