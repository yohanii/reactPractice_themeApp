import {useContext, useState} from "react";
import {ThemeContext} from "./ThemeProvider";

const NameBook = () => {

    const { theme, setTheme } = useContext(ThemeContext);
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");

    const saveText = (e) => {
        setText(e.target.value);
    }

    const changeNameAndTime = () => {

        const today = new Date();
        const half = today.getHours() < 12 ? "오전" : "오후";
        const hour = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
        const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${half} ${hour}시 ${today.getMinutes()}분`;

        setName(text);
        setTime(formattedDate);
    }

    return (
        <div className={ `${theme === "light" ? "namebook-light" : "namebook-dark"}` }>
            <input onChange={saveText} placeholder="이름을 입력해주세요!"/>
            <button onClick={changeNameAndTime}>확인</button>
            <h4>이름 : {name}</h4>
            <h4>날짜 : {time}</h4>
        </div>
    );
}

export default NameBook;