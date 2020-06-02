import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { Link, useLocation } from 'react-router-dom'
import './stylesheet.css'
let socket

const Rooms = ({ setRoom, username, setUsername }) => {
  const [userRoom, setUserRoom] = useState('')
  const [roomList, setRoomList] = useState([])
  const ENDPOINT = process.env.ENDPOINT
  let location = useLocation()

  useEffect(() => {
    socket = io(ENDPOINT)
    socket.emit('requestRoomList')
    const searchParams = new URLSearchParams(location.search)
    setUsername(searchParams.get('username'))
  }, [location.search, setUsername])

  useEffect(() => {
    socket.on('roomList', ({ roomList }) => {
      setRoomList(roomList)
    })
  })

  return (
    <div className="body">
      <div className="content">
        <div>
          <h1>
            <span className="thin">What</span>
            <span className="thick">stack</span>
          </h1>
          <div className="topic-box">
            <div className="heading">Welcome to Whatstack {username}</div>
          </div>
          <input
            type="text"
            onChange={(event) => {
              setUserRoom(event.target.value)
            }}
            className="chat-input"
            placeholder="Create a new room"
          />
          <Link
            to="/chat"
            onClick={() => {
              setRoom(userRoom)
            }}
          >
            <button>Submit</button>
          </Link>
          <div className="room-list">
            <div>
              {roomList.map((room, index) => {
                return (
                  <div className="roomBox" key={index}>
                    <Link
                      to="/chat"
                      onClick={() => {
                        setRoom(room)
                      }}
                    >
                      {room}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rooms
