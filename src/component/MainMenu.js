import React, { useState, useEffect } from 'react'
import './css/header.css'

export default function MainMenu () {
    /* ドロップダウンselecter */
    /* ジャンル選択をstateで管理 */
    const [genru, setGenru] = useState('null')
    const changeGenru = event => {
        setGenru(event.target.value)
    }

    /* 検索範囲の距離をstateで管理 */
    const [distance, setDistance] = useState(0)
    const changeDistance = event => {
        setDistance(event.target.value)
    }

    /* 範囲検索機能 */
    /* 中心座標を取得する */
    const [center, setCenter] = useState() /* 中心座標をstateで管理する */

    /* 中心座標を取得できた際に走るメソッド */
    const getPosition = data => {
        const currentPosition = {
            lat: data.coords.latitude,
            lng: data.coords.longitude
        }
        setCenter(currentPosition)
        console.log(center)
    }

    /* 中心座標が取得できなかった際に走るメソッド */
    const defaultLatitude = 34.673542
    const defaultLongitude = 135.43338
    const unfindPosition = data => {
        const currentPosition = {
            lat: defaultLatitude,
            lng: defaultLongitude
        }
        setCenter(currentPosition)
        console.log(center)
    }

    /* geolvationによる現在地の座標を取得 */
    useEffect(() => {
        /* getCurrentPositionの第一引数が現在地を取得できた際に走り、第二引数が現在地情報取得拒否またはエラーが出た時に走る */
        navigator.geolocation.getCurrentPosition(getPosition, unfindPosition)
    }, [])

    console.log(center)

    return (
        <ul className="menu-list">
            <li className="menu-contents">
                <select className="list-genru" onChange={changeGenru}>
                    <option value="null">ジャンル</option>
                    <option value="food"> 食べ物</option>
                    <option value="electric">家電</option>
                    <option value="hoge">コスメ</option>
                    <option value="fuga">雑貨</option>
                </select>
                <div className="current-genru">{genru}</div>
            </li>
            <li className="menu-contents">
                <select className="list-distance" onChange={changeDistance}>
                    <option value="null">検索範囲</option>
                    <option value="0.5">500m</option>
                    <option value="1">1km</option>
                    <option value="2">2km</option>
                    <option value="3">3km</option>
                    <option value="4">4km</option>
                    <option value="5">5km</option>
                </select>
                <div className="currentDistance">{distance}</div>
            </li>
        </ul>
    )
}
