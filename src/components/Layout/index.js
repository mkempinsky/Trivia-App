import Nav from '../Nav'

const Layout = (props) => {
    return (
        <div className="layout">
            <Nav/>
            {props.children}
            <style jsx>
                {`
                .layout {
                    background: #ffb347;  
                    background: -webkit-linear-gradient(to right, #ffcc33, #ffb347); 
                    background: linear-gradient(to right, #ffcc33, #ffb347); 
                    min-height: 100vh;
                }
                
                `}
            </style>
        </div>
    )
}
export default Layout;