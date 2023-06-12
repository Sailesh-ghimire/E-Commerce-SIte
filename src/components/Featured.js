import React from 'react'
import CircularProgress from '@mui/joy/CircularProgress';

export const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            icon
        </div>
        <div className="bottom">
            <div className="featuredChart">
            <CircularProgress value={70} text={"70%"}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">%0</p>
            <p className="desc">payment processing </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        icon
                        <div className="resultAmount">$0k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        icon
                        <div className="resultAmount">$0k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        icon
                        <div className="resultAmount">$0k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured