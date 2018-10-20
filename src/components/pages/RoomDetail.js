import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Member from '../Member';
import Map from '../Map';
import './Pages.css';
import participate from '../../images/participate.png';


class RoomDetail extends Component{

    render(){
        return(
            <div>
            <Navbar title="room detail"/>

            <div className="roomDetail">
            <Map />
                <div className="memberList">
                <p>클릭하면 지도에서 위치를 확인할 수 있어요</p>
                    <Member/>
                    <Member/>
                </div>

                <button id="participate" type="submit"><img src={participate} alt="참여하기"></img></button>

                </div>
                </div>
        );
    }
}

export default RoomDetail;