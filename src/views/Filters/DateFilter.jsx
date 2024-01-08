import {FormGroup, Label} from "reactstrap";
import AnimatedMulti from "./AnimatedMulti.jsx";
import {useEffect, useRef, useState} from "react";
import axiosClient from "../../clients/axios-client.jsx";
import DatePicker from "react-datepicker"



function DateFilter(props) {

    return (
        <FormGroup className={'p-lg-2'}>
            <Label>Published at</Label>
            <div className={'flex justify-content-around align-items-center'}>
                <span>To: </span>
                <DatePicker
                    className={'m-1 form-control'}
                    selected={props.dateTo} onChange={(date) => props.setDateTo(date)}
                    showTimeSelect
                    timeFormat="HH:mm:ss"
                    timeIntervals={15}
                    dateFormat="Y-MM-dd HH:mm:ss"
                />
            </div>
            <div className={'mt-1 flex justify-content-around align-items-center'}>
                <span>From: </span>
                <DatePicker
                    className={'m-1 form-control'}
                    selected={props.dateFrom} onChange={(date) => props.setDateFrom(date)}
                    showTimeSelect
                    timeFormat="HH:mm:ss"
                    timeIntervals={15}
                    dateFormat="Y-MM-dd HH:mm:ss"
                />
            </div>
        </FormGroup>
    );
}

export default DateFilter;
