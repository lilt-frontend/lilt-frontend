import { useNavigate } from "react-router-dom";

export function PageButton({text, link}){
    const navigate = useNavigate();

    return (<>
        <div
        style={
            {
                'marginRight':'4.96px',
                // 줄 넘김 없애줘 
                'display':'inline-block',
            }
        }
        >
            {/* 작업할 공간이 있을것 같아 div로 분리 공통 css 먹이기도 해야함 */}
        <button >
            <a href={link} 
                style={{
                    "textDecoration":"none",
                    "color":"black",
                    "fontSize":"20px",   
                    "fontWeight":"bold",
                    "fontFamily":"Abril Fat face",
                    "lineHeight":"29px",
                }}
            >
            {text}
            </a>
        </button>
        </div>
        </>)
}

export default PageButton;