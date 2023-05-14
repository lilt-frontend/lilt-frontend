import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Page } from '../component/page';
function Main() {
	const [data, setData] = useState([]);
	const [numbe5, setNumbe5] = useState(0);

	const rankingExampleData = [
		{
			id:1,
			rank:1,
			colorCode:'#4C4C6D',
		},
		{
			id:2,
			rank:2,
			colorCode:"#1B9C85",
		},
		{
			id:3,
			rank:3,
			colorCode:"#E8F6EF",
		},
		{
			id:4,
			rank:4,
			colorCode:"#FFE194"
		},
		
		{
			id:5,
			rank:5,
			colorCode:"#F5F0BB"
		},
		{
			id:6,
			rank:6,
			colorCode:"#DBDFAA"
		},
		{
			id:7,
			rank:7,
			colorCode:"#B3C890"
		},
		{
			id:8,
			rank:8,
			colorCode:"#FFE194"
		},
		{
			id:9,
			rank:9,
			colorCode:"#73A9AD"
		},
		{
			id:10,
			rank:10,
			colorCode:"#FFE194"
		},

	]


    return (
		<>
		<Page location={"main"} />
		</>
    );
}

export default Main;