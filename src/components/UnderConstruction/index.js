import Image from '../Image';
import MaxWidth from '../MaxWidth';

const UnderConstruction = () => {
    return (
        <div className="page">
            <MaxWidth>
                <h2>This feature is currently under construction. Check back soon!</h2>
                <Image
                    src="/static/under-construction.jpg"
                    width="320px"
                    height="300px"
                    styled={true}
                    style={{margin: '30px auto'}}
                />
            </MaxWidth>
            <style jsx>
                {`
                    .page {
                        padding: 50px;
                        text-align: center;
                    }
                `}
            </style>
        </div>
    );
};
export default UnderConstruction;
