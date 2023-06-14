import { Button } from "antd";
import "./style.css";
import React, { useState, useEffect } from 'react';
import { Pie , Area } from '@ant-design/plots';

export default function Dashboard() {
  const [data, setData] = useState([{
    "timePeriod": "10a.m",
    "value": 1
  },
  {
    "timePeriod": "11a.m",
    "value": 1.08
  },
  {
    "timePeriod": "12a.m",
    "value": 1.17
  },
  {
    "timePeriod": "01a.m",
    "value": 1.26
  },
  {
    "timePeriod": "02a.m",
    "value": 1.34
  },
  {
    "timePeriod": "03a.m",
    "value": 1.41
  },
  {
    "timePeriod": "04a.m",
    "value": 1.52
  },
  {
    "timePeriod": "05a.m",
    "value": 1.67
  },
  {
    "timePeriod": "06a.m",
    "value": 1.84
  },
  {
    "timePeriod": "07a.m",
    "value": 2.07
  },
  ]);

  const dataDonut = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const configDonut = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'AntV\nG2Plot',
      },
    },
  };

  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };


  return (
    <div className="aside">
      <h3>Dashboard</h3>
      <div className="cards">
        <div className="card" style={{ margin: "0" }}>
          <Button
            style={{
              background: "#FFFFFF",
              opacity: "0.2"
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
              viewBox="0 0 24 24" fill="#605CFF" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-heart">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </Button>
          <div className="info">
            <h3>178+</h3>
            <p>Save Products</p>
          </div>
        </div>
        <div className="card">
          <Button
            style={{
              background: "#3f8f60",
              opacity: 0.7
            }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.164 6.08252C15.4791 6.08684 15.7949 6.09117 16.1119 6.09441C19.5172 6.09441 22 8.52216 22 11.8748V16.1811C22 19.5337 19.5172 21.9615 16.1119 21.9615C14.7478 21.9904 13.3837 22 12.0098 22C10.6359 22 9.25221 21.9904 7.88813 21.9615C4.48283 21.9615 2 19.5337 2 16.1811V11.8748C2 8.52216 4.48283 6.09441 7.89794 6.09441C9.18351 6.07514 10.4985 6.05588 11.8332 6.05588V5.8921C11.8332 5.22736 11.2738 4.68786 10.6065 4.68786H9.63494C8.52601 4.68786 7.62316 3.80154 7.62316 2.72254C7.62316 2.32755 7.95682 2 8.35918 2C8.77134 2 9.09519 2.32755 9.09519 2.72254C9.09519 3.01156 9.34053 3.24277 9.63494 3.24277H10.6065C12.0883 3.25241 13.2954 4.43738 13.3052 5.88247V6.06551C13.9239 6.06551 14.5425 6.074 15.164 6.08252ZM10.8518 14.7457H9.82139V15.7669C9.82139 16.1618 9.48773 16.4894 9.08538 16.4894C8.67321 16.4894 8.34936 16.1618 8.34936 15.7669V14.7457H7.30913C6.90677 14.7457 6.57311 14.4277 6.57311 14.0231C6.57311 13.6281 6.90677 13.3006 7.30913 13.3006H8.34936V12.289C8.34936 11.894 8.67321 11.5665 9.08538 11.5665C9.48773 11.5665 9.82139 11.894 9.82139 12.289V13.3006H10.8518C11.2542 13.3006 11.5878 13.6281 11.5878 14.0231C11.5878 14.4277 11.2542 14.7457 10.8518 14.7457ZM15.0226 13.1175H15.1207C15.5231 13.1175 15.8567 12.7996 15.8567 12.395C15.8567 12 15.5231 11.6724 15.1207 11.6724H15.0226C14.6104 11.6724 14.2866 12 14.2866 12.395C14.2866 12.7996 14.6104 13.1175 15.0226 13.1175ZM16.7007 16.4316H16.7988C17.2012 16.4316 17.5348 16.1137 17.5348 15.7091C17.5348 15.3141 17.2012 14.9865 16.7988 14.9865H16.7007C16.2875 14.9865 15.9647 15.3141 15.9647 15.7091C15.9647 16.1137 16.2875 16.4316 16.7007 16.4316Z" fill="#2FE6A7" />
            </svg>
          </Button>
          <div className="info">
            <h3>20+</h3>
            <p>Stock Products</p>
          </div>
        </div>
        <div className="card">
          <Button
            style={{
              background: "#FF69B4",
              opacity: 0.5
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
              viewBox="0 0 24 24" fill="#FF69B4" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-archive">
              <polyline points="21 8 21 21 3 21 3 8"></polyline>
              <rect x="1" y="3" width="22" height="5"></rect>
              <line x1="" y1="" x2="" y2=""></line>
            </svg>
          </Button>
          <div className="info">
            <h3>190+</h3>
            <p>Sales Products</p>
          </div>
        </div>
        <div className="card">
          <Button
            style={{
              background: "#FFFFFF",
              opacity: "0.2"
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="#605CFF" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-briefcase">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </Button>
          <div className="info">
            <h3>12+</h3>
            <p>Job Application</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="reports">
          <h3>Reports</h3>
          <Area {...config} style={{ margin: "15px 0 0 0" }} height={250} />
        </div>
        <div className="analytics">
          <Pie {...configDonut} style={{height: "200px" , width: "200px"}} />
        </div>
      </div>
    </div>
  )
}