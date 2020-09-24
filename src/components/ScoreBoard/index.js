import MaxWidth from '../MaxWidth';

const ScoreBoard = (props) => {
    const {category = '', level = '', points = ''} = props;
    return (
        <div className="sb">
            <MaxWidth>
                <div className="sb__container">
                    <div className="sb__category">
                        <div className="sb__label">Category:</div>
                        {category}
                    </div>
                    <div className="sb__level">
                        <div className="sb__label">Level:</div>
                        {level}
                    </div>
                    <div className="sb__points">
                        <div className="sb__label">Points:</div>
                        {points}/10
                    </div>
                </div>
            </MaxWidth>
            <style jsx>
                {`
                    .sb {
                        background: var(--primary);
                        box-shadow: 0px 0.3px 10px rgba(000, 000, 000, 0.3);
                        position: fixed;
                        color: #fff;
                        height: 80px;
                        bottom: 0;
                        width: 100%;
                        left: 0;
                    }
                    .sb__container {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 80px;
                    }
                    .sb__container > div {
                        width: 100%;
                        text-align: center;
                    }
                    .sb__label {
                        margin-bottom: 5px;
                        font-weight: bold;
                    }
                `}
            </style>
        </div>
    );
};
export default ScoreBoard;
