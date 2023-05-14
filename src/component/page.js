import React from 'react';
import PageButton from './pageButton';


//  location 은 본인이 작업하는 페이지 따라 사용하시길 바랍니다잉

export function Page({location}) {

    return (<>
    <div>
    <PageButton link={'/main'} text={"Main"}/>
    <PageButton link={'/rank'} text={"Ranking"}/>
    <PageButton link={'/mypage'} text={"My Page"}/>
    <PageButton link={'/payment'} text={"Payment"}/>
    <PageButton link={'/faq'} text={"FAQ"} />
    </div>
    <hr/>
    </>);
}