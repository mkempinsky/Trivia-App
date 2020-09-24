import Nav from '../Nav';

const Layout = (props) => {
    return (
        <div className="layout">
            <Nav />
            <div className="page-content">{props.children}</div>
            <style jsx>
                {`
                    .layout {
                        min-height: 100vh;
                        background: #fff;
                        padding: 80px 0 160px 0;
                    }
                    .page-content {
                        margin-top: 80px;
                    }
                `}
            </style>
        </div>
    );
};
export default Layout;
