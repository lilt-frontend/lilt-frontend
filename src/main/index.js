import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Main() {
	const [data, setData] = useState([]);
	const [numbe5, setNumbe5] = useState(0);

	const getData = async () => {
		const tongsin = await axios('https://107b-121-131-214-253.ngrok-free.app/test');
		// 모르면 그 javascript 중괄고 변수 선언이라고 쳐보셈 
		setData(tongsin.data);

		return 0;
	}

	useEffect(() => {
		getData();
	},[]);

    return (
		<>
		hi im main 
		</>
    );
}

export default Main;