import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Data from './component/data.js'
function Main(props) {
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
{
	data.length !== 0 ?(
		<div class="stats_graph_box">                               
<div class="graph">
	{
		data.map((item) => {
			console.log(item)
			return (
				<Data name= {item.name}  color={item.name} count={item.percent} width={item.percent+'%'} />
			)
		})
	}
  {/* <Data name= "Data 1"  color={"green"} count={50} width={"50%"} />
  <Data name= "Data 2"  color={"yellow"} count={8} width={"10%"} />
  <Data name= "Data etc"  color={"gray"} count={72} width={"30%"} /> */}

  </div>
</div>
	) :("로딩중이요.")
}
		</>
    );
}

export default Main;