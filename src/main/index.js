import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Page } from '../component/page';
function Main() {
	const [data, setData] = useState([]);
	const [numbe5, setNumbe5] = useState(0);


    return (
		<>
		<Page location={"main"} />
		</>
    );
}

export default Main;