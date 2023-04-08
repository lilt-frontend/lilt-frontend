import React, { useState } from 'react';

function Data({name, count, color, width}) {
    return (
		<>
          <div class="bar" style={{
            "width":width,
            "backgroundColor":color,
            'float':'right'
          // 'background':'#e750b0',
          // "margin-left":"-5px",
          // "padding-right":"5px",
          // "box-sizing":"content-box",
          // "border-radius":"0 4px 4px 0",
          // "position":"relative",
          // "display":"inline-block",
          // "color":"#ddd",
          // "height":"46px",
          // "border-radius":"4px",
          // "overflow":"hidden",
        }}>
            <dl  class="desc">
              <dt style={{color:'black'}} >{name}</dt>
              <dd style={{color:'black',fontSize:'18px'}}><em style={{color:'black'}}>{count}</em>개</dd>
            </dl>
          </div>
		</>
    );
}

export default Data;